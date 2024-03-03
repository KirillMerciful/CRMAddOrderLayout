import React from "react"

import Popup from "reactjs-popup"
import PodCategoriesPizza from "./DobPizza/PodCategoriesPizza"
import AddDobPizza from "./DobPizza/AddDobPizza"
import { MdOutlinePercent } from "react-icons/md";
import AddSostWOK from "./PodCategWOK/AddSostWOK";
import PodCategoriesWOK from "./PodCategWOK/PodCategoriesWOK";


class AddOrder extends React.Component {
 
  render() {
    
    if (this.props.orderPosition.id > 0 && this.props.orderPosition.categ !== "") 
    {
      return (
        <div className="OrdTB">
          <table>
            <tbody>
              <tr>
                <td className="OrdPosName">
                  {this.props.orderPosition.name}
                  {this.props.orderPosition.salecheck === false && <MdOutlinePercent color="red"/>}

                  {this.props.orderPosition.categ !== "ВОК" && <Popup
                    trigger={<button className="OpenDobPizza">i</button>}
                    position={ "bottom left"}>
                    <div className="OrdSost">
                     {this.props.orderPosition.sost /*вывод состава позиции*/}
                    </div>
                  </Popup>}

                  {this.props.orderPosition.categ ==="Пицца" && this.props.orderPosition.dobcheck === false &&  <Popup
                    trigger={<button className="OpenDobPizza">+</button>}
                    position="right top">
                    <div className="DobPizzaMain">
                      <PodCategoriesPizza
                        position={this.props.position}
                        AlertAdd={this.props.AlertAdd}
                        AddDob={this.props.AddDob}
                        idOrd={this.props.orderPosition.idOrd}
                      />
                    </div>
                  </Popup>
                }
                {this.props.orderPosition.categ ==="ВОК" && this.props.orderPosition.dobcheck === false && <Popup
                  trigger={<button className="OpenDobWOK">+</button>}
                  position="right top">
                  <div className="DobWOKMain">
                    <PodCategoriesWOK
                      AlertAdd={this.props.AlertAdd}
                      EditWOKNoodles={this.props.EditWOKNoodles}
                      AddSostWOK={this.props.AddSostWOK}
                      position={this.props.position}
                      idOrd={this.props.orderPosition.idOrd}
                    />
                  </div>
                </Popup>}
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
                          this.props.DelOrd(this.props.orderPosition.idOrd)
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
                      })}
                      >36см</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            }
           
          </div>
          {this.props.orderPosition.categ ==="Пицца" && this.props.ordDobP.map((el) => (
            <AddDobPizza
              DelDob={this.props.DelDob}
              BPlusDob={this.props.BPlusDob}
              BMinusDob={this.props.BMinusDob}
              EditInputDob={this.props.EditInputDob}
              idOrd={this.props.orderPosition.idOrd}
              ordDobP={el}
              key={el.idDob}
            />
          ))}
           {this.props.orderPosition.categ ==="ВОК" && this.props.ordSWOk.map((el) => (
          <AddSostWOK
            AlertAdd={this.props.AlertAdd}
            EditInputSostWOK={this.props.EditInputSostWOK}
            BMinusSostWOK={this.props.BMinusSostWOK}
            BPlusSostWOK={this.props.BPlusSostWOK}
            deleteSostWOK={this.props.deleteSostWOK}
            ordSWOk={el}
            key={el.idSost}
            orderPosition={this.props.orderPosition}
          />
        ))}
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
