import React from 'react';
import './menu-item-design.component.css';
import {SecondaryMenuData} from "../../utils/menu-constants.jsx";

function MenuItemDesignComponent() {
    const data=SecondaryMenuData[0];
    return (
        <div className="wrapper">
            <div className="menu1">
                <h4>{data.title1.toUpperCase()}</h4>
                {data.deals.map((a)=>(
                    <div style={{display:"flex",flexDirection:"column"}}>
                        <p color="secondary" >{a}</p>
                    </div>
                ))
                }
                <h4>{data.title2.toUpperCase()}</h4>
            </div>
            <div className="menu2">
                <h4>{data.title3.toUpperCase()}</h4>
                <h4>{data.title4.toUpperCase()}</h4>
                {data.deals2.map((a)=>(
                    <div style={{display:"flex",flexDirection:"column"}}>
                        <p color="secondary" >{a}</p>
                    </div>
                ))
                }
            </div>
            <div className="menu3">
                <img src="src/assets/menu1-mern-img.png" alt="hi"/>
            </div>
        </div>
    );
}

export default MenuItemDesignComponent;