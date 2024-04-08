import React from 'react';

class PositionAddition extends React.Component {    
    render() {
      if(this.props.position.categ === this.props.cat.name && this.props.position.CanBeAddition !== false)
      return(
        <div>
      <button 
      className={this.props.position.CheckStopList === false ? 'ButtonAddition' : 'ButtonAddition unactive'}
      onClick={(() => {
        if(this.props.position.CheckStopList === false)
        {
          if(this.props.position.categ === "ВОК")
          {
            this.props.EditWOKNoodles(this.props.position, this.props.orderPosition.idOrd)
          }
          else
          {
          this.props.AddAdditionFunc(this.props.position, this.props.orderPosition.idOrd, this.props.orderPosition.num)
          }
        }
        else
        {
          this.props.AlertAdd("Stop")
        }
      })}
      >
        {this.props.position.name}
      </button>    
      </div>
      )
      
      
    }  
  }

  export default PositionAddition