import React from 'react';



class ButtonSale extends React.Component {    
    render() {
      if (this.props.salemass.id > 1)
      {
        return(
        <div>
            <button className="SaleButton" onClick={(() =>
            {
               this.props.SaleFunction(this.props.salemass.sale, this.props.salemass.id)
            }
            )}
            >{this.props.salemass.name}</button>
        </div>    
        )   
      }   
      else
      {
        if (this.props.salemass.id === 1)
        {
            return(
            <div>
                <button className="SaleButton" onClick={(() => {
                    this.props.SaleWindowEditActive(this.props.salemass.id)
                })}>{this.props.salemass.name}</button>
            </div>    
            )  
        }
        if (this.props.salemass.id === 0)
        {
            return(
            <div>
                <button className="SaleButton" onClick={(() =>
            {
               this.props.SaleFunction(this.props.salemass.sale, this.props.salemass.id)
               this.props.SaleInpEdit0()

            }
                )}
                >Без скидки</button>
            </div>    
            )  
        }
      }
      
    }  
  }

  export default ButtonSale