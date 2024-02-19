import React from 'react';
import StopAlert from './StopAlert';

class StopAlerts extends React.Component {    
    render() {
      
      return(
      <div className="DivStopAlerts">
          {this.props.AlertCheck.map((el) => (<StopAlert AllertClick={this.props.AllertClick} AlertCheck={el} key={el.Check}/>))}
      </div>    
      )      
      
    }  
  }

  export default StopAlerts