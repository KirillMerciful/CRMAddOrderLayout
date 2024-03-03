import React from "react"
import { IoSunny, IoDocumentLock , IoDuplicate, IoArrowForwardCircle, IoCartSharp  } from "react-icons/io5";


class MenuMain extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
        changeColor: false,
        openMenu: false
    }
    this.ChangeColorTheme = this.ChangeColorTheme.bind(this)
    
  }


  render() {
    if(this.props.ActiveComponent === 0)
    {
    return (
      <div className="MenuLeftPanel">
        <div className="ButtonsMenu">
        <div className="ContentOpenMenu" onClick={(() => {
                this.props.openMenuFunction()
              })}>
        <div className="TextOpenMenuMenu">
                {this.props.openMenu === true && 'Скрыть меню'}
              </div>
              <IoArrowForwardCircle className={this.props.openMenu === true ? "IconOpenMenu open" : "IconOpenMenu"} id="IconOM"/>
            </div>
            <div className="ContentNewOrderMenu" onClick={(() => {
                  this.props.NewOrderON()
                })}>
              <div className="TextNewOrderMenu ActivateTabText">
                {this.props.openMenu === true && 'Новый заказ'}
              </div>
                <IoDuplicate id="IconNewOrderID" className="IconNewOrder ActivateTab"/>
          </div>

          <div className="ContentSavedOrdersMenu" onClick={(() => {
                this.props.SavedOrdersON()
              })}>
            <div className="TextSavedOrdersMenu">
                  {this.props.openMenu === true && 'Заказы'}
                </div>
              <IoCartSharp id="IconSavedOrdersMenuID" className="IconSavedOrders" />
          </div> 
          
          <div className="ContentStopListMenu" onClick={(() => {
                this.props.StopListON()
              })}>
            <div className="TextStopListMenu">
                  {this.props.openMenu === true && 'Стоп лист'}
                </div>
              <IoDocumentLock id="IconStopListID" className="IconStopList" />
          </div>    

          <div className="ContentChangeThemeMenu" onClick={(() => {
              this.ChangeColorTheme() 
            })}>
            <div className="TextChangeThemeMenu">
                    {this.props.openMenu === true && 'Сменить тему'}
            </div>                   
            <IoSunny className="IconSun" id='ISun'/>
          </div> 

        </div>
      </div>
    )
    }
    else
    {
      if(this.props.ActiveComponent === 1)
      {
      return (
        <div className="MenuLeftPanel">
          <div className="ButtonsMenu">
            
            <div className="ContentOpenMenu" onClick={(() => {
                 this.props.openMenuFunction()
              })}>
            <div className="TextOpenMenuMenu">
                {this.props.openMenu === true && 'Скрыть меню'}
              </div>
              <IoArrowForwardCircle className={this.props.openMenu === true ? "IconOpenMenu open" : "IconOpenMenu"} id="IconOM"/>

            </div>
            <div className="ContentNewOrderMenu" onClick={(() => {
                  this.props.NewOrderON()
                })}>
              <div className="TextNewOrderMenu">
                {this.props.openMenu === true && 'Новый заказ'}
              </div>
                <IoDuplicate id="IconNewOrderID" className="IconNewOrder"/>
            </div>

            <div className="ContentSavedOrdersMenu" onClick={(() => {
                this.props.SavedOrdersON()
              })}>
            <div className="TextSavedOrdersMenu">
                  {this.props.openMenu === true && 'Заказы'}
                </div>
              <IoCartSharp id="IconSavedOrdersMenuID" className="IconSavedOrders" />
          </div> 
            
            <div className="ContentStopListMenu"  onClick={(() => {
                this.props.StopListON()
              })}>
              <div className="TextStopListMenu ActivateTabText">
                {this.props.openMenu === true && 'Стоп лист'}
              </div>
              <IoDocumentLock id="IconStopListID" className="IconStopList ActivateTab"/>
            </div>    
  
            <div className="ContentChangeThemeMenu" onClick={(() => {
                this.ChangeColorTheme() 
              })}>      
              <div className="TextChangeThemeMenu">
                  {this.props.openMenu === true && 'Сменить тему'}
                </div>        
              <IoSunny className="IconSun" id='ISun' />
            </div> 
  
          </div>
        </div>
      )
      }
      if(this.props.ActiveComponent === 2)
      {
        return(
          <div className="MenuLeftPanel">
          <div className="ButtonsMenu">
            
            <div className="ContentOpenMenu" onClick={(() => {
                 this.props.openMenuFunction()
              })}>
            <div className="TextOpenMenuMenu">
                {this.props.openMenu === true && 'Скрыть меню'}
              </div>
              <IoArrowForwardCircle className={this.props.openMenu === true ? "IconOpenMenu open" : "IconOpenMenu"} id="IconOM"/>

            </div>
            <div className="ContentNewOrderMenu" onClick={(() => {
                  this.props.NewOrderON()
                })}>
              <div className="TextNewOrderMenu">
                {this.props.openMenu === true && 'Новый заказ'}
              </div>
                <IoDuplicate id="IconNewOrderID" className="IconNewOrder"/>
            </div>

            <div className="ContentSavedOrdersMenu" onClick={(() => {
                this.props.SavedOrdersON()
              })}>
            <div className="TextSavedOrdersMenu ActivateTabText">
                  {this.props.openMenu === true && 'Заказы'}
                </div>
              <IoCartSharp id="IconSavedOrdersMenuID" className="IconSavedOrders ActivateTab" />
          </div> 
            
            <div className="ContentStopListMenu"  onClick={(() => {
                this.props.StopListON()
              })}>
              <div className="TextStopListMenu">
                {this.props.openMenu === true && 'Стоп лист'}
              </div>
              <IoDocumentLock id="IconStopListID" className="IconStopList"/>
            </div>    
  
            <div className="ContentChangeThemeMenu" onClick={(() => {
                this.ChangeColorTheme() 
              })}>      
              <div className="TextChangeThemeMenu">
                  {this.props.openMenu === true && 'Сменить тему'}
                </div>        
              <IoSunny className="IconSun" id='ISun' />
            </div> 
  
          </div>
        </div>
        )
      }
    }
  }


  async ChangeColorTheme(){
    document.documentElement.style.setProperty('--TimeChange1', '0.5s')
    document.documentElement.style.setProperty('--TimeChangeSlider', '0.5s')
    if (this.state.changeColor === false)
    {//изменение темы на темную
      document.documentElement.style.setProperty('--mainA-color', '#8743ea')
      document.documentElement.style.setProperty('--LightA-color', '#7d43ea')
      document.documentElement.style.setProperty('--mainB-color', '#444444')
      document.documentElement.style.setProperty('--mainC-color', '#612bc5')
      document.documentElement.style.setProperty('--mainCHover-color', '#5d2abd')    
      document.documentElement.style.setProperty('--backgrounBody-color', '#160150')
      document.documentElement.style.setProperty('--DarkA-Color', '#3d2754')
      document.documentElement.style.setProperty('--DarkB-Color', '#f3f7fa')
      document.documentElement.style.setProperty('--slayder-color', '#3d2754')
      document.documentElement.style.setProperty('--mainText-color', '#f3f7fa')
      document.documentElement.style.setProperty('--Text2-Color', '#f3f7fa')
      document.documentElement.style.setProperty('--ColorSostaAndSoy', '#ababab')
      document.documentElement.style.setProperty('--ColorWindowSaleSum', '#7d7d7d')       
      document.documentElement.style.setProperty('--ScrollBarBackGround', '#636363')         
      document.documentElement.style.setProperty('--ScrollBarThumb', '#a3a3a3')         
      document.documentElement.style.setProperty('--ScrollBarThumbHover', '#b3b3b3')   
      document.documentElement.style.setProperty('--ColorHoverDeleteAndCancel', '#612bc583')   
      document.documentElement.style.setProperty('--HeadOrderColor', '#666')   
      
      
      document.documentElement.style.setProperty('--ColorMarkYa', '#c466ff')  
      document.documentElement.style.setProperty('--ColorStatusNewOrderSaved', '#ff00007f')
      document.documentElement.style.setProperty('--ColorStatusProcessingOrderSaved', '#f098')
      document.documentElement.style.setProperty('--ColorStatusNotProcessingOrderSaved', '#94949484')
      document.documentElement.style.setProperty('--ColorStatusTimeoutOrderSaved', '#6038ff84')
      document.documentElement.style.setProperty('--ColorStatusCookingOrderSaved', '#38f2ff84')       
      document.documentElement.style.setProperty('--ColorStatusCookedOrderSaved', '#3bff3884')         
      document.documentElement.style.setProperty('--ColorStatusDeliveryOrderSaved', '#fcff3884')         
      document.documentElement.style.setProperty('--ColorStatusCompletedOrderSaved', '#80fc6d62')    
      document.documentElement.style.setProperty('--ColorStatusCancelledOrderSaved', '#0a0a0a95')   
      document.documentElement.style.setProperty('--ColorStatusCancelledOrderSavedText', '#f3f7fa')  
      document.documentElement.style.setProperty('--SavedOrdDeletedWindowButtonCancelColorHover', '#595959') 
      document.documentElement.style.setProperty('--SavedOrdDeletedWindowButtonDeleteColorHover', '#ff00009f') 
    }
    else
    {//изменение темы на светлую
      document.documentElement.style.setProperty('--mainA-color', '#039ef5')
      document.documentElement.style.setProperty('--LightA-color', '#03a8f5')
      document.documentElement.style.setProperty('--mainB-color', '#f3f7fa')
      document.documentElement.style.setProperty('--mainC-color', '#e0e7eb')
      document.documentElement.style.setProperty('--backgrounBody-color', '#c1deff')
      document.documentElement.style.setProperty('--backgrounBody-color', '#c1deff')
      document.documentElement.style.setProperty('--slayder-color', '#ccc')
      document.documentElement.style.setProperty('--DarkA-Color', '#0364f5')
      document.documentElement.style.setProperty('--DarkB-Color', '#0364f5')
      document.documentElement.style.setProperty('--mainText-color', '#f3f7fa')
      document.documentElement.style.setProperty('--Text2-Color', '#000000')
      document.documentElement.style.setProperty('--ColorSostaAndSoy', '#7f7f7f')
      document.documentElement.style.setProperty('--ColorWindowSaleSum', '#f3f7fa')         
      document.documentElement.style.setProperty('--ScrollBarBackGround', '#dcdcdc')         
      document.documentElement.style.setProperty('--ScrollBarThumb', '#a3a3a3')         
      document.documentElement.style.setProperty('--ScrollBarThumbHover', '#7e7e7e')
      document.documentElement.style.setProperty('--ColorHoverDeleteAndCancel', '#ffd2d21f')     
      document.documentElement.style.setProperty('--mainCHover-color', '#d6dbdd')          
      document.documentElement.style.setProperty('--HeadOrderColor', '#e0e7eb')   
      
      document.documentElement.style.setProperty('--ColorMarkYa', '#03a8f5')  
      document.documentElement.style.setProperty('--ColorStatusNewOrderSaved', '#ff00004f') 
      document.documentElement.style.setProperty('--ColorStatusProcessingOrderSaved', '#ff00994f')
      document.documentElement.style.setProperty('--ColorStatusNotProcessingOrderSaved', '#4545454f')
      document.documentElement.style.setProperty('--ColorStatusTimeoutOrderSaved', '#6038ff4f')
      document.documentElement.style.setProperty('--ColorStatusCookingOrderSaved', '#38f2ff4f')       
      document.documentElement.style.setProperty('--ColorStatusCookedOrderSaved', '#3bff384f')         
      document.documentElement.style.setProperty('--ColorStatusDeliveryOrderSaved', '#fcff384f')         
      document.documentElement.style.setProperty('--ColorStatusCompletedOrderSaved', '#53ff3817')   
      document.documentElement.style.setProperty('--ColorStatusCancelledOrderSaved', '#21212188')   
      document.documentElement.style.setProperty('--ColorStatusCancelledOrderSavedText', '#f3f7fa')  
      document.documentElement.style.setProperty('--SavedOrdDeletedWindowButtonCancelColorHover', '#cbd2d6')   
      document.documentElement.style.setProperty('--SavedOrdDeletedWindowButtonDeleteColorHover', '#ff000073') 
    }
    this.setState({
      changeColor: !this.state.changeColor
    })  
    setTimeout(() => { this.ChangeTime() }, 600)
    
  }

  async ChangeTime()
  {
    document.documentElement.style.setProperty('--TimeChange1', '0.2s');
    document.documentElement.style.setProperty('--TimeChangeSlider', '0.4s')
  }

}

export default MenuMain
