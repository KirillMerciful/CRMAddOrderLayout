import React from 'react';


class Position extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            sm36: false,
            finalprice: 0,
            
    }
}

    OK36 = this.props.OK + "36"
    position = this.props.position
    render() {
        if(this.position.CheckStopList === false)
        {
            if (this.position.categ === this.props.OK)
            {    
                if (this.position.categ !== "Пицца")
                {      
                    return(         
                    <div>
                        <button className={'PosButtonsclass'} id={"PosBut" + this.position.id} onClick={() => {
                                this.props.onAdd(this.position)
                        }}              
                        ><div className='ButtonPName'>{this.position.name}</div>
                        <div> {this.props.PDK === 0 ? this.position.price + " руб." : this.position.dkprice + " руб."} </div>
                    
                        
                    
                        </button>
                        
                    </div>
                
                    )
                }        
                else 
                {
                    if (this.state.sm36 !== true)
                    {
                    return (
                        
                        <div>
                            <button className={'PosButtonsclass'} id={"PosBut" + this.position.id} onClick={() => {
                                    this.props.onAdd(this.position)
                            }
                            }                
                            ><div className='ButtonPName'>{this.position.name + " 30см"}</div>
                            <div> {this.props.PDK === 0 ? this.position.price + " руб." : this.position.dkprice + " руб."} </div>
                
                            
                        
                
                            </button>
                            <div className='SwitchPos'>
                            
                                <label className="switchPosLabel">
                                    <input type="checkbox" onChange={(() => {
                                        this.setState({sm36: !this.state.sm36})
                                        })}/>
                                    <span className="slider round"></span>
                                </label>
                                        
                            </div>
                            </div>
                        )
                    }
                    else
                    {
                        return (
                        <div>
                            <button className={'PosButtonsclass'} id={"PosBut" + this.position.id} onClick={() => {
                                    this.props.onAdd2(this.position)
                            }
                            }                
                            ><div className='ButtonPName'>{this.position.name + " 36см"}</div>
                            <div> {this.props.PDK === 0 ? this.position.price36 + " руб.": this.position.dkprice36 + " руб."}</div>
                            </button>
                            
                            <div className='SwitchPos'>
                                
                                <label className="switchPosLabel">
                                    <input type="checkbox" onChange={(() => {
                                        this.setState({sm36: !this.state.sm36})
                                        })}/>
                                    <span className="slider round"></span>
                                </label>
                                            
                            </div>
                            </div>
                        )
                    }
                }
            }
    }
    else
    {
        if (this.position.categ === this.props.OK)
            {    
                if (this.position.categ !== "Пицца")
                {      
                    return(         
                    <div>
                        <button className={'PosButtonsclass unactive'} id={"PosBut" + this.position.id} onClick={() => {
                                this.props.AlertAdd("Stop")
                        }}              
                        ><div className='ButtonPName'>{this.position.name}</div>
                        <div> {this.props.PDK === 0 ? this.position.price + " руб." : this.position.dkprice + " руб."} </div>
                    
                        
                    
                        </button>
                        
                    </div>
                
                    )
                }        
                else 
                {
                    if (this.state.sm36 !== true)
                    {
                    return (
                        
                        <div>
                            <button className={'PosButtonsclass unactive'} id={"PosBut" + this.position.id} onClick={() => {
                                    this.props.AlertAdd("Stop")
                            }
                            }                
                            ><div className='ButtonPName'>{this.position.name + " 30см"}</div>
                            <div> {this.props.PDK === 0 ? this.position.price + " руб." : this.position.dkprice + " руб."} </div>
                
                            
                        
                
                            </button>
                            <div div className='SwitchPos'>
                            
                                <label className="switchPosLabel">
                                    <input type="checkbox" onChange={(() => {
                                        this.setState({sm36: !this.state.sm36})
                                        })}/>
                                    <span className="slider round"></span>
                                </label>
                                        
                            </div>
                            </div>
                        )
                    }
                    else
                    {
                        return (
                        <div>
                            <button className={'PosButtonsclass unactive'} id={"PosBut" + this.position.id} onClick={() => {
                                    this.props.AlertAdd("Stop")
                            }
                            }                
                            ><div className='ButtonPName'>{this.position.name + " 36см"}</div>
                            <div> {this.props.PDK === 0 ? this.position.price36 + " руб.": this.position.dkprice36 + " руб."}</div>
                
                           
                        
                
                            </button>
                            
                            <div className='SwitchPos'>
                                
                                <label className="switchPosLabel">
                                    <input type="checkbox" onChange={(() => {
                                        this.setState({sm36: !this.state.sm36})
                                        })}/>
                                    <span className="slider round"></span>
                                </label>
                                            
                            </div>
                            </div>
                        )
                    }
                }
            }
    }
            
    }

    
}



export default Position