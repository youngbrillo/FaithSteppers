import React, { Component } from 'react';

import {
    Outlet,
    useNavigation
} from 'react-router-dom'

const MainContent = () =>{
    const navigation = useNavigation();
    const searching = navigation.location && new URLSearchParams(navigation.location.search).has("q");

    const render = () => {

        return (
            <div 
                id="detail"
                className={navigation.state === "loading" ? "loading" : ""}
            >
                <Outlet />
            </div>
        );
    }

    return render();
}

export default MainContent;