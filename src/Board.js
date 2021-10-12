import React from 'react';
import { Square } from './Square';

export class Board extends React.Component{
    constructor(props){
        super(props);
        //initial board state
        const board = 
        [
        0, null, 2, null, 4, null, 6, null,
        null, 9, null, 11, null, 13, null, 15,
        null, null, null, null, null, null, null, null,
        null, null, null, null, null, null, null, null,
        null, null, null, null, null, null, null, null,
        null, null, null, null, null, null, null, null,
        48, null, 50, null, 52, null, 54, null,
        null, 57, null, 59, null, 61, null, 63,
        ]
        this.state = {boardState: board};
        this.renderCheckers();
    }

    handleClick(i){
        const board = this.state.boardState.slice();
        board[i+8] = i + 8;
        board[i] = null;
        this.setState({boardState:board});

    }

    renderSquareBl(i){
        //render black Sqaure
        return(
            <Square className = 'blackSquare' id = {i} isOccupied = {this.renderCheckers(i)} onClick = {()=>this.handleClick(i)} />
        );
    
    }
    renderSquareWh(i){
        //render white square
        return(
            <Square className = 'whiteSquare' id = {i} isOccupied ={this.renderCheckers(i)} onClick = {()=>this.handleClick(i)}/>
        );
    }
    renderCheckers(i){
        if(this.state.boardState[i] !== null){
            return true;
        }else{
            return false;
        }

    }
    
    render(){
        //render board as a table with eight rows 
        
        return(
            <table className = 'table'> 
                <tr className = 'row'>
                    {this.renderSquareBl(0)}{this.renderSquareWh(1)}{this.renderSquareBl(2)}{this.renderSquareWh(3)}
                    {this.renderSquareBl(4)}{this.renderSquareWh(5)}{this.renderSquareBl(6)}{this.renderSquareWh(7)}
                </tr>
                <tr className = 'row'>
                    {this.renderSquareWh(8)}{this.renderSquareBl(9)}{this.renderSquareWh(10)}{this.renderSquareBl(11)}
                    {this.renderSquareWh(12)}{this.renderSquareBl(13)}{this.renderSquareWh(14)}{this.renderSquareBl(15)}
                </tr>
                <tr className = 'row'>
                    {this.renderSquareBl(16)}{this.renderSquareWh(17)}{this.renderSquareBl(18)}{this.renderSquareWh(19)}
                    {this.renderSquareBl(20)}{this.renderSquareWh(21)}{this.renderSquareBl(22)}{this.renderSquareWh(23)}
                </tr>
                <tr className = 'row'>
                    {this.renderSquareWh(24)}{this.renderSquareBl(25)}{this.renderSquareWh(26)}{this.renderSquareBl(27)}
                    {this.renderSquareWh(28)}{this.renderSquareBl(29)}{this.renderSquareWh(30)}{this.renderSquareBl(31)}
                </tr>
                <tr className = 'row'>
                    {this.renderSquareBl(32)}{this.renderSquareWh(33)}{this.renderSquareBl(34)}{this.renderSquareWh(35)}
                    {this.renderSquareBl(36)}{this.renderSquareWh(37)}{this.renderSquareBl(38)}{this.renderSquareWh(39)}
                </tr>
                <tr className = 'row'>
                    {this.renderSquareWh(40)}{this.renderSquareBl(41)}{this.renderSquareWh(42)}{this.renderSquareBl(43)}
                    {this.renderSquareWh(44)}{this.renderSquareBl(45)}{this.renderSquareWh(46)}{this.renderSquareBl(47)}
                </tr>
                <tr className = 'row'>
                    {this.renderSquareBl(48)}{this.renderSquareWh(49)}{this.renderSquareBl(50)}{this.renderSquareWh(51)}
                    {this.renderSquareBl(52)}{this.renderSquareWh(53)}{this.renderSquareBl(54)}{this.renderSquareWh(55)}
                </tr>
                <tr className = 'row'>
                    {this.renderSquareWh(56)}{this.renderSquareBl(57)}{this.renderSquareWh(58)}{this.renderSquareBl(59)}
                    {this.renderSquareWh(60)}{this.renderSquareBl(61)}{this.renderSquareWh(62)}{this.renderSquareBl(63)}
                </tr>

            </table>
        );
    }
}