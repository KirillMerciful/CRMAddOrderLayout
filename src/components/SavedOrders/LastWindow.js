import React from 'react';


class LastWindow extends React.Component { 
    constructor(props) {
        super(props)
        this.state = { 
            PaymentVar: [
                {
                    name: "Наличными Б/С",
                    val: "Б/С"
                },
                {
                    name: "Сдача с 1000 руб.",
                    val: 1000
                },
                {
                    name: "Сдача с 1500 руб.",
                    val: 1500
                },
                {
                    name: "Сдача с 2000 руб.",
                    val: 2000
                },
                {
                    name: "Сдача с 3000 руб.",
                    val: 3000
                },
                {
                    name: "Сдача с 5000 руб.",
                    val: 5000
                },
                {
                    name: "Картой",
                    val: "Картой"
                },
                {
                    name: "Оплачено",
                    val: "Оплачено"
                },
                {
                    name: "Сохранить",
                    val: false
                }
            ]
        }
    }   
    render() {
        return(
        <div className='LastWindowMainDiv'>
            <div className='LastWindowContent'>
                <div 
                id='LastWindowSumText'
                className='LastWindowSumText'
                >
                    Сумма заказа: {" " + this.props.totalSumSale + " руб."} 
                </div>
                <div>
                    Сдача с {" "}
                    <input
                    className='LastWindowInput'
                    type='number'
                    id='LastWindowInput'
                    onClick={() => {
                        document.getElementById('LastWindowInput').classList.remove('Allert')
                    }}
                    onChange={(e) => {
                        this.state.PaymentVar.map((el) => {
                            if(el.name === "Сохранить")
                            {
                                if(e.target.value < 100000)
                                {
                                el.val = e.target.value
                                }
                                else
                                {
                                    el.val = 100000
                                }
                                this.setState({
                                    PaymentVar: [...this.state.PaymentVar]
                                })
                            }
                        })
                    }}
                    /> 
                </div>
                <div className='LastWindowButtonsDiv'>
                
                
                    <div className='LastWindowPaymentButtonsMainDiv'>
                    {this.state.PaymentVar.map((el) => (
                        el.name !== "Сохранить" && 
                        <div>
                            <button 
                            className='LastWindowButtonPayment'
                            onClick={(() => {
                                this.props.PaymentMark(el.val)
                                
                            })}>{el.name}</button>
                        </div>
                    ))}
                    </div>
                    <div className='ButtonsCancelAndSaveDiv'>
                    <button 
                    className='LastWindowButtonCancel'
                    onClick={(() => {
                        this.props.CloseLastWindow()
                    })}>
                        Отмена
                    </button>
                    {this.state.PaymentVar.map((el) => (
                            el.name === "Сохранить" && 
                            <button 
                            className='LastWindowButtonSave'
                            onClick={(() => {
                                if(el.val > 0)
                                {
                                    if(parseInt(el.val) === parseInt(this.props.totalSumSale))
                                    {
                                        this.props.PaymentMark("Б/С")
                                    }
                                    else
                                    {
                                        if(el.val > this.props.totalSumSale)
                                        {
                                            this.props.PaymentMark(el.val)
                                        }
                                        else
                                        {
                                            this.props.AlertAdd("InpLessSum")
                                            document.getElementById('LastWindowInput').classList.add('Allert')
                                            
                                        }
                                        
                                    }
                                }
                                else
                                {
                                    this.props.AlertAdd("NotFilled")
                                    document.getElementById('LastWindowInput').classList.add('Allert')
                                }
                            })}>{el.name}</button>
                            
                        ))}
                    </div>
                </div>
            </div>
               
        </div>
        )  
      
      
    }  
  }

  export default LastWindow