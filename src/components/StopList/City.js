import React from 'react';
import { IoChevronDown, IoArrowUndo } from "react-icons/io5";
import StopCategoriesOnCity from './StopCategoriesOnCity';
import StopPodCatOnCity from './StopPodCatOnCity';
import CityDeliveryTime from './CityDeliveryTime';
import CityTakeawayTime from './CityTakeawayTime';
import CityCondition from './CityCondition';

class City extends React.Component {    
  constructor(props) {
    super(props)
    this.state = {
        OpenDropDown: false,
        OpenDropDownDelivery: false,
        OpenDropDownTakeaway: false,
        OpenDropDownCondition: false,
        SearchVal: "",
        ResSearch: [

        ],
} 
this.CloseTimeDeliverySelector = this.CloseTimeDeliverySelector.bind(this)
this.CloseTimeTakeawaySelector = this.CloseTimeTakeawaySelector.bind(this)
this.CloseConditionSelector = this.CloseConditionSelector.bind(this)

}
    render() {
      
      return(
      <div className='StopListCity'>
        <div>
          
        </div>
        <table className='StopListCityTableOneCity'>
          <tbody>
            <tr>
              <td className='ThCityName'>
                {this.props.City.city}
              </td>
              <td className='ThCityStreet'>
                {this.props.City.street}
              </td>
              <td className='ThCityDelivery'>
                <div 
                className={this.state.OpenDropDownDelivery === true ? 'TimeDeliveryStopListMain OpenDrop' : 'TimeDeliveryStopListMain'} 
                tabIndex="0"
                onClick={(() => {
                  this.setState({
                    OpenDropDownDelivery: !this.state.OpenDropDownDelivery
                  })
                })}
                onBlur={(() => {
                  setTimeout(() => {
                    this.CloseTimeDeliverySelector()
                  }, 100)
                })}
                >
                  <span className='TimeDeliveryStopList'>{this.props.City.delivery}</span>
                  <IoChevronDown className={this.state.OpenDropDownDelivery === true ? 'TimeDeliveryStopListIcon OpenDrop' : 'TimeDeliveryStopListIcon'}/>
                  
                </div>
                <div className={this.state.OpenDropDownDelivery === true ? 'TimeDeliverySelector OpenDrop' : 'TimeDeliverySelector'}>
                {this.state.OpenDropDownDelivery === true && 
                <CityDeliveryTime 
                City={this.props.City}
                CloseTimeDeliverySelector={this.CloseTimeDeliverySelector}
                ChangeTimeDeliveryCity={this.props.ChangeTimeDeliveryCity}
                />
                }
                  </div>
              </td>
              <td className='ThCityTakeaway'>
                <div 
                className={this.state.OpenDropDownTakeaway === true ? 'TimeTakeAwayStopListMain OpenDrop' : 'TimeTakeAwayStopListMain'} 
                tabIndex="0"
                onClick={(() => {
                  this.setState({
                    OpenDropDownTakeaway: !this.state.OpenDropDownTakeaway
                  })
                })}
                onBlur={(() => {
                  setTimeout(() => {
                    this.CloseTimeTakeawaySelector()
                  }, 100)
                })}
                >
                  <span className='TimeeTakeAwayStopList'>{this.props.City.takeaway}</span>
                  <IoChevronDown className={this.state.OpenDropDownTakeaway === true ? 'TimeeTakeAwayStopListIcon OpenDrop' : 'TimeeTakeAwayStopListIcon'}/>
                </div>
                <div className={this.state.OpenDropDownTakeaway === true ? 'TimeTakeawaySelector OpenDrop' : 'TimeTakeawaySelector'}>
                  {this.state.OpenDropDownTakeaway === true && 
                  <CityTakeawayTime 
                  City={this.props.City}
                  ChangeTimeTakeawayCity={this.props.ChangeTimeTakeawayCity}
                  CloseTimeTakeawaySelector={this.CloseTimeTakeawaySelector}
                  />
                  }
                </div>
              </td>
                <td className='ThButtonReset'> 
                  <button className='ButtonResetTimeOneCity' 
                  
                  onClick={(() => {
                    this.props.ClearTimeOneCity(this.props.City.idCity)
                  })}
                  
                  ><IoArrowUndo/></button>
                </td>
              <td className='ThCityCondition'>
                <div 
                className={this.state.OpenDropDownCondition === true ? 'CityConditionMainDiv OpenDrop' : "CityConditionMainDiv"} 
                tabIndex="0"
                onClick={(() => {
                  this.setState({
                    OpenDropDownCondition: !this.state.OpenDropDownCondition
                  })
                })}
                onBlur={(() => {
                  setTimeout(() => {
                    this.CloseConditionSelector()
                  }, 100)
                })}
                >
                  <span className='ConditionStopListText'>{this.props.City.condition}</span>
                  <IoChevronDown className={this.state.OpenDropDownCondition === true ? 'CityConditionIcon OpenDrop' : 'CityConditionIcon'}/>

                </div>
                <div className={this.state.OpenDropDownCondition === true ? "ConditionSelector OpenDrop" : "ConditionSelector"}>
                {this.state.OpenDropDownCondition === true && <CityCondition 
                  CloseConditionSelector={this.CloseConditionSelector}
                  City={this.props.City}
                  ChangeConditionCity={this.props.ChangeConditionCity}
                  />}
                </div>
              </td>
              <td className='TdCityStopList'>
                <div
                id={'ClickedInputStopListCityDiv' + this.props.City.idCity}
                className='ClickedInputStopListCityDiv'
                tabIndex={0}
                onFocus={(() => {
                  setTimeout(() => {
                    this.setState({
                      OpenDropDown: true
                    })
                    setTimeout(() => {
                      if(this.state.OpenDropDown === true)
                      this.props.StopListChecCatOnPositionOnCity(this.props.City.idCity)
                      
                  }, 0.0001)
                  }, 100)

                  
                })}
                onBlur={(() => {
                  setTimeout(() => {
                    this.setState({
                      OpenDropDown: false
                    })
                  }, 100)
                })}
                >
                  <div className='InputStopListCityDiv'>
                <input
                placeholder='Стоплист'
                className={this.state.OpenDropDown === true ? 'InputStopListCity OpenDrop' : 'InputStopListCity'}
                onChange={((e) => {
                  this.setState({
                    SearchVal: e.target.value
                  })
                  this.SearchPos()
                })}
                 >
                </input>
               
                </div>
                <div className={this.state.OpenDropDown === true ? 'StopListOnCityUpdate OpenStop' : 'StopListOnCityUpdate'}>
                {this.state.OpenDropDown === true && this.props.StopCat.map((el) => (<StopCategoriesOnCity
                  StopListChekFunctionOnCity={this.props.StopListChekFunctionOnCity} 
                  StopListChekFunctionCatOnCity={this.props.StopListChekFunctionCatOnCity} 
                  StopCat={el}
                  StopList={this.state.ResSearch}
                  City={this.props.City}
                  key={el.id + " " + el.idCity}
                  />
                ))}
                
                  
                </div>

                </div>
                <div>
                <IoChevronDown 
                className={this.state.OpenDropDown === true ? 'InputStopListCityIcon OpenDrop' : 'InputStopListCityIcon'}
                onClick={(() => {
                  if(this.state.OpenDropDown === false)
                  {
                    document.getElementById('ClickedInputStopListCityDiv' + this.props.City.idCity).focus()
                  }
                })}
                
                />
                </div>
                
                
              </td>
            </tr>
          </tbody>
        </table>
        
      </div>    
      
      )
      
      
    }  

   
    
    
    componentDidMount()
    {
      this.SearchPos()
      if(this.state.OpenDropDownDelivery === true)
      document.body.addEventListener('onClick', this.CloseTimeDeliverySelector());
    }

    
    async SearchPos(){
      var SearchingPos = this.props.StopList.filter(pos => {
        return pos.name.toLowerCase().includes(this.state.SearchVal)
      })
      if(this.state.SearchVal)
      {
      this.setState({
        ResSearch: [...SearchingPos]
      })
      }
      else
      {
      this.setState({
        ResSearch: [...this.props.StopList]
      })
     }
      await this.setState
    }

    CloseTimeDeliverySelector(){
      this.setState({
        OpenDropDownDelivery: false
      })
    }

    CloseTimeTakeawaySelector(){
      this.setState({
        OpenDropDownTakeaway: false
      })
    }

    CloseConditionSelector(){
      this.setState({
        OpenDropDownCondition: false
      })
    }

  }

  export default City