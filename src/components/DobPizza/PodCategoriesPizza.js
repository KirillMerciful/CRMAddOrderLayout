import React from 'react';
import PodCategPizza from './PodCategPizza';

class PodCategoriesPizza extends React.Component {    

    render() {
      return(
      <div className='DobavkiButtons'>
          {this.props.position.map((el) => (<PodCategPizza AlertAdd={this.props.AlertAdd} AddD={this.props.AddD} idOrd={this.props.idOrd} podcat={el} key={el.id}/>))}
      </div>    
      )
      
      
    }  
  }

  export default PodCategoriesPizza