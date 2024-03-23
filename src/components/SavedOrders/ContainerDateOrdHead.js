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
                        var MinDay = String(today.getDate() - 7).padStart(2, "0")
                        var MinMounth = String(today.getMonth() + 1).padStart(2, "0")
                        var MinYear = String(today.getFullYear())
                        if(parseInt(MinDay) <= 0)
                        {
                            MinDay = "01"
                        }
                        var MaxDay = String(today.getDate()).padStart(2, "0")
                        var MaxMounth = String(today.getMonth() + 1).padStart(2, "0")
                        var MaxYear = String(today.getFullYear())
                        this.props.ChangeDatePeriodCheck(MinDay, MinMounth, MinYear, MaxDay, MaxMounth, MaxYear)
                        this.props.ChangeDateName(el.name)
                        break
                    }
                    case("Mounth"):{
                        var today = new Date()
                        var inpMounth = String(today.getMonth() + 1).padStart(2, "0")
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