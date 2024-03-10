import React from 'react';
import SavedOrd from './SavedOrd';


class SavedOrdersMain extends React.Component {    
    render() {
        return(
        <div>
            <div className='SavedHeadDiv'>
                <table>
                    <tbody>
                        <tr>
                            <td>
                                
                            </td>
                        </tr>
                    </tbody>
                </table>
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
  }

  export default SavedOrdersMain