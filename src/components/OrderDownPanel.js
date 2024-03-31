import React from 'react';
import { IoMdRestaurant } from "react-icons/io";
import { IoTrashSharp } from "react-icons/io5"
import TotalSumDownPanel from './TotalSumDownPanel';
import Tablewares from './Tablewares/Tablewares';
import OrderDownPanelSale from './OrderDownPanelSale';

class OrderDownPanel extends React.Component {    
    render() {

      if (this.props.checkOnPanel > 0)
      return(
      <div className='DownPanelMain'>
        
        <div>
          <TotalSumDownPanel 
            Ord={this.props.Ord}
            totalSumSale={this.props.totalSumSale}
          />
        </div>

        <div className='DownPanelButtons'>

          <div className='DownPanelButtonsLeft'>
          <OrderDownPanelSale 
            SaleWindowEditActive = {this.props.SaleWindowEditActive} 
            SaleFunction = {this.props.SaleFunction} 
            TotalSale = {this.props.TotalSale}
            totalSumSale={this.props.totalSumSale}
            SaleInpEdit0={this.props.SaleInpEdit0}
            SaleInp={this.props.SaleInp}
            ClickOpenDropDownSale={this.props.ClickOpenDropDownSale}
            OpenDropDownSale={this.props.OpenDropDownSale}
          />
         
                      <div>
                        <button 
                        className='DownPanelButtonLeft'
                        onClick={(() => {
                          this.props.ClickOpenDropDownTablewares()
                          
                        })}
                        >
                          <IoMdRestaurant className='IconPrib' />
                        </button>
                        
                        {this.props.OpenDropDownTablewares === true && 
                        <div
                        className="PopupTablewareContainer"
                        >
                          <div 
                          className="PopupTableware"
                          >
                          <Tablewares addTW={this.props.addTW}/>
                          </div>
                        </div>
                        }
                      </div>
                      
          </div>

          <div className='DownPanelButtonRight'>
          
            <button className='DownPanelButtonRightDelete' onClick={() => {
              this.props.clOrd(0)
            }}
            ><IoTrashSharp className='IconDelete' /></button>
            
            
            <button className='DownPanelButtonRightSave' onClick={(() => {
              this.props.SavedButtonClick()
            })}>Сохранить</button>
            
          </div>

        </div> 

      </div> 
      )
    }  
  }

  export default OrderDownPanel