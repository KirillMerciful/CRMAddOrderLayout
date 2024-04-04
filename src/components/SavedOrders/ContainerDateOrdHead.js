import React from 'react';



class ContainerDateOrdHead extends React.Component {    
    constructor(props) {
        super(props)
        this.state = {
            CheckDate:[
                {
                    id: 0,
                    name: "Завтра",
                    value: "Tomorrow",
                },
                {
                    id: 1,
                    name: "Сегодня",
                    value: "Today"
                },
                {
                    id: 2,
                    name: "Вчера",
                    value: "Yesterday"
                },
                {
                    id: 3,
                    name: "Неделя",
                    value: "Week"
                },
                {
                    id: 4,
                    name: "Месяц",
                    value: "Mounth"
                },
                {
                    id: 5,
                    name: "Период",
                    value: "Period"
                }
            ]
        }
    } 
    render() {
        
        return(
            
        <div className='DateOrdHeadMainDiv'>
            {this.state.CheckDate.map((el) => 
            <div 
            className={'ContainerDateOneStatusHeadDiv'}
            onClick={(() => {
                var inpDate = 0
                var inpMounth = 0
                var inpYear = 0
                switch(el.value) {
                    default:{
                        inpDate = this.props.TodayDate.Date
                        inpMounth = this.props.TodayDate.Mounth
                        inpYear = this.props.TodayDate.Year
                        this.props.ChangeDateCheck(inpDate, inpMounth, inpYear)
                        this.props.ChangeDateName(el.name)
                        break
                    }
                    case("Tomorrow"):{
                        inpDate = this.props.TomorrowDate.Date
                        inpMounth = this.props.TomorrowDate.Mounth
                        inpYear = this.props.TomorrowDate.Year
                        this.props.ChangeDateCheck(inpDate, inpMounth, inpYear)
                        this.props.ChangeDateName(el.name)
                        break
                    }
                    case("Yesterday"):{
                        inpDate = this.props.YesterdayDate.Date
                        inpMounth = this.props.YesterdayDate.Mounth
                        inpYear = this.props.YesterdayDate.Year
                        this.props.ChangeDateCheck(inpDate, inpMounth, inpYear)
                        this.props.ChangeDateName(el.name)
                        break
                    }
                    case("Week"):{
                        var today = new Date()
                        
                        var MinMounth = String(today.getMonth() + 1).padStart(2, "0")
                        var MinYear = String(today.getFullYear())
                        var MinWeekDay = String(today.getDay())
                        var MaxWeekDay = 7 - parseInt(MinWeekDay)
                        var MinDay = String(today.getDate() + 1 - MinWeekDay).padStart(2, "0")

                        if(parseInt(MinDay) <= 0)
                        {
                            MinMounth = String(today.getMonth()).padStart(2, "0")
                            if(MinMounth === 0)
                            {
                                MinYear = String(today.getFullYear() - 1)
                                MinMounth = '12'
                            }
                            if(parseInt(MinMounth) === 1 || parseInt(MinMounth) === 3 || parseInt(MinMounth) === 5 || parseInt(MinMounth) === 7 || parseInt(MinMounth) === 8 || parseInt(MinMounth) === 10 || parseInt(MinMounth) === 12)
                            {
                                MinDay = String(parseInt(MinDay) + 31).padStart(2, "0")
                            }
                            else
                            {
                                if(parseInt(MinMounth) === 2)
                                {
                                    MinDay = String(parseInt(MinDay) + 28).padStart(2, "0")
                                }
                                else
                                {
                                    MinDay = String(parseInt(MinDay) + 30).padStart(2, "0")
                                }
                            }
                        }
                        var MaxDay = String(today.getDate() + MaxWeekDay).padStart(2, "0")
                        var MaxMounth = String(today.getMonth() + 1).padStart(2, "0")
                        var MaxYear = String(today.getFullYear())

                        if(parseInt(MaxMounth) === 1 || parseInt(MaxMounth) === 3 || parseInt(MaxMounth) === 5 || parseInt(MaxMounth) === 7 || parseInt(MaxMounth) === 8 || parseInt(MaxMounth) === 10 || parseInt(MaxMounth) === 12)
                            {
                                if(parseInt(MaxDay) > 31)
                                {
                                    MaxMounth = String(today.getMonth() + 2).padStart(2, "0")
                                    if(parseInt(MaxMounth) === 13)
                                    {
                                        MaxYear = String(today.getFullYear() + 1)
                                        MaxMounth = "01"
                                    }
                                    MaxDay = String(parseInt(MaxDay) - 31).padStart(2, "0")
                                }
                            }
                            else
                            {
                                if(parseInt(MaxMounth) === 2)
                                {
                                    if(parseInt(MaxDay) > 28)
                                    {
                                        MaxMounth = String(today.getMonth() + 2).padStart(2, "0")
                                        MaxDay = String(parseInt(MaxDay) - 28).padStart(2, "0")
                                    }
                                }
                                else
                                {
                                    if(parseInt(MaxDay) > 30)
                                    {
                                        MaxMounth = String(today.getMonth() + 2).padStart(2, "0")
                                        MaxDay = String(parseInt(MaxDay) - 30).padStart(2, "0")
                                    }
                                }
                            }
                        this.props.ChangeDatePeriodCheck(MinDay, MinMounth, MinYear, MaxDay, MaxMounth, MaxYear)
                        this.props.ChangeDateName(el.name)
                        break
                    }
                    case("Mounth"):{
                        today = new Date()
                        inpMounth = String(today.getMonth() + 1).padStart(2, "0")
                        this.props.ChangeDateMounthCheck(inpMounth)
                        this.props.ChangeDateName(el.name)
                        break
                    }
                    case("Period"):{
                        this.props.FunctionOpenModalPeriod()
                        this.props.ChangeDateName(el.name)
                        break
                    }
                }

            })}
            >
                
                <div className='ContainerDateName'>
                    {el.value === "Today" ? el.name + " " + this.props.TodayDate.Date + "." + this.props.TodayDate.Mounth + "." + this.props.TodayDate.Year 
                        : el.value === "Tomorrow" ? el.name + " " + this.props.TomorrowDate.Date + "." + this.props.TomorrowDate.Mounth + "." + this.props.TomorrowDate.Year
                        : el.value === "Yesterday" ? el.name + " " + this.props.YesterdayDate.Date + "." + this.props.YesterdayDate.Mounth + "." + this.props.YesterdayDate.Year
                        : el.name
                    }
                </div>
            </div>
            )}
        </div>
        )  
        
      
      
    }  
  }

  export default ContainerDateOrdHead