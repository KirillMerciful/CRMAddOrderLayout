import React from "react"
import Popup from "reactjs-popup"
import AddSostWOK from "../PodCategWOK/AddSostWOK"
import PodCategoriesWOK from "../PodCategWOK/PodCategoriesWOK"


class AddWOK extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
        PositionPopupTop: 0
}
this.PositionCheck = this.PositionCheck.bind(this) 
  }

  render() {
    
    return (
        <div className="OrdTB" onScroll={(() => {
          if(this.state.PositionPopupTop !== document.getElementById('popup' + this.props.OrdPos.idOrd).getBoundingClientRect().top)
    this.PositionCheck()
        })}>
        <table>
          <tbody>
            <tr>
              <td className="OrdPosName" id={'popup' + this.props.OrdPos.idOrd} >
                {this.props.OrdPos.name}
                
                <Popup
                  trigger={<button className="OpenDobWOK" id={'buttonPopup' + this.props.OrdPos.idOrd} onClick={(() => {
                    this.PositionCheck()
                  })}>+</button>}
                  position={this.state.PositionPopupTop < 590 ? "right top" : "right bottom"}>
                  <div className="DobWOKMain">
                    <PodCategoriesWOK
                      AlertAdd={this.props.AlertAdd}
                      EWN={this.props.EWN}
                      AddSostWOK={this.props.AddSostWOK}
                      position={this.props.position}
                      idOrd={this.props.OrdPos.idOrd}
                    />
                    
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
                  }
                ></input>
              </td>
              <td className="OrdPosEdit">
                <button
                  className="OrdButtonEditPlus"
                  id={"buttonPlus" + this.props.OrdPos.id}
                  onClick={() => {
                      if (this.props.OrdPos.num !== 99)
                        this.props.BPO(this.props.OrdPos.idOrd);
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
                  this.props.PDK === 0 ? this.props.OrdPos.totalprice + " руб." : this.props.OrdPos.totaldkprice + " руб." /*также проверяет ктивен ли переключатель цен на дк и умножает уже цену исходя из активности на num */
                }
              </td>
            </tr>
          </tbody>
        </table>
        {this.props.ordSWOk.map((el) => (
          <AddSostWOK
            ordPos={this.props.OrdPos}
            EISW={this.props.EISW}
            BMSW={this.props.BMSW}
            BPSW={this.props.BPSW}
            deleteSostWOK={this.props.deleteSostWOK}
            ordSWOk={el}
            key={el.idSost}
            idOrd={this.props.idOrd}
          />
        ))}
        
        <div className="OrdPosSouse" id={"OrdPosSouse" + this.props.OrdPos.idOrd} data-value={this.props.OrdPos.soysause > 0 && this.props.OrdPos.soysause * this.props.OrdPos.num}>
                {this.props.OrdPos.soysause > 0 && "Соевых соусов: " + this.props.OrdPos.soysause * this.props.OrdPos.num}
                </div>
      </div>
    )
  }


  componentDidUpdate() {
    if(this.state.PositionPopupTop !== document.getElementById('popup' + this.props.OrdPos.idOrd).getBoundingClientRect().top)
    this.PositionCheck()
  }

  componentDidMount() {
    if(this.state.PositionPopupTop !== document.getElementById('popup' + this.props.OrdPos.idOrd).getBoundingClientRect().top)
    this.PositionCheck()
  }

  PositionCheck() {
    setTimeout(() => {
      this.setState({
        PositionPopupTop: document.getElementById('popup' + this.props.OrdPos.idOrd).getBoundingClientRect().top,
        openPopup: !this.state.openPopup,
        closePopup: !this.state.closePopup
      })
      console.log(this.state.PositionPopupTop)
    }, 1)
  }
}

export default AddWOK
