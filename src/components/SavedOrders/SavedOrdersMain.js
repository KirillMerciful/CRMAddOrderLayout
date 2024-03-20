import React from 'react';
import SavedOrd from './SavedOrd';
import { IoChevronDown } from "react-icons/io5";
import { PiMagnifyingGlass } from "react-icons/pi";

class SavedOrdersMain extends React.Component {    
    constructor(props) {
        super(props)
        this.state = {
            OpenDropDownStatus: false,
            OpenDropDownDate: false,
            OpenDropDownBranch: false,
        }
    }

    render() {
        return(
        <div>
            <div className='SavedHeadMainDiv'>
                <div className='SavedHeadOb'>
                                <div 
                                className={this.state.OpenDropDownStatus === false ?'SavedHeadDiv Status' : "SavedHeadDiv Status OpenDropDown"}
                                tabIndex={1}
                                onFocus={(() => {
                                    this.setState({
                                        OpenDropDownStatus: true
                                    })
                                })}
                                onBlur={(() => {
                                    setTimeout(() => {
                                        this.setState({
                                            OpenDropDownStatus: false
                                        })
                                    }, 100)
                                })}
                                >
                                    Все статусы
                                    <IoChevronDown 
                                    className={this.state.OpenDropDownStatus === false ? 'SavedHeadDivIcon' : 'SavedHeadDivIcon OpenDropDown'}
                                    />
                                </div>
                            
                                <div
                                className={this.state.OpenDropDownDate === false ? 'SavedHeadDiv Date' : 'SavedHeadDiv Date OpenDropDown'}    
                                tabIndex={1}
                                onFocus={(() => {
                                    this.setState({
                                        OpenDropDownDate: true
                                    })
                                })}
                                onBlur={(() => {
                                    setTimeout(() => {
                                        this.setState({
                                            OpenDropDownDate: false
                                        })
                                    }, 100)
                                })}                        
                                >
                                    Сегодня
                                    <IoChevronDown 
                                    className={this.state.OpenDropDownDate === false ? 'SavedHeadDivIcon' : 'SavedHeadDivIcon OpenDropDown'}
                                    />
                                </div>
                            
                                <div
                                className='SavedHeadDiv Sum'
                                >
                                    Сумма
                                </div>
                            
                                <div
                                className='SavedHeadDiv Sale'
                                >
                                    %
                                </div>
                            
                                <div
                                className={this.state.OpenDropDownBranch === false ? 'SavedHeadDiv Branch' : 'SavedHeadDiv Branch OpenDropDown'}
                                tabIndex={1}
                                onFocus={(() => {
                                    this.setState({
                                        OpenDropDownBranch: true
                                    })
                                })}
                                onBlur={(() => {
                                    setTimeout(() => {
                                        this.setState({
                                            OpenDropDownBranch: false
                                        })
                                    }, 100)
                                })}        
                                >
                                    Все филиалы
                                    <IoChevronDown 
                                    className={this.state.OpenDropDownBranch === false ? 'SavedHeadDivIcon' : 'SavedHeadDivIcon OpenDropDown'}
                                    />
                                </div>
                    </div>
                                <div
                                className='SavedHeadDiv Search'
                                >
                                    <PiMagnifyingGlass
                                    className='SavedHeadDivSearchIcon'
                                    />
                                </div>
                            
            </div>
            <div className='SavedBodyDiv'>
                
                {this.props.Saved.map((el) =>
                    <SavedOrd 
                    DeleteSavedOrd={this.props.DeleteSavedOrd}
                    ChangeStatusSavedOrd={this.props.ChangeStatusSavedOrd}
                    Saved={el}
                    key={el.SavedIdOrd}
                    />
                    
                )}
                
            
            </div>  
        </div>  
        )  
      
      
    }  
    componentDidMount(){
        this.props.Saved.sort((a, b) => b.orderDetal[0].TimeSave[0].Hour - a.orderDetal[0].TimeSave[0].Hour === 0 ? b.orderDetal[0].TimeSave[0].Minutes - a.orderDetal[0].TimeSave[0].Minutes : b.orderDetal[0].TimeSave[0].Hour - a.orderDetal[0].TimeSave[0].Hour)
    }
  }

  export default SavedOrdersMain