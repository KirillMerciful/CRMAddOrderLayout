import React from 'react';
import { IoCloseOutline } from "react-icons/io5";
import SavedOrdStatus from './SavedOrdStatus';
import ContainerStatusOrd from './ContainerStatusOrd';
import SavedOrdDeletedWindow from './SavedOrdDeletedWindow';
import SavedAdditions from './SavedAdditions';
import UsedStatusContainer from './UsedStatusContainer';


class SavedOrd extends React.Component {   
    constructor(props) {
        super(props)
        this.state = {
            OpenDropDownStatus: false,
            OpenDropDownDelete: false,
            TimeMoment: 
            [
                {
                    Hour: "",
                    Minutes: ""
                }
            ],
        }
        this.CloseDropDownStatus = this.CloseDropDownStatus.bind(this)
        this.CloseDeleteSavedOrdDropDown = this.CloseDeleteSavedOrdDropDown.bind(this)
    } 
    render() {
        return(
        <div>
            <div className='SavedOrdDiv'>
                <div className='SavedOrderHead'>
                    <label className='TimeSaveTextOnSavedOrd'>{this.props.Saved.orderDetal[0].TimeSave[0].Hour + ":" + this.props.Saved.orderDetal[0].TimeSave[0].Minutes}</label>
                    <label className='DateSaveAndNumberTextOnSavedOrd'>{' ' + this.props.Saved.orderDetal[0].DateSave[0].Date + "." + this.props.Saved.orderDetal[0].DateSave[0].Mounth + "." + this.props.Saved.orderDetal[0].DateSave[0].Year + " (№ " + this.props.Saved.SavedIdOrd + ")"}</label>
                    {this.props.Saved.orderDetal[0].TypeOrder === "delivery" ? 
                    <div  className='MarkDelivery'>
                        Доставка
                    </div> 
                    :<div className='MarkTakeaway'>
                        Вынос
                    </div>
                    }
                    {this.props.Saved.orderDetal[0].pdkon === 1 && <div className='MarkYF'>{this.props.Saved.orderDetal[0].pdkon === 1 && "ЯЕ"}</div>}
                 
                  
                  {this.props.UsedStatus.map((el) => 
                        el.SavedIdOrd === this.props.Saved.SavedIdOrd &&
                        <div
                        className='UsedStatusGlobalDiv'
                        >
                            <UsedStatusContainer 
                            UsedStatus={el}
                            />
                        </div>
                  )}
                    
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
                                    {this.props.Saved.orderCity[0].streetType + this.props.Saved.orderCity[0].street + " " + this.props.Saved.orderCity[0].house}
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
                                        {this.props.Saved.orderAddress[0].street}
                                    </td>
                                }
                                {this.props.Saved.orderAddress[0].house !== "" &&
                                    <td className='SavedOrderAddressHouse'>
                                        {", " + this.props.Saved.orderAddress[0].house}
                                    </td>
                                }
                                {this.props.Saved.orderAddress[0].flat !== "" &&
                                    <td className='SavedOrderAddressFlat'>
                                        {", " + this.props.Saved.orderAddress[0].flat}
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
                
                <div 
                className={this.props.Saved.orderDetal[0].DateSave[0].Date === this.props.TodayDate.Date ?
                    this.props.Saved.orderDetal[0].DateSave[0].Mounth === this.props.TodayDate.Mounth ?
                        this.props.Saved.orderDetal[0].DateSave[0].Year === this.props.TodayDate.Year ?
                            this.props.Saved.orderDetal[0].Status !== "Completed" ?
                                this.props.Saved.orderDetal[0].Status !== "Cancelled" ?
                                    this.props.Saved.orderDetal[0].Status !== "NotProcessing" ?
                                        (parseInt(this.state.TimeMoment[0].Hour)* 60 + parseInt(this.state.TimeMoment[0].Minutes)) > (parseInt(this.props.Saved.orderDetal[0].MaxTime[0].Hour)*60 + parseInt(this.props.Saved.orderDetal[0].MaxTime[0].Minutes)) ? 'MaxTimeOnSavedOrderDiv Alerted' 
                                        : "MaxTimeOnSavedOrderDiv"
                                    : "MaxTimeOnSavedOrderDiv"
                                : "MaxTimeOnSavedOrderDiv"
                            : "MaxTimeOnSavedOrderDiv"
                        : "MaxTimeOnSavedOrderDiv"
                    : "MaxTimeOnSavedOrderDiv"
                : "MaxTimeOnSavedOrderDiv"
                }
                >
                    
                        <div 
                        className='MaxTimeOnSavedOrderText'
                        >
                        Максимальное время: 
                        </div>
                        <div
                        className='MaxTimeOnSavedOrderTime'
                        >
                        {this.props.Saved.orderDetal[0].MaxTime[0].Hour + ":" + this.props.Saved.orderDetal[0].MaxTime[0].Minutes}
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
            DeleteSavedOrdForInp={this.props.DeleteSavedOrdForInp}
            />
            }
        </div>
        )  
      
      
    }  
    componentDidMount(){
        var today = new Date()
        this.setState({
            TimeMoment: [
                {
                    Hour: String(today.getHours()).padStart(2 , "0"),
                    Minutes: String(today.getMinutes()).padStart(2 , "0"),
                }
            ]
        })
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