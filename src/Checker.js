import React from 'react';

export class Checker extends React.Component{
    

    render(){
        return(
        <span className = {this.props.color}  onClick = {this.props.onClick}>
        </span>
        );
    }
}