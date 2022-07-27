import React from 'react';
import {Button, Grid} from "@mui/material";
import './header.component.css';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import SearchBar from "material-ui-search-bar";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import BasicMenu from "../menu.jsx";
import {MenuData} from "../../utils/menu-constants.jsx";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined.js";
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
function HeaderComponent() {
    return (
        <div className="header-box">
            <Grid container alignItems="center" >
                <Grid item xs={3} md={6} lg={1} xl={1} />
                <Grid item xs={3} md={6} lg={1} xl={2} >
                    <img src="src/assets/Bed-Bath-and-Beyond-Logo-Font-Family-Free-Download-min.jpg" alt={"he"}/>
                </Grid>
                <Grid item xs={3} md={6} lg={1} xl={6}>
                    <SearchBar
                        onChange={() => console.log('onChange')}
                        onRequestSearch={() => console.log('onRequestSearch')}
                        style={{
                            margin: '0 auto',
                        }}
                    />
                </Grid>
                <Grid item xs={3} md={6} lg={1} xl={1.3} >
                    <div className="header-signin">
                        <h2>Sign in</h2>
                        <AccountCircleOutlinedIcon fontSize={"large"} style={{marginTop:13}}/>
                    </div>
                </Grid>
                <Grid item xs={3} md={6} lg={1} xl={1.5} >
                    <ShoppingCartOutlinedIcon fontSize={"large"}/>
                </Grid>
            </Grid>
            <Grid container mt="-10px" alignItems="baseline"  justifyContent="center">
                <Grid item xs={3} md={6} lg={5} xl={0.5}/>
                    {
                       MenuData.map((item,index)=>(
                           <Grid item >
                           <BasicMenu name={item.title} key={index}/>
                           </Grid>
                       ))
                    }
                <Grid item xs={3} md={6} lg={5} xl={1.1}/>
                <Grid item >
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
                </Grid>
                <Grid item>
                    <Button color="secondary" startIcon={<LocalShippingOutlinedIcon style={{fontSize:40}} />}>
                        <div>
                            <h5>Same day delivery</h5>
                            <h6>Miami</h6>
                        </div>
                    </Button>
                </Grid>
            </Grid>
            <h1 style={{height:700}}>hi</h1>
        </div>
    );
}

export default HeaderComponent;