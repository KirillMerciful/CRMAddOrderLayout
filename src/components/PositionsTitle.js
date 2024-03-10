import React from 'react';

class PositionsTitle extends React.Component {    

 

    render() {     
      return(
        <div className="PosTitle">
        <table className="op2">
                  <tbody>                        
                      <tr>
                      <td className="titleText"
                      onClick={(() => {
                        this.props.PriceCheck()
                    })}
                      >Цены ЯЕ:</td>                  
                      <td className="op1"><label className="switch">
                      <input 
                      checked={this.props.pdkon === 1 ? true : false}
                      type="checkbox" 
                      onChange={(() => {
                          this.props.PriceCheck()
                      })}/>
                      <span className="slider round"></span>
                      </label>
                      </td>
                      
                      </tr>
              </tbody>
              </table>

    </div>   
      )      
      
    }  
  }

  export default PositionsTitle