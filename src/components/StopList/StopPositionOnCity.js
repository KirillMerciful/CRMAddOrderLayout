import React from 'react';

class StopPositionOnCity extends React.Component {    
    render() {
      if(this.props.OpenStopCateg === true)
        if(this.props.StopList.idCity === this.props.City.idCity)
          if(this.props.StopCat.name === this.props.StopList.categ)
      return(
      <div className='StopListPositionName'>
          <input className='CheckBoxStopPosition'type="checkbox" checked={this.props.StopList.CheckStopList} onChange={(() => {
        this.props.StopListChekFunctionOnCity(this.props.StopList,  this.props.City.idCity)
      })}></input>
          <div
          className={this.props.StopList.CheckStopList === false ? 'StopListPositionNameText' : 'StopListPositionNameText Stoped'}
          onClick={(() => {
        this.props.StopListChekFunctionOnCity(this.props.StopList,  this.props.City.idCity)
      })}>{this.props.StopList.name}</div>
         
      </div>    
      )

    }  
  }

  export default StopPositionOnCity


  