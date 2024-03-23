import React from 'react';


class WindowPeriod extends React.Component { 
    
    render() {
        return(
        <div className='WindowPeriodMainDiv'>

            <div className='WindowPeriodContent'>

            <div
            className='WindowPeriodInputsDiv'
            >
                <div 
                className='WindowPeriodInputMinDiv'
                >
                    Период с
                    <input
                    className='WindowPeriodInputMin'
                    id='WindowPeriodInputMin'
                    type="date"
                    onClick={() => {
                        document.getElementById('WindowPeriodInputMin').classList.remove("Fail")
                    }}
                    />
                </div>
                
                <div
                className='WindowPeriodInputMaxDiv'
                >
                    По
                    <input
                    className='WindowPeriodInputMax'
                    id='WindowPeriodInputMax'
                    type="date"
                    onClick={() => {
                        document.getElementById('WindowPeriodInputMax').classList.remove("Fail")
                    }}
                    />
                </div>
            </div>
                <div
                className='WindowPeriodButtonsDiv'
                >
                <button
                className='WindowPeriodButtonCancel'
                onClick={() => {
                    this.props.CloseModalPeriod()
                    var inpDate = this.props.TodayDate.Date
                    var inpMounth = this.props.TodayDate.Mounth
                    var inpYear = this.props.TodayDate.Year
                    this.props.ChangeDateCheck(inpDate, inpMounth, inpYear)
                    this.props.ChangeDateName("Сегодня")
                }}
                >Отмена</button>

                <button
                className='WindowPeriodButtonSave'
                onClick={() => {
                    if(document.getElementById('WindowPeriodInputMin').value !== "" && 
                    document.getElementById('WindowPeriodInputMax').value !== "" &&
                    document.getElementById('WindowPeriodInputMin').value <=  document.getElementById('WindowPeriodInputMax').value)
                    {
                        var MinDate = new Date(document.getElementById('WindowPeriodInputMin').value)
                        var MinDay = String(MinDate.getDate()).padStart(2, "0")
                        var MinMounth = String(MinDate.getMonth() + 1).padStart(2, "0")
                        var MinYear = String(MinDate.getFullYear())

                        var MaxDate = new Date(document.getElementById('WindowPeriodInputMax').value)
                        var MaxDay = String(MaxDate.getDate()).padStart(2, "0")
                        var MaxMounth = String(MaxDate.getMonth() + 1).padStart(2, "0")
                        var MaxYear = String(MaxDate.getFullYear())

                        this.props.ChangeDatePeriodCheck(MinDay, MinMounth, MinYear, MaxDay, MaxMounth, MaxYear)
                        var DateName = String(MinDay + "." + MinMounth + "." + MinYear + " - " + MaxDay + "." + MaxMounth + "." + MaxYear)
                        this.props.ChangeDateName(DateName)

                        setTimeout(() => {
                            this.props.CloseModalPeriod()
                        }, 50)
                    }
                    else
                    {
                        this.props.AlertAdd('FailDatePeriod')
                        document.getElementById('WindowPeriodInputMin').value = ""
                        document.getElementById('WindowPeriodInputMin').classList.add("Fail")
                        document.getElementById('WindowPeriodInputMax').value = ""
                        document.getElementById('WindowPeriodInputMax').classList.add("Fail")
                    }
                }}
                >Применить</button>
                </div>
            </div>
        </div>
        )  
      
      
    }  
  }

  export default WindowPeriod