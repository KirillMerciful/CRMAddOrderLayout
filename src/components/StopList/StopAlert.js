import React from 'react';
import { IoCloseCircleSharp, IoAlertCircle } from "react-icons/io5";


class StopAlert extends React.Component {   


  
    render() {

   if(this.props.AlertCheck.Check > 0)
    if(this.props.AlertCheck.Alert === "Stop")
    {
      return(
      <div className='StopAlertMainDiv active' id={'StopAlertDiv' + this.props.AlertCheck.Check} onClick={(() => {
        this.props.AllertClick(this.props.AlertCheck.Check)
      })}>
        <div className='StopPositionContent'>
          <div>
        <IoCloseCircleSharp className="IconStopPosition"/>  
        </div>
        <div>
        Данная позиция находится в стоп листе 
        </div>
        </div>
      </div>    
      )
    }
    else
    {
      if(this.props.AlertCheck.Alert === "Cat")
      {
      return(
        <div className='StopAlertMainDiv active' id={'StopAlertDiv' + this.props.AlertCheck.Check} onClick={(() => {
          this.props.AllertClick(this.props.AlertCheck.Check)
        })}>
          <div className='StopCatContent'>
            <div>
          <IoAlertCircle className="IconStopCat"/>  
          </div>
          <div>
          Данная категория находится в стоп листе 
          </div>
          </div>
        </div>    
        )
      }
      
        if(this.props.AlertCheck.Alert === "SauceLimit")
        {
        return(
        <div className='StopAlertMainDiv active' id={'StopAlertDiv' + this.props.AlertCheck.Check} onClick={(() => {
          this.props.AllertClick(this.props.AlertCheck.Check)
        })}>
          <div className='StopSauceLimitContent'>
            <div>
          <IoCloseCircleSharp className="IconStopPosition"/>  
          </div>
          <div>
          Максимальное кол-во соусов в лапше - 2
          </div>
          </div>
        </div>   
        ) 
      }
      
        if(this.props.AlertCheck.Alert === "SauceSumLimit")
        {
        return(
        <div className='StopAlertMainDiv active' id={'StopAlertDiv' + this.props.AlertCheck.Check} onClick={(() => {
          this.props.AllertClick(this.props.AlertCheck.Check)
        })}>
          <div className='StopSauceSumLimitContent'>
            <div>
            <IoAlertCircle className="IconStopCat"/> 
          </div>
          <div>
          Кол-во соусов одного вида всегда равно кол-ву порций лапши
          </div>
          </div>
        </div>   
        ) 
      }
      
        if(this.props.AlertCheck.Alert === "UnderCity")
        {
          return(
            <div className='StopAlertMainDiv active' id={'StopAlertDiv' + this.props.AlertCheck.Check} onClick={(() => {
              this.props.AllertClick(this.props.AlertCheck.Check)
            })}>
              <div className='StopSauceLimitContent'>
                <div>
              <IoCloseCircleSharp className="IconStopPosition"/>  
              </div>
              <div>
              Не выбран филиал
              </div>
              </div>
            </div>    
            ) 
        }
      
        if(this.props.AlertCheck.Alert === "StopOnSave")
        {
          return(
            <div className='StopAlertLastMainDiv active' id={'StopAlertDiv' + this.props.AlertCheck.Check} onClick={(() => {
              this.props.AllertClick(this.props.AlertCheck.Check)
            })}>
              <div className='AlertLastWindowStopPos'>
                <div>
              <IoCloseCircleSharp className="IconStopPosition"/>  
              </div>
              <div>
              Одна из выбранных позиций находится в стоп листе
              </div>
              </div>
            </div>    
            ) 
        }
      
      
    }
      
    } 
  
  }

  export default StopAlert