import React from 'react';
import { IoMdRestaurant } from "react-icons/io";
import { IoTrashSharp } from "react-icons/io5"
import TotalSumDownPanel from './TotalSumDownPanel';
import Popup from "reactjs-popup"
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

          <div>
          <OrderDownPanelSale 
            SaleWindowEditActive = {this.props.SaleWindowEditActive} 
            SaleFunction = {this.props.SaleFunction} 
            TotalSale = {this.props.TotalSale}
            totalSumSale={this.props.totalSumSale}
            SaleInpEdit0={this.props.SaleInpEdit0}
            SaleInp={this.props.SaleInp}
            
          />
          
          
          <Popup
                        trigger={<button className='DownPanelButtonLeft'><IoMdRestaurant className='IconPrib' /></button>}
                        position="top center">
                        <div className="PopupTableware">
                        <Tablewares addTW={this.props.addTW}/>
                        </div>
                      </Popup>
          </div>

          <div className='DownPanelButtonRight'>
          <div>
            <button className='DownPanelButtonRightDelete' onClick={() => {
              this.props.clOrd(0)
            }}
            ><IoTrashSharp className='IconDelete' /></button>
            </div>
            <div>
            <button className='DownPanelButtonRightSave'>Сохранить</button>
            </div>
          </div>

        </div> 

      </div> 
      )
    }  
  }

  export default OrderDownPanel