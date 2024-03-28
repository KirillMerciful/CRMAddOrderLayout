import React from 'react';
import StatisticsClientContainerOrders from './StatisticsClientContainerOrders';


class WindowStatisticsClient extends React.Component { 
    
    render() {
        return(
        <div className='WindowStatisticsClientMainDiv'>

            <div className='WindowStatisticsClientContent'>
                <div
                className='WindowStatisticsClientContentUp'
                >
                    Статистика клиента
                </div>
                
                <div
                className='WindowStatisticsClientContainerOrdersDiv'
                >
                    {this.props.StatisticsClient.map((el) => (
                        <StatisticsClientContainerOrders
                        Saved={el}
                        key={el.SavedIdOrd}
                        />
                    ))}
                    
                </div>

                <div
                className='WindowStatisticsClientButtonDiv'
                >
                    <button
                    className='WindowStatisticsClientButton'
                    onClick={() => {
                        this.props.CloseModalStatisticsClient()
                    }}
                    >
                        Закрыть
                    </button>
               </div>
            </div>
               
        </div>
        )  
      
      
    }  

  }

  export default WindowStatisticsClient