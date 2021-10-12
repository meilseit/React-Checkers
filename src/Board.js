import React from 'react';

export class Board extends React.Component{
    constructor(props){
        super(props);
        this.state = {};
    }

    renderSquareBl(i){
        //render black Sqaure
        return(
            <td className = 'blackSquare' id = {i}>
                <p> </p>
            </td>
        );
    
    }
    renderSquareWh(i){
        //render white square
        return(
            <td className = 'whiteSquare' id = {i}>
                <p> </p>
            </td>
        );
    }
    render(){
        //render board as a table with eight rows 
        return(
            <table className = 'table'> 
                <tr className = 'row'>
                    {this.renderSquareBl(1)}{this.renderSquareWh(2)}{this.renderSquareBl(3)}{this.renderSquareWh(4)}
                    {this.renderSquareBl(5)}{this.renderSquareWh(6)}{this.renderSquareBl(7)}{this.renderSquareWh(8)}
                </tr>
                <tr className = 'row'>
                    {this.renderSquareWh(9)}{this.renderSquareBl(10)}{this.renderSquareWh(11)}{this.renderSquareBl(12)}
                    {this.renderSquareWh(13)}{this.renderSquareBl(14)}{this.renderSquareWh(15)}{this.renderSquareBl(16)}
                </tr>
                <tr className = 'row'>
                    {this.renderSquareBl(17)}{this.renderSquareWh(18)}{this.renderSquareBl(19)}{this.renderSquareWh(20)}
                    {this.renderSquareBl(21)}{this.renderSquareWh(22)}{this.renderSquareBl(23)}{this.renderSquareWh(24)}
                </tr>
                <tr className = 'row'>
                    {this.renderSquareWh(25)}{this.renderSquareBl(26)}{this.renderSquareWh(27)}{this.renderSquareBl(28)}
                    {this.renderSquareWh(29)}{this.renderSquareBl(30)}{this.renderSquareWh(31)}{this.renderSquareBl(32)}
                </tr>
                <tr className = 'row'>
                    {this.renderSquareBl(33)}{this.renderSquareWh(34)}{this.renderSquareBl(35)}{this.renderSquareWh(36)}
                    {this.renderSquareBl(37)}{this.renderSquareWh(38)}{this.renderSquareBl(39)}{this.renderSquareWh(40)}
                </tr>
                <tr className = 'row'>
                    {this.renderSquareWh(41)}{this.renderSquareBl(42)}{this.renderSquareWh(43)}{this.renderSquareBl(44)}
                    {this.renderSquareWh(45)}{this.renderSquareBl(46)}{this.renderSquareWh(47)}{this.renderSquareBl(48)}
                </tr>
                <tr className = 'row'>
                    {this.renderSquareBl(49)}{this.renderSquareWh(50)}{this.renderSquareBl(51)}{this.renderSquareWh(52)}
                    {this.renderSquareBl(53)}{this.renderSquareWh(54)}{this.renderSquareBl(55)}{this.renderSquareWh(56)}
                </tr>
                <tr className = 'row'>
                    {this.renderSquareWh(57)}{this.renderSquareBl(58)}{this.renderSquareWh(59)}{this.renderSquareBl(60)}
                    {this.renderSquareWh(61)}{this.renderSquareBl(62)}{this.renderSquareWh(63)}{this.renderSquareBl(64)}
                </tr>

            </table>
        );
    }
}