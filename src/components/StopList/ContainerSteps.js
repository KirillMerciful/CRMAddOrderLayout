import React from 'react';



class ContainerSteps extends React.Component {    
    constructor(props) {
        super(props)
        this.state = {
            StepArray:[
                {
                    id: 1,
                    value: 10
                },
                {
                    id: 2,
                    value: 20
                },
                {
                    id: 3,
                    value: 30
                },
                {
                    id: 4,
                    value: 50
                },
                {
                    id: 5,
                    value: 100
                }
            ]
        }
    } 
    render() {
        
        return(
            
        <div
        className='ContainerStepsDiv'
        >
            {this.state.StepArray.map((el) => 
            
                <div 
                className='ContainerStepsName'
                onClick={() => {
                    this.props.ChangeStepPages(el.value)
                }}
                >
                    {el.value}
                </div>
            
            )}
        </div>
        )  
        
      
      
    }  
  }

  export default ContainerSteps