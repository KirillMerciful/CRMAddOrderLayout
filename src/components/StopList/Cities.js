import React from 'react';
import City from './City';

class Cities extends React.Component {    
    render() {
      return(
        
      <div className='StopListDiv'>
        <table>
          <thead>
            <tr>
              <th>
                Город
              </th>
              <th>
                Улица
              </th>
              <th>
                Доставка
              </th>
              <th>
                Вынос
              </th>
              <th>
                Состояние
              </th>
              <th>
                Стоплист
              </th>
            </tr>
          </thead>
        </table>
          {this.props.City.map((el) => (<City   
          City={el}
          position={this.props.position} 
          cat={this.props.cat} 
          StopListChekFunction={this.props.StopListChekFunction} 
          StopListChekFunctionCat={this.props.StopListChekFunctionCat} 
          key={el.id}/>))}

      </div>    
      )
      
      
    }  
  }

  export default Cities