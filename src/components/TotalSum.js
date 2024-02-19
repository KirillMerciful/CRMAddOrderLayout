import React from 'react';

class TotalSum extends React.Component {    

 

    render() {    
      if (this.props.totalSum > 0) 
      return(
        <div className='TotalSumOrder'>
          <div className="TotalSoyOrder">
            {"Общее кол-во соевых соусов: " + this.props.totalSoy}
          </div>

          <div>
            {"Итого: " + this.props.totalSum + " руб."}
           </div>

        </div>   
      )      
      
    }  
  }

  export default TotalSum