import React from 'react';
import { IoRestaurantOutline, IoTimeOutline, IoAlertCircleOutline, IoCloseCircleOutline, IoCheckmarkCircleOutline } from "react-icons/io5";
import { SlPhone } from "react-icons/sl";
import { BsRocketTakeoff } from "react-icons/bs";
import { LuChefHat } from "react-icons/lu";


class SavedOrdStatus extends React.Component {    
    render() {
        
        return(
        <div className='StatusMainDiv'>
            {this.props.Saved.orderDetal[0].Status === "New" ?
            <div className='SavedOrdStatusDiv New'>
                <div className='SavedOrdStatusIconDiv New'>
                    <IoAlertCircleOutline className='SavedOrdStatusIcon New'/>
                </div>
            <div  className='SavedOrdStatusText New'>
                Новый заказ
            </div>
            </div>
            :this.props.Saved.orderDetal[0].Status === "Processing" ? 
            <div className='SavedOrdStatusDiv Processing'>
                <div className='SavedOrdStatusIconDiv Processing'>
                    <SlPhone className='SavedOrdStatusIcon Processing'/>
                </div>
            <div  className='SavedOrdStatusText Processing'>
                В обработке
            </div>
            </div>
            :this.props.Saved.orderDetal[0].Status === "NotProcessing" ? 
            <div className='SavedOrdStatusDiv NotProcessing'>
                <div className='SavedOrdStatusIconDiv NotProcessing'>
                    <SlPhone className='SavedOrdStatusIcon NotProcessing'/>
                    <div className='SavedOrdStatusIconLine NotProcessing'></div>
                </div>
            <div  className='SavedOrdStatusText NotProcessing'>
                Недозвон
            </div>
            </div>
            :this.props.Saved.orderDetal[0].Status === "Cancelled" ? 
                <div className='SavedOrdStatusDiv Cancelled'>
                    <div className='SavedOrdStatusIconDiv Cancelled'>
                        <IoCloseCircleOutline className='SavedOrdStatusIcon Cancelled'/>
                    </div>
                    <div  className='SavedOrdStatusText Cancelled'>
                        Списан
                    </div>
                </div>
                :this.props.Saved.orderDetal[0].Status === "Timeout" ? 
                <div className='SavedOrdStatusDiv Timeout'>
                    <div className='SavedOrdStatusIconDiv Timeout'>
                        <IoTimeOutline className='SavedOrdStatusIcon Timeout'/>
                    </div>
                    <div  className='SavedOrdStatusText Timeout'>
                        Отложенный
                    </div>
                </div>
                :this.props.Saved.orderDetal[0].Status === "Cooking" ? 
                <div className='SavedOrdStatusDiv Cooking'>
                    <div className='SavedOrdStatusIconDiv Cooking'>
                        <LuChefHat className='SavedOrdStatusIcon Cooking'/>
                    </div>
                    <div  className='SavedOrdStatusText Cooking'>
                        Готовим
                    </div>
                </div>
                :this.props.Saved.orderDetal[0].Status === "Cooked" ?
                <div className='SavedOrdStatusDiv Cooked'>
                    <div className='SavedOrdStatusIconDiv Cooked'>
                        <IoRestaurantOutline className='SavedOrdStatusIcon Cooked'/>
                    </div>
                    <div  className='SavedOrdStatusText Cooked'>
                        Готов
                    </div>
                </div>
                :this.props.Saved.orderDetal[0].Status === "Delivery" ? 
                <div className='SavedOrdStatusDiv Delivery'>
                    <div className='SavedOrdStatusIconDiv Delivery'>
                        <BsRocketTakeoff className='SavedOrdStatusIcon Delivery'/>
                    </div>
                    <div  className='SavedOrdStatusText Delivery'>
                        В пути
                    </div>
                </div>
                :
                <div className='SavedOrdStatusDiv Completed'>
                    <div className='SavedOrdStatusIconDiv Completed'>
                        <IoCheckmarkCircleOutline className='SavedOrdStatusIcon Completed'/>
                    </div>
                    <div  className='SavedOrdStatusText Completed'>
                        Выполнен
                    </div>
                </div>
            }
        </div>
        )  
        
      
      
    }  
  }

  export default SavedOrdStatus