import React, { Component } from 'react';

class Tab extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: props.name || "Name-Me!",
            action: props.action || voidAction()
        }
    }
    
    render() {
        return (
                <button 
                    className="fs_button_nav_header" 
                    onClick={()=>{this.props.action ?  this.props.action() : voidAction()}}
                > {this.state.name} 
                </button>
        );
    }
}
const voidAction = () => {
    alert("You have not set an onClick event for me Yet !!!");
}


export default Tab;