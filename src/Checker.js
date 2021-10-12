import React from 'react';

export class Checker extends React.Component{
    constructor(props){
        super(props);
    }

    
    render(){
        let color;
        if(this.props.color === 1){
            color = 'redPiece';
        }else{
            color = 'purplePiece';
        }
        return(
        <span className = {color}  onClick = {this.props.onClick}>
        </span>
        );
    }
}