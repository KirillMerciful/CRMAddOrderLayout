import React from "react"

class CityList extends React.Component {
  render() {
    
      return (
        <div className="CityListMain" onClick={(() => {
            this.props.CityChange(this.props.City)
           
            
        })}>
          {this.props.City.city + " " + this.props.City.street}
        </div>
    )
    }
    
}

export default CityList
