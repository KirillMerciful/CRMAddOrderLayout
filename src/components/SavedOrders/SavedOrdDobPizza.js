import React from 'react';


class SavedOrdDobPizza extends React.Component {    
    render() {
        if(this.props.orderDobPizzaSaved.idOrd === this.props.idOrd)
        return(
        <div className='SavedOrdDiv'>
        {"--" + this.props.orderDobPizzaSaved.name}
        </div>
        )  
      
      
    }  
  }

  export default SavedOrdDobPizza