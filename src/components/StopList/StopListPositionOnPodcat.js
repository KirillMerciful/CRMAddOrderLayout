import React from 'react';

class StopListPositionOnPodcat extends React.Component {  
    
  

    render() {
      if(this.props.OpenStopCateg === true)
          if(this.props.podcat.name === this.props.StopList.podcat)
      return(
      <div 
      className='StopListPositionName' 
      onClick={(() => {
        this.props.StopListChekFunction(this.props.position)
      })}>
          <input className='CheckBoxStopPosition'type="checkbox" checked={this.props.position.CheckStopList} ></input>
          {this.props.position.name}
         
      </div>    
      )
   
    } 
}  
  

  export default StopListPositionOnPodcat