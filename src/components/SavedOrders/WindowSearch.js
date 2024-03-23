import React from 'react';
import { IoChevronDown } from "react-icons/io5";
import ContainerDateWindowSearch from './ContainerDateWindowSearch';

class WindowSearch extends React.Component { 
    constructor(props) {
        super(props)
        this.state = {
            OpenDropDownDate: false,
            InpDateName: "Сегодня",
            InpDateVal: "Today"
        }

        this.ChangeInpDate = this.ChangeInpDate.bind(this)
    }
    render() {
        return(
        <div className='WindowSearchMainDiv'>

            <div className='WindowSearchContent'>
                <div
                className='WindowSearchMainUp'
                >
                    <div
                    className='WindowSearchMainText'
                    >
                        Поиск заказа
                    </div>
                    <div 
                    className='WindowSearchInputDiv'>
                    <span
                    className='WindowSearchInputText'
                    >№ Заказа</span>
                    <input
                    type='number'
                    className='WindowSearchInput '
                    id='WindowSearchInput'
                    onClick={() => {
                        document.getElementById('WindowSearchInput').classList.remove('Fail')
                    }}
                    />
                </div>

                <div
                className='WindowSearchDateInputDiv'
                >
                    <span
                    className='WindowSearchInputText'
                    >
                        Период
                    </span>
                    <div
                    className={this.state.OpenDropDownDate === false ? 'WindowSearchDateDiv' : 'WindowSearchDateDiv OpenDropDown'}
                    tabIndex={0}
                    onFocus={() => {
                        this.setState({
                            OpenDropDownDate: true
                        })
                    }}
                    onBlur={() => {
                        setTimeout(() => {
                            this.setState({
                                OpenDropDownDate: false
                            })
                        }, 100)
                    }}
                    > 
                        <span
                        className='WindowSearchDateDivText'
                        >{this.state.InpDateName}</span>
                        <IoChevronDown 
                        className={this.state.OpenDropDownDate === false ? 'WindowSearchDateDivIcon' : 'WindowSearchDateDivIcon OpenDropDown'}
                        />
                    </div>
                    {this.state.OpenDropDownDate === true && 
                    <div
                    className='ContainerDateWindowSearchGlobalDiv'
                    >
                    <ContainerDateWindowSearch 
                    ChangeInpDate={this.ChangeInpDate}
                    
                    />
                    </div>
                    }
                </div>
            </div>
                <div
                className='WindowSearchButtonsDiv'
                >
                    <button
                    className='WindowSearchButtonCancel'
                    onClick={() => {
                        document.getElementById('WindowSearchInput').value = ""
                        document.getElementById('WindowSearchInput').classList.remove('Fail')
                        setTimeout(() => {
                            this.props.CloseModalSearch()
                        }, 50)
                        
                    }}
                    >Отмена
                    </button>
                    <button
                    className='WindowSearchButtonSearch'
                    onClick={() =>{
                        var SearchVal = parseInt(document.getElementById('WindowSearchInput').value)
                        this.props.SearchingChangeDate(this.state.InpDateVal, SearchVal)
                    }}
                    >Поиск
                    </button>
                </div>
            </div>
               
        </div>
        )  
      
      
    }  
    componentDidMount(){
        document.getElementById('WindowSearchInput').focus()
    }

    ChangeInpDate(name, value){
        this.setState({
            InpDateName: name
            
        })
        this.setState({
            InpDateVal: value
        })
    }
  }

  export default WindowSearch