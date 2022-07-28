import React from 'react';
import './homepage.css';
import HeaderComponent from "../../components/header/header.component.jsx";

function Homepage() {
    return (
        <div className="container">
            <HeaderComponent/>
            <div className="hero-section">
                <img src="src/assets/hero-img-1.webp" alt="hero-img-1"/>
                <img src="src/assets/hero-img-2.webp" alt="hero-img-2"/>
                <img src="src/assets/hero-img-3.webp" alt="hero-img-3"/>
            </div>
        </div>
    );
}

export default Homepage;