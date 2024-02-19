import React from 'react';
import Categ from './Categ';

class Categories extends React.Component {    
    render() {
      return(
      <div>
          {this.props.cat.map((el) => (<Categ EdC={this.props.EdC} cat={el} key={el.id}/>))}
      </div>    
      )
      
      
    }  
  }

  export default Categories