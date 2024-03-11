import React from "react"

class AddMarksOnOrder extends React.Component {
  
  render() {
    
      return (
        <div>
          <button className={this.props.MarksOrder.Active === true ? "MarkButton Active" : "MarkButton"}
          onClick={() => {
           this.props.ClickMarksButton(this.props.MarksOrder.idMark)
           console.log(this.props.MarksOrder)
          }}>
            {this.props.MarksOrder.name}
            </button>
        </div>
    )
    
  }
}

export default AddMarksOnOrder
