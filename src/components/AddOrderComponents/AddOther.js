import React from "react"
import Popup from "reactjs-popup"

class AddOther extends React.Component {

  render() {
    return (
      <div className="CatButtons">
        <div className="OrdTB">
              <table>
                <tbody>
                  <tr>
                    <td className="OrdPosName">{this.props.OrdPos.name}   
                    <Popup
                    trigger={<button className="OpenDobPizza">i</button>}
                    position={ "bottom left"}>
                    <div className="OrdSost">
                     {this.props.OrdPos.sost /*вывод состава позиции*/}
                    </div>
                  </Popup></td>
                    <td className="OrdPosEdit">
                      <button
                        className="OrdButtonEditMinus"
                        id={"buttonMinus" + this.props.OrdPos.id}
                        onClick={() => {
                            if (this.props.OrdPos.num !== 1) 
                            {
                              this.props.BMO(this.props.OrdPos.idOrd)
                            } else 
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
                        id={"ordNum" + this.props.OrdPos.id}
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
                        id={"buttonPlus" + this.props.OrdPos.id}
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
                    <td className="OrdPosSum" data-value={this.props.PDK === 0 ? this.props.OrdPos.totalprice : this.props.OrdPos.totaldkprice} id={"OrdPosTotSum" + this.props.OrdPos.idOrd}>
                      {
                        this.props.PDK === 0 ? this.props.OrdPos.totalprice + " руб." : this.props.OrdPos.totaldkprice + " руб." /*также проверяет ктивен ли переключатель цен на дк и умножает уже цену исходя из активности на num */
                      }
                    </td>
                  </tr>
                </tbody>
              </table>

              <div className="OrdPosSouse" id={"OrdPosSouse" + this.props.OrdPos.idOrd} data-value={this.props.OrdPos.soysause > 0 && this.props.OrdPos.soysause * this.props.OrdPos.num}>
                {this.props.OrdPos.soysause > 0 && "Соевых соусов: " + this.props.OrdPos.soysause * this.props.OrdPos.num}
                </div>
              
            </div>
      </div>
    )
  }
}

export default AddOther
