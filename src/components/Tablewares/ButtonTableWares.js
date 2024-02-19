import React from 'react';


class ButtonTableWares extends React.Component {    
    render() {
      if (this.props.tablewaresmass.num > 0)
      {
        return(
        <div>
            <button className="TablewaresButton" onClick={(() => {
                this.props.addTW(this.props.tablewaresmass)
            }
            )}
            >{this.props.tablewaresmass.num}</button>
        </div>    
        )   
      }   
      else
      {
        return(
        <div>
            <button className="TablewaresButton" onClick={(() => {
                this.props.addTW(this.props.tablewaresmass)
            }
            )}
            >Персон</button>
        </div>    
        )  
      }
      
    }  
  }

  export default ButtonTableWares