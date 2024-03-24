import React from 'react';
import City from './City';
import { PiMagnifyingGlass } from "react-icons/pi";
import ContainerCityOrdHead from '../SavedOrders/ContainerCityOrdHead';

class Cities extends React.Component {  
  constructor(props) {
    super(props)
    this.state = {
        OpenDropDownClearTime: false,
        OpenSearchCity: false,
        ResSearchCity: [],
        inpSearchCity: [],
    }
    this.ChangeCityCheck = this.ChangeCityCheck.bind(this)
    this.ClearChangeCityCheck = this.ClearChangeCityCheck.bind(this)
  }  
    render() {
      return(
        
      <div className='StopListDiv'>
        <div
        className='PreHeadMainDiv'
        >
          <div className='PreHeadSearchInputDiv'>
            <div
            className='PreHeadSearchIconDiv'
            onClick={() => {
              document.getElementById('PreHeadSearchInput').focus()
            }}
            >
          <PiMagnifyingGlass
          className='PreHeadSearchIcon' 
          />
            </div>
            <input
            className='PreHeadSearchInput'
            id='PreHeadSearchInput'
            placeholder='Поиск города'
            onFocus={() => {
              this.setState({
                OpenSearchCity: true
              })
            }}
            onBlur={() => {
              setTimeout(() => {
                this.setState({
                  OpenSearchCity: false
                })
                this.setState({
                  ResSearchCity: [...this.props.City]
                })
                document.getElementById('PreHeadSearchInput').value = ""
              },100)
            }}
            onChange={(e) => {
              if(e.target.value !== "")
              {
                  var Val = e.target.value.toLowerCase()
                  var CitySearch = this.props.City.filter(el => {
                  return (el.city + " " + el.street).toLowerCase().includes(Val)
              })
              
              this.setState({
                  ResSearchCity: [...CitySearch]
              })
              }
              else
              {
              this.setState({
                  ResSearchCity: [...this.props.City]
              })
              
              }
          }}
            />
            {this.state.OpenSearchCity === true && 
            <div
            className='ResSearchCityStopListMainDiv'
            >
              {this.state.ResSearchCity.length === this.props.City.length && 
              <div className='ContainerCityMainDiv'>
            
                <div 
                className={'ContainerCityName'}
                onClick={(() => {
                    this.ClearChangeCityCheck()
                })}
                >
                    Все филиалы
                </div>
                
              </div>
              }
              
              {this.state.ResSearchCity.map((el) => (
                <ContainerCityOrdHead 
                ChangeCityCheck={this.ChangeCityCheck}
                City={el}
                key={el.idCity}
                />
              ))}
              
            </div>
            }
          </div>
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
                      this.setState({
                        ResSearchCity: [...this.props.City]
                      })
                  }}
                >Сброс времени</button>
              </div>
              <div>
                <button
                className='ButtonClearTime Down'
                  onClick={() => {
                    this.props.ClearTimeAndConditionAllCity()
                    this.setState({
                      ResSearchCity: [...this.props.City]
                    })
                  }}
                >Сброс полный</button>
            </div>
      </div>
        }
        </div>
        <div>
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
        </div>
        
          {this.state.inpSearchCity.map((el) => (<City 
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
    componentDidMount(){
     
        this.setState({
          ResSearchCity: [...this.props.City]
        })
        
        this.setState({
          inpSearchCity: [...this.props.City]
        })
    }

    async ChangeCityCheck(e){
      this.setState({
        inpSearchCity: [...this.props.City]
      })

      await this.setState

      this.setState({
        inpSearchCity: this.state.inpSearchCity.filter((el) => el.idCity === e.idCity )
      })
    }

    async ClearChangeCityCheck(){
      this.setState({
        inpSearchCity: [...this.props.City]
      })

      await this.setState
    }
  }

  export default Cities