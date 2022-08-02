import React, {useEffect, useState} from 'react';
import { useNavigate } from "react-router-dom";
import {Box, Button, Grid, Typography} from "@mui/material";
import './header.component.css';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import SearchBar from "material-ui-search-bar";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import BasicMenu from "./web-menu.component.jsx";
import {SecondaryMenuData, TertiaryMenuData} from "../../utils/menu-constants.jsx";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined.js";
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';


function secondHeader(){
    return(
        <Grid container alignItems="center" justifyContent="space-around" className="tertiary-menu">
            {
                TertiaryMenuData.map((item)=>(
                    <Box
                        component={Grid}
                        item
                        pl={6}
                        display={{ xs: "none", sm: "block",md:"block" }}
                    >
                        <p>{item.mainTitle}</p>
                    </Box>
                ))
            }
        </Grid>
    );
}

function HeaderComponent() {
    const [show, setShow] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const controlNavbar = () => {
        if (typeof window !== 'undefined') {
            if (window.scrollY > lastScrollY) {
                setShow(false);
            } else {
                setShow(true);
            }
            setLastScrollY(window.scrollY);
        }
    };
    let navigate = useNavigate();
    useEffect(() => {
        if (typeof window !== 'undefined') {
            window.addEventListener('scroll', controlNavbar);
            return () => {
                window.removeEventListener('scroll', controlNavbar);
            };
        }
    }, [lastScrollY]);

    return (
        <div className="header-box">
            <Grid container alignItems="center" >
                <Grid item xs={0} md={0} lg={1} xl={1} />
                <Grid item xs={12} sm={3}  md={3} lg={1} xl={2} >
                    <img src="src/assets/Bed-Bath-and-Beyond-Logo-Font-Family-Free-Download-min.jpg" alt={"he"}/>
                </Grid>
                <Grid item xs={12} sm={3} md={5} lg={1} xl={6}>
                    <SearchBar
                        onChange={() => console.log('onChange')}
                        onRequestSearch={() => console.log('onRequestSearch')}
                        style={{
                            margin: '0 auto',
                        }}
                    />
                </Grid>
                <Grid className="dropdown" item xs={6} sm={3} md={2} lg={1} xl={1.3} >
                    <Button className="header-signin">
                        <h2 style={{color:"white"}}>Sign in</h2>
                        <AccountCircleOutlinedIcon fontSize={"large"} style={{color:"white"}}/>
                    </Button>
                    <div className="dropdown-content">
                        <div className="header-signin-info">
                            <Typography variant="subtitle2" color="secondary">
                                Welcome rewards
                            </Typography>
                            <Typography variant="caption" color="secondary">
                                Earn & redeem points on every purchase across our family of brands.
                            </Typography>
                            <Button onClick={()=>navigate('/store/account/login')} className="header-content-signup-button">
                                <Typography variant="h6" color="secondary">
                                    Sign In or Create new
                                </Typography>
                            </Button>
                            <hr style={{color:"white"}}/>
                            <div className="header-signup-information-help">
                                <Typography variant="subtitle1" color="secondary">
                                    Have a question for us?<br/>
                                   <a href="#" style={{color:"red"}}> We’re here to help</a>
                                </Typography>
                            </div>
                        </div>
                    </div>
                </Grid>
                <Grid item xs={6}sm={3}  md={2} lg={1} xl={1.5} >
                    <ShoppingCartOutlinedIcon fontSize={"large"}/>
                </Grid>
            </Grid>
            {
                show?
                    <>
                    <Grid container mt="-5px" alignItems="baseline"  justifyContent="center">
                    <Grid item xs={1} md={12} lg={5} xl={1}/>
                    {
                        SecondaryMenuData.map((item,index)=>(
                            <Grid item >
                                <BasicMenu name={item.mainTitle} index={index}/>
                            </Grid>
                        ))
                    }
                    <Grid item xs={0} md={0} lg={5} xl={1}/>
                    <Box
                        component={Grid}
                        item
                        sm={6}
                        md={6}
                        lg={3}
                        xl={3}
                        display={{ xs: "none", sm: "block" }}
                    >
                        <Button
                            color="secondary"
                            startIcon={<ShoppingBagOutlinedIcon
                                style={{fontSize:40}} />}
                            endIcon={ <KeyboardArrowDownOutlinedIcon style={{fontSize:30}} />}
                        >
                            <div className="second-menu-item">
                                <h5>Store and curbside pickup</h5>
                                <h6 style={{margin:0}}>Springfield</h6>
                            </div>
                        </Button>
                    </Box>
                    <Box
                        component={Grid}
                        item
                        sm={6}
                        md={6}
                        lg={2}
                        xl={2}
                        display={{ xs: "none", sm: "block",md:"block" }}
                    >
                        <Button color="secondary" startIcon={<LocalShippingOutlinedIcon style={{fontSize:40}} />}>
                            <div>
                                <h5>Same day delivery</h5>
                                <h6>Miami</h6>
                            </div>
                        </Button>
                    </Box>
                </Grid>
                    {secondHeader()}
                    </>
                    :
                   secondHeader()
            }
        </div>
    );
}

export default HeaderComponent;