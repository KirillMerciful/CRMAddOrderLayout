import React from 'react';



class ContainerDateWindowSearch extends React.Component {    
    constructor(props) {
        super(props)
        this.state = {
            CheckDate:[
                {
                    id: 1,
                    name: "Сегодня",
                    value: "Today"
                },
                {
                    id: 3,
                    name: "Неделя",
                    value: "Week"
                },
                {
                    id: 4,
                    name: "Месяц",
                    value: "Mounth"
                },
                {
                    id: 5,
                    name: "Год",
                    value: "Year"
                }
            ]
        }
    } 
    render() {
        
        return(
            
        <div className='DateOrdHeadMainDiv'>
            {this.state.CheckDate.map((el) => 
            <div 
            className={'ContainerDateOneStatusHeadDiv'}
            onClick={(() => {
                this.props.ChangeInpDate(el.name, el.value)
            })}
            >
                
                <div className='ContainerDateName'>
                    {el.name}
                </div>
            </div>
            )}
        </div>
        )  
        
      
      
    }  
  }

  export default ContainerDateWindowSearch