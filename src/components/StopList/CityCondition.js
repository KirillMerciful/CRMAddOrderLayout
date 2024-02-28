import React from 'react';

class CityCondition extends React.Component {   
    constructor(props) {
        super(props)
        this.state = {
            Time: [
                {
                    id: 1,
                    value: "Активен"
                },
                {
                    id: 2,
                    value: "Доставка остановлена"
                },
                {
                    id: 3,
                    value: "Вынос остановлен"
                },
                {
                    id: 4,
                    value: "Полностью остановлен"
                }
            ]
    } 
} 
    render() {
      
      return(
      <div className="ConditionStopListCityMain">
          {this.state.Time.map((el) => 
        <div key={el.id} className="ConditionStopListCity" onClick={(() => {
            this.props.ChangeConditionCity(el.value, this.props.City.idCity)
            this.props.CloseConditionSelector()
        })}> {el.value} </div>
    )}
      </div>    
      )      
      
    }  
  }

  export default CityCondition