import React from 'react';
import { IoCloseCircleSharp, IoAlertCircle } from "react-icons/io5";


class StopAlert extends React.Component {   


  
  render() {

   if(this.props.AlertCheck.Check > 0)
   switch(this.props.AlertCheck.Alert) {
    default:{
      return(
        <div className='StopAlertMainDiv active' id={'StopAlertDiv' + this.props.AlertCheck.Check} onClick={(() => {
          this.props.AllertClick(this.props.AlertCheck.Check)
        })}>
          <div className='StopPositionContent'>
            <div>
          <IoCloseCircleSharp className="IconStopPosition"/>  
          </div>
          <div className='StopAlertText'>
          Данная позиция находится в стоп листе 
          </div>
          </div>
        </div>   
        )
    }
    case 'Cat':{
      return(
        <div className='StopAlertMainDiv active' id={'StopAlertDiv' + this.props.AlertCheck.Check} onClick={(() => {
          this.props.AllertClick(this.props.AlertCheck.Check)
        })}>
          <div className='StopCatContent'>
            <div>
          <IoAlertCircle className="IconStopCat"/>  
          </div>
          <div className='StopAlertText'>
          Данная категория находится в стоп листе 
          </div>
          </div>
        </div>    
        )
    }
    case 'SauceLimit':{
      return(
        <div className='StopAlertMainDiv active' id={'StopAlertDiv' + this.props.AlertCheck.Check} onClick={(() => {
          this.props.AllertClick(this.props.AlertCheck.Check)
        })}>
          <div className='StopSauceLimitContent'>
            <div>
          <IoCloseCircleSharp className="IconStopPosition"/>  
          </div>
          <div className='StopAlertText'>
          Максимальное кол-во соусов в лапше - 2
          </div>
          </div>
        </div>   
        ) 
    }
    case 'SauceSumLimit':{
      return(
        <div className='StopAlertMainDiv active' id={'StopAlertDiv' + this.props.AlertCheck.Check} onClick={(() => {
          this.props.AllertClick(this.props.AlertCheck.Check)
        })}>
          <div className='StopSauceSumLimitContent'>
            <div>
            <IoAlertCircle className="IconStopCat"/> 
          </div>
          <div className='StopAlertText'>
          Кол-во соусов одного вида всегда равно кол-ву порций лапши
          </div>
          </div>
        </div>   
        ) 
    }
    case 'UnderCity':{
      return(
      <div className='StopAlertMainDiv active' id={'StopAlertDiv' + this.props.AlertCheck.Check} onClick={(() => {
        this.props.AllertClick(this.props.AlertCheck.Check)
      })}>
        <div className='StopSauceLimitContent'>
          <div>
        <IoCloseCircleSharp className="IconStopPosition"/>  
        </div>
        <div className='StopAlertText'>
        Не выбран филиал
        </div>
        </div>
      </div>    
      )
    }
    case 'StopOnSave':{
      return(
        <div className='StopAlertLastMainDiv active' id={'StopAlertDiv' + this.props.AlertCheck.Check} onClick={(() => {
          this.props.AllertClick(this.props.AlertCheck.Check)
        })}>
          <div className='AlertLastWindowStopPos'>
            <div>
          <IoCloseCircleSharp className="IconStopPosition"/>  
          </div>
          <div className='StopAlertText'>
          Одна из выбранных позиций находится в стоп листе
          </div>
          </div>
        </div>    
        ) 
    }
    case 'NotFilled':{
      return(
        <div className='StopAlertLastMainDiv active' id={'StopAlertDiv' + this.props.AlertCheck.Check} onClick={(() => {
          this.props.AllertClick(this.props.AlertCheck.Check)
        })}>
          <div className='AlertLastWindowStopPos'>
            <div>
          <IoCloseCircleSharp className="IconStopPosition"/>  
          </div>
          <div className='StopAlertText'>
          Не заполнены обязательные поля
          </div>
          </div>
        </div>    
        ) 
    }
    case 'UnderCityOnPosition':{
      return(
        <div className='StopAlertMainDiv active' id={'StopAlertDiv' + this.props.AlertCheck.Check} onClick={(() => {
          this.props.AllertClick(this.props.AlertCheck.Check)
        })}>
          <div className='StopSauceSumLimitContent'>
            <div>
            <IoAlertCircle className="IconStopCat"/> 
          </div>
          <div className='StopAlertText'>
          Не выбран город. Стоп лист не актуален.
          </div>
          </div>
        </div>   
        ) 
    }
    case 'InpLessSum':{
      return(
        <div className='StopAlertLastMainDiv active' id={'StopAlertDiv' + this.props.AlertCheck.Check} onClick={(() => {
          this.props.AllertClick(this.props.AlertCheck.Check)
        })}>
          <div className='AlertLastWindowStopPos'>
            <div>
          <IoCloseCircleSharp className="IconStopPosition"/>  
          </div>
          <div className='StopAlertText'>
          Введенная сумма меньше суммы заказа
          </div>
          </div>
        </div>    
        ) 
    }
    case 'CertificateUnfien':{
      return(
        <div className='StopAlertLastMainDiv active' id={'StopAlertDiv' + this.props.AlertCheck.Check} onClick={(() => {
          this.props.AllertClick(this.props.AlertCheck.Check)
        })}>
          <div className='AlertLastWindowStopPos'>
            <div>
          <IoCloseCircleSharp className="IconStopPosition"/>  
          </div>
          <div className='StopAlertText'>
          Сертификат не найден
          </div>
          </div>
        </div>    
      )
    }
    case 'CertificateUsed':{
      return(
        <div className='StopAlertLastMainDiv active' id={'StopAlertDiv' + this.props.AlertCheck.Check} onClick={(() => {
          this.props.AllertClick(this.props.AlertCheck.Check)
        })}>
          <div className='AlertLastWindowStopPos'>
            <div>
          <IoCloseCircleSharp className="IconStopPosition"/>  
          </div>
          <div className='StopAlertText'>
          Сертификат израсходован
          </div>
          </div>
        </div>    
      )
    }
    case 'PreOrder':{
      return(
        <div className='StopAlertLastMainDiv active' id={'StopAlertDiv' + this.props.AlertCheck.Check} onClick={(() => {
          this.props.AllertClick(this.props.AlertCheck.Check)
        })}>
          <div className='AlertLastWindowStopPos'>
            <div>
          <IoCloseCircleSharp className="IconStopPosition"/>  
          </div>
          <div className='StopAlertText'>
          Указано неверное время или дата, если сейчас повторно сохранить заказ, он будет отправлен по готовности
          </div>
          </div>
        </div>    
      )
    }
    case 'FailSearch':{
      return(
      <div className='StopAlertLastMainDiv active' id={'StopAlertDiv' + this.props.AlertCheck.Check} onClick={(() => {
        this.props.AllertClick(this.props.AlertCheck.Check)
      })}>
        <div className='AlertLastWindowStopPos'>
          <div>
        <IoCloseCircleSharp className="IconStopPosition"/>  
        </div>
        <div className='StopAlertText'>
        Заказ не найден
        </div>
        </div>
      </div>  
      )
    }
    case 'FailDatePeriod':{
      return(
        <div className='StopAlertLastMainDiv active' id={'StopAlertDiv' + this.props.AlertCheck.Check} onClick={(() => {
          this.props.AllertClick(this.props.AlertCheck.Check)
        })}>
          <div className='AlertLastWindowStopPos'>
            <div>
          <IoCloseCircleSharp className="IconStopPosition"/>  
          </div>
          <div className='StopAlertText'>
          Указан неккоректный период
          </div>
          </div>
        </div>  
        )
    }
    
  }
      
    } 
  
  }

  export default StopAlert