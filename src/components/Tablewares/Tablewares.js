import React from 'react';
import ButtonTableWares from './ButtonTableWares';

class Tablewares extends React.Component {    
    constructor(props) {
        super(props)
        this.state = {
    tablewaresmass: [ //массив приборов    
    {
        id: 0,
        name: "Приборы",
        price: 0,
        categ: "Приборы",
        num: 0,
        totalprice: 0
    },
    {
        id: 1,
        name: "Приборы",
        price: 0,
        categ: "Приборы",
        num: 1,
        totalprice: 0
    },
    {
        id: 2,
        name: "Приборы",
        price: 0,
        categ: "Приборы",
        num: 2,
        totalprice: 0
    },
    {
        id: 3,
        name: "Приборы",
        price: 0,
        categ: "Приборы",
        num: 3,
        totalprice: 0
    },
    {
        id: 4,
        name: "Приборы",
        price: 0,
        categ: "Приборы",
        num: 4,
        totalprice: 0
    },
    {
        id: 5,
        name: "Приборы",
        price: 0,
        categ: "Приборы",
        num: 5,
        totalprice: 0
    },
    {
        id: 6,
        name: "Приборы",
        price: 0,
        categ: "Приборы",
        num: 6,
        totalprice: 0
    },
    {
        id: 7,
        name: "Приборы",
        price: 0,
        categ: "Приборы",
        num: 7,
        totalprice: 0
    },
    {
        id: 8,
        name: "Приборы",
        price: 0,
        categ: "Приборы",
        num: 8,
        totalprice: 0
    },
    {
        id: 9,
        name: "Приборы",
        price: 0,
        categ: "Приборы",
        num: 9,
        totalprice: 0
    },
    {
        id: 10,
        name: "Приборы",
        price: 0,
        categ: "Приборы",
        num: 10,
        totalprice: 0
    },
    {
        id: 11,
        name: "Приборы",
        price: 0,
        categ: "Приборы",
        num: 11,
        totalprice: 0
    },
    {
        id: 12,
        name: "Приборы",
        price: 0,
        categ: "Приборы",
        num: 12,
        totalprice: 0
    },
    {
        id: 13,
        name: "Приборы",
        price: 0,
        categ: "Приборы",
        num: 13,
        totalprice: 0
    },
    {
        id: 14,
        name: "Приборы",
        price: 0,
        categ: "Приборы",
        num: 14,
        totalprice: 0
    },
    {
        id: 15,
        name: "Приборы",
        price: 0,
        categ: "Приборы",
        num: 15,
        totalprice: 0
    },
    {
        id: 16,
        name: "Приборы",
        price: 0,
        categ: "Приборы",
        num: 16,
        totalprice: 0
    },
    {
        id: 17,
        name: "Приборы",
        price: 0,
        categ: "Приборы",
        num: 17,
        totalprice: 0
    },
    {
        id: 18,
        name: "Приборы",
        price: 0,
        categ: "Приборы",
        num: 18,
        totalprice: 0
    },
    {
        id: 19,
        name: "Приборы",
        price: 0,
        categ: "Приборы",
        num: 19,
        totalprice: 0
    },
    {
        id: 20,
        name: "Приборы",
        price: 0,
        categ: "Приборы",
        num: 20,
        totalprice: 0
    }

    ]}
    }
 

    render() { 
      return(
        <div>
            {this.state.tablewaresmass.map((el) => (<ButtonTableWares addTW={this.props.addTW} tablewaresmass={el} key={el.id} />))}
        </div>   
      )      
      
    }  
  }

  export default Tablewares



