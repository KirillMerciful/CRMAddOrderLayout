import React from 'react';

class StopListPosition extends React.Component {  
    
  

    render() {
      if(this.props.OpenStopCateg === true)
          if(this.props.cat.name === this.props.position.categ)
      return(
      <div className='StopListPositionName'>
          <input className='CheckBoxStopPosition'type="checkbox" checked={this.props.position.CheckStopList} onChange={(() => {
        this.props.StopListChekFunction(this.props.position)
      })}></input>
          <div onClick={(() => {
        this.props.StopListChekFunction(this.props.position)
      })}>{this.props.position.name}</div>
         
      </div>    
      )
    
    } 
}  
  

  export default StopListPosition