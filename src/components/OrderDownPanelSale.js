import React from 'react';
import { MdOutlinePercent } from "react-icons/md";
import SALES from './SALE/SALES';


class OrderDownPanelSale extends React.Component {    
    render() {
      
       
        return(
          <div>
            <button 
            id='ButtonSale' 
            className='DownPanelButtonLeftSale'
            onClick={(() => {
              this.props.ClickOpenDropDownSale()
            })}
            >{this.props.SaleInp > 0 ? Math.round(this.props.SaleInp) + "р." 
                      :this.props.TotalSale === 0 ? <MdOutlinePercent className='IconSale'/> 
                      :Math.round(this.props.TotalSale) + "%"
                      }</button>
                      
              {this.props.OpenDropDownSale === true && <div className="PopupSALES">
                <SALES 
                  SaleInpEdit0={this.props.SaleInpEdit0}
                  SaleWindowEditActive = {this.props.SaleWindowEditActive}
                  SaleFunction = { this.props.SaleFunction}
                />
              </div>}
          </div>
                    
        )
     
      }
    
}

export default OrderDownPanelSale