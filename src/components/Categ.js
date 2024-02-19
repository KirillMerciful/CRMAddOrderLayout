import React from "react"

class Categ extends React.Component {
  cat = this.props.cat
  render() {
    if(this.cat.name !== "Добавка К Пицце" && this.cat.name !== "Добавка В Вок")
    if (this.cat.CheckStopList === false)
    {
      return (
        <div className="CatButtons">
          <button
            className="CatButton"
            id={"CatBut" + this.cat.id}
            onClick={() => {
              this.props.EdC(this.cat.name)
            }}>
              {this.cat.name}
          </button>
        </div>
    )
    }
    else
    {
      return (
        <div className="CatButtons">
          <button
            className="CatButton unactive"
            id={"CatBut" + this.cat.id}
            onClick={() => {
              this.props.EdC(this.cat.name, this.cat.CheckStopList)
            }}>
              {this.cat.name}
          </button>
        </div>
      )
    }
  }
}

export default Categ
