import * as React from 'react';
import { alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';
import { visuallyHidden } from '@mui/utils';
import { StepperProps } from '../../types/helpers'

export interface Data {
    voting_power: string;
    rank: number;
    commission: string;
    name: string;
    address: string;
    logo: string;
}

function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
    if (b[orderBy] < a[orderBy]) {
        return -1;
    }
    if (b[orderBy] > a[orderBy]) {
        return 1;
    }
    return 0;
}

type Order = 'asc' | 'desc';

function getComparator<Key extends keyof any>(
    order: Order,
    orderBy: Key,
): (
    a: { [key in Key]: number | string },
    b: { [key in Key]: number | string },
) => number {
    return order === 'desc'
        ? (a, b) => descendingComparator(a, b, orderBy)
        : (a, b) => -descendingComparator(a, b, orderBy);
}

// This method is created for cross-browser compatibility, if you don't
// need to support IE11, you can use Array.prototype.sort() directly
function stableSort<T>(array: readonly T[], comparator: (a: T, b: T) => number) {
    const stabilizedThis = array.map((el, index) => [el, index] as [T, number]);
    stabilizedThis.sort((a, b) => {
        const order = comparator(a[0], b[0]);
        if (order !== 0) {
            return order;
        }
        return a[1] - b[1];
    });
    return stabilizedThis.map((el) => el[0]);
}

interface HeadCell {
    disablePadding: boolean;
    id: keyof Data;
    label: string;
    numeric: boolean;
}

const headCells: readonly HeadCell[] = [
    {
        id: 'rank',
        numeric: true,
        disablePadding: false,
        label: 'Rank ',
    },
    {
        id: 'name',
        numeric: false,
        disablePadding: true,
        label: 'Name',
    },
    {
        id: 'voting_power',
        numeric: true,
        disablePadding: false,
        label: 'Voting Power',
    },
    {
        id: 'commission',
        numeric: true,
        disablePadding: false,
        label: 'Commission',
    },
];

interface EnhancedTableProps {
    numSelected: number;
    onRequestSort: (event: React.MouseEvent<unknown>, property: keyof Data) => void;
    onSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
    order: Order;
    orderBy: string;
    rowCount: number;
}

function EnhancedTableHead(props: EnhancedTableProps) {
    const { onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } =
        props;
    const createSortHandler =
        (property: keyof Data) => (event: React.MouseEvent<unknown>) => {
            onRequestSort(event, property);
        };

    return (
        <TableHead>
            <TableRow>
                <TableCell padding="checkbox">
                    <Checkbox
                        color="primary"
                        indeterminate={numSelected > 0 && numSelected < rowCount}
                        checked={rowCount > 0 && numSelected === rowCount}
                        onChange={onSelectAllClick}
                        inputProps={{
                            'aria-label': 'select all desserts',
                        }}
                    />
                </TableCell>
                {headCells.map((headCell) => (
                    <TableCell
                        key={headCell.id}
                        align={headCell.numeric ? 'right' : 'left'}
                        padding={headCell.disablePadding ? 'none' : 'normal'}
                        sortDirection={orderBy === headCell.id ? order : false}
                    >
                        <TableSortLabel
                            active={orderBy === headCell.id}
                            direction={orderBy === headCell.id ? order : 'asc'}
                            onClick={createSortHandler(headCell.id)}
                        >
                            {headCell.label}
                            {orderBy === headCell.id ? (
                                <Box component="span" sx={visuallyHidden}>
                                    {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                                </Box>
                            ) : null}
                        </TableSortLabel>
                    </TableCell>
                ))}
            </TableRow>
        </TableHead>
    );
}

interface EnhancedTableToolbarProps {
    numSelected: number;
}

const EnhancedTableToolbar = (props: EnhancedTableToolbarProps) => {
    const { numSelected } = props;

    return (
        <Toolbar
            sx={{
                pl: { sm: 2 },
                pr: { xs: 1, sm: 1 },
                ...(numSelected > 0 && {
                    bgcolor: (theme) =>
                        alpha(theme.palette.primary.main, theme.palette.action.activatedOpacity),
                }),
            }}
        >
            <Typography
                sx={{ flex: '1 1 100%' }}
                color="inherit"
                variant="subtitle1"
                component="div"
            >
                {numSelected} selected
            </Typography>


        </Toolbar>
    );
};


const valListQuery = `
  query ValidatorList {
    validator_status(where: {jailed: {}}) {
      validator {
        validator_voting_powers {
          voting_power
        }
        validator_info {
          operator_address
          validator {
            validator_commissions {
              commission
            }
            validator_descriptions {
              avatar_url
              details
              identity
              moniker
              security_contact
              website
            }
          }
        }
      }
      jailed
    }
  }
`;

export default function ValidatorListPane(props: StepperProps) {
    //let _asyncRequest: Promise<void>|null = null

    const [order, setOrder] = React.useState<Order>('asc');
    const [orderBy, setOrderBy] = React.useState<keyof Data>('commission');
    const [selected, doSetSelected] = React.useState<string[]>([]);
    const [rows, setRows] = React.useState<Array<Data>>([]);

    React.useEffect(() => _loadValsAsync());

    const setSelected = (vals: string[]): void => {
        let datas = rows.filter((row) => { return (vals.indexOf(row.address) > -1)})
        if (props.callback) { props.callback(datas); }
        doSetSelected(vals);
    }

    const _loadValsAsync = () => {
        if (rows.length === 0) {
            loadValData().then(
                externalData => {
                   let vals: Array<Data> = externalData.data.validator_status
                   .filter((line: Validator) => { return !line.jailed || line.validator.validator_info.validator.validator_commissions[0].commission > 0.8})     // remove jailed validators
                   .map((line: Validator, index: number): Data => {          // map to Data objects
                    let moniker = "Unknown"
                    let commission = "Unknown"
                    if (line.validator.validator_info.validator.validator_descriptions.length > 0) {
                        moniker = line.validator.validator_info.validator.validator_descriptions[0].moniker
                    }
                    if (line.validator.validator_info.validator.validator_commissions.length > 0) {
                        commission = (line.validator.validator_info.validator.validator_commissions[0].commission * 100) + "%"
                    }
                                       
                    return {
                        rank: 0, 
                        voting_power: "" + line.validator.validator_voting_powers[0].voting_power,
                        name: moniker,
                        commission: commission,
                        address : line.validator.validator_info.operator_address,
                        logo: "",
                      }});
                    setRows(vals);
                }
            );
        }
    }
    
    const loadValData = async (): Promise<ValResponse> => {
        // fetch me from api
        //return [{rank: 1, name: 'Validator 1', voting_power: '15,394,433 OSMO', commission: '5%' },{rank: 2, name: 'Validator 2', voting_power: '15,394,433 OSMO', commission: '5%' }]
    
        const result = await fetch(
            "https://data." + props.chainId + ".quicksilver.zone/v1/graphql",
            {
              method: "POST",
              body: JSON.stringify({
                query: valListQuery,
                variables: {},
                operationName: "ValidatorList"
              })
            }
          );
        
          return await result.json()    
    }

    type ValResponse = {
        data: {
            validator_status: Array<Validator>
        }
    }

    type VotingPowers = {
        voting_power: number
    }

    type Commissions = {
        commission: number
    }

    type Descriptions = {
        avatar_url: string | null,
        details: string | null,
        identity: string | null,
        moniker: string,
        security_contact: string | null,
        website: string | null
    }

    type Validator = {
        validator: {
            validator_voting_powers: Array<VotingPowers>
            validator_info: {
                operator_address: string,
                validator: {
                    validator_commissions: Array<Commissions>
                    validator_descriptions: Array<Descriptions>
                }
            }
        },
        jailed: Boolean
        
    }

    const handleRequestSort = (
        event: React.MouseEvent<unknown>,
        property: keyof Data,
    ) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
    };

    const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.checked) {
            const newSelecteds = rows.map((n) => n.address);
            setSelected(newSelecteds);
            return;
        }
        setSelected([]);
    };

    const handleClick = (event: React.MouseEvent<unknown>, name: string) => {
        const selectedIndex = selected.indexOf(name);
        let newSelected: string[] = [];

        if (selectedIndex === -1) {
            newSelected = newSelected.concat(selected, name);
        } else if (selectedIndex === 0) {
            newSelected = newSelected.concat(selected.slice(1));
        } else if (selectedIndex === selected.length - 1) {
            newSelected = newSelected.concat(selected.slice(0, -1));
        } else if (selectedIndex > 0) {
            newSelected = newSelected.concat(
                selected.slice(0, selectedIndex),
                selected.slice(selectedIndex + 1),
            );
        }

        setSelected(newSelected);
    };

    // const handleChangePage = (event: unknown, newPage: number) => {
    //     setPage(newPage);
    // };

    // const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    //     setRowsPerPage(parseInt(event.target.value, 10));
    //     setPage(0);
    // };


    const isSelected = (name: string) => selected.indexOf(name) !== -1;

    // Avoid a layout jump when reaching the last page with empty rows.
    //const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

    return (
        <Box sx={{ width: '100%' }}>
            <Paper sx={{ width: '100%', mb: 2, mt: 2, backgroundColor: "transparent" }}>
                <EnhancedTableToolbar numSelected={selected.length} />
                <TableContainer>
                    <Table
                        sx={{ minWidth: 750 }}
                        aria-labelledby="tableTitle"
                        //size={dense ? 'small' : 'medium'}
                    >
                        <EnhancedTableHead
                            numSelected={selected.length}
                            order={order}
                            orderBy={orderBy}
                            onSelectAllClick={handleSelectAllClick}
                            onRequestSort={handleRequestSort}
                            rowCount={rows.length}
                        />
                        <TableBody>
                            {/* if you don't need to support IE11, you can replace the `stableSort` call with:
              rows.slice().sort(getComparator(order, orderBy)) */}
                            { stableSort(rows, getComparator(order, orderBy))
                                //.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                .map((row, index) => {
                                    const isItemSelected = isSelected(row.address);
                                    const labelId = `enhanced-table-checkbox-${index}`;

                                    return (
                                        <TableRow
                                            hover
                                            onClick={(event) => handleClick(event, row.address)}
                                            role="checkbox"
                                            aria-checked={isItemSelected}
                                            tabIndex={-1}
                                            key={row.address}
                                            selected={isItemSelected}
                                        >
                                            <TableCell padding="checkbox">
                                                <Checkbox
                                                    color="primary"
                                                    checked={isItemSelected}
                                                    inputProps={{
                                                        'aria-labelledby': labelId,
                                                    }}
                                                />
                                            </TableCell>

                                            <TableCell align="right">{row.rank}</TableCell>
                                            <TableCell align="right">{row.name}</TableCell>
                                            <TableCell align="right">{row.voting_power}</TableCell>
                                            <TableCell align="right">{row.commission}</TableCell>
                                        </TableRow>
                                    );
                                })}
                            {/* {emptyRows > 0 && (
                                <TableRow
                                    style={{
                                        height: (dense ? 33 : 53) * emptyRows,
                                    }}
                                >
                                    <TableCell colSpan={6} />
                                </TableRow>
                            )} */}
                        </TableBody>
                    </Table>
                </TableContainer>
                {/* <TablePagination
                    rowsPerPageOptions={[5, 10, 25]}
                    component="div"
                    count={rows.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                /> */}
            </Paper>

        </Box>
    );
}
