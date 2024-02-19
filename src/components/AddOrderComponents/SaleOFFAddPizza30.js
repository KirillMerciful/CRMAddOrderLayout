import React from "react"
import Popup from "reactjs-popup"
import PodCategoriesPizza from "../DobPizza/PodCategoriesPizza"
import AddDobPizza from "../DobPizza/AddDobPizza"
import { MdOutlinePercent } from "react-icons/md";


class SaleOFFAddPizza30 extends React.Component {

  
  render() {
    if (this.props.OrdPos.Proverka36 !== true) //проверка диаметра позиции
        {
    return (
        <div className="OrdTB">
          <table>
            <tbody>
              <tr>
                <td className="OrdPosName">
                  {this.props.OrdPos.name + " 30см    "}
                  <MdOutlinePercent color="red"/>
                  <Popup
                    trigger={<button className="OpenDobPizza">i</button>}
                    position={ "bottom left"}>
                    <div className="OrdSost">
                     {this.props.OrdPos.sost /*вывод состава позиции*/}
                    </div>
                  </Popup>
                  <Popup
                    trigger={<button className="OpenDobPizza">+</button>}
                    position="right top">
                    <div className="DobPizzaMain">
                      <PodCategoriesPizza
                        position={this.props.position}
                        AlertAdd={this.props.AlertAdd}
                        AddD={this.props.AddD}
                        idOrd={this.props.OrdPos.idOrd}
                      />
                    </div>
                  </Popup>
                </td>
                <td className="OrdPosEdit">
                  <button
                    className="OrdButtonEditMinus"
                    id={"buttonMinus" + this.props.OrdPos.idOrd}
                    onClick={() => {
                        if (this.props.OrdPos.num !== 1) 
                        {
                          this.props.BMO(this.props.OrdPos.idOrd)
                        } 
                        else 
                        {
                          this.props.DelOrd(this.props.OrdPos.idOrd)
                        }
                      } /* кнопка "-" отнимает 1 от num*/
                    }>-</button>
                </td>
                <td className="OrdPosNum">
                  <input
                    type="number"
                    className="OrdPosInp"
                    value={this.props.OrdPos.num}
                    id={"ordNum" + this.props.OrdPos.idOrd}
                    onChange={(e) => {
                        if (e.target.value > 99) 
                        {
                          e.target.value = 99
                        }
                        if (e.target.value < 1) 
                        {
                          e.target.value = 1
                        }
                        this.props.EIO(this.props.OrdPos.idOrd, e.target.value)
                      } /*это изменение значения при изменении инпута ручками */
                    }></input>
                </td>
                <td className="OrdPosEdit">
                  <button
                    className="OrdButtonEditPlus"
                    id={"buttonPlus" + this.props.OrdPos.idOrd}
                    onClick={() => {
                        if (this.props.OrdPos.num !== 99) 
                          this.props.BPO(this.props.OrdPos.idOrd)
                      } /* кнопка "+" прибаляет 1  к num*/
                    }>+</button>
                </td>
                <td className="OrdPosPrice" id="ordPrice">
                  {
                    this.props.PDK === 0 ? this.props.OrdPos.price + " руб." : this.props.OrdPos.dkprice + " руб." /*проверка активен ли переключатель цен на дк и вывод цены уже в зависимости от него */
                  }
                </td>
                <td className="OrdPosSum"  data-value={this.props.PDK === 0 ? this.props.OrdPos.totalprice : this.props.OrdPos.totaldkprice} id={"OrdPosTotSum" + this.props.OrdPos.idOrd}>
                  {
                    this.props.PDK === 0 ? this.props.OrdPos.totalprice + " руб." : this.props.OrdPos.totaldkprice * this.props.OrdPos.num + " руб." /*также проверяет ктивен ли переключатель цен на дк и умножает уже цену исходя из активности на num */
                  }
                </td>
              </tr>
            </tbody>
          </table>
          <div>
            {/*ниже слайдер переключения 30см/36см*/}
            <label className="editdiam">
              <input
                type="checkbox"
                checked={false}
                onChange={() => {
                  this.props.EdP(this.props.OrdPos.idOrd); //вызов функции при переключении
                }}
              />
              <span className="editdiamslide round"></span>
            </label>
          </div>
          {this.props.ordDobP.map((el) => (
            <AddDobPizza
              DelDob={this.props.DelDob}
              BPD={this.props.BPD}
              BMD={this.props.BMD}
              EID={this.props.EID}
              idOrd={this.props.OrdPos.idOrd}
              ordDobP={el}
              key={el.idDob}
            />
          ))}
          <div className="OrdPosSouse" id={"OrdPosSouse" + this.props.OrdPos.idOrd} data-value={this.props.OrdPos.soysause > 0 && this.props.OrdPos.soysause * this.props.OrdPos.num}>
                {this.props.OrdPos.soysause > 0 && "Соевых соусов: " + this.props.OrdPos.soysause * this.props.OrdPos.num}
                </div>
        </div>
      )
          }
          else
          {
            return (
                <div className="OrdTB">
        <table>
          <tbody>
            <tr>
              <td className="OrdPosName">
                {
                  this.props.OrdPos.name + " 36см    " /* вывод названия пиццы */
                }
                <Popup
                    trigger={<button className="OpenDobPizza">i</button>}
                    position={ "bottom left"}>
                    <div className="OrdSost">
                     {this.props.OrdPos.sost /*вывод состава позиции*/}
                    </div>
                  </Popup>
                <MdOutlinePercent color="red"/>
                {/*ниже слайдер переключения 30см/36см*/}
                <Popup
                  trigger={<button className="OpenDobPizza">+</button>}
                  position="right top">
                  <div className="DobPizzaMain">
                    <PodCategoriesPizza
                      AlertAdd={this.props.AlertAdd}
                      position={this.props.position}
                      AddD={this.props.AddD}
                      idOrd={this.props.OrdPos.idOrd}/>
                  </div>
                </Popup>
              </td>
              <td className="OrdPosEdit">
                <button
                  className="OrdButtonEditMinus"
                  id={"buttonMinus" + this.props.OrdPos.id}
                  onClick={() => {
                      if (this.props.OrdPos.num !== 1) 
                      {
                        this.props.BMO(this.props.OrdPos.idOrd);
                      } 
                      else 
                      {
                        this.props.DelOrd(this.props.OrdPos.idOrd);
                      }
                    } /* кнопка "-" отнимает 1 от num*/
                  }>-</button>
              </td>
              <td className="OrdPosNum">
                <input
                  type="number"
                  className="OrdPosInp"
                  value={this.props.OrdPos.num}
                  id={"ordNum" + this.props.OrdPos.id}
                  onChange={(e) => {
                      if (e.target.value > 99) 
                      {
                        e.target.value = 99;
                      }
                      if (e.target.value < 1) 
                      {
                        e.target.value = 1;
                      }
                      this.props.EIO(this.props.OrdPos.idOrd, e.target.value)
                    } /*это изменение значения при изменении инпута ручками */
                  }></input>
              </td>
              <td className="OrdPosEdit">
                <button
                  className="OrdButtonEditPlus"
                  id={"buttonPlus" + this.props.OrdPos.id} onClick={() => {
                      if (this.props.OrdPos.num !== 99) 
                        this.props.BPO(this.props.OrdPos.idOrd)
                    } /* кнопка "+" прибаляет 1  к num*/
                  }>+</button>
              </td>
              <td className="OrdPosPrice" id="ordPrice">
                {
                  this.props.PDK === 0 ? this.props.OrdPos.price36 + " руб." : this.props.OrdPos.dkprice36 + " руб." /*проверка активен ли переключатель цен на дк и вывод цены уже в зависимости от него */
                }
              </td>
              <td className="OrdPosSum"  data-value={this.props.PDK === 0 ? this.props.OrdPos.totalprice36 : this.props.OrdPos.totaldkprice36} id={"OrdPosTotSum" + this.props.OrdPos.idOrd}>
                {
                  this.props.PDK === 0 ? this.props.OrdPos.totalprice36 + " руб." : this.props.OrdPos.totaldkprice36 + " руб." /*также проверяет ктивен ли переключатель цен на дк и умножает уже цену исходя из активности на num */
                }
              </td>
            </tr>
          </tbody>
        </table>
        <div>
          <label className="editdiam">
            <input
              type="checkbox"
              checked={true}
              onChange={() => {
                this.props.EdP(this.props.OrdPos.idOrd); //вызов функции при переключении
              }}
            />
            <span className="editdiamslide round"></span>
          </label>
        </div>

        {this.props.ordDobP.map((el) => (
          <AddDobPizza
            DelDob={this.props.DelDob}
            BPD={this.props.BPD}
            BMD={this.props.BMD}
            EID={this.props.EID}
            idOrd={this.props.OrdPos.idOrd}
            ordDobP={el}
            key={el.idDob}
          />
        ))}

        <div className="OrdPosSouse" id={"OrdPosSouse" + this.props.OrdPos.idOrd} data-value={this.props.OrdPos.soysause > 0 && this.props.OrdPos.soysause * this.props.OrdPos.num}>
                {this.props.OrdPos.soysause > 0 && "Соевых соусов: " + this.props.OrdPos.soysause * this.props.OrdPos.num}
                </div>
      </div>
            )
          }
    }
}

export default SaleOFFAddPizza30
