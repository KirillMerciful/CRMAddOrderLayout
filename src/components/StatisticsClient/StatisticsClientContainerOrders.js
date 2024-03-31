import React from 'react';
import SavedOrdStatus from '../SavedOrders/SavedOrdStatus';
import StatisticsClienContainerAdditions from './StatisticsClienContainerAdditions';


class StatisticsClientContainerOrders extends React.Component {   
    render() {
        return(
        <div>
            <div className='StatisticsClientOrderDiv'>
                <div className='StatisticsClientOrderHead'>
                    <label className='TimeSaveTextOnStatisticsClient'>{this.props.Saved.orderDetal[0].TimeSave[0].Hour + ":" + this.props.Saved.orderDetal[0].TimeSave[0].Minutes}</label>
                    <label className='DateSaveAndNumberTextOnStatisticsClient'>{' ' + this.props.Saved.orderDetal[0].DateSave[0].Date + "." + this.props.Saved.orderDetal[0].DateSave[0].Mounth + "." + this.props.Saved.orderDetal[0].DateSave[0].Year + " (№ " + this.props.Saved.SavedIdOrd + ")"}</label>
                    {this.props.Saved.orderDetal[0].TypeOrder === "delivery" ? 
                    <div  className='MarkDelivery'>
                        Доставка
                    </div> 
                    :<div className='MarkTakeaway'>
                        Вынос
                    </div>
                    }
                    {this.props.Saved.orderDetal[0].pdkon === 1 && <div className='MarkYF'>{this.props.Saved.orderDetal[0].pdkon === 1 && "ЯЕ"}</div>}
                  
                </div>
                
            <div className='StatisticsClientOrderBody'>
            <div 
                tabIndex={0}
                className={this.props.Saved.orderDetal[0].Status === "New" ? 'StatisticsClientStatus New' :
                this.props.Saved.orderDetal[0].Status === "Processing" ? 'StatisticsClientStatus Processing' :
                this.props.Saved.orderDetal[0].Status === "NotProcessing" ? 'StatisticsClientStatus NotProcessing' :
                this.props.Saved.orderDetal[0].Status === "Cancelled" ? 'StatisticsClientStatus Cancelled' :
                this.props.Saved.orderDetal[0].Status === "Timeout" ? 'StatisticsClientStatus Timeout' :
                this.props.Saved.orderDetal[0].Status === "Cooking" ? 'StatisticsClientStatus Cooking' :
                this.props.Saved.orderDetal[0].Status === "Cooked" ? 'StatisticsClientStatus Cooked':
                this.props.Saved.orderDetal[0].Status === "Delivery" ? 'StatisticsClientStatus Delivery' :
                'StatisticsClientStatus Completed'
            }
                >
                    <SavedOrdStatus
                    Saved={this.props.Saved}
                    />
                </div>
                
                <div className='StatisticsClientOrderPositions'>
                    {this.props.Saved.orderPosSaved.map((el) => 
                    
                    <div className='StatisticsClientPosGroup'>
                        <div className='StatisticsClientOrderPositionsTable'>
                        <table>
                            <tbody>
                                    <td className='StatisticsClientOrderPositionsTbName'>
                                        {el.categ === "Пицца" ? el.Proverka36 !== true ? el.name + " 30см" : el.name + " 36см" : el.name }
                                    </td>
                                    <td className='StatisticsClientOrderPositionsTbNum'>
                                        {el.num}
                                    </td>
                                    <td className='StatisticsClientOrderPositionsTbPrice'>
                                    {el.Proverka36 === true ? this.props.Saved.orderDetal[0].pdkon === 0 ? el.price36 + " руб. " : el.dkprice36 + " руб. " : this.props.Saved.orderDetal[0].pdkon === 0 ? el.price + " руб. " : el.dkprice + " руб. "}
                                    </td>
                            </tbody>
                        </table>
                        </div>

                    {this.props.Saved.orderAdditionSaved.map((a) => 
                        <StatisticsClienContainerAdditions
                        pdkon={this.props.Saved.orderDetal[0].pdkon}
                        orderAdditionSaved={a}
                        key={a.id + " " + a.idOrd}
                        idOrd={el.idOrd}
                        />)}
                    
                        
                    </div>
                    
                    )}
                    {this.props.Saved.orderDetal[0].Tablewares !== 0 && <div>
                    <table className='StatisticsClientOrderPositionsTable'>
                            <tbody>
                                <tr>
                                    <td className='StatisticsClientOrderPositionsTbName'>
                                        Приборы
                                    </td>
                                    <td className='StatisticsClientOrderPositionsTbNum'>
                                        {this.props.Saved.orderDetal[0].Tablewares}
                                    </td>
                                    <td className='StatisticsClientOrderPositionsTbPrice'>
                                        0 руб.
                                    </td>
                                </tr>
                            </tbody>
                    </table>
                    </div>}

                </div>

                <div className='StatisticsClientOrderTotalSum'>
                        {this.props.Saved.orderDetal[0].totalSumSale + " руб."}
                </div>
                <div className='StatisticsClientOrderSale'>
                    {this.props.Saved.orderDetal[0].SaleInp > 0 ? this.props.Saved.orderDetal[0].SaleInp + " руб." : this.props.Saved.orderDetal[0].TotalSale !== 0 && Math.round(this.props.Saved.orderDetal[0].TotalSale) + "%"}
                </div>

                <div className='StatisticsClientOrderCity'>
                    <table>
                        <tbody>
                            <tr className="StatisticsClientOrderCityName">
                                <td >
                                    {this.props.Saved.orderCity[0].city}
                                </td>
                                </tr>
                                <tr className="StatisticsClientOrderCityStreet">
                                <td>
                                    {this.props.Saved.orderCity[0].streetType + this.props.Saved.orderCity[0].street + " " + this.props.Saved.orderCity[0].house}
                                </td>
                            </tr>
                            
                            
                        </tbody>
                    </table>
                </div>

                <div className='StatisticsClientOrderAddress'>
                    <div className='StatisticsClientOrderAddressTableDiv'>
                    <div
                    className='StatisticsClientOrderAddressTable'>
                                {this.props.Saved.orderAddress[0].street !== "" &&
                                    <div className='StatisticsClientOrderAddressStreet'>
                                        {this.props.Saved.orderAddress[0].street}
                                    </div>
                                }
                                {this.props.Saved.orderAddress[0].house !== "" &&
                                    <div className='StatisticsClientOrderAddressHouse'>
                                        {", " + this.props.Saved.orderAddress[0].house}
                                    </div>
                                }
                                {this.props.Saved.orderAddress[0].flat !== "" &&
                                    <div className='StatisticsClientOrderAddressFlat'>
                                        {", " + this.props.Saved.orderAddress[0].flat}
                                    </div>
                                }
                                {this.props.Saved.orderAddress[0].comment !== "" &&
                                    <div className='StatisticsClientOrderAddressComment'>
                                        {" (" + this.props.Saved.orderAddress[0].comment + ") "}
                                    </div>
                                }

                    </div>
                            <div className='MarkButtonOnSaveOrderMainDiv'>
                            <button className='MarkButtonOnSaveOrder'>
                                                {this.props.Saved.orderDetal[0].Payment}
                                            </button>
                                {this.props.Saved.orderMarksSaved.map((el) => 
                                    el.Active === true &&
                                    (
                                            <button className='MarkButtonOnSaveOrder'>
                                                {el.name}
                                            </button>
                                    ))}
                            </div>
                    </div>    
                </div>

                <div className='StatisticsClientOrderPhoneNum'>
                    {this.props.Saved.orderAddress[0].PhoneNum}
                </div>
                
                
                
            </div>
            
            </div>    

        </div>
        )  
      
      
    }  
   
  }

  export default StatisticsClientContainerOrders