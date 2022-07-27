import React from 'react';
import {MenuItem} from "@mui/material";

function renderSwitch(param) {
    switch(param) {
        case 0:
            return <h4 style={{padding:20}}>work on this</h4>
        case 1:
            return 'ba';
        default:
            return 'foo';
    }
}

function WebItemMenuComponent(props) {
    return (
        <>
            {renderSwitch(props.type)}
        </>
    );
}

export default WebItemMenuComponent;