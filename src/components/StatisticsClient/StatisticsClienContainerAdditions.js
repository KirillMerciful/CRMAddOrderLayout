import React from 'react';


class StatisticsClienContainerAdditions extends React.Component {    
    render() {
        if(this.props.orderAdditionSaved.idOrd === this.props.idOrd)
        return(
        <div className='StatisticsClientOrderPositionsTable'>
            <table>
                <tbody>
                    <tr>
                        <td className='StatisticsClientOrderPositionsTbName'>
                            {"+ " + this.props.orderAdditionSaved.name}
                        </td>
                        <td className='StatisticsClientOrderPositionsTbNum'>
                            {this.props.orderAdditionSaved.num}
                        </td>
                        <td className='StatisticsClientOrderPositionsTbPrice'>
                            {this.props.orderAdditionSaved.dkprice !== undefined ? this.props.pdkon === 0 ? this.props.orderAdditionSaved.price + " руб. " : this.props.orderSostWOKSaved.dkprice + " руб. " : this.props.orderAdditionSaved.price + " руб. "}
                        </td>
                    </tr>
                </tbody>
            </table>
        
        </div>
        )  
      
      
    }  
  }

  export default StatisticsClienContainerAdditions