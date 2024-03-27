import React from 'react';


class WindowClearStopListCity extends React.Component { 
    
    render() {
        return(
        <div className='WindowClearStopListMainDiv'>

            <div className='WindowClearStopListContent'>
            {'Стоп лист филиала "' + this.props.City.city + " " + this.props.City.streetType + " " + this.props.City.street + '" будет очищен'}
            
            <div
            className='WindowClearStopListButtonsDiv'
            >
                <button
                className='WindowClearButtonCancel'
                onClick={() => {
                    this.props.CloseModalClearSropList()
                }}
                >
                    Отмена
                </button>

                <button
                className='WindowClearButtonOK'
                onClick={() => {
                    this.props.ClearStopList(this.props.City.idCity)
                    this.props.CloseModalClearSropList()
                }}
                >
                    ОК
                </button>
            </div>
            
            </div>
        </div>
        )  
      
      
    }  
  }

  export default WindowClearStopListCity