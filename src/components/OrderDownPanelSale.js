import React from 'react';
import { MdOutlinePercent } from "react-icons/md";
import Popup from "reactjs-popup"
import SALES from './SALE/SALES';


class OrderDownPanelSale extends React.Component {    
    render() {
      if (this.props.SaleInp > 0)
      {
        return(
          <Popup
                      trigger={<button id='ButtonSale' className='DownPanelButtonLeftSale'>{Math.round(this.props.SaleInp) + "р."}</button>}
                      position="top left">
                      <div className="PopupTableware">
                      <SALES 
                        SaleInpEdit0={this.props.SaleInpEdit0}
                        SaleWindowEditActive = {this.props.SaleWindowEditActive}
                        SaleFunction = { this.props.SaleFunction}
                      />
                      </div>
                    </Popup>
        )
      }
      else
      {
        if (this.props.TotalSale === 0) 
        {
        return(
            <Popup
                        trigger={<button id='ButtonSale' className='DownPanelButtonLeft'><MdOutlinePercent className='IconSale'/></button>}
                        position="top left">
                        <div className="PopupTableware">
                        <SALES 
                          SaleInpEdit0={this.props.SaleInpEdit0}
                          SaleWindowEditActive = {this.props.SaleWindowEditActive}
                          SaleFunction = { this.props.SaleFunction}
                        />
                        </div>
                      </Popup>
        )
        }
        else
        {
            return(
            <Popup 
                        trigger={<button id='ButtonSale' className='DownPanelButtonLeftSale'>{Math.round(this.props.TotalSale) + "%"}</button>}
                        position="top left">
                        <div className="PopupTableware">
                        <SALES 
                          SaleInpEdit0={this.props.SaleInpEdit0}
                          SaleWindowEditActive = {this.props.SaleWindowEditActive}
                          SaleFunction={ this.props.SaleFunction}
                        />
                        </div>
                      </Popup>
            )
        }
      }
    }
}

export default OrderDownPanelSale