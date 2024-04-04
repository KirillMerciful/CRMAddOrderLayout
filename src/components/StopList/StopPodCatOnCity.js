import React from 'react';
import StopListPositionOnPodcatOnCity from './StopListPositionOnPodcatOnCity';

class StopPodCatOnCity extends React.Component {  
    constructor(props) {
        super(props)
        this.state = {
            OpenStopCateg: false,
            CheckFind: 0
    }
    this.OpenOrCloseThisCat = this.OpenOrCloseThisCat.bind(this)  
    }
  

    render() {
        if(this.props.StopPodCat.idCity === this.props.City.idCity)
      return(
        <div className={this.state.CheckFind !== 0 ? 'StopListCatName' : 'StopListCatName Unfind'}>
        <input type="checkbox" className='CheckBoxStopCat' id={'StopListPodCatCheck' + this.props.StopPodCat.id + " " + this.props.City.idCity}  checked={this.props.StopPodCat.CheckStopList} onChange={(() => {
          this.props.StopListChekFunctionPodcatOnCity(this.props.StopPodCat.id, this.props.City.idCity)
          })}></input>
        <button className={this.state.OpenStopCateg === false ? 'ButtonCatNameStop closed' : 'ButtonCatNameStop'} onClick={(() => {
      this.OpenOrCloseThisCat()
    })}>{this.props.StopPodCat.name}</button>
          <div>
              {
              this.props.StopList.map((el) => (
              <StopListPositionOnPodcatOnCity 
              City={this.props.City}
              OpenStopCateg={this.state.OpenStopCateg}  
              StopPodCat={this.props.StopPodCat} 
              StopCat={this.props.StopCat}
              StopListChekFunctionOnCity={this.props.StopListChekFunctionOnCity} 
              StopList={el} 
              key={el.id + " " + el.idCity}
              />))}
                
          </div>    
    </div>   
      )
    
      
      
    }  

    componentDidMount(){
      var check = 0
      this.props.StopList.map((el) => {
        if(el.categ === this.props.StopCat.name)
        {
          check = check + 1
        }
        return(el)
      })
      this.setState({
        CheckFind: check
      })
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

  export default StopPodCatOnCity