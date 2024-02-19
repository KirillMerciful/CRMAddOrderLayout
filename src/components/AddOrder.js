import React from "react"
import AddPizza30 from "./AddOrderComponents/AddPizza30"
import AddKomboPizza30 from "./AddOrderComponents/AddKomboPizza30"
import AddWOK from "./AddOrderComponents/AddWOK"
import AddOther from "./AddOrderComponents/AddOther"
import SaleOFFAddPizza30 from "./AddOrderComponents/SaleOFFAddPizza30"
import SaleOFFAddKomboPizza30 from "./AddOrderComponents/SaleOFFAddKomboPizza30"
import SaleOFFAddWOK from "./AddOrderComponents/SaleOFFAddWOK"
import SaleOFFAddOther from "./AddOrderComponents/SaleOFFAddOthe"



class AddOrder extends React.Component {
 
  render() {
    
    if (this.props.OrdPos.id > 0 && this.props.OrdPos.categ !== "") 
    {
      if (this.props.OrdPos.salecheck === true)
      {//проверка может ли быть пробита скидка на данную позицию
        if (this.props.OrdPos.categ === "Пицца") 
        {//это если пицца добавляеца в заказ
            if (this.props.OrdPos.kombocheck !== true) 
            {//проверка не комбо ли добавляеца в заказ
              return (
                <AddPizza30 
                    AlertAdd={this.props.AlertAdd}
                    position={this.props.position}
                    podcat={this.props.podcat}
                    OrdPos={this.props.OrdPos}
                    BMO={this.props.BMO}
                    BPO={this.props.BPO}
                    EIO={this.props.EIO}
                    DelOrd={this.props.DelOrd}
                    EdP={this.props.EdP}
                    ordDobP={this.props.ordDobP}
                    AddD={this.props.AddD}
                    DelDob={this.props.DelDob}
                    BPD={this.props.BPD}
                    BMD={this.props.BMD}
                    EID={this.props.EID}
                    idOrd={this.props.OrdPos.idOrd}
                    PDK={this.props.PDK}
                />
              )
            } //если все таки комбо пицц 
            else 
            {
              return (
                <AddKomboPizza30
                  OrdPos={this.props.OrdPos}
                  BMO={this.props.BMO}
                  BPO={this.props.BPO}
                  EIO={this.props.EIO}
                  DelOrd={this.props.DelOrd}
                  EdP={this.props.EdP}
                  PDK={this.props.PDK}
                />
              )
            }
        }  
        else 
        {//это все если не пицца добавляеца в заказ
          if (this.props.OrdPos.categ === "ВОК" && this.props.OrdPos.dobcheck === false) 
          {//проверка вок ли добавляеца и 2ая проверка не собранный ли вок
            return (
            <AddWOK 
              AlertAdd={this.props.AlertAdd}
              position={this.props.position}
              podcat={this.props.podcat}
              OrdPos={this.props.OrdPos}
              BMO={this.props.BMO}
              BPO={this.props.BPO}
              EIO={this.props.EIO}
              DelOrd={this.props.DelOrd}
              EISW={this.props.EISW}
              BMSW={this.props.BMSW}
              BPSW={this.props.BPSW}
              deleteSostWOK={this.props.deleteSostWOK}
              ordSWOk={this.props.ordSWOk}
              idOrd={this.props.OrdPos.idOrd}
              EWN={this.props.EWN}
              AddSostWOK={this.props.AddSostWOK}
              PDK={this.props.PDK}
            />
            )
          } 
          else 
          {//другая позиция добавялеца в заказ (без опциональности)
            return (
              <AddOther 
                OrdPos={this.props.OrdPos}
                BMO={this.props.BMO}
                BPO={this.props.BPO}
                EIO={this.props.EIO}
                DelOrd={this.props.DelOrd}
                PDK={this.props.PDK}
              />
            )
          }
        }
      }
      else//если невозможно пробить скидку
      {
        if (this.props.OrdPos.categ === "Пицца") 
        {//это если пицца добавляеца в заказ
            if (this.props.OrdPos.kombocheck !== true) 
            {//проверка не комбо ли добавляеца в заказ
              return (
                <SaleOFFAddPizza30 
                    AlertAdd={this.props.AlertAdd}
                    position={this.props.position}
                    podcat={this.props.podcat}
                    OrdPos={this.props.OrdPos}
                    BMO={this.props.BMO}
                    BPO={this.props.BPO}
                    EIO={this.props.EIO}
                    DelOrd={this.props.DelOrd}
                    EdP={this.props.EdP}
                    ordDobP={this.props.ordDobP}
                    AddD={this.props.AddD}
                    DelDob={this.props.DelDob}
                    BPD={this.props.BPD}
                    BMD={this.props.BMD}
                    EID={this.props.EID}
                    idOrd={this.props.OrdPos.idOrd}
                    PDK={this.props.PDK}
                />
              )
            } //если все таки комбо пицц 
            else 
            {
              return (
                <SaleOFFAddKomboPizza30
                  OrdPos={this.props.OrdPos}
                  BMO={this.props.BMO}
                  BPO={this.props.BPO}
                  EIO={this.props.EIO}
                  DelOrd={this.props.DelOrd}
                  EdP={this.props.EdP}
                  PDK={this.props.PDK}
                />
              )
            }
        }  
        else 
        {//это все если не пицца добавляеца в заказ
          if (this.props.OrdPos.categ === "ВОК" && this.props.OrdPos.dobcheck === false) 
          {//проверка вок ли добавляеца и 2ая проверка не собранный ли вок
            return (
            <SaleOFFAddWOK
              AlertAdd={this.props.AlertAdd}
              position={this.props.position}
              podcat={this.props.podcat}
              OrdPos={this.props.OrdPos}
              BMO={this.props.BMO}
              BPO={this.props.BPO}
              EIO={this.props.EIO}
              DelOrd={this.props.DelOrd}
              EISW={this.props.EISW}
              BMSW={this.props.BMSW}
              BPSW={this.props.BPSW}
              deleteSostWOK={this.props.deleteSostWOK}
              ordSWOk={this.props.ordSWOk}
              idOrd={this.props.OrdPos.idOrd}
              EWN={this.props.EWN}
              AddSostWOK={this.props.AddSostWOK}
              PDK={this.props.PDK}
            />
            )
          } 
          else 
          {//другая позиция добавялеца в заказ (без опциональности)
            return (
              <SaleOFFAddOther
                OrdPos={this.props.OrdPos}
                BMO={this.props.BMO}
                BPO={this.props.BPO}
                EIO={this.props.EIO}
                DelOrd={this.props.DelOrd}
                PDK={this.props.PDK}
              />
            )
          }
        }
      }
    }
  }        
          
        
    
}

export default AddOrder
