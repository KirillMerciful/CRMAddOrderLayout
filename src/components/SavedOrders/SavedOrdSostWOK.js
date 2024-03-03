import React from 'react';


class SavedOrdSostWOK extends React.Component {    
    render() {
        if(this.props.orderSostWOKSaved.idOrd === this.props.idOrd)
        return(
        <div className='SavedOrderPositionsTable'>
            <table>
                <tbody>
                    <tr>
                        <td className='SavedOrderPositionsTbName'>
                            {"+ " + this.props.orderSostWOKSaved.name}
                        </td>
                        <td className='SavedOrderPositionsTbNum'>
                            {this.props.orderSostWOKSaved.num}
                        </td>
                        <td className='SavedOrderPositionsTbPrice'>
                            {this.props.orderSostWOKSaved.dkprice !== undefined ? this.props.pdkon === 0 ? this.props.orderSostWOKSaved.price + " руб. " : this.props.orderSostWOKSaved.dkprice + " руб. " : this.props.orderSostWOKSaved.price + " руб. "}
                        </td>
                    </tr>
                </tbody>
            </table>
        
        </div>
        )  
      
      
    }  
  }

  export default SavedOrdSostWOK