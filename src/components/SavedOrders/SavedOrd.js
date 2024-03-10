import React from 'react';
import { IoCloseOutline } from "react-icons/io5";
import SavedOrdStatus from './SavedOrdStatus';
import ContainerStatusOrd from './ContainerStatusOrd';
import SavedOrdDeletedWindow from './SavedOrdDeletedWindow';
import SavedAdditions from './SavedAdditions';


class SavedOrd extends React.Component {   
    constructor(props) {
        super(props)
        this.state = {
            OpenDropDownStatus: false,
            OpenDropDownDelete: false
        }
        this.CloseDropDownStatus = this.CloseDropDownStatus.bind(this)
        this.CloseDeleteSavedOrdDropDown = this.CloseDeleteSavedOrdDropDown.bind(this)
    } 
    render() {
        return(
        <div>
            <div className='SavedOrdDiv'>
                <div className='SavedOrderHead'>
                    {this.props.Saved.orderDetal[0].TimeSave + " (№ " + this.props.Saved.SavedIdOrd + ")"}
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
                
            <div className='SavedOrderBody'>
            <div 
                tabIndex={0}
                className={this.props.Saved.orderDetal[0].Status === "New" ? 'SavedOrdDivStatus New' :
                this.props.Saved.orderDetal[0].Status === "Processing" ? 'SavedOrdDivStatus Processing' :
                this.props.Saved.orderDetal[0].Status === "NotProcessing" ? 'SavedOrdDivStatus NotProcessing' :
                this.props.Saved.orderDetal[0].Status === "Cancelled" ? 'SavedOrdDivStatus Cancelled' :
                this.props.Saved.orderDetal[0].Status === "Timeout" ? 'SavedOrdDivStatus Timeout' :
                this.props.Saved.orderDetal[0].Status === "Cooking" ? 'SavedOrdDivStatus Cooking' :
                this.props.Saved.orderDetal[0].Status === "Cooked" ? 'SavedOrdDivStatus Cooked':
                this.props.Saved.orderDetal[0].Status === "Delivery" ? 'SavedOrdDivStatus Delivery' :
                'SavedOrdDivStatus Completed'
            }
                onClick={(() => {
                    this.setState({
                        OpenDropDownStatus: !this.state.OpenDropDownStatus
                    })
                })}
                onBlur={(() => {
                    setTimeout(() => {
                        this.CloseDropDownStatus()
                    }, 100)
                    
                })}
                >
                    <SavedOrdStatus 
                    Saved={this.props.Saved}
                    />
                </div>
                {this.state.OpenDropDownStatus === true && <div className='ContainerStatusOrdMainDiv'>
                        <ContainerStatusOrd 
                        Saved={this.props.Saved}
                        CloseDropDownStatus={this.CloseDropDownStatus}
                        ChangeStatusSavedOrd={this.props.ChangeStatusSavedOrd}
                        
                        />
                    </div>}
                <div className='SavedOrderPositions'>
                    {this.props.Saved.orderPosSaved.map((el) => 
                    
                    <div className='SavedPosGroup'>
                        <div className='SavedOrderPositionsTable'>
                        <table >
                            <tbody>
                                <tr>
                                    <td className='SavedOrderPositionsTbName'>
                                        {el.categ === "Пицца" ? el.Proverka36 !== true ? el.name + " 30см" : el.name + " 36см" : el.name }
                                    </td>
                                    <td className='SavedOrderPositionsTbNum'>
                                        {el.num}
                                    </td>
                                    <td className='SavedOrderPositionsTbPrice'>
                                    {el.Proverka36 === true ? this.props.Saved.orderDetal[0].pdkon === 0 ? el.price36 + " руб. " : el.dkprice36 + " руб. " : this.props.Saved.orderDetal[0].pdkon === 0 ? el.price + " руб. " : el.dkprice + " руб. "}
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        </div>

                    {this.props.Saved.orderAdditionSaved.map((a) => 
                        <SavedAdditions 
                        pdkon={this.props.Saved.orderDetal[0].pdkon}
                        orderAdditionSaved={a}
                        key={a.id + " " + a.idOrd}
                        idOrd={el.idOrd}
                        />)}
                    
                        
                    </div>
                    
                    )}
                    {this.props.Saved.orderDetal[0].Tablewares !== 0 && <div>
                    <table className='SavedOrderPositionsTable'>
                            <tbody>
                                <tr>
                                    <td className='SavedOrderPositionsTbName'>
                                        Приборы
                                    </td>
                                    <td className='SavedOrderPositionsTbNum'>
                                        {this.props.Saved.orderDetal[0].Tablewares}
                                    </td>
                                    <td className='SavedOrderPositionsTbPrice'>
                                        0 руб.
                                    </td>
                                </tr>
                            </tbody>
                    </table>
                    </div>}

                </div>

                <div className='SavedOrderTotalSum'>
                        {this.props.Saved.orderDetal[0].totalSumSale + " руб."}
                </div>
                <div className='SaveOrderSale'>
                    {this.props.Saved.orderDetal[0].SaleInp > 0 ? this.props.Saved.orderDetal[0].SaleInp + " руб." : this.props.Saved.orderDetal[0].TotalSale !== 0 && Math.round(this.props.Saved.orderDetal[0].TotalSale) + "%"}
                </div>

                <div className='SavedOrderCity'>
                    <table>
                        <tbody>
                            <tr className="SavedOrderCityName">
                                <td >
                                    {this.props.Saved.orderCity[0].city}
                                </td>
                                </tr>
                                <tr className="SavedOrderCityStreet">
                                <td>
                                    {this.props.Saved.orderCity[0].street + " " + this.props.Saved.orderCity[0].house}
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className='SavedOrderAddress'>
                    <div className='SavedOrderAddressTableDiv'>
                    <table className='SavedOrderAddressTable'>
                        <tbody>
                            <tr>
                                {this.props.Saved.orderAddress[0].street !== "" &&
                                    <td className='SavedOrderAddressStreet'>
                                        {this.props.Saved.orderAddress[0].street + ", "}
                                    </td>
                                }
                                {this.props.Saved.orderAddress[0].house !== "" &&
                                    <td className='SavedOrderAddressHouse'>
                                        {this.props.Saved.orderAddress[0].house + ", "}
                                    </td>
                                }
                                {this.props.Saved.orderAddress[0].flat !== "" &&
                                    <td className='SavedOrderAddressFlat'>
                                        {this.props.Saved.orderAddress[0].flat}
                                    </td>
                                }
                                {this.props.Saved.orderAddress[0].comment !== "" &&
                                    <td className='SavedOrderAddressComment'>
                                        {" (" + this.props.Saved.orderAddress[0].comment + ") "}
                                    </td>
                                }
                            </tr>
                        </tbody>
                    </table>
                    </div>    
                </div>

                <div className='SavedOrderPhoneNum'>
                    {this.props.Saved.orderAddress[0].PhoneNum}
                </div>
                
                <div className='DelteSavedOrdIconDiv'>
                    <IoCloseOutline 
                    className='DelteSavedOrdIcon'
                    onClick={(() => {
                        this.setState({
                            OpenDropDownDelete: true
                        })
                    })}/>
                </div>
                
                
            </div>
            
            </div>    

            {this.state.OpenDropDownDelete === true && 
            <SavedOrdDeletedWindow
            SavedIdOrd={this.props.Saved.SavedIdOrd}
            Saved={this.props.Saved}
            CloseDeleteSavedOrdDropDown={this.CloseDeleteSavedOrdDropDown}
            DeleteSavedOrd={this.props.DeleteSavedOrd}
            />
            }
        </div>
        )  
      
      
    }  
    CloseDropDownStatus(){
        this.setState({
            OpenDropDownStatus: false
        })
    }

    CloseDeleteSavedOrdDropDown(){
        this.setState({
            OpenDropDownDelete: false
        })
    }
  }

  export default SavedOrd