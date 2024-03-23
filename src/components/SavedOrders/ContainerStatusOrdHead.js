import React from 'react';



class ContainerStatusOrdHead extends React.Component {    
    constructor(props) {
        super(props)
        this.state = {
            Status:[
                {
                    id: 20,
                    name: "Все статусы",
                    value: "All"
                },
                {
                    id: 0,
                    name: "Новый",
                    value: "New",
                },
                {
                    id: 1,
                    name: "В обработке",
                    value: "Processing"
                },
                {
                    id: 2,
                    name: "Недозвон",
                    value: "NotProcessing"
                },
                {
                    id: 3,
                    name: "Отложенный",
                    value: "Timeout"
                },
                {
                    id: 4,
                    name: "Готовим",
                    value: "Cooking"
                },
                {
                    id: 5,
                    name: "Готов",
                    value: "Cooked"
                },
                {
                    id: 6,
                    name: "В пути",
                    value: "Delivery"
                },
                {
                    id: 7,
                    name: "Выполнен",
                    value: "Completed"
                },
                {
                    id: 8,
                    name: "Списан",
                    value: "Cancelled"
                },
            ]
        }
    } 
    render() {
        
        return(
            
        <div className='StatusOrdHeadMainDiv'>
            {this.state.Status.map((el) => 
            <div 
            className={'ContainerStatusOneStatusHeadDiv ' + el.value}
            onClick={(() => {
                this.props.ChangeStatusCheck(el)
            })}
            >
                
                <div className='ContainerStatusName'>
                    {el.name}
                </div>
            </div>
            )}
        </div>
        )  
        
      
      
    }  
  }

  export default ContainerStatusOrdHead