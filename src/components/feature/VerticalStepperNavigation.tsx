import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

type StepperNavigation = {
    name: string,
    icon?: string,
    componentKeyName: string
}

type Stepper = {
    navigation: Array<StepperNavigation>,
    components: Array<string>
    name: string,
    isComplete: boolean,
    description?: string
}
export default function VerticalStepperNavigation({steps} :any) {
    console.log(steps.navigation)
    return (
        <>
         <Grid container>
             <Grid xs={4} spacing={2}  sx={{border:'1px solid red'}}>
                 {
                     steps?.navigation?.forEach((step:any) => {
                         return <h1>{step.name}</h1>
                     })
                 }
              </Grid>
             <Grid xs={8} sx={{border:'1px solid red'}}>Stepper body</Grid>
         </Grid>
        </>)
}