import React from 'react';
import SavedOrd from './SavedOrd';
import { IoChevronDown } from "react-icons/io5";
import { PiMagnifyingGlass } from "react-icons/pi";
import ContainerStatusOrdHead from './ContainerStatusOrdHead';
import ContainerDateOrdHead from './ContainerDateOrdHead';
import ContainerCityOrdHead from './ContainerCityOrdHead';
import WindowSearch from './WindowSearch';
import WindowPeriod from './WindowPeriod';

class SavedOrdersMain extends React.Component {    
    constructor(props) {
        super(props)
        this.state = {
            OpenDropDownStatus: false,
            StatusCheck: 
            {
                name: "Все статусы",
                value: "All"
            },
            OpenDropDownDate: false,
            OpenDropDownBranch: false,
            OpenModalSearch: false,
            OpenModalPeriod: false,
            SortOrder: [],
            TodayDate: {
                Date: "",
                Mounth: "",
                Year: ""
            },
            TomorrowDate: {
                Date: "",
                Mounth: "",
                Year: ""
            },
            YesterdayDate: {
                Date: "",
                Mounth: "",
                Year: ""
            },
            CheckDate: {
                Date: "",
                Mounth: "",
                Year: ""
            },
            CheckMinDate: {
                Date: false,
                Mounth: false,
                Year: false
            },
            CheckMaxDate: {
                Date: false,
                Mounth: false,
                Year: false
            },
            CheckMounth: false,
            DateName: "Сегодня",
            CheckCity: {
                idCity: 0,
                city: "Все филиалы",
                street: "",
                house: ""
            },
            CheckSearchingDate: false,
            OpenSearchCity: false,
            ResSearchCity: [],
            OrdersNumbers: 20,
            ButtonAddOrdersNumbers: false
        }

        this.SortOrderByStatus = this.SortOrderByStatus.bind(this)
        this.ChangeStatusCheck = this.ChangeStatusCheck.bind(this)
        this.ChangeCityCheck = this.ChangeCityCheck.bind(this)
        this.ChangeDateCheck = this.ChangeDateCheck.bind(this)
        this.ChangeDatePeriodCheck = this.ChangeDatePeriodCheck.bind(this)
        this.ClearCityCheck = this.ClearCityCheck.bind(this)
        this.CloseModalSearch = this.CloseModalSearch.bind(this)
        this.SearchingFunction = this.SearchingFunction.bind(this)
        this.ChangeDateMounthCheck = this.ChangeDateMounthCheck.bind(this)
        this.ChangeDateName = this.ChangeDateName.bind(this)
        this.FunctionOpenModalPeriod = this.FunctionOpenModalPeriod.bind(this)
        this.CloseModalPeriod = this.CloseModalPeriod.bind(this)
        this.SearchingChangeDate = this.SearchingChangeDate.bind(this)
        this.DeleteSavedOrdForInp = this.DeleteSavedOrdForInp.bind(this)
        this.ButtonAddOrdersNumbersCheck = this.ButtonAddOrdersNumbersCheck.bind(this)
        this.DefaultOrdersNumber = this.DefaultOrdersNumber.bind(this)
    }

    render() {
        return(
        <div>
            

            <div 
            tabIndex={100}
            className='SavedHeadMainDiv'
            id="SavedHeadMainDiv"
            
            >
                <div className='SavedHeadOb'>
                    <div
                    className='SavedHeadDivStatusAndDate'
                    >            
                                <div 
                                className={this.state.OpenDropDownStatus === false ?'SavedHeadDiv Status' : "SavedHeadDiv Status OpenDropDown"}
                                tabIndex={1}
                                onFocus={(() => {
                                    this.setState({
                                        OpenDropDownStatus: true
                                    })
                                })}
                                onBlur={(() => {
                                    setTimeout(() => {
                                        this.setState({
                                            OpenDropDownStatus: false
                                        })
                                    }, 100)
                                })}
                                >
                                    {this.state.StatusCheck.name}
                                    <IoChevronDown 
                                    className={this.state.OpenDropDownStatus === false ? 'SavedHeadDivIcon' : 'SavedHeadDivIcon OpenDropDown'}
                                    />
                                    {this.state.OpenDropDownStatus === true && 
                                    <div className='StatusOrdHeadGlobalDiv'>
                                        <ContainerStatusOrdHead
                                        ChangeStatusCheck={this.ChangeStatusCheck}
                                        />
                                    </div>
                                    }
                                </div>
                            
                                <div
                                className={this.state.OpenDropDownDate === false ? 'SavedHeadDiv Date' : 'SavedHeadDiv Date OpenDropDown'}    
                                tabIndex={1}
                                onFocus={(() => {
                                    this.setState({
                                        OpenDropDownDate: true
                                    })
                                })}
                                onBlur={(() => {
                                    setTimeout(() => {
                                        this.setState({
                                            OpenDropDownDate: false
                                        })
                                    }, 100)
                                })}                        
                                >
                                    {this.state.DateName}
                                    {(this.state.DateName === "Сегодня" ||
                                    this.state.DateName === "Завтра" ||
                                    this.state.DateName === "Вчера") &&
                                    " " + this.state.CheckDate.Date + "." + this.state.CheckDate.Mounth + "." + this.state.CheckDate.Year}
                                    <IoChevronDown 
                                    className={this.state.OpenDropDownDate === false ? 'SavedHeadDivIcon' : 'SavedHeadDivIcon OpenDropDown'}
                                    />

                                    {this.state.OpenDropDownDate === true &&
                                        <div className='DateOrdHeadGlobalDiv'>
                                            <ContainerDateOrdHead
                                            TodayDate={this.state.TodayDate}
                                            TomorrowDate={this.state.TomorrowDate}
                                            YesterdayDate={this.state.YesterdayDate}
                                            ChangeDateCheck={this.ChangeDateCheck}
                                            ChangeDatePeriodCheck={this.ChangeDatePeriodCheck}
                                            ChangeDateMounthCheck={this.ChangeDateMounthCheck}
                                            ChangeDateName={this.ChangeDateName}
                                            FunctionOpenModalPeriod={this.FunctionOpenModalPeriod}
                                            />
                                        </div>
                                        }
                                </div>
                            </div>
                            
                                <div
                                className='SavedHeadDiv Sum'
                                >
                                    Сумма
                                </div>
                            
                                <div
                                className='SavedHeadDiv Sale'
                                >
                                    %
                                </div>
                            
                                <div
                                className={this.state.OpenDropDownBranch === false ? 'SavedHeadDiv Branch' : 'SavedHeadDiv Branch OpenDropDown'}
                                tabIndex={1}
                                onFocus={(() => {
                                    this.setState({
                                        OpenDropDownBranch: true
                                    })
                                })}
                                onBlur={(() => {
                                    setTimeout(() => {
                                        this.setState({
                                            OpenDropDownBranch: false
                                        })
                                    }, 100)
                                })}        
                                >
                                    <span className={this.state.CheckCity.idCity !== 0 && "BranchText"}>
                                        {this.state.CheckCity.city + " " + this.state.CheckCity.street + " " + this.state.CheckCity.house}
                                    </span>
                                    <div>
                                    <IoChevronDown 
                                    className={this.state.OpenDropDownBranch === false ? 'SavedHeadDivIcon' : 'SavedHeadDivIcon OpenDropDown'}
                                    />
                                    {this.state.OpenDropDownBranch === true && 
                                    <div
                                    className='CityOrdHeadContainer'
                                    >
                                        <div 
                                        className='CityOrdHeadGlobalDiv'
                                        >
                                            <div 
                                            className='ContainerCityMainDiv'
                                            >
                                                <div 
                                                className={'ContainerCityName'}
                                                onClick={(() => {
                                                    this.ClearCityCheck()
                                                })}
                                                >
                                                    Все филиалы
                                                </div>
                                                
                                            </div>
                                            {this.props.City.map((el) => (
                                                <ContainerCityOrdHead 
                                                ChangeCityCheck={this.ChangeCityCheck}
                                                City={el}
                                                key={el.idCity}
                                                />
                                            ))}
                                        </div>
                                    </div>
                                    }
                                    </div>
                                </div>
                                <div
                                className='SavedHeadDiv Search'
                                >
                                    {this.state.OpenSearchCity === true && 
                                    <div>
                                        <input
                                        className='SavedHeadDivSearchCityInput'
                                        id='SavedHeadDivSearchCityInput'
                                        placeholder='Поиск филиала'
                                        onBlur={() => {
                                            setTimeout(() => {
                                                this.setState({
                                                    ResSearchCity: []
                                                })
                                                this.setState({
                                                    OpenSearchCity: false
                                                })
                                            }, 100)
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
                                                ResSearchCity: []
                                            })
                                            
                                            }
                                        }}
                                        />
                                        {this.state.ResSearchCity.length > 0 && 
                                        <div
                                        className='SavedHeadDivSearchCityContainer'
                                        >
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
                                    }
                                    <PiMagnifyingGlass
                                    className='SavedHeadDivSearchCityIcon'
                                    onClick={() => {
                                        this.setState({
                                            OpenSearchCity: true
                                        })
                                        setTimeout(() => {
                                            document.getElementById('SavedHeadDivSearchCityInput').focus()
                                        },10)
                                    }}
                                    />
                                </div>
                    </div>
                                <div
                                className='SavedHeadDiv Search'
                                onClick={() => {
                                    this.setState({
                                        OpenModalSearch: true
                                    })
                                }}
                                >
                                    <PiMagnifyingGlass
                                    className='SavedHeadDivSearchIcon'
                                    />
                                </div>
                            
            </div>
            <div className='SavedBodyDiv'>
            

                {this.state.SortOrder.slice(0, this.state.OrdersNumbers).map((el) =>
                    <SavedOrd 
                    UsedStatus={this.props.UsedStatus}
                    ButtonAddOrdersNumbers={this.state.ButtonAddOrdersNumbers}
                    AddOrdersNumber={this.AddOrdersNumber}
                    TodayDate={this.state.TodayDate}
                    DeleteSavedOrdForInp={this.DeleteSavedOrdForInp}
                    ChangeStatusSavedOrd={this.props.ChangeStatusSavedOrd}
                    Saved={el}
                    key={el.SavedIdOrd}
                    />
                    
                )}

                {this.state.ButtonAddOrdersNumbers === true && <div
                className='ButtonAddOrdersNumbersDiv'
                >
                    <button
                    className='ButtonAddOrdersNumbers'
                    onClick={() => {
                        this.AddOrdersNumber()
                        console.log(this.state.OrdersNumbers)
                    }}
                    >
                        Показать еще
                    </button>
                </div>}

            </div>  

            {this.state.OpenModalSearch === true &&
            <WindowSearch
            TodayDate={this.state.TodayDate}
            CloseModalSearch={this.CloseModalSearch}
            SearchingFunction={this.SearchingFunction}
            SearchingChangeDate={this.SearchingChangeDate}
            />
            }
            {this.state.OpenModalPeriod === true &&
            <WindowPeriod 
            AlertAdd={this.props.AlertAdd}
            TodayDate={this.state.TodayDate}
            ChangeDateName={this.ChangeDateName}
            ChangeDateCheck={this.ChangeDateCheck}
            CloseModalPeriod={this.CloseModalPeriod}
            ChangeDatePeriodCheck={this.ChangeDatePeriodCheck}
            />      
            }
        </div>  
        )  
      
      
    }  
    async componentDidMount(){
        
        //сортировка по времени
        this.props.Saved.sort((a, b) => b.orderDetal[0].TimeSave[0].Hour - a.orderDetal[0].TimeSave[0].Hour === 0 ? b.orderDetal[0].TimeSave[0].Minutes - a.orderDetal[0].TimeSave[0].Minutes : b.orderDetal[0].TimeSave[0].Hour - a.orderDetal[0].TimeSave[0].Hour)
        
        this.setState({
            CheckMinDate: {
                Date: false,
                Mounth: false,
                Year: false
            }
        })

        this.setState({
            CheckMaxDate: {
                Date: false,
                Mounth: false,
                Year: false
            }
        })

        this.setState({
            CheckMounth: false
        })

        this.setState({
            CheckCity: {
                idCity: 0,
                city: "Все филиалы",
                street: "",
                house: ""
            }
        })
        
        var today = new Date()
        //присваивание сегоднящней даты
           this.setState({
            TodayDate: {
                Date: String(today.getDate()).padStart(2, "0"),
                Mounth: String(today.getMonth() + 1).padStart(2, "0"),
                Year: String(today.getFullYear())
            }
           })
        
        //присваивание сегоднящней даты в стейт где будет хранится выбранная дата
           this.setState({
            CheckDate: {
                Date: String(today.getDate()).padStart(2, "0"),
                Mounth: String(today.getMonth() + 1).padStart(2, "0"),
                Year: String(today.getFullYear())
            }
           })



           //обнуление выбранных статусов
           this.setState({
            StatusCheck: {
                name: "Все статусы",
                value: "All"
            }
           })
        await this.setState

        //сортировка по сегоднящней дате
        this.setState({
            SortOrder: this.props.Saved.filter((el) => 
            parseInt(el.orderDetal[0].DateSave[0].Date) === parseInt(this.state.CheckDate.Date) &&
            parseInt(el.orderDetal[0].DateSave[0].Mounth) === parseInt(this.state.CheckDate.Mounth) &&
            parseInt(el.orderDetal[0].DateSave[0].Year) === parseInt(this.state.CheckDate.Year)
            )
       })

       await this.setState

        this.DefaultOrdersNumber()
       //Ниже проверка завтращней даты, чтобы не было 32.03.2024 например
       var TommorowDay = String(today.getDate() + 1).padStart(2, "0")
       var TommorowMounth = String(today.getMonth() + 1).padStart(2, "0")
       var TommorowYear = String(today.getFullYear())

       if(TommorowMounth === "01" || TommorowMounth === "03" || TommorowMounth === "05" || TommorowMounth === "07" || TommorowMounth === "08" || TommorowMounth === "10" || TommorowMounth === "12")
       {
        if(parseInt(TommorowDay) > 31)
        {
            TommorowDay = String(parseInt(TommorowDay) - 31).padStart(2, "0")
            TommorowMounth = String(parseInt(TommorowMounth) + 1).padStart(2, "0")
                if(parseInt(TommorowMounth) === 13)
                {
                    TommorowMounth = String(parseInt(TommorowMounth) - 12).padStart(2, "0")
                    TommorowYear = String(parseInt(TommorowYear) + 1)
                }
        }
       }
       else
       {
        if(TommorowMounth === "02")
            {
                if(parseInt(TommorowDay) > 28)
                {
                    TommorowDay = String(parseInt(TommorowDay) - 28).padStart(2, "0")
                    TommorowMounth = String(parseInt(TommorowMounth) + 1).padStart(2, "0")
                }
            }
            else
            {
                if(parseInt(TommorowDay) > 30)
                {
                    TommorowDay = String(parseInt(TommorowDay) - 30).padStart(2, "0")
                    TommorowMounth = String(parseInt(TommorowMounth) + 1).padStart(2, "0")
                }
            }
       }
       this.setState({
        TomorrowDate: {
            Date: TommorowDay,
            Mounth: TommorowMounth,
            Year: TommorowYear
        }  
       })

       //Ниже проверка вчерашней даты, чтобы не было 00.03.2024/-01.03.2024 например
       var YesterdayDay = String(today.getDate() - 1).padStart(2, "0")
       var YesterdayMounth = String(today.getMonth() + 1).padStart(2, "0")
       var YesterdayYear = String(today.getFullYear())

       if(YesterdayDay === "00")
       {
        YesterdayMounth = String(parseInt(TommorowMounth) - 1).padStart(2, "0")
        if(YesterdayMounth === "00")
        {
            YesterdayYear = String(parseInt(YesterdayYear) - 1)
            YesterdayMounth = "01"
            YesterdayDay = "31"
        }
        else
        {
            if(YesterdayMounth === "01" || YesterdayMounth === "03" || YesterdayMounth === "05" || YesterdayMounth === "07" || YesterdayMounth === "08" || YesterdayMounth === "10" || YesterdayMounth === "12")
            {
                YesterdayDay = "31"
            }
            else
            {
                if(YesterdayMounth === "02")
                {
                    YesterdayDay = "28"
                }
                else
                {
                    YesterdayDay="30"
                }
            }
        }
       }
       this.setState({
        YesterdayDate: {
            Date: YesterdayDay,
            Mounth: YesterdayMounth,
            Year: YesterdayYear
        }
       })
    }


    async ChangeStatusCheck(inp){//ввод данных для сортировки по статусу
        this.setState({
            StatusCheck: {
                name: inp.name,
                value: inp.value
            }
        })
        await this.setState
        this.SortOrderByStatus()
    }

    async ChangeDateCheck(inpDate, inpMounth, inpYear){//ввод данных для сортировки по дате
        this.setState({
            CheckDate: {
                Date: inpDate,
                Mounth: inpMounth,
                Year: inpYear
            }
        })

        this.setState({
            CheckMinDate: {
                Date: false,
                Mounth: false,
                Year: false
            }
        })

        this.setState({
            CheckMaxDate: {
                Date: false,
                Mounth: false,
                Year: false
            }
        })

        this.setState({
            CheckMounth: false
        })

        

        await this.setState
        this.SortOrderByStatus()
    }

    async ChangeDatePeriodCheck(MinDay, MinMounth, MinYear, MaxDay, MaxMounth, MaxYear){
        this.setState({
            CheckMinDate: {
                Date: MinDay,
                Mounth: MinMounth,
                Year: MinYear
            }
        })

        this.setState({
            CheckMaxDate: {
                Date: MaxDay,
                Mounth: MaxMounth,
                Year: MaxYear
            }
        })

        this.setState({
            CheckMounth: false
        })

        this.setState({
            CheckDate: {
                Date: this.state.TodayDate.Date,
                Mounth: this.state.TodayDate.Mounth,
                Year: this.state.TodayDate.Year
            }
           })

        await this.setState
        this.SortOrderByStatus()
    }

    async ChangeDateMounthCheck(val){
        this.setState({
            CheckMounth: val
        })

        this.setState({
            CheckDate: {
                Date: this.state.TodayDate.Date,
                Mounth: this.state.TodayDate.Mounth,
                Year: this.state.TodayDate.Year
            }
           })

           this.setState({
            CheckMinDate: {
                Date: false,
                Mounth: false,
                Year: false
            }
        })

        this.setState({
            CheckMaxDate: {
                Date: false,
                Mounth: false,
                Year: false
            }
        })

        await this.setState
        this.SortOrderByStatus()
    }

    async ChangeDateName(name){
        this.setState({
            DateName: name
        })
    }

    async ChangeCityCheck(el){//ввод данных для сортировки по точке
        this.setState({
            CheckCity: {
                idCity: el.idCity,
                city: el.city,
                street: el.street,
                house: el.house
            }
        })
        await this.setState
        this.SortOrderByStatus()
    }

    async ClearCityCheck(){
        this.setState({
            CheckCity: {
                idCity: 0,
                city: "Все филиалы",
                street: "",
                house: ""
            }
        })
        await this.setState
        this.SortOrderByStatus()
    }

    async SortOrderByStatus(){
        this.setState({//ввод изначального массива в отсортированный
            SortOrder: [...this.props.Saved]
        })

        await this.setState
        if(this.state.CheckMounth === false)
        {
            if(this.state.CheckMaxDate.Date === false)
            {
                this.setState({//сортировка по дате
                    SortOrder: this.state.SortOrder.filter((el) => 
                    parseInt(el.orderDetal[0].DateSave[0].Date) === parseInt(this.state.CheckDate.Date) &&
                    parseInt(el.orderDetal[0].DateSave[0].Mounth) === parseInt(this.state.CheckDate.Mounth) &&
                    parseInt(el.orderDetal[0].DateSave[0].Year) === parseInt(this.state.CheckDate.Year)
                    )
                })
            }
            else
            {
                this.setState({//сортировка по периоду
                    SortOrder: this.state.SortOrder.filter((el) => 
                    parseInt(el.orderDetal[0].DateSave[0].Date) >= parseInt(this.state.CheckMinDate.Date) &&
                    parseInt(el.orderDetal[0].DateSave[0].Date) <= parseInt(this.state.CheckMaxDate.Date) &&
                    parseInt(el.orderDetal[0].DateSave[0].Mounth) >= parseInt(this.state.CheckMinDate.Mounth) &&
                    parseInt(el.orderDetal[0].DateSave[0].Mounth) <= parseInt(this.state.CheckMaxDate.Mounth) &&
                    parseInt(el.orderDetal[0].DateSave[0].Year) >= parseInt(this.state.CheckMinDate.Year) &&
                    parseInt(el.orderDetal[0].DateSave[0].Year) <= parseInt(this.state.CheckMaxDate.Year)
                    )
                })
            }
        }
        else
        {
            this.setState({//сортировка по месяцу
                SortOrder: this.state.SortOrder.filter((el) => 
                parseInt(el.orderDetal[0].DateSave[0].Mounth) === parseInt(this.state.CheckMounth)
                )
            })
        }

        await this.setState

        if(this.state.CheckCity.idCity !== 0)
        {
        this.setState({//сортировка по точке
            SortOrder: this.state.SortOrder.filter((el) => 
            el.orderCity[0].idCity === this.state.CheckCity.idCity
            )
        })
        
        await this.setState
        }

        if(this.state.StatusCheck.value !== "All")//сортировка по статусу
        {
            this.setState({
                SortOrder: this.state.SortOrder.filter((el) => el.orderDetal[0].Status === this.state.StatusCheck.value)
            })
            
        }

        await this.setState
        this.DefaultOrdersNumber()
        document.getElementById('SavedHeadMainDiv').focus()
    }

    CloseModalSearch(){
        this.setState({
            OpenModalSearch: false
        })
    }

    async SearchingChangeDate(name, val) {
        this.setState({
            CheckSearchingDate: name
            
        })

        await this.setState
        this.SearchingFunction(val)
        
    }

    async SearchingFunction(val){
        this.setState({//ввод изначального массива в отсортированный
            SortOrder: [...this.props.Saved]
        })

        await this.setState

        switch(this.state.CheckSearchingDate){
            default:{
                this.setState({//сортировка по сегоднящней дате
                    SortOrder: this.state.SortOrder.filter((el) => 
                    parseInt(el.orderDetal[0].DateSave[0].Date) === parseInt(this.state.TodayDate.Date) &&
                    parseInt(el.orderDetal[0].DateSave[0].Mounth) === parseInt(this.state.TodayDate.Mounth) &&
                    parseInt(el.orderDetal[0].DateSave[0].Year) === parseInt(this.state.TodayDate.Year)
                    )
               })
               break
            }
            case("Mounth"):{
                this.setState({//сортировка по месяцу
                    SortOrder: this.state.SortOrder.filter((el) => 
                    parseInt(el.orderDetal[0].DateSave[0].Mounth) === parseInt(this.state.TodayDate.Mounth) 
                    )
               })
               break
            }
            case("Year"):{
                this.setState({//сортировка по сегоднящней году
                    SortOrder: this.state.SortOrder.filter((el) => 
                    parseInt(el.orderDetal[0].DateSave[0].Year) === parseInt(this.state.TodayDate.Year)
                    )
               })
               break
            }
            case("Week"):{
                
                var today = new Date()
                var MinDay = String(today.getDate() - 7).padStart(2, "0")
                if(parseInt(MinDay) <= 0)
                {
                    MinDay = "01"
                }
                
                
                this.setState({
                    CheckMinDate:{
                        Date: String(today.getDate() - 7).padStart(2, "0"),
                        Mounth: this.state.TodayDate.Mounth,
                        Year: this.state.TodayDate.Year
                    }
                })

                this.setState({
                    CheckMaxDate:{
                        Date: this.state.TodayDate.Date,
                        Mounth: this.state.TodayDate.Mounth,
                        Year: this.state.TodayDate.Year
                    }
                })

                await this.setState

                if(this.state.CheckMinDate.Date <= 0)
                {
                    this.setState({
                        Date: "01",
                        Mounth: this.state.TodayDate.Mounth,
                        Year: this.state.TodayDate.Year
                    })
                }

                await this.setState

                this.setState({//сортировка по периоду
                    SortOrder: this.state.SortOrder.filter((el) => 
                    parseInt(el.orderDetal[0].DateSave[0].Date) >= parseInt(this.state.CheckMinDate.Date) &&
                    parseInt(el.orderDetal[0].DateSave[0].Date) <= parseInt(this.state.CheckMaxDate.Date) &&
                    parseInt(el.orderDetal[0].DateSave[0].Mounth) >= parseInt(this.state.CheckMinDate.Mounth) &&
                    parseInt(el.orderDetal[0].DateSave[0].Mounth) <= parseInt(this.state.CheckMaxDate.Mounth) &&
                    parseInt(el.orderDetal[0].DateSave[0].Year) >= parseInt(this.state.CheckMinDate.Year) &&
                    parseInt(el.orderDetal[0].DateSave[0].Year) <= parseInt(this.state.CheckMaxDate.Year)
                    )
                })

                
            }
        }
        
        
        
            

        await this.setState

        this.setState({
            SortOrder: this.state.SortOrder.filter((el) => el.SavedIdOrd === val)
        })

        await this.setState
        this.DefaultOrdersNumber()
        if(this.state.SortOrder.length > 0)
        {
            this.CloseModalSearch()
        }
        else
        {
            this.props.AlertAdd("FailSearch")
            document.getElementById('WindowSearchInput').classList.add('Fail')
            document.getElementById('WindowSearchInput').value = ""
            this.SortOrderByStatus()
            console.log(this.props.AlertCheck)
        }
        
    }

    FunctionOpenModalPeriod(){
        this.setState({
        OpenModalPeriod: true
        })
    }

    CloseModalPeriod(){
        this.setState({
        OpenModalPeriod: false
        })
    }

    
    DeleteSavedOrdForInp(id){
        this.setState({
            SortOrder: this.state.SortOrder.filter((el) => el.SavedIdOrd !== id)
        })
        this.props.DeleteSavedOrd(id)
    }

    async ButtonAddOrdersNumbersCheck(){
        if(this.state.OrdersNumbers < this.state.SortOrder.length)
        {
            this.setState({
                ButtonAddOrdersNumbers: true
            })
        }
        else
        {
            this.setState({
                ButtonAddOrdersNumbers: false
            })
        }
        await this.setState
    }

    async DefaultOrdersNumber(){
        this.setState({
            OrdersNumbers: 20
        })
        await this.setState
        this.ButtonAddOrdersNumbersCheck()
    }

    async AddOrdersNumber() {
        this.setState({
            OrdersNumbers: this.state.OrdersNumbers + 20
        })
        await this.setState
        this.ButtonAddOrdersNumbersCheck()
    }
  }


  export default SavedOrdersMain