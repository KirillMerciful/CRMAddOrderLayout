import React from 'react';
import { IoRestaurantOutline, IoTimeOutline, IoAlertCircleOutline, IoCloseCircleOutline, IoCheckmarkCircleOutline } from "react-icons/io5";
import { SlPhone } from "react-icons/sl";
import { BsRocketTakeoff } from "react-icons/bs";
import { LuChefHat } from "react-icons/lu";


class UsedStatusContainerForEditDropDown extends React.Component {    
    constructor(props) {
        super(props)
        this.state = {
            OpenDropDownStatus: false,
        }
    } 
    render() {
        
        return(
        <div 
        className='EditUsedStatusMainDiv'
        >
            <div
            className='EditUsedStatusLeftDiv'
            >
            {this.props.UsedStatus.Status === "New" ?
            
                <div className='EditUsedStatusIconDiv'>
                    <IoAlertCircleOutline className='EditUsedOrdStatusIcon'/>
                </div>
            
            
            :this.props.UsedStatus.Status === "Processing" ? 
            
                <div className='EditUsedStatusIconDiv'>
                    <SlPhone className='EditUsedOrdStatusIcon'/>
                </div>
            
            
            :this.props.UsedStatus.Status === "NotProcessing" ? 
            
                <div className='EditUsedStatusIconDiv'>
                    <SlPhone className='EditUsedOrdStatusIcon NotProcessing'/>
                </div>
            
            
            :this.props.UsedStatus.Status === "Cancelled" ? 
                
                    <div className='EditUsedStatusIconDiv'>
                        <IoCloseCircleOutline className='EditUsedOrdStatusIcon'/>
                    </div>
                    
                
                :this.props.UsedStatus.Status === "Timeout" ? 
               
                    <div className='EditUsedStatusIconDiv'>
                        <IoTimeOutline className='EditUsedOrdStatusIcon'/>
                    </div>
                    
                :this.props.UsedStatus.Status === "Cooking" ? 
               
                    <div className='EditUsedStatusIconDiv'>
                        <LuChefHat className='EditUsedOrdStatusIcon'/>
                    </div>
                    
                :this.props.UsedStatus.Status === "Cooked" ?
                
                    <div className='EditUsedStatusIconDiv'>
                        <IoRestaurantOutline className='EditUsedOrdStatusIcon'/>
                    </div>
                    
                :this.props.UsedStatus.Status === "Delivery" ? 
                
                    <div className='EditUsedStatusIconDiv'>
                        <BsRocketTakeoff className='EditUsedOrdStatusIcon'/>
                    </div>
                    
                :
                    <div className='EditUsedStatusIconDiv'>
                        <IoCheckmarkCircleOutline className='EditUsedOrdStatusIcon'/>
                    </div>
                }

                    
                        <div
                        className='EditUsedStatusDropDownText'
                        >
                            {this.props.UsedStatus.Status === "New" && "Новый:"}
                            {this.props.UsedStatus.Status === "Processing" && "В обработке:"}
                            {this.props.UsedStatus.Status === "NotProcessing" && "Недозвон:"} 
                            {this.props.UsedStatus.Status === "Cancelled" && "Списан:"} 
                            {this.props.UsedStatus.Status === "Timeout" && "Отложенный:"} 
                            {this.props.UsedStatus.Status === "Cooking" && "Готовим:"} 
                            {this.props.UsedStatus.Status === "Cooked" && "Готов:"} 
                            {this.props.UsedStatus.Status === "Delivery" && "В пути:"}
                            {this.props.UsedStatus.Status === "Completed" && "Выполнен:"}
                        </div>
                </div>

                        <div
                        className='UsedStatusDropDownTime'
                        >
                            {this.props.UsedStatus.Hour + ":" + this.props.UsedStatus.Minutes}
                            <div
                            className='UsedStatusDropDownDate'
                            >
                                {this.props.UsedStatus.Date + "." + this.props.UsedStatus.Month + "." + this.props.UsedStatus.Year}
                            </div>
                        </div>
                    
                
                
        </div>
        )  
        
      
      
    }  
  }

  export default UsedStatusContainerForEditDropDown