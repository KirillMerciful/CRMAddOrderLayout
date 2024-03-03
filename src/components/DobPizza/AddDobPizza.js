import React from "react"

class AddDobPizza extends React.Component {
  render() {
    if (this.props.ordDobP.idOrd === this.props.idOrd)
      if (this.props.ordDobP.id > 0)
        return (
          <div className="OrdDobTB">
            <table>
              <tbody>
                <tr>
                  <td className="OrdDobName">
                    {"-- " + this.props.ordDobP.name}
                  </td>
                  <td className="OrdDobEdit">
                    <button
                      className="OrdDobButtonEditMinus"
                      id={"buttonDobMinus" + this.props.ordDobP.idDob} onClick={() => {
                        if (this.props.ordDobP.num !== 1) 
                        {
                          this.props.BMinusDob(this.props.ordDobP.idDob);
                        } 
                        else 
                        {
                          this.props.DelDob(this.props.ordDobP.idDob);
                        }}}/* кнопка "-" отнимает 1 от num*/
                    >-</button>
                  </td>
                  <td className="OrdDobNum">
                    <input
                      type="number"
                      className="OrdDobInp"
                      value={this.props.ordDobP.num}
                      id={"ordDobNum" + this.props.ordDobP.idDob} onChange={(e) => {
                          if (e.target.value > 99) 
                          {
                            e.target.value = 99;
                          }
                          if (e.target.value < 1) 
                          {
                            e.target.value = 1;
                          }
                          this.props.EditInputDob(this.props.ordDobP.idDob, e.target.value)
                        } /*это изменение значения при изменении инпута ручками */
                      }
                    ></input>
                  </td>
                  <td className="OrdDobEdit">
                    <button
                      className="OrdDobButtonEditPlus"
                      id={"buttonDobPlus" + this.props.ordDobP.idDob}
                      onClick={() => {
                        if (this.props.ordDobP.num !== 99)
                          this.props.BPlusDob(this.props.ordDobP.idDob);
                      }}
                      /* кнопка "+" прибаляет 1  к num */>+</button>
                  </td>
                  <td className="OrdDobPrice">
                    {this.props.ordDobP.price + " руб."}
                  </td>
                  <td className="OrdDobSum" data-value={this.props.ordDobP.totalprice} id={"OrdDobTotSum" + this.props.ordDobP.idDob}>
                    {this.props.ordDobP.totalprice + " руб."}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        )
  }
}

export default AddDobPizza
