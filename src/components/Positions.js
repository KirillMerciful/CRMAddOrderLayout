import React from 'react';
import Position from './Position';

class Positions extends React.Component {    
    render() {
      
      return(
      <div className='ButtonPositions'>
          {this.props.position.map((el) => (<Position AlertAdd={this.props.AlertAdd} onAdd2={this.props.onAdd2} onAdd={this.props.onAdd} OK={this.props.OK} PDK={this.props.PDK} position={el} key={el.id}/>))}
      </div>    
      )      
      
    }  
  }

  export default Positions