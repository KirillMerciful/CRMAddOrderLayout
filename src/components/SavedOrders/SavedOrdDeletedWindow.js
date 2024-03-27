import React from 'react';


class SavedOrdDeletedWindow extends React.Component {    
    render() {
        return(
        <div className='SavedOrdDeletedWindowMainDiv'>
            <div className='SavedOrdDeletedWindowContent'>
                
                <button 
                className='SavedOrdDeletedWindowButtonCancel'
                onClick={(() => {
                    this.props.CloseDeleteSavedOrdDropDown()
                })}>
                    Отмена
                </button>
                
                <button 
                className='SavedOrdDeletedWindowButtonDelete'
                onClick={(() => {
                    this.props.DeleteSavedOrdForInp(this.props.SavedIdOrd)
                    this.props.CloseDeleteSavedOrdDropDown()
                })}>Удалить</button>
            </div>
               
        </div>
        )  
      
      
    }  
  }

  export default SavedOrdDeletedWindow