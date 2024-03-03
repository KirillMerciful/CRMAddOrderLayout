import React from 'react';



class ButtonSale extends React.Component {    
    render() {
      
        return(
        <div>
            <div className="SaleButton" onClick={(() =>
            {
               switch(this.props.salemass.id){
               default: {
                this.props.SaleFunction(this.props.salemass.sale, this.props.salemass.id)
                break;
               }
               case 1:{
                this.props.SaleWindowEditActive(this.props.salemass.id)
                break;
               }
               case 0:{
                this.props.SaleFunction(this.props.salemass.sale, this.props.salemass.id)
                this.props.SaleInpEdit0()
                break;
               }
               }
               
            }
            )}
            >{this.props.salemass.id === 0 ? "Без скидки" : this.props.salemass.name}</div>
        </div>    
        )   
      
      
    }  
  }

  export default ButtonSale