import React from 'react';
import StopListPosition from './StopListPosition';

class StopListCategories extends React.Component {  
  constructor(props) {
    super(props)
    this.state = {
        OpenStopCateg: false    
}
this.OpenOrCloseThisCat = this.OpenOrCloseThisCat.bind(this)  
}

    render() {
      if(this.props.cat.name !== "Добавка В Вок")
      return(
      <div className='StopListCatName'>
          <input type="checkbox" className='CheckBoxStopCat' id={'StopListCatCheck' + this.props.cat.id}  checked={this.props.cat.CheckStopList} onChange={(() => {
            this.props.StopListChekFunctionCat(this.props.cat.id)
            })}></input>
          <button className={this.state.OpenStopCateg === false ? 'ButtonCatNameStop closed' : 'ButtonCatNameStop'} onClick={(() => {
        this.OpenOrCloseThisCat()
      })}>{this.props.cat.name}</button>
            <div>
                {
                this.props.position.map((el) => (
                <StopListPosition 
                OpenStopCateg={this.state.OpenStopCateg}  
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

  
    
  export default StopListCategories 