import React from 'react';
import { PiMagnifyingGlass } from "react-icons/pi";

class PositionsTitle extends React.Component {    
  constructor(props) {
    super(props)
    this.state = {
        OpenDropDown: false,
        ResSearch: []
    }
  }
 

    render() {     
      return(
        <div className="PosTitle">
        <table className="op2">
                  <tbody>                        
                      <tr>
                      <td className="titleText"
                      onClick={(() => {
                        this.props.PriceCheck()
                    })}
                      >Цены ЯЕ:</td>                  
                      <td className="op1"><label className="switch">
                      <input 
                      checked={this.props.pdkon === 1 ? true : false}
                      type="checkbox" 
                      onChange={(() => {
                          this.props.PriceCheck()
                      })}/>
                      <span className="slider round"></span>
                      </label>
                      </td>
                      
                      </tr>
              </tbody>
              </table>
        <div 
        className='SearchOnPositionMainDiv'
        onClick={() => {
          document.getElementById('SearchOnPositionInput').focus()
        }}
        >
          <PiMagnifyingGlass 
          className='SearchOnPositionIcon'
          />
          <input
          className='SearchOnPositionInput'
          id='SearchOnPositionInput'
          onBlur={() => {
            setTimeout(() => {
              this.setState({
                ResSearch: []
              })
              document.getElementById('SearchOnPositionInput').value = ""
            }, 100)
            
          }}
          onChange={(e) => {
            if(e.target.value !== "")
            {
              var Val = e.target.value.toLowerCase()
              var SearchingPos = this.props.position.filter(pos => {
                if(pos.ThisAddition !== true)
                return pos.name.toLowerCase().includes(Val)
              })
              
              this.setState({
                ResSearch: [...SearchingPos]
              })
              
            }
            else
            {
              this.setState({
                ResSearch: []
              })
              
            }
          }}
          />
        </div>
        <div 
        className='ResSearchOnPositionMainDiv'
        >
        {this.state.ResSearch.length > 0 && this.state.ResSearch.slice(0, 5).map((el) => 
          <div
          className={el.CheckStopList === false ? 'ResSearchOnPosition' : 'ResSearchOnPosition unactive'}
          onClick={() => {
            if(el.CheckStopList === false)
            {
              this.props.addOrder(el)
            }
            else
            {
              this.props.AlertAdd("Stop")
            }
          }}
          >{el.name}</div>
        )}
        </div>
    </div>   
      )      
      
    }  

  }

  export default PositionsTitle