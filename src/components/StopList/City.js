import React from 'react';

class City extends React.Component {    
  constructor(props) {
    super(props)
    this.state = {
        StopList: []
}
this.StopListThisCity = this.StopListThisCity.bind(this)  
}

    render() {
      return(
      <div className='StopListCatName'>
        <table>
          <tbody>
            <tr>
              <td>
                {this.props.City.city}
              </td>
              <td>
                {this.props.City.street}
              </td>
              <td>
                <select delivery>
                  <option delivery>60</option>
                  <option delivery>75</option> 
                  <option delivery>90</option>
                  <option delivery>105</option> 
                  <option delivery>120</option> 
                </select>
              </td>
              <td>
                <select takeway>
                  <option takeway>20</option>
                  <option takeway>30</option> 
                  <option takeway>40</option>
                  <option takeway>50</option> 
                  <option takeway>60</option> 
                </select>
              </td>
              <td>
                <select actived>
                  <option actived>Активен</option>
                  <option actived>Доставка остановлена</option>
                  <option actived>Вынос остановлен</option>
                  <option actived>Полностью остановлен</option>
                </select>
              </td>
            </tr>
          </tbody>
        </table>
          <button onClick={() => {
            this.StopListThisCity()
            console.log(this.state.StopList)
          }}>fff</button>
      </div>    
      )
      
      
    }  

    async StopListThisCity(){
      this.setState({
        StopList: [...this.props.position]
      })
      await this.setState
     this.state.StopList.map((el) =>{
        el.idCity = this.props.City.idCity
      })
      this.setState({
        StopList: [...this.state.StopList]
      })
    }

  }

  export default City