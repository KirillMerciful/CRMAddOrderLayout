import React from 'react';


class ContainerCityOrdHead extends React.Component {    
    
    render() {
        
        return(
            
        <div className='ContainerCityMainDiv'>
            
            <div 
            className={'ContainerCityName'}
            onClick={(() => {
                this.props.ChangeCityCheck(this.props.City)
            })}
            >
                {this.props.City.city + " " + this.props.City.streetType + this.props.City.street}
            </div>
            
        </div>
        )  
        
      
      
    }  
  }

  export default ContainerCityOrdHead