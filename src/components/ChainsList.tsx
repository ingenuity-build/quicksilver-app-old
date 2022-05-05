import List from "@mui/material/List";
import * as React from 'react';
import { styled } from '@mui/material/styles';
import DeleteIcon from '@mui/icons-material/Delete';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import IconButton from '@mui/material/IconButton';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import FolderIcon from '@mui/icons-material/Folder';
import ListItemIcon from '@mui/material/ListItemIcon';
import InboxIcon from '@mui/icons-material/Inbox';
import ListItemButton from '@mui/material/ListItemButton';
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
function generate(element: React.ReactElement) {
    return [0, 1, 2, 4, 5, 6 ].map((value) =>
        React.cloneElement(element, {
            key: value,
        }),
    );
}

export default function ChainsList() {
    const [dense, setDense] = React.useState(false);
    const [secondary, setSecondary] = React.useState(false);
    const [selectedIndex, setSelectedIndex] = React.useState(1);

    const handleListItemClick = (
        event: React.MouseEvent<HTMLDivElement, MouseEvent>,
        index: number,
    ) => {
        setSelectedIndex(index);

    };

    return (
                <Box
                    sx={{
                    display:'flex',
                    alignContent:'center',
                    justifyContent:`center`,
                    top: `16px`,
                    borderRadius: `24px`,
                    width:"100%",
                    boxShadow: "box-shadow 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",}}>
                    <List sx={{ width:"100%"}} component="nav" aria-label="main mailbox folders">
                        <ListItemButton
                            selected={selectedIndex === 0}
                            onClick={(event) => handleListItemClick(event, 0)}
                        >
                            <ListItemAvatar>
                                <Avatar>
                                    <FolderIcon />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText sx={{margin:'5px', padding:'5px'}} primary="Cosmos HUB" />
                            <ListItemIcon >
                                <ArrowForwardIosIcon  />
                            </ListItemIcon>
                        </ListItemButton>
                        <ListItemButton
                            selected={selectedIndex === 1}
                            onClick={(event) => handleListItemClick(event, 1)}
                        >
                            <ListItemAvatar>
                                <Avatar>
                                    <FolderIcon />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText sx={{margin:'5px', padding:'5px'}} primary="Cosmos HUB 2" />
                            <ListItemIcon >
                                <ArrowForwardIosIcon  />
                            </ListItemIcon>
                        </ListItemButton>
                        <ListItemButton
                            selected={selectedIndex === 2}
                            onClick={(event) => handleListItemClick(event, 2)}
                        >
                            <ListItemAvatar>
                                <Avatar>
                                    <FolderIcon />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText sx={{margin:'5px', padding:'5px'}} primary="Cosmos HUB 3" />
                            <ListItemIcon >
                                <ArrowForwardIosIcon  />
                            </ListItemIcon>
                        </ListItemButton>
                    </List>
                </Box>
    )
}