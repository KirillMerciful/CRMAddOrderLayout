import React from 'react';
import City from './City';

class Cities extends React.Component {  
  constructor(props) {
    super(props)
    this.state = {
        OpenDropDownClearTime: false
    }
  }  
    render() {
      return(
        
      <div className='StopListDiv'>
        <table className='StopListCityTable'>
          <thead>
            <tr>
              <th className='ThCityName'>
                Город
              </th>
              <th className='ThCityStreet'>
                Улица
              </th>
              <th className='ThCityDelivery'>
                Доставка
              </th>
              <th className='ThCityTakeaway'>
                Вынос
              </th>
              <th className='ThButtonReset'>
                
              </th>
              <th className='ThCityCondition'>
                Состояние
              </th>
              <th className='ThCityStopList'>
                Стоплист
              </th>
              
            </tr>
          </thead>
        </table>
        <div>
        <button
                className={this.state.OpenDropDownClearTime === false ? 'ButtonOpenClearTime' : 'ButtonOpenClearTime Active'}
                tabIndex={1}
                onClick={() =>
                {
                  this.setState({
                    OpenDropDownClearTime: !this.state.OpenDropDownClearTime
                  })
                }}
                onBlur={() => 
                {
                  setTimeout(() => {
                    this.setState({
                      OpenDropDownClearTime: false
                    })
                  }, 100)
                }}
                >
                  Сброс
                </button>
        </div>
        {this.state.OpenDropDownClearTime === true && 
        <div 
        className='ButtonsClearTimeMainDiv'>
          <div>
            <button
            className='ButtonClearTime'
              onClick={() => {
                  this.props.ClearTimeAllCity()
              }}
            >Сброс времени</button>
          </div>
          <div>
            <button
            className='ButtonClearTime Down'
              onClick={() => {
                this.props.ClearTimeAndConditionAllCity()
              }}
            >Сброс полный</button>
            </div>
      </div>
        }
          {this.props.City.map((el) => (<City 
          ChangeConditionCity={this.props.ChangeConditionCity}
          ClearTimeOneCity={this.props.ClearTimeOneCity}  
          ChangeTimeTakeawayCity={this.props.ChangeTimeTakeawayCity}
          ChangeTimeDeliveryCity={this.props.ChangeTimeDeliveryCity}
          City={el}
          position={this.props.position} 
          cat={this.props.cat} 
          StopListChekFunctionOnCity={this.props.StopListChekFunctionOnCity} 
          StopListChekFunctionCatOnCity={this.props.StopListChekFunctionCatOnCity} 
          StopListChecCatOnPositionOnCity={this.props.StopListChecCatOnPositionOnCity}
          key={el.idCity}
          StopList={this.props.StopList}
          StopCat={this.props.StopCat}
          MouseClickX={this.props.MouseClickX}
          MouseClickY={this.props.MouseClickY}
          />))}
      </div>    
      )
      
      
    }  
    
  }

  export default Cities