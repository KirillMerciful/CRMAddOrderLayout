import React from 'react';


class SavedOrdSostWOK extends React.Component {    
    render() {
        if(this.props.orderSostWOKSaved.idOrd === this.props.idOrd)
        return(
        <div className='SavedOrdDiv'>
        {"--" + this.props.orderSostWOKSaved.name}
        </div>
        )  
      
      
    }  
  }

  export default SavedOrdSostWOK