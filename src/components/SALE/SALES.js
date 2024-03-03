import React from 'react';
import ButtonSale from './ButtonSALE';

class SALES extends React.Component {    
    constructor(props) {
        super(props)
        this.state = {
    salemass: [ //массив приборов    
    {
        id: 0,
        name: "0%",
        categ: "Скидка",
        sale: 1
    },    
    {
        id: 2,
        name: "5%",
        categ: "Скидка",
        sale: 0.95
    },
    {
        id: 3,
        name: "10%",
        categ: "Скидка",
        sale: 0.9
    },
    {
        id: 4,
        name: "20%",
        categ: "Скидка",
        sale: 0.8
    },
    {
        id: 5,
        name: "30%",
        categ: "Скидка",
        sale: 0.7
    },
    {
        id: 6,
        name: "40%",
        categ: "Скидка",
        sale: 0.6
    },
    {
        id: 1,
        name: "Суммой",
        categ: "Скидка",
        sale: 1
    }
    ]}
    }
 

    render() { 
      return(
        <div>
            {this.state.salemass.map((el) => (
            <ButtonSale 
            SaleWindowEditActive = {this.props.SaleWindowEditActive} 
            salemass={el} 
            key={el.id} 
            SaleFunction={ this.props.SaleFunction} 
            SaleInpEdit0={this.props.SaleInpEdit0}
            />))}
        </div>   
      )      
      
    }  
  }

  export default SALES



