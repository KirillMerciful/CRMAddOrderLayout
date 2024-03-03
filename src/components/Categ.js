import React from "react"

class Categ extends React.Component {
  cat = this.props.cat
  render() {
    if(this.cat.name !== "Добавка К Пицце" && this.cat.name !== "Добавка В Вок")
    {
      return (
        <div className="CatButtons">
          <button
            className={this.cat.CheckStopList === false ? "CatButton" : "CatButton unactive"}
            id={"CatBut" + this.cat.id}
            onClick={() => {
              this.props.EditCat(this.cat.name, this.cat.CheckStopList)
            }}>
              {this.cat.name}
          </button>
        </div>
    )
    }
  }
}

export default Categ
