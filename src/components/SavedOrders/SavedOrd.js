import React from 'react';
import SavedOrdSostWOK from './SavedOrdSostWOK';
import SavedOrdDobPizza from './SavedOrdDobPizza';


class SavedOrd extends React.Component {    
    render() {
        return(
        <div>
            <div className='SavedOrdDiv'>
                <div>
                    {this.props.Saved.SavedIdOrd}
                    <span>{this.props.Saved.orderDetal[0].pdkon === 1 && " ЯЕ"}</span>
                </div>
                <div>
                    {this.props.Saved.orderCity[0].city + " " + this.props.Saved.orderCity[0].street + " " + this.props.Saved.orderCity[0].house}
                </div>

            {this.props.Saved.orderPosSaved.map((el) => 
            <div>{el.name + " " + el.num + " "}
            
            {this.props.Saved.orderDetal[0].pdkon === 0 ? el.price : el.dkprice}
            {this.props.Saved.orderSostWOKSaved.map((a) => 
                <SavedOrdSostWOK 
                orderSostWOKSaved={a}
                key={a.id + " " + a.idOrd}
                idOrd={el.idOrd}
                />)}
            {this.props.Saved.orderDobPizzaSaved.map((a) => 
                <SavedOrdDobPizza 
                orderDobPizzaSaved={a}
                key={a.id + " " + a.idOrd}
                idOrd={el.idOrd}
                />)}
            </div>
            
            )}
            
            </div>    
        </div>
        )  
      
      
    }  
  }

  export default SavedOrd