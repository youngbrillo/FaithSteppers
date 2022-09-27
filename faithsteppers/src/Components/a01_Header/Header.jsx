import React, { Component } from 'react';
import '../../Styles/FaithStepper_style.css';
import logo from '../../logo.svg';
import Tab from './Tab';

const tabs = [
    {   name: "Welcome",  method: ()=>{ alert("Welcome to the site, i nav to the home page")} },
    {   name: "About Us",  method: ()=>{ alert("i nav to a page to tell you more about the site")} },
    {   name: "Inventory",  method: ()=>{ alert("I shall show you what we have in stock")} },
    {   name: "Contact",  method: ()=>{ alert("I will display contact info")} },
]
class Header extends Component {
    render() {
        return (
            <div className="fs_darkMode_Alt fs_Header fs_fullWidth fs_Row"> 
                <div style={{width: '50%'}} className="fs_leftAligned fs_Row">
                    <p> Logo Goes here...</p>
                    <img src={logo} height={50} width={50} className="App-logo" alt="logo"/>
                    <p> (Placeholder logo)</p>
                </div>
                <div  className="fs_Row">
                    {tabs.map((tab, i) => 
                        <Tab key={`${tab.name}-${i}`} name={tab.name} action={tab.method} /> 
                    )}
                </div>
            </div>
        );
    }
}

export default Header;