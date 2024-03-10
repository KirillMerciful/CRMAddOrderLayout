import React from 'react';

class StopListPositionOnPodcatOnCity extends React.Component {  
    
  

    render() {
      if(this.props.OpenStopCateg === true)
        if(this.props.StopList.idCity === this.props.City.idCity)
          if(this.props.StopPodCat.name === this.props.StopList.podcat)
      return(
      <div className='StopListPositionName'>
          <input className='CheckBoxStopPosition'type="checkbox" checked={this.props.StopList.CheckStopList} onChange={(() => {
        this.props.StopListChekFunctionOnCity(this.props.StopList, this.props.City.idCity)
      })}></input>
          <span 
          className={this.props.StopList.CheckStopList === false ? 'StopListPositionNameText' : 'StopListPositionNameText Stoped'}
          onClick={(() => {
        this.props.StopListChekFunctionOnCity(this.props.StopList, this.props.City.idCity)
      })}>{this.props.StopList.name}</span>
         
      </div>    
      )
   
    } 
}  
  

  export default StopListPositionOnPodcatOnCity