import React from 'react';
import PositionAddition from './PositionAddition';

class CategoriesAddition extends React.Component {    
    render() {
        if(this.props.cat.ThisAddition === true && this.props.cat.categories === "Добавка В " + this.props.orderPosition.categ)
      return(
        <div
        className='ButtonsAdditionGlobalDiv'
        >
            {this.props.cat.name}
            <div className='ButtonsAdditionMain'>
                {this.props.position.map((el) => (
                <PositionAddition 
                AlertAdd={this.props.AlertAdd}
                EditWOKNoodles={this.props.EditWOKNoodles}
                AddAdditionFunc={this.props.AddAdditionFunc}
                cat={this.props.cat}
                orderPosition={this.props.orderPosition}
                position={el}
                key={el.id}
                />))}
            </div>
        </div>
      )
      
      
    }  
  }

  export default CategoriesAddition