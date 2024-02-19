import React from 'react';

class TotalSumDownPanel extends React.Component {    

 

    render() {    
      if (this.props.Ord > 0) 
      return(

          <div className='TotalSumOrderDownPanel'>
          {"К оплате: " + this.props.totalSumSale + " руб."}

          
          </div>
  
      )      
    }  
  }

  export default TotalSumDownPanel