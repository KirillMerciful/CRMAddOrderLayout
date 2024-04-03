import React from 'react';
import City from './City';
import { PiMagnifyingGlass } from "react-icons/pi";
import { IoChevronDown } from "react-icons/io5";
import ContainerCityOrdHead from '../SavedOrders/ContainerCityOrdHead';
import ContainerSteps from './ContainerSteps';

class Cities extends React.Component {  
  constructor(props) {
    super(props)
    this.state = {
        OpenDropDownClearTime: false,
        OpenSearchCity: false,
        ResSearchCity: [],
        inpSearchCity: [],
        InpPage: 1,
        Pages: [],
        Step: 10,
        OpenDropDownStepChanger: false,
    }
    this.ChangeCityCheck = this.ChangeCityCheck.bind(this)
    this.ClearChangeCityCheck = this.ClearChangeCityCheck.bind(this)
    this.ChangeStepPages = this.ChangeStepPages.bind(this)
  }  
    render() {
      return(
        
      <div 
      className='StopListDiv'
      >
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
            placeholder='Поиск филиала'
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
              }, 50)
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
            
        </div>
        <div
        className='StopListCityTableDiv'
        >
          <table className='StopListCityTable'>
            <tbody>
              <tr>
                <td className='ThCityName'>
                    Город
                  </td>
                  <td className='ThCityStreet'>
                    Улица
                  </td>
                  <td className='ThCityDelivery'>
                    Доставка
                  </td>
                  <td className='ThCityTakeaway'>
                    Вынос
                  </td>
                  <td className='ThButtonReset'>
                    
                  </td>
                  <td className='ThCityCondition'>
                    Состояние
                  </td>
                  <td className='ThCityStopList'>
                    Стоплист
                  </td>
              </tr>
            </tbody>  
          </table>
        </div>
        <div 
        className='TableCitiesStopList'>
          {this.state.inpSearchCity.slice(parseInt(this.state.Step) * (parseInt(this.state.InpPage) - 1), parseInt(this.state.Step) * parseInt(this.state.InpPage)).map((el) => (
          <City 
            ChangeConditionCity={this.props.ChangeConditionCity}
            ClearTimeOneCity={this.props.ClearTimeOneCity}  
            ChangeTimeTakeawayCity={this.props.ChangeTimeTakeawayCity}
            ChangeTimeDeliveryCity={this.props.ChangeTimeDeliveryCity}
            City={el}
            position={this.props.position} 
            cat={this.props.cat} 
            ClearStopList={this.props.ClearStopList}
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

          <div 
          className='PageDiv'
          >
            <div
            className='PageButtonMainDiv'
            >
              <div
              className='PageButtonDiv'
              >
                <span
                className='PageButtonDivText'
                >
                  Страница: 
                </span>
                <button
                className={this.state.InpPage !== 1 ? 'PageButton' : 'PageButton Unactived'}
                onClick={() => {
                  if(this.state.InpPage !== 1)
                  this.setState({
                    InpPage: parseInt(this.state.InpPage) - 1
                  })
                }}
                >
                  {"<"}
                </button>
              </div>
            

            {this.state.Pages.map((el) => (
              <div
              className='PageButtonDiv'
              >
              <button
              className={this.state.InpPage === el.Page ? 'PageButton Actived' : 'PageButton'}
              onClick={() => {
                this.setState({
                  InpPage: el.Page
                })
              }}
              >
                {el.Page}
              </button>
              </div>
            ))}

            
              <div
              className='PageButtonDiv'
              >
                <button
                className={this.state.InpPage !== this.state.Pages.length ? 'PageButton' : 'PageButton Unactived'}
                onClick={() => {
                  if(this.state.InpPage !== this.state.Pages.length)
                  this.setState({
                    InpPage: parseInt(this.state.InpPage) + 1
                  })
                }}
                >
                  {">"}
                </button>
              </div>
            </div>

            <div
            className='TextEndPageDiv'
            >
              {this.state.OpenDropDownStepChanger === true &&
                <div
                className='DropDownStepChangerContainer'
                >
                  <div
                  className='DropDownStepChangerMainDiv'
                  >
                  <ContainerSteps 
                  ChangeStepPages={this.ChangeStepPages}
                  />
                </div>
              </div>
              
              }
              <div
              tabIndex={0}
              className={this.state.OpenDropDownStepChanger === false ? 'StepChangerDiv' : "StepChangerDiv OpenDrop"}
              onClick={() => {
                this.setState({
                  OpenDropDownStepChanger: !this.state.OpenDropDownStepChanger
                })
              }}
              onBlur={() => {
                setTimeout(() => {
                  this.setState({
                    OpenDropDownStepChanger: false
                  })
                }, 100)
              }}
              >
                {this.state.Step}
                <IoChevronDown 
                className={this.state.OpenDropDownStepChanger === false ? 'StepChangerIcon' : "StepChangerIcon OpenDrop"}
                
                />
              </div>
              Показано {(10 * (parseInt(this.state.InpPage) - 1)) + 1} - {(parseInt(this.state.Step) * parseInt(this.state.InpPage)) >= this.state.inpSearchCity.length ? this.state.inpSearchCity.length  : parseInt(this.state.Step) * parseInt(this.state.InpPage)} из {this.state.inpSearchCity.length}
            </div>
              
          </div>
      </div>    
      
      )
      
      
    }  
    async componentDidMount(){
     
        this.setState({
          ResSearchCity: [...this.props.City]
        })
        
        this.setState({
          inpSearchCity: [...this.props.City]
        })

        await this.setState

        var PushedPage = []
        for(var i = 1; (i-1) < (Math.ceil(this.state.inpSearchCity.length / parseInt(this.state.Step))); i++)
        {
          PushedPage.push({Page: i})
          this.setState({
            Pages: [...PushedPage]
          })
        }
          
        
    }

    async ChangeCityCheck(e){
      this.setState({
        inpSearchCity: [...this.props.City]
      })

      await this.setState

      this.setState({
        inpSearchCity: this.state.inpSearchCity.filter((el) => el.idCity === e.idCity )
      })

      await this.setState

      var PushedPage = []
        for(var i = 1; (i-1) < (Math.ceil(this.state.inpSearchCity.length / parseInt(this.state.Step))); i++)
        {
          PushedPage.push({Page: i})
          this.setState({
            Pages: [...PushedPage]
          })
        }
      
      this.setState({
        InpPage: 1
      })

      await this.setState
    }

    async ClearChangeCityCheck(){
      this.setState({
        inpSearchCity: [...this.props.City]
      })

      await this.setState

      var PushedPage = []
        for(var i = 1; (i-1) < (Math.ceil(this.state.inpSearchCity.length / parseInt(this.state.Step))); i++)
        {
          PushedPage.push({Page: i})
          this.setState({
            Pages: [...PushedPage]
          })
        }

        this.setState({
          InpPage: 1
        })

      await this.setState
    }

    async ChangeStepPages(val){
      this.setState({
        Step: val
      })

      await this.setState

      var PushedPage = []
        for(var i = 1; (i-1) < (Math.ceil(this.state.inpSearchCity.length / parseInt(this.state.Step))); i++)
        {
          PushedPage.push({Page: i})
          this.setState({
            Pages: [...PushedPage]
          })
        }

    }
  }

  export default Cities