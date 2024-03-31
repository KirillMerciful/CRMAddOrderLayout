import React from 'react';

class CityDeliveryTime extends React.Component {   
    constructor(props) {
        super(props)
        this.state = {
            Time: [
                {
                    id: 1,
                    value: 60
                },
                {
                    id: 2,
                    value: 75
                },
                {
                    id: 3,
                    value: 90
                },
                {
                    id: 4,
                    value: 105
                },
                {
                    id: 5,
                    value: 120
                },
            ]
    } 
} 
    render() {
      
      return(
      <div className="CityDeliveryTimeMain">
          {this.state.Time.map((el) => 
          
        <div 
        className="CityDeliveryTime" 
        onClick={(() => {
            this.props.ChangeTimeDeliveryCity(el.value, this.props.City.idCity)
            this.props.CloseTimeDeliverySelector()
        })}> {el.value} </div>
    )}
      </div>    
      )      
      
    }  
  }

  export default CityDeliveryTime