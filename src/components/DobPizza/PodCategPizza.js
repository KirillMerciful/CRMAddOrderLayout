import React from 'react';

class PodCategPizza extends React.Component {
    
    podcat = this.props.podcat
    render() {
        if(this.podcat.categ === "Добавка К Пицце")
            if(this.podcat.CheckStopList === false) 
            {
        return(
            
            <div className='PodCatButtons'>
                <button className='PodCatButton' id={"PodCatBut" + this.podcat.id}
                onClick={(() => {
                    this.props.AddDob(this.podcat, this.props.idOrd)
                    
                })}                
                >
                    {this.podcat.name}
                    <div>
                        {this.podcat.price + "руб."}
                    </div>
                </button>
            </div>
        )
            }
            else
            {
                return(
                <div className='PodCatButtons'>
                <button className='PodCatButton unactive' id={"PodCatBut" + this.podcat.id}
                onClick={(() => {
                    this.props.AlertAdd("Stop")
                    
                })}                
                >
                    {this.podcat.name}
                    <div>
                        {this.podcat.price + "руб."}
                    </div>
                </button>
            </div>
                )
            }
    }
}


export default PodCategPizza