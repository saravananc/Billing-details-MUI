import {
  AppBar,
  Box,
  Button,
  Card,
  Container,
  Divider,
  Grid,
  Link,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";

const BillingDetails = () => {
  return (
    <>
      <AppBar position="static" sx={{ backgroundColor: "black" }}>
        <Toolbar></Toolbar>
      </AppBar>
      <Box mt={2} >
        <Container  sx={{ backgroundColor: "lightgray" }}>
        
          <Grid container spacing={2}>
          <Grid item xs={12} md={6} sm={12} lg={7}>
          <Card  sx={{px:"25px", mt:"10px",borderRadius:"15px"}}>
            <Grid item >
              <Typography my={3} variant="h6">
                {" "}<Link href="#" underline="hover">
                1 </Link>  Account details
              </Typography>
              <Box display={"flex"} justifyContent={"flex-end"}>
                <Typography variant="caption" display="block" gutterBottom>
                  Already have an account? <Link href="#" underline="hover">Sign in here</Link>
                </Typography>
              </Box>
              <Grid container spacing={2}>
                <Grid item xs={12} md={6} lg={6}>
                  <TextField
                    id="filled-basic"
                    label="Email*"
                    variant="filled"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} md={6} lg={6}>
                  <TextField
                    id="filled-basic"
                    label="Password*"
                    variant="filled"
                    fullWidth
                  />
                </Grid>
              </Grid>
              <Grid container spacing={2}>
                <Grid item xs={12} md={6} lg={6} mt={2}>
                  <TextField
                    id="filled-basic"
                    label="First name*"
                    variant="filled"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} md={6} lg={6} mt={2}>
                  <TextField
                    id="filled-basic"
                    label="Last name*"
                    variant="filled"
                    fullWidth
                  />
                </Grid>
              </Grid>
              <Grid container spacing={2} mb={3}>
                <Grid item xs={12} md={8} lg={8} mt={2}>
                  <Typography variant="caption" display="block" gutterBottom>
                    By creating an account,you agree to the <Link href="#" underline="hover"> Terms And Conditions </Link> 
                    set out by this site, including our <Link href="#" underline="hover"> Cookie Use</Link>
                  </Typography>
                </Grid>
                <Grid item xs={12} md={4} lg={4} mt={2}>
                  <Button
                    fullWidth
                    variant="contained"
                    sx={{ backgroundColor: "orangered", color: "white",borderRadius:"10px" }}
                  >
                    Continue
                  </Button>
                </Grid>
              </Grid>
              </Grid>
              </Card>
              <Card sx={{px:"25px",  mt:"10px",borderRadius:"15px"}}>
                <Grid container>
                  <Grid item xs={12}>
                    <Typography variant="h6" my={3}>
                      {" "}<Link href="#" underline="hover">
                      2 </Link>  Billing details
                    </Typography>
                  </Grid>
                </Grid>
              </Card>
              <Card sx={{px:"25px", my:"36px", mt:"10px",borderRadius:"15px"}}>
              <Grid container >
                <Grid item xs={12}>
                  <Typography variant="h6" my={3}>
                    {" "}<Link href="#" underline="hover">
                    3 </Link>  Payment
                  </Typography>
                </Grid>
              </Grid>
              </Card>
            </Grid>

            <Grid item xs={12} sm={12} lg={4} md={3} >
                <Card   sx={{px:"25px", mt:"10px",my:"10px" ,borderRadius:"15px"}}>
            <Typography my={3} variant="h6">
                {" "}
                 Order summary
              </Typography>
              <Box display={"flex"} sx={{ justifyContent: 'space-between' }}>
                <Box>
                    <Typography variant="h6" >Plan</Typography>
                </Box>
                <Box display={"flex"} justifyContent={"flex-end"}>
                    <Typography variant="h6">Price</Typography>
                </Box>
              </Box>
              <Box display={"flex"} sx={{ justifyContent: 'space-between' }}>
                <Box>
                    <Typography variant="body2" gutterBottom>Free Trail</Typography>
                </Box>
                <Box display={"flex"} justifyContent={"flex-end"}>
                    <Typography variant="body2" gutterBottom>$0.00</Typography>
                </Box>
              </Box>
              <Divider sx={{my:"25px"}} />
              <Box display={"flex"} sx={{ justifyContent: 'space-between' }}>
                <Box>
                    <Typography variant="h6" >Total due today</Typography>
                </Box>
                <Box display={"flex"} justifyContent={"flex-end"}>
                    <Typography variant="h6">$0.00</Typography>
                </Box>
              </Box>
              <Box>
                    <Typography my={3} variant="body2" gutterBottom>Packt Free Trail</Typography>
                </Box>
              </Card>
             
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default BillingDetails;
