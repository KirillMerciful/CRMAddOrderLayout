import React from 'react';

class TablewaresAdd extends React.Component {    

    render() {    
        if (this.props.orderTablewares.id > 0)
        return (
            <div className="OrdTablewaresTB">
              <table>
                <tbody>
                  <tr>
                    <td className="OrdTablewaresName">{this.props.orderTablewares.name}</td>

                    <td className="OrdTablewaresNum">
                        {this.props.orderTablewares.num}
                    
                    </td>
                    <td className="OrdTablewaresPrice">
                      {
                        this.props.orderTablewares.price + " руб." 
                      }
                    </td>
                    <td className="OrdTablewaresSum">
                      {
                        this.props.orderTablewares.totalprice + " руб." 
                      }
                    </td>
                  </tr>
                </tbody>
              </table>
              
            </div>
          ) 
    }  
  }

  export default TablewaresAdd