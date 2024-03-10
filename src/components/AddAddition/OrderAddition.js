import React from "react"

import { MdOutlinePercent } from "react-icons/md";


class OrderAddition extends React.Component {

  render() {
    
    if (this.props.orderAddition.id > 0 && this.props.orderAddition.idOrd === this.props.orderPosition.idOrd) 
    {
      return (
        <div className="OrdAdditionsTB">
          <table>
            <tbody>
              <tr>
                <td 
                className="OrdPosName"
                id={'OrdPosName' + this.props.orderAddition.idAddition}
                >
                  {"--" + this.props.orderAddition.name}
                  {this.props.orderAddition.salecheck === false && <MdOutlinePercent color="red"/>}
                
                </td>
                <td className="OrdPosEdit">
                  <button
                    className="OrdButtonEditMinus"
                    id={"buttonMinus" + this.props.orderAddition.idOrd}
                    onClick={() => {
                        this.props.MinusAdditionFunc(this.props.orderAddition.idAddition)
                      } /* кнопка "-" отнимает 1 от num*/
                    }>-</button>
                </td>
                <td className="OrdPosNum">
                  <input
                    type="number"
                    className="OrdPosInp"
                    value={this.props.orderAddition.num}
                    id={"ordNum" + this.props.orderAddition.idOrd}
                    onChange={(e) => {
                        if (e.target.value > 99) 
                        {
                          e.target.value = 99
                        }
                        if (e.target.value < 1) 
                        {
                          e.target.value = 1
                        }
                        this.props.EditInputAddition(this.props.orderAddition.idAddition, e.target.value)
                      } /*это изменение значения при изменении инпута ручками */
                    }></input>
                </td>
                <td className="OrdPosEdit">
                  <button
                    className="OrdButtonEditPlus"
                    id={"buttonPlus" + this.props.orderAddition.idOrd}
                    onClick={() => {
                        this.props.PlusAdditionFunc(this.props.orderAddition.idAddition)
                      } /* кнопка "+" прибаляет 1  к num*/
                    }>+</button>
                </td>
                <td className="OrdPosPrice" id="orderAdditionPrice">
                  {
                    this.props.pdkon === 0 ? 
                    this.props.orderAddition.price + " руб."
                    :this.props.orderAddition.dkprice + " руб."
                    /*проверка активен ли переключатель цен на дк и вывод цены уже в зависимости от него */
                  }
                </td>
                <td className="OrdPosSum"  
                data-value={ 
                  this.props.orderAddition.totalprice
                  } 
                  id={"orderAdditionTotalSum" + this.props.orderAddition.idAddition}>
                  {
                    
                    this.props.orderAddition.totalprice + " руб."
                    /*также проверяет ктивен ли переключатель цен на дк и умножает уже цену исходя из активности на num */
                  }
                </td>
              </tr>
            </tbody>
          </table>
          <div>
          
           
          </div>
          
         
        </div>
      )
      
    }
  }        
          
        
    
}

export default OrderAddition
