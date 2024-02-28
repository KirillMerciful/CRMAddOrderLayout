import React from "react";


class AddSostWOK extends React.Component {
    

    render() {
        if(this.props.ordSWOk.idOrd === this.props.idOrd)
        if(this.props.ordSWOk.idSost > 0)
        return(
            
            <div className="OrdSostWOKTB">
                <table>
                    <tbody>
                        <tr>
                            
                            <td className="OrdSostWOKName">{"-- " + this.props.ordSWOk.name}</td>                           
                            <td className="OrdSostWOKEdit"><button className='OrddSostWOKButtonEditMinus' id={"buttonSostWOKMinus" + this.props.ordSWOk.idDob} onClick={(() => {
                                    if (this.props.ordSWOk.num !== 1 && this.props.ordSWOk.podcat !== "Соус В Вок")
                                    {
                                        this.props.BMSW(this.props.ordSWOk.idSost)
                                    }
                                    else
                                    {
                                        this.props.deleteSostWOK(this.props.ordSWOk.idSost)
                                    }
                                }
                            )}           
                            /* кнопка "-" отнимает 1 от num*/>-</button></td>
                            <td className='OrdSostWOKNum'>
                                <input type='number' className="OrdSostWOKInp" value={this.props.ordSWOk.podcat !== "Соус В Вок" ? this.props.ordSWOk.num : this.props.ordPos.num} id={"ordSostWOKNum" + this.props.ordSWOk.idSost} 
                                onChange={((e) => {
                                    if(this.props.ordSWOk.podcat !== "Соус В Вок")
                                    {
                                    if (e.target.value > 99)
                                    {
                                        e.target.value = 99
                                    }
                                    if (e.target.value < 1)
                                    {
                                        e.target.value = 1
                                    }
                                    this.props.EISW(this.props.ordSWOk.idSost, e.target.value)
                                    }
                                    else
                                    {
                                        this.props.AlertAdd("SauceSumLimit")
                                    }
                                    })/*это изменение значения при изменении инпута ручками */}

                                        ></input>
                            </td>
                            <td className="OrdSostWOKEdit"><button className='OrdSostWOKButtonEditPlus' id={"buttonSostWOKPlus" + this.props.ordSWOk.idSost} onClick={(() => {
                                if (this.props.ordSWOk.num !== 99)
                                this.props.BPSW(this.props.ordSWOk.idSost)
                            }
                            )}
                                /* кнопка "+" прибаляет 1  к num */
                               >+</button></td> 
                            <td className="OrdSostWOKPrice">{this.props.ordSWOk.price + " руб."}</td>
                            <td className="OrdSostWOKSum" data-value={this.props.ordSWOk.totalprice} id={"OrdSostWOKTotSum" + this.props.ordSWOk.idSost}>{this.props.ordSWOk.totalprice + " руб."}</td>

                            
                        </tr>
                    </tbody>
                </table>
                
           </div>           
        )
    }

    
}


export default AddSostWOK