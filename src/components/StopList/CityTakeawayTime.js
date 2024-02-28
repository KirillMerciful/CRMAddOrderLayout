import React from 'react';

class CityTakeawayTime extends React.Component {   
    constructor(props) {
        super(props)
        this.state = {
            Time: [
                {
                    id: 1,
                    value: 20
                },
                {
                    id: 2,
                    value: 30
                },
                {
                    id: 3,
                    value: 40
                },
                {
                    id: 4,
                    value: 50
                },
                {
                    id: 5,
                    value: 60
                },
            ]
    } 
} 
    render() {
      
      return(
      <div className="CityDeliveryTimeMain">
          {this.state.Time.map((el) => 
        <div key={el.id} className="CityDeliveryTime" onClick={(() => {
            this.props.ChangeTimeTakeawayCity(el.value, this.props.City.idCity)
            this.props.CloseTimeTakeawaySelector()
        })}> {el.value} </div>
    )}
      </div>    
      )      
      
    }  
  }

  export default CityTakeawayTime