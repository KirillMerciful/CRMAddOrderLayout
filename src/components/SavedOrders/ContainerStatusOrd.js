import React from 'react';
import { IoRestaurantOutline, IoTimeOutline, IoAlertCircleOutline, IoCloseCircleOutline, IoCheckmarkCircleOutline } from "react-icons/io5";
import { SlPhone } from "react-icons/sl";
import { BsRocketTakeoff } from "react-icons/bs";
import { LuChefHat } from "react-icons/lu";


class ContainerStatusOrd extends React.Component {    
    constructor(props) {
        super(props)
        this.state = {
            Status:[
                {
                    id: 0,
                    name: "Новый",
                    value: "New",
                },
                {
                    id: 1,
                    name: "В обработке",
                    value: "Processing"
                },
                {
                    id: 2,
                    name: "Недозвон",
                    value: "NotProcessing"
                },
                {
                    id: 3,
                    name: "Отложенный",
                    value: "Timeout"
                },
                {
                    id: 4,
                    name: "Готовим",
                    value: "Cooking"
                },
                {
                    id: 5,
                    name: "Готов",
                    value: "Cooked"
                },
                {
                    id: 6,
                    name: "В пути",
                    value: "Delivery"
                },
                {
                    id: 7,
                    name: "Выполнен",
                    value: "Completed"
                },
                {
                    id: 8,
                    name: "Списан",
                    value: "Cancelled"
                },
            ]
        }
    } 
    render() {
        
        return(
            
        <div className='ContainerStatusGlobalDiv'>
            {this.state.Status.map((el) => 
            <div 
            className={'ContainerStatusOneStatusDiv ' + el.value}
            onClick={(() => {
                this.props.ChangeStatusSavedOrd(el.value, this.props.Saved.SavedIdOrd)
                this.props.CloseDropDownStatus()
            })}
            >
                <div className='ContainerStatusAllIcons'>
                    {el.value === "New" ? <IoAlertCircleOutline className='ContainerStatusIcon'/> : 
                    el.value === "Processing" ? <SlPhone className='ContainerStatusIcon'/> :
                    el.value === "NotProcessing" ? <SlPhone className='ContainerStatusIcon NotProcessing'/>:
                    el.value === "Cancelled" ? <IoCloseCircleOutline className='ContainerStatusIcon'/> :
                    el.value === "Timeout" ? <IoTimeOutline className='ContainerStatusIcon'/> :
                    el.value === "Cooking" ? <LuChefHat className='ContainerStatusIcon'/> :
                    el.value === "Cooked" ? <IoRestaurantOutline className='ContainerStatusIcon'/> :
                    el.value === "Delivery" ? <BsRocketTakeoff className='ContainerStatusIcon'/> :
                    <IoCheckmarkCircleOutline className='ContainerStatusIcon'/> 
                    }
                </div>
                <div className='ContainerStatusName'>
                    {el.name}
                </div>
            </div>
            )}
        </div>
        )  
        
      
      
    }  
  }

  export default ContainerStatusOrd