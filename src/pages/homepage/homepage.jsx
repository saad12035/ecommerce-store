import React, {useEffect, useState} from 'react';
import './homepage.css';
import HeaderComponent from "../../components/header/header.component.jsx";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import ProductCard from "../../components/product.cards.component";
import {getProducts} from "./api.jsx";
import {Grid} from "@mui/material";


const responsive = {
    superLargeDesktop: {
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};

function Homepage() {
    const [result, setResult] = useState([]);
    useEffect(() => {
        getProducts().then(response => setResult(response));
    }, []);


    return (
        <div className="container">
            <HeaderComponent/>
            <div className="hero-section">
                <img src="src/assets/hero-img-1.webp" alt="hero-img-1"/>
                <img src="src/assets/hero-img-2.webp" alt="hero-img-2"/>
                <img src="src/assets/hero-img-3.webp" alt="hero-img-3"/>
            </div>
            <div className="body-section">
                <div className="wrapper-circle-items">
                    <div className="items">
                        <img src="src/assets/home-circle-img1.webp" alt="hero-img-4"/>
                        <p style={{color:"black"}}>Blankets</p>
                    </div>
                    <div className="items">
                        <img src="src/assets/home-circle-img2.webp" alt="hero-img-4"/>
                        <p style={{color:"black"}}>Bath</p>
                    </div>
                    <div className="items">
                        <img src="src/assets/home-circle-img3.webp" alt="hero-img-4"/>
                        <p style={{color:"black"}}>Storage</p>
                    </div>
                    <div className="items">
                        <img src="src/assets/home-circle-img4.webp" alt="hero-img-4"/>
                        <p style={{color:"black"}}>decor</p>
                    </div>
                    <div className="items">
                        <img src="src/assets/home-circle-img5.webp" alt="hero-img-4"/>
                        <p style={{color:"black"}}>decor</p>
                    </div>
                    <div className="items">
                        <img src="src/assets/home-circle-img6.webp" alt="hero-img-4"/>
                        <p style={{color:"black"}}>decor</p>
                    </div>
                </div>
                <img src="src/assets/home-img4.webp" alt="home-img4"/>
                <h1 style={{color:"#1c1e4c"}}>smart deals on college basics</h1>
                <Grid
                    container
                    direction="row"
                    justifyContent="space-evenly"
                    alignItems="center"
                >
                <Carousel
                        className="test"
                        responsive={responsive}
                    >
                        {
                            result?.map((item)=> (
                                <ProductCard result={item}/>
                            ))
                        }
                    </Carousel>
                </Grid>
            </div>
        </div>
    );
}

export default Homepage;