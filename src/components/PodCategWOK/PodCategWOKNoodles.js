import React from "react"

class PodCategWOKNoodles extends React.Component {
  podcat = this.props.podcat
  render() {
    if (this.podcat.categ === "ВОК" && this.podcat.dobcheck === false)
    if(this.podcat.CheckStopList === false)
    {
      return (
        <div className="PodCatButtonsWOK">
          <button
            className="PodCatButtonWOK"
            id={"PodCatButWOK" + this.podcat.id}
            onClick={() => {
              this.props.EWN(this.podcat, this.props.idOrd);
            }}>
            {this.podcat.name}
            <div>{this.podcat.price + "руб."}</div>
          </button>
        </div>
      )
          }
          else
          {
            return (
              <div className="PodCatButtonsWOK">
                <button
                  className="PodCatButtonWOK unactive"
                  id={"PodCatButWOK" + this.podcat.id}
                  onClick={() => {
                    this.props.AlertAdd("Stop");
                  }}>
                  {this.podcat.name}
                  <div>{this.podcat.price + "руб."}</div>
                </button>
              </div>
            )
          }
  }
}

export default PodCategWOKNoodles
