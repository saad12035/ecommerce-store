import React from 'react';
import MenuItemDesignComponent from "./menu-item-design.component.jsx";


function renderSwitch(param) {
    switch(param.type) {
        case 0:
            return <MenuItemDesignComponent/>
        case 1:
            return <MenuItemDesignComponent/>
        default:
            return <MenuItemDesignComponent/>
    }
}

function WebItemMenuComponent(props) {
    return (
        <>
            {renderSwitch(props)}
        </>
    );
}

export default WebItemMenuComponent;