import React from 'react';


class SavedOrdDobPizza extends React.Component {    
    render() {
        if(this.props.orderDobPizzaSaved.idOrd === this.props.idOrd)
        return(
        <div className='SavedOrderPositionsTable'>
            <table>
                <tbody>
                    <tr>
                        <td className='SavedOrderPositionsTbName'>
                            {"+ " + this.props.orderDobPizzaSaved.name}
                        </td>
                        <td className='SavedOrderPositionsTbNum'>
                            {this.props.orderDobPizzaSaved.num}
                        </td>
                        <td className='SavedOrderPositionsTbPrice'>
                            {this.props.orderDobPizzaSaved.dkprice !== undefined ? this.props.pdkon === 0 ? this.props.orderDobPizzaSaved.price + " руб. " : this.props.orderDobPizzaSaved.dkprice + " руб. " : this.props.orderDobPizzaSaved.price + " руб. "}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        )  
      
      
    }  
  }

  export default SavedOrdDobPizza