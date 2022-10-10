import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Tab extends Component {
    constructor(props) {
        super(props);
        this.state = {
            path: props.path || 'empty',
            name: props.name || "Name-Me!",
            action: props.action || voidAction()
        }
    }
    
    renderButton() {
        return (

                <button 
                    className="fs_button_nav_header" 
                    onClick={()=>{this.props.action ?  this.props.action() : voidAction()}}
                > {this.state.name} 
                </button>
        );
    }

    renderLink(){
        return (<div className="fs_button_nav_header">
            <Link to={this.state.path}> {this.state.name} </Link>
        </div>)
    }

    render(){
        if(this.props.path) 
           return this.renderLink();

        return this.renderButton();
    }
}
const voidAction = () => {
    alert("You have not set an onClick event for me Yet !!!");
}


export default Tab;