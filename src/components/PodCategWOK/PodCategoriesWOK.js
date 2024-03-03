import React from 'react';
import PodCategWOKMeet from './PodCategWOKMeet.js'
import PodCategWOKDop from './PodCategWOKDop.js';
import PodCategWOKSauce from './PodCategWOKSauce.js';
import PodCategWOKNoodles from './PodCategWOKNoodles.js'; 


class PodCategoriesWOK extends React.Component {    


    render() {
      return(
        <div className='DobavkiWOKMain'>
            <div className='DobavkiWOKTitle'>Лапша:</div>
            <div className='DobavkiWokButtons'>            
                {this.props.position.map((el) => (<PodCategWOKNoodles  AlertAdd={this.props.AlertAdd} EditWOKNoodles={this.props.EditWOKNoodles} idOrd={this.props.idOrd} podcat={el} key={el.id}/>))}
            </div> 

            <div className='DobavkiWOKTitle'>Мясо:</div>
            <div className='DobavkiWokButtons'>            
                {this.props.position.map((el) => (<PodCategWOKMeet  AlertAdd={this.props.AlertAdd} AddSostWOK={this.props.AddSostWOK} idOrd={this.props.idOrd} podcat={el} key={el.id}/>))}
            </div> 

            <div className='DobavkiWOKTitle'>Допы:</div>
            <div className='DobavkiWokButtons'>            
                {this.props.position.map((el) => (<PodCategWOKDop  AlertAdd={this.props.AlertAdd} AddSostWOK={this.props.AddSostWOK} idOrd={this.props.idOrd} podcat={el} key={el.id}/>))}
            </div> 
            
            <div className='DobavkiWOKTitle'>Соусы:</div>
            <div className='DobavkiWokButtons'>            
                {this.props.position.map((el) => (<PodCategWOKSauce  AlertAdd={this.props.AlertAdd} AddSostWOK={this.props.AddSostWOK} idOrd={this.props.idOrd} podcat={el} key={el.id}/>))}
            </div> 
        </div>
        
      )
      
      
    }  
 
  }

  export default PodCategoriesWOK