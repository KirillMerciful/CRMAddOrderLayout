import React from 'react';

class PositionsTitle extends React.Component {    

 

    render() {     
      return(
        <div className="PosTitle">
        <table className="op2">
                  <tbody>                        
                      <tr>
                      <td className="titleText">Цены ЯЕ:</td>                  
                      <td className="op1"><label className="switch">
                      <input type="checkbox" onChange={(() => {
                          this.props.pCheck()
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