import React from "react"

import Popup from "reactjs-popup"
import { MdOutlinePercent } from "react-icons/md";
import CategoriesAddition from "./AddAddition/CategorisAddition";
import OrderAddition from "./AddAddition/OrderAddition";


class AddOrder extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
        OpenDropDownAddition: false,
    }
  }

  render() {
    
    if (this.props.orderPosition.id > 0 && this.props.orderPosition.categ !== "") 
    {
      return (
        <div className="OrdTB">
          <table>
            <tbody>
              <tr>
                <td 
                className="OrdPosName"
                id={'OrdPosName' + this.props.orderPosition.idOrd}
                >
                  {this.props.orderPosition.name}
                  {this.props.orderPosition.salecheck === false && <MdOutlinePercent color="red"/>}

                  {this.props.orderPosition.categ !== "ВОК" && <Popup
                    trigger={<button className="OpenAdditions">i</button>}
                    position={ "bottom left"}>
                    <div className="OrdSost">
                     {this.props.orderPosition.sost /*вывод состава позиции*/}
                    </div>
                  </Popup>}

                  
                  {this.props.orderPosition.haveAddition === true && 
                  <button 
                  className="OpenAdditions"
                  id={"OpenAdditionsButton" + this.props.orderPosition.idOrd}
                  onClick={() => {
                    if(this.state.OpenDropDownAddition === false)
                    {
                      this.setState({
                        OpenDropDownAddition: true
                      })
                      setTimeout(() => {
                        document.getElementById('AdditionMainDiv' + this.props.orderPosition.idOrd).focus()
                      }, 100)
                      
                    }      
                    var distance = document.getElementById("OpenAdditionsButton" + this.props.orderPosition.idOrd).getBoundingClientRect();
                    if(distance.top < 600)
                    {
                      setTimeout(() => {
                        if(this.state.OpenDropDownAddition === true)
                        document.getElementById('AdditionMainDiv' + this.props.orderPosition.idOrd).classList.add("Downed")
                      }, 1)
                      
                    }
                    else
                    {
                      setTimeout(() => {
                        if(this.state.OpenDropDownAddition === true)
                        document.getElementById('AdditionMainDiv' + this.props.orderPosition.idOrd).classList.remove("Downed")
                      }, 100)
                    }    
                  }}
                  >
                    +
                    </button>}

                  

                  

                  
                
                
                </td>
                <td className="OrdPosEdit">
                  <button
                    className="OrdButtonEditMinus"
                    id={"buttonMinus" + this.props.orderPosition.idOrd}
                    onClick={() => {
                        if (this.props.orderPosition.num !== 1) 
                        {
                          this.props.BMinusOrd(this.props.orderPosition.idOrd)
                        } 
                        else 
                        {
                          this.props.deleteOrder(this.props.orderPosition.idOrd)
                        }
                      } /* кнопка "-" отнимает 1 от num*/
                    }>-</button>
                </td>
                <td className="OrdPosNum">
                  <input
                    type="number"
                    className="OrdPosInp"
                    value={this.props.orderPosition.num}
                    id={"ordNum" + this.props.orderPosition.idOrd}
                    onChange={(e) => {
                        if (e.target.value > 99) 
                        {
                          e.target.value = 99
                        }
                        if (e.target.value < 1) 
                        {
                          e.target.value = 1
                        }
                        this.props.EditInputOrd(this.props.orderPosition.idOrd, e.target.value)
                      } /*это изменение значения при изменении инпута ручками */
                    }></input>
                </td>
                <td className="OrdPosEdit">
                  <button
                    className="OrdButtonEditPlus"
                    id={"buttonPlus" + this.props.orderPosition.idOrd}
                    onClick={() => {
                        if (this.props.orderPosition.num !== 99) 
                          this.props.BPlusOrd(this.props.orderPosition.idOrd)
                      } /* кнопка "+" прибаляет 1  к num*/
                    }>+</button>
                </td>
                <td className="OrdPosPrice" id="ordPrice">
                  {
                    this.props.pdkon === 0 ? 
                    this.props.orderPosition.Proverka36 !== true ? this.props.orderPosition.price + " руб." :  this.props.orderPosition.price36 + " руб." 
                    :this.props.orderPosition.Proverka36 !== true ? this.props.orderPosition.dkprice + " руб." : this.props.orderPosition.dkprice36 + " руб."
                    /*проверка активен ли переключатель цен на дк и вывод цены уже в зависимости от него */
                  }
                </td>
                <td className="OrdPosSum"  
                data-value={this.props.pdkon === 0 ? 
                  this.props.orderPosition.Proverka36 !== true ? this.props.orderPosition.totalprice : this.props.orderPosition.totalprice36
                  :this.props.orderPosition.Proverka36 !== true ? this.props.orderPosition.totaldkprice : this.props.orderPosition.totaldkprice36} id={"OrdPosTotSum" + this.props.orderPosition.idOrd}>
                  {
                    this.props.pdkon === 0 ? 
                    this.props.orderPosition.Proverka36 !== true ? this.props.orderPosition.totalprice + " руб."  : this.props.orderPosition.totalprice36 + " руб."
                    :this.props.orderPosition.Proverka36 !== true ? this.props.orderPosition.totaldkprice * this.props.orderPosition.num + " руб." : this.props.orderPosition.totaldkprice36 * this.props.orderPosition.num + " руб." /*также проверяет ктивен ли переключатель цен на дк и умножает уже цену исходя из активности на num */
                  }
                </td>
              </tr>
              
            </tbody>
          </table>
          {this.state.OpenDropDownAddition === true && 
                  <div 
                  className='AdditionMainDiv'
                  id={'AdditionMainDiv' + this.props.orderPosition.idOrd}
                  tabIndex={1}
                  onFocus={() => {
                    setTimeout(() => {
                      this.setState({
                        OpenDropDownAddition: true
                      })
                    }, 100)
                    
                  }}
                  onBlur={() => {
                    setTimeout(() => {
                      this.setState({
                        OpenDropDownAddition: false
                      })
                    }, 100)
                    
                  }}
                  >
                    {this.props.cat.map((el) => (
                      
                      <CategoriesAddition 
                      AlertAdd={this.props.AlertAdd}
                      EditWOKNoodles={this.props.EditWOKNoodles}
                      AddAdditionFunc={this.props.AddAdditionFunc}
                      orderPosition={this.props.orderPosition}
                      position={this.props.position}
                      cat={el}
                      key={el.id}
                      />
                      
                    ))}
                  </div>}
          <div>
          {this.props.orderPosition.categ ==="Пицца" &&
            <div className="PizzaChangeDiamOnOrderTable">
              <table>
                <tbody>
                  <tr>
                    <td className="PizzaChangeDiamOnOrderTd">
                      <button
                      className={this.props.orderPosition.Proverka36 === false ? "PizzaChangeDiamOnOrderButton30 Actived" : "PizzaChangeDiamOnOrderButton30"}
                      onClick={(() => {
                        this.props.ChangeDiamPizzaOnOrder(false, this.props.orderPosition.idOrd)
                      })}
                      >30см</button>

                      <button
                      className={this.props.orderPosition.Proverka36 === false ? "PizzaChangeDiamOnOrderButton36" : "PizzaChangeDiamOnOrderButton36 Actived"} 
                      onClick={(() => {
                        this.props.ChangeDiamPizzaOnOrder(true, this.props.orderPosition.idOrd)
                        console.log(this.props.orderAddition)
                      })}
                      >36см</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            }
            {this.props.orderPosition.haveAddition === true && 
            this.props.orderAddition.map((el) => (
              <OrderAddition
              
              orderPosition={this.props.orderPosition}
              PlusAdditionFunc={this.props.PlusAdditionFunc}
              MinusAdditionFunc={this.props.MinusAdditionFunc}
              EditInputAddition={this.props.EditInputAddition}
              orderAddition={el}
              key={el.id + el.idOrd}
              />
            ))
            }
          
           
          </div>
          
          <div className="OrdPosSouse" id={"OrdPosSouse" + this.props.orderPosition.idOrd} data-value={this.props.orderPosition.soysause > 0 && 
            this.props.orderPosition.soysause * this.props.orderPosition.num}>
                {this.props.orderPosition.soysause > 0 && 
                 "Соевых соусов: " + this.props.orderPosition.soysause * this.props.orderPosition.num}
                </div>
        </div>
      )
      
    }
  }        
          
        
    
}

export default AddOrder
