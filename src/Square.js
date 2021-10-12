import React from 'react';
import { Checker } from './Checker';

export class Square extends React.Component{
    constructor(props){
        super(props);
        if(this.props.id < 16){
            this.color = "redPiece";
        }else{
            this.color = "purplePiece";
        }
        
    }
    render(){
        
        return(
            <td className = {this.props.className} id = {this.props.id}>
                {this.props.isOccupied ? <Checker onClick ={this.props.onClick} color = {this.color} />:null}
            </td>
        );
    }
}