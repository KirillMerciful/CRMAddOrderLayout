import React from 'react';
import StopListPositionOnPodcat from './StopListPositionOnPodcat';

class StopPodCatPosition extends React.Component {  
    constructor(props) {
        super(props)
        this.state = {
            OpenStopCateg: false    
    }
    this.OpenOrCloseThisCat = this.OpenOrCloseThisCat.bind(this)  
    }
  

    render() {
      return(
        <div className='StopListCatName'>
        <input type="checkbox" className='CheckBoxStopCat' id={'StopListPodCatCheck' + this.props.podcat.id}  checked={this.props.podcat.CheckStopList} onChange={(() => {
          this.props.StopListChekFunctionPodcat(this.props.podcat.id)
          })}></input>
        <button className={this.state.OpenStopCateg === false ? 'ButtonCatNameStop closed' : 'ButtonCatNameStop'} onClick={(() => {
      this.OpenOrCloseThisCat()
    })}>{this.props.podcat.name}</button>
          <div>
              {
              this.props.position.map((el) => (
              <StopListPositionOnPodcat 
              OpenStopCateg={this.state.OpenStopCateg}  
              podcat={this.props.podcat} 
              cat={this.props.cat}
              StopListChekFunction={this.props.StopListChekFunction} 
              position={el} 
              key={el.id}/>))}
                
          </div>    
    </div>   
      )
    
      
      
    }  
    OpenOrCloseThisCat() {
        if(this.state.OpenStopCateg === false)
        {
        this.setState({
            OpenStopCateg: true
        })
      }
      else
      {
        this.setState({
            OpenStopCateg: false
        })
      }}

  }

  export default StopPodCatPosition