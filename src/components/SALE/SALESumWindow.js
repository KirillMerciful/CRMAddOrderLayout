import React from "react"

class SaleSumWindow extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      InpValue: 0,
    }
  }
  render() {
    if (this.props.SSumWindowActive === true)
    {
    return (
      <div className="SaleSumWindowMain">
        <div className="SaleSumWindowContent">
          <div>Введите сумму скидки:</div>
          <div className="SaleWindowInp">
          <input 
            className="SaleWindowInp"
            type="number"
            onChange={((e) =>
              {
                if(e.target.value > 9999)
                {
                  e.target.value = 9999
                }
                if(e.target.value < 0)
                {
                  e.target.value = ""
                }
                if(e.target.value === "00")
                {
                  e.target.value = 0
                }
                this.setState({
                  InpValue: parseInt(e.target.value)
                })
              })}
          ></input>
          </div>
          <div className="SaleWindowButtons">
           <button className="ButtonSaleWindowCancel" onClick={(() => {
            if (this.props.SaleInp === 0 && this.props.Sale === 1)
            this.props.ButtonSaleColor(0)
            this.setState({
              InpValue: 0
            })
            this.props.SaleInpEdit(parseFloat(this.state.InpValue))
           })}>Отмена</button>
           <button className="ButtonSaleWindowOK" onClick={(() => {
            this.props.SaleInpEdit(parseFloat(this.state.InpValue))
            if(this.state.InpValue === 0)
            {
              this.props.ButtonSaleColor(0)
            }
            this.setState({
              InpValue: 0
            })
           })}>Подтвердить</button>
        </div>
      </div>
      </div>
    )
  }
  else
  {
    return(
        <div>

        </div>
    )
  }
}
}

export default SaleSumWindow
