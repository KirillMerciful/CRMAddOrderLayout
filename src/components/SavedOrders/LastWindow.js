import React from 'react';


class LastWindow extends React.Component {    
    render() {
        return(
        <div className='LastWindowMainDiv'>
            <div className='LastWindowContent'>
                <div className='LastWindowButtonsDiv'>
                <button 
                className='LastWindowButtonSave'
                onClick={(() => {
                    this.props.SaveFunction()
                })}>Сохранить</button>

                <button 
                className='LastWindowButtonCancel'
                onClick={(() => {
                    this.props.CloseLastWindow()
                })}>
                    Отмена
                </button>
                </div>
            </div>
               
        </div>
        )  
      
      
    }  
  }

  export default LastWindow