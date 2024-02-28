import React from 'react';


class LastWindow extends React.Component {    
    render() {
        return(
        <div className='LastWindowMainDiv'>
            <div className='LastWindowContent'>
                <button onClick={(() => {
                    this.props.SaveFunction()
                })}>Сохранить</button>
                <button onClick={(() => {
                    this.props.CloseLastWindow()
                })}>
                    Отмена
                </button>
            </div>
               
        </div>
        )  
      
      
    }  
  }

  export default LastWindow