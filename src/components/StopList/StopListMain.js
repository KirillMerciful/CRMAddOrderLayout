import React from 'react';
import StopListCategories from './StopListCatrgories';
import StopPodCatPosition from './StopPodCatPosition';

class StopListMain extends React.Component {    
    render() {
      return(
      <div className='StopListDiv'>
          {this.props.cat.map((el) => (<StopListCategories   
          position={this.props.position} 
          cat={el} 
          StopListChekFunction={this.props.StopListChekFunction} 
          StopListChekFunctionCat={this.props.StopListChekFunctionCat} 
          key={el.id}/>))}
          
          {this.props.podcat.map((el) => (
            <StopPodCatPosition 
            StopListChekFunctionPodcat={this.props.StopListChekFunctionPodcat}
            cat={this.props.cat} 
            position={this.props.position} 
            podcat={el} 
            StopListChekFunction={this.props.StopListChekFunction} 
            StopListChekFunctionCat={this.props.StopListChekFunctionCat} 
            key={el.id}/>))}
      </div>    
      )
      
      
    }  
  }

  export default StopListMain