import React from 'react';

class OrderTitle extends React.Component {
    render() {
        return(
            <div className='OrderTit'>
                <table className='OrderTitTable'>
                    <tbody>
                        <tr>
                            <td className='OrderTitName'>Наименование</td>    
                            <td className='OrderTitEditNum'></td>                        
                            <td className='OrderTitNum'>Кол-во</td>
                            <td className='OrderTitEditNum'></td>
                            <td className='OrderTitPrice'>Цена</td>
                            <td className='OrderTitSum'>Стоимость</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
    }


export default OrderTitle