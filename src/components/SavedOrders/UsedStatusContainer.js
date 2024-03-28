import React from 'react';
import { IoRestaurantOutline, IoTimeOutline, IoAlertCircleOutline, IoCloseCircleOutline, IoCheckmarkCircleOutline } from "react-icons/io5";
import { SlPhone } from "react-icons/sl";
import { BsRocketTakeoff } from "react-icons/bs";
import { LuChefHat } from "react-icons/lu";


class UsedStatusContainer extends React.Component {    
    constructor(props) {
        super(props)
        this.state = {
            OpenDropDownStatus: false,
        }
    } 
    render() {
        
        return(
        <div 
        className='UsedStatusMainDiv'
        tabIndex={0}
        onClick={() => {
            this.setState({
                OpenDropDownStatus: !this.state.OpenDropDownStatus
            })
        }}
        onBlur={() => {
            this.setState({
                OpenDropDownStatus: false
            })
        }}
        >
            {this.props.UsedStatus.Status === "New" ?
            
                <div className='UsedStatusIconDiv'>
                    <IoAlertCircleOutline className='UsedOrdStatusIcon'/>
                </div>
            
            
            :this.props.UsedStatus.Status === "Processing" ? 
            
                <div className='UsedStatusIconDiv'>
                    <SlPhone className='UsedOrdStatusIcon'/>
                </div>
            
            
            :this.props.UsedStatus.Status === "NotProcessing" ? 
            
                <div className='UsedStatusIconDiv'>
                    <SlPhone className='UsedOrdStatusIcon NotProcessing'/>
                </div>
            
            
            :this.props.UsedStatus.Status === "Cancelled" ? 
                
                    <div className='UsedStatusIconDiv'>
                        <IoCloseCircleOutline className='UsedOrdStatusIcon'/>
                    </div>
                    
                
                :this.props.UsedStatus.Status === "Timeout" ? 
               
                    <div className='UsedStatusIconDiv'>
                        <IoTimeOutline className='UsedOrdStatusIcon'/>
                    </div>
                    
                :this.props.UsedStatus.Status === "Cooking" ? 
               
                    <div className='UsedStatusIconDiv'>
                        <LuChefHat className='UsedOrdStatusIcon'/>
                    </div>
                    
                :this.props.UsedStatus.Status === "Cooked" ?
                
                    <div className='UsedStatusIconDiv'>
                        <IoRestaurantOutline className='UsedOrdStatusIcon'/>
                    </div>
                    
                :this.props.UsedStatus.Status === "Delivery" ? 
                
                    <div className='UsedStatusIconDiv'>
                        <BsRocketTakeoff className='UsedOrdStatusIcon'/>
                    </div>
                    
                :
                    <div className='UsedStatusIconDiv'>
                        <IoCheckmarkCircleOutline className='UsedOrdStatusIcon'/>
                    </div>
                }

                {this.state.OpenDropDownStatus === true &&
                <div
                className='UsedStatusDropDownMainDiv'
                >
                    <div
                    className='UsedStatusDropDownMainContent'
                    >
                        <div
                        className='UsedStatusDropDownText'
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

                        <div
                        className='UsedStatusDropDownTime'
                        >
                            {this.props.UsedStatus.Hour + ":" + this.props.UsedStatus.Minutes}
                        </div>
                    </div>
                </div>
                }
        </div>
        )  
        
      
      
    }  
  }

  export default UsedStatusContainer