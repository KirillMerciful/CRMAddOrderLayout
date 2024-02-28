import React from 'react';
import City from './City';

class Cities extends React.Component {    
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
          {this.props.City.map((el) => (<City 
          ChangeConditionCity={this.props.ChangeConditionCity}
          ClearTimeOneCity={this.props.ClearTimeOneCity}  
          ChangeTimeTakeawayCity={this.props.ChangeTimeTakeawayCity}
          ChangeTimeDeliveryCity={this.props.ChangeTimeDeliveryCity}
          City={el}
          position={this.props.position} 
          cat={this.props.cat} 
          StopListChekFunctionPodcatOnCity={this.props.StopListChekFunctionPodcatOnCity}
          StopListChekFunctionOnCity={this.props.StopListChekFunctionOnCity} 
          StopListChekFunctionCatOnCity={this.props.StopListChekFunctionCatOnCity} 
          StopListChecCatOnPositionOnCity={this.props.StopListChecCatOnPositionOnCity}
          key={el.idCity}
          StopList={this.props.StopList}
          StopCat={this.props.StopCat}
          StopPodCat={this.props.StopPodCat}
          />))}
      </div>    
      )
      
      
    }  
  }

  export default Cities