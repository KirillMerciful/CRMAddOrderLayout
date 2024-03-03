import React from 'react';


class ButtonTableWares extends React.Component {    
    render() {
      
        return(
        <div>
            <div className="TablewaresButton" onClick={(() => {
                this.props.addTW(this.props.tablewaresmass)
            }
            )}
            >{this.props.tablewaresmass.num > 0 ? this.props.tablewaresmass.num : "Персон"}</div>
        </div>    
        )   
      
    }  
  }

  export default ButtonTableWares