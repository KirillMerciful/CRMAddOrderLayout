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
                    DeleteSavedOrdDropDown={this.props.DeleteSavedOrdDropDown}
                    DeleteSavedOrdClickButton={this.props.DeleteSavedOrdClickButton}
                    CloseDeleteSavedOrdDropDown={this.props.CloseDeleteSavedOrdDropDown}
                    DeleteSavedOrd={this.props.DeleteSavedOrd}
                    ChangeStatusSavedOrd={this.props.ChangeStatusSavedOrd}
                    Saved={el}
                    key={el.id}
                    />
                    
                )}
                
            
            </div>  
        </div>  
        )  
      
      
    }  
  }

  export default SavedOrdersMain