import React from 'react';
import {Box, Button, Grid, TextField} from "@mui/material";
import './footer.component.css';
import Typography from "@mui/material/Typography";

function FooterComponent() {
    return (
        <div className="footer">
            <Grid className="first-footer" container justifyContent="space-around" textAlign="left" alignContent="center">
                <Grid item xl={0}/>
                <Box
                    component={Grid}
                    item
                    sm={6}
                    md={6}
                    lg={6}
                    xl={4}
                    display={{xs: "none", sm: "block"}}
                >
                    <Typography variant="h5" color="primary">We write really great emails.</Typography>
                    <br/>
                    <Typography variant="body1" color="primary">We'll let you know about the latest deals & newest products. New subscribers get 20% off any
                        single item.</Typography>
                </Box>
                <Grid item xl={1}/>
                <Box
                    component={Grid}
                    item
                    sm={6}
                    md={6}
                    lg={6}
                    xl={2.5}
                    display={{xs: "none", sm: "block"}}
                >
                    <TextField className="footer-textfield" id="outlined-basic" label="Email" variant="outlined" />
                </Box>
                <Box
                    component={Grid}
                    item
                    sm={6}
                    md={6}
                    lg={6}
                    xl={2}
                    style={{backgroundColor:"deepskyblue",maxHeight:"3.5rem",textAlign:"center",alignContent:"center"}}
                >
                     <Button style={{color:"white",width:"100%",height:"100%"}}>
                        Signup for emails
                     </Button>
                </Box>
                <Grid item xl={0.5}/>
            </Grid>
            <hr className="solid"/>
            <Grid className="second-footer" container justifyContent="space-around" textAlign="left" alignContent="center">
                <Grid item xl={0}/>
                <Box
                    component={Grid}
                    item
                    sm={6}
                    md={6}
                    lg={6}
                    xl={2}
                    display={{xs: "none", sm: "block"}}
                >
                    <Typography variant="subtitle2" color="primary">Get in touch.</Typography>
                    <br/>
                    <div className="footer-sub-items-wrapper">
                        <Typography variant="caption" color="primary">Help</Typography>
                        <Typography variant="caption" color="primary">Update Your Email Preference</Typography>
                    </div>
                    <br/>
                    <Typography variant="subtitle2" color="primary">Download Our App</Typography>
                    <img style={{width:"8vw"}} src="https://www.bedbathandbeyond.com/amp/7865/downloadAndroid.svg" alt="footer-google"/>
                </Box>
                <Box
                    component={Grid}
                    item
                    sm={6}
                    md={6}
                    lg={6}
                    xl={2}
                    display={{xs: "none", sm: "block"}}
                >
                    <Typography variant="subtitle2" color="primary">SHIPPING & RETURNS </Typography>
                    <br/>
                    <div className="footer-sub-items-wrapper">
                        <Typography variant="caption" color="primary">Track Order</Typography>
                        <Typography variant="caption" color="primary">Shipping Info</Typography>
                        <Typography variant="caption" color="primary">   Store Pickup</Typography>
                    </div>
                    <br style={{paddingTop:10}}/>
                    <Typography variant="subtitle2" color="primary">SHIPPING & RETURNS </Typography>
                    <div className="footer-sub-items-wrapper">
                        <Typography variant="caption" color="primary">Track Order</Typography>
                        <Typography variant="caption" color="primary">Shipping Info</Typography>
                        <Typography variant="caption" color="primary">   Store Pickup</Typography>
                    </div>
                </Box>
                <Box
                    component={Grid}
                    item
                    sm={6}
                    md={6}
                    lg={6}
                    xl={2}
                    display={{xs: "none", sm: "block"}}
                >
                    <Typography variant="subtitle2" color="primary">SERVICES & SOLUTIONS</Typography>
                    <br/>
                    <div className="footer-sub-items-wrapper">
                        <Typography variant="caption" color="primary">Track Order</Typography>
                        <Typography variant="caption" color="primary">Shipping Info</Typography>
                        <Typography variant="caption" color="primary">   Store Pickup</Typography>
                    </div>
                    <br style={{paddingTop:10}}/>
                    <Typography variant="subtitle2" color="primary">SHIPPING & RETURNS </Typography>
                    <div className="footer-sub-items-wrapper">
                        <Typography variant="caption" color="primary">Track Order</Typography>
                        <Typography variant="caption" color="primary">Shipping Info</Typography>
                        <Typography variant="caption" color="primary">   Store Pickup</Typography>
                    </div>
                    <br style={{paddingTop:10}}/>
                    <Typography variant="subtitle2" color="primary">SHIPPING & RETURNS </Typography>
                    <div className="footer-sub-items-wrapper">
                        <Typography variant="caption" color="primary">Track Order</Typography>
                        <Typography variant="caption" color="primary">Shipping Info</Typography>
                        <Typography variant="caption" color="primary">   Store Pickup</Typography>
                    </div>
                </Box>
                <Box
                    component={Grid}
                    item
                    sm={6}
                    md={6}
                    lg={6}
                    xl={4}
                    display={{xs: "none", sm: "block"}}
                >
                    <Typography variant="subtitle2" color="primary">SERVICES & SOLUTIONS</Typography>
                    <br/>
                    <div className="footer-sub-items-wrapper">
                        <Typography variant="caption" color="primary">Track Order</Typography>
                        <Typography variant="caption" color="primary">Shipping Info</Typography>
                        <Typography variant="caption" color="primary">   Store Pickup</Typography>
                    </div>
                </Box>
            </Grid>
            <Typography style={{paddingTop:50,paddingBottom:50}} variant="h5" color="black">Explore Our Other Brands</Typography>
            <Grid className="third-footer" container justifyContent="space-around"  textAlign="center" alignContent="center">
                <Grid item xl={3}/>
                <Box
                    component={Grid}
                    item
                    sm={6}
                    md={6}
                    lg={6}
                    xl={1}
                    display={{xs: "none", sm: "block"}}
                >
                        <img style={{marginTop:10}} width={150} src="src/assets/footer-img-1.svg" alt="footer-img"/>
                </Box>
                <Box
                    component={Grid}
                    item
                    sm={6}
                    md={6}
                    lg={6}
                    xl={1}
                    display={{xs: "none", sm: "block"}}
                >
                    <img width={150} src="src/assets/footer-img-2.svg" alt="footer-img"/>
                </Box>
                <Box
                    component={Grid}
                    item
                    sm={6}
                    md={6}
                    lg={6}
                    xl={1}
                    display={{xs: "none", sm: "block"}}
                >
                    <img style={{marginTop:"-8px"}} width={150} src="src/assets/footer-img-3.svg" alt="footer-img"/>
                </Box>
                <Grid item xl={3}/>
            </Grid>
            <p style={{color:"black"}}>© 2022 Bed Bath & Beyond Inc. and its subsidiaries.</p>
        </div>
    );
}
export default FooterComponent;