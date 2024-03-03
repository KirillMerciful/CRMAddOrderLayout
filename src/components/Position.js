import React from 'react';


class Position extends React.Component {
    

    render() {
            if (this.props.position.categ === this.props.onCat)
            {    
        return(
        <div>
            <button id={"PosBut" + this.props.position.id} 
            className={this.props.position.categ === "Пицца" ?
            this.props.position.CheckStopList === false ? 'PosButtonsclassPizza' : 'PosButtonsclassPizza unactive'
            : this.props.position.CheckStopList === false ? 'PosButtonsclass' : 'PosButtonsclass unactive'}
            onClick={() => {
                                if(this.props.position.CheckStopList !== true)
                                {
                                    if(this.props.OnCity.idCity === 0)
                                    {
                                        this.props.AlertAdd("UnderCityOnPosition")
                                    }
                                    this.props.addOrder(this.props.position)
                                }
                                else
                                {
                                    this.props.AlertAdd("Stop")
                                }
                        }}              
                        ><div className='ButtonPName'>{this.props.position.name}</div>
                        <div> {this.props.pdkon === 0 ? 
                        this.props.position.Proverka36 !== true ? this.props.position.price + " руб." : this.props.position.price36 + " руб."  
                        :this.props.position.Proverka36 !== true ? this.props.position.dkprice + " руб." : this.props.position.dkprice36 + " руб." } </div>
                        </button>
                        {this.props.position.categ === "Пицца" && 
                        <div className='PosButtonsclassPizzaChangeDiamDiv'>
                            <table className='PosButtonsclassPizzaChangeDiamTable'>
                                <tbody>
                                    <tr>
                                        <td className='PosButtonsclassPizzaChangeDiamTd'>
                                            <button 
                                            className={this.props.position.Proverka36 === false ? 'PosButtonsclassPizzaChangeDiam30 Actived' : 'PosButtonsclassPizzaChangeDiam30'}
                                            onClick={(() => {
                                                this.props.ChangeDiamPizzaOnPositionMenu(false, this.props.position.id)
                                            })}
                                            >30 см</button>
                                        
                                            <button 
                                            className={this.props.position.Proverka36 === false ? 'PosButtonsclassPizzaChangeDiam36' : 'PosButtonsclassPizzaChangeDiam36 Actived'}
                                            onClick={(() => {
                                                this.props.ChangeDiamPizzaOnPositionMenu(true, this.props.position.id)
                                            })}
                                            >36 см</button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        }
        </div>
        )
        }
        
    }

    
}



export default Position