import React from 'react';
import {Box, Button, Grid, TextField} from "@mui/material";
import './footer.component.css';
import Typography from "@mui/material/Typography";

function FooterComponent() {
    return (
        <div className="footer">
            <Grid className="first-footer" container justifyContent="space-around" textAlign="left" alignContent="center">
                <Grid item xl={1}/>
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
        </div>
    );
}

export default FooterComponent;