import React from 'react';

import StopPositionOnCity from './StopPositionOnCity';

class StopCategoriesOnCity extends React.Component {  
  constructor(props) {
    super(props)
    this.state = {
        OpenStopCateg: false,
        CheckFind: 0 
}
this.OpenOrCloseThisCat = this.OpenOrCloseThisCat.bind(this)  
}

    render() {
      if(this.props.StopCat.idCity === this.props.City.idCity)
      return(
      <div className={this.state.CheckFind !== 0 ? 'StopListCatName' : 'StopListCatName Unfind'}>
          <input type="checkbox" className='CheckBoxStopCat' id={'StopListCatCheck' + this.props.StopCat.id + " " +  this.props.City.idCity}  checked={this.props.StopCat.CheckStopList} onChange={(() => {
            this.props.StopListChekFunctionCatOnCity(this.props.StopCat.id, this.props.StopCat.idCity)
            })}></input>
          <button className={this.state.OpenStopCateg === false ? 'ButtonCatNameStop closed' : 'ButtonCatNameStop'} onClick={(() => {
        this.OpenOrCloseThisCat()
      })}>{this.props.StopCat.name}</button>
            <div>
                {
                this.props.StopList.map((el) => (
                <StopPositionOnCity 
                City={this.props.City}
                OpenStopCateg={this.state.OpenStopCateg}  
                StopCat={this.props.StopCat} 
                StopListChekFunctionOnCity={this.props.StopListChekFunctionOnCity} 
                StopList={el} 
                key={el.id + " " + el.idCity}/>))}
                  
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

  
    
  export default StopCategoriesOnCity 