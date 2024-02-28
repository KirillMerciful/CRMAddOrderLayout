import React from 'react';
import { IoChevronDown } from "react-icons/io5";

import OrderTitle from './components/OrderTitle';
import Categories from './components/Categories';
import Positions from './components/Positions';
import PositionsTitle from './components/PositionsTitle';
import AddOrder from './components/AddOrder'; 
import OrderDownPanel from './components/OrderDownPanel';
import TotalSum from './components/TotalSum';
import TablewaresAdd from './components/Tablewares/TablewaresAdd';
import SaleSumWindow from './components/SALE/SALESumWindow';
import MenuMain from './components/Menu/MenuMain';
import StopAlerts from './components/StopList/StopAlerts';
import Cities from './components/StopList/Cities';
import CityList from './components/CityList';
import SavedOrdersMain from './components/SavedOrders/SavedOrdersMain';
import LastWindow from './components/SavedOrders/LastWindow';



class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            openMenu: false,
            ActiveComponent: 0,//выбранный активный компонент
            SSumWindowActive: false,//активность окна для ввода скидки суммой
            LastWindowSaved: false, //активность окна для сохранения заказа
            totalSoy: 0, //счетчик соевых
            foridSost: 1, //счетчик для присваивания айди добавкам в ВОК
            foridDob: 1, //счетчик для присваивания айди добавкам в пиццу
            forIdAlert: 1,
            foridOrd: 1, //счетчик для присваивания айди позициям в заказе
            SavedIdOrd: 1,//счетчик для присваивания айди сохраненным заказам
            totalSum: 0,//счетчик суммы заказа 
            totalSumSale: 0,//счетчик суммы заказа со скидкой
            Sale: 1,//множитель скидки
            SaleInp: 0,//скидка суммой
            TotalSale: 0,//стейт для вывода скидки в виде "-ХХ%"/"-ХХХХ руб."
            pdkon: 0, //счетчик для проверки активен ли переключатель цен на дк, логичнее было бы true/false использовать, но я уже сделал так, так что будет так
            onCat: 0, //хранение какая категория выбрана, изначально никакая. Вводятся не айди а названия, мне так удобнее
            cat: [ //массив для категорий
                {
                    id:1, //айди категории
                    name: "ВОК", //название категории
                    CheckStopList: false,
                    CheckIndeterminate: false
                },
                {
                    id: 2,
                    name: "Роллы",
                    CheckStopList: false,
                    CheckIndeterminate: false
                },
                {
                    id:3,
                    name: "Запеченные Роллы",
                    CheckStopList: false,
                    CheckIndeterminate: false
                },
                {
                    id: 4,
                    name: "Горячие Роллы",
                    CheckStopList: false,
                    CheckIndeterminate: false
                },
                {
                    id: 5,
                    name: "Сеты",
                    CheckStopList: false,
                    CheckIndeterminate: false
                },
                {
                    id:6,
                    name: "Поке",
                    CheckStopList: false,
                    CheckIndeterminate: false
                },
                {
                    id: 7,
                    name: "Пицца",
                    CheckStopList: false,
                    CheckIndeterminate: false
                },
                {
                    id: 8,
                    name: "Добавка К Пицце",
                    CheckStopList: false,
                    CheckIndeterminate: false
                },
                {
                    id: 9,
                    name: "Добавка В Вок",
                    CheckStopList: false,
                    CheckIndeterminate: false
                }
            ],
            podcat: [//массив подкатегорий
                {
                    id: 1,
                    name: "Мясо В Вок",
                    CheckStopList: false,
                    CheckIndeterminate: false,
                    categ: "Добавка В Вок",
                },
                {
                    id: 2,
                    name: "Доп В Вок",
                    CheckStopList: false,
                    CheckIndeterminate: false,
                    categ: "Добавка В Вок",
                },
                {
                    id: 3,
                    name: "Соус В Вок",
                    CheckStopList: false,
                    CheckIndeterminate: false,
                    categ: "Добавка В Вок",
                }
            ],
            position: [ //массив позиций
                {
                    id: 1, //айди позиции
                    name: "Филадельфия Лайт", //название позиции
                    price: 259, //цена
                    dkprice: 339, //цена дк
                    categ: "Роллы", //категория
                    sost: "Состав: Лосось, сыр творожный, огурец.", //состав
                    num: 1, //счетчик кол-ва позиции в заказе(не работает на пиццах и воках и не должен собсна)
                    salecheck: true,//показатель доступна ли скидка 
                    totalprice: 259,//общая стоимость, price умноженная на num
                    soysause: 1,//кол-во соевого к позиции
                    totaldkprice: 339,//тоже что и выше, только для цен яе/дк
                    CheckStopList: false,//показатель нахождения позиции в стоп листе
                },
                {
                    id: 2,
                    name: "Калифорния",
                    price: 199,
                    dkprice: 259,
                    categ: "Роллы",
                    sost: "Состав: Краб, сыр творожный, огурец, масаго.",
                    num: 1,
                    salecheck: true,
                    soysause: 1,
                    totalprice: 199,
                    totaldkprice: 259,
                    CheckStopList: false,
                },
                {
                    id: 3,
                    name: "Поке с тунцом",
                    price: 339,
                    dkprice: 439,
                    categ: "Поке",
                    sost: "Состав: Рис, тунец, соус терияки, черри, ананас, фасоль, огурец, кукуруза, кунжут.",
                    num: 1,
                    salecheck: false,
                    totalprice: 339,
                    totaldkprice: 439,
                    CheckStopList: false,
                },
                {
                    id: 4,
                    name: "Поке с курицей",
                    price: 249,
                    dkprice: 319,
                    categ: "Поке",
                    sost: "Состав: Рис, куриное филе, соус терияки, черри, ананас, фасоль, огурец, кукуруза, кунжут.",
                    num: 1,
                    salecheck: true,
                    totalprice: 249,
                    totaldkprice: 319,
                    CheckStopList: false,
                },
                {
                    id: 5,
                    name: "Ассорти",
                    price: 399,
                    price36: 569,//цена пиццы диаметр 36см
                    dkprice: 499,
                    dkprice36: 739,//цена ДК пиццы диаметр 36см
                    categ: "Пицца",
                    sost: "Состав: Соус, сыр Моццарелла, курица, бекон, помидор.",
                    num: 1,
                    kombocheck: false,
                    salecheck: true,
                    totalprice: 399,
                    totalprice36: 569,
                    totaldkprice: 499,
                    totaldkprice36: 739,
                    CheckStopList: false,
                },                
                {
                    id: 6,
                    name: "4 сыра",
                    price: 399,
                    price36: 549,
                    dkprice: 499,
                    dkprice36: 699,
                    categ: "Пицца",
                    sost: "Состав: Соус, сыр Моцарелла, сыр Гауда, сыр Пармезан, сыр Фета.",
                    num: 1,
                    kombocheck: false,
                    salecheck: false,
                    totalprice: 399,
                    totalprice36: 549,
                    totaldkprice: 499,
                    totaldkprice36: 699,
                    CheckStopList: false,
                },
                {
                    id: 7,
                    name: "Комбо Пиццы №1",
                    price: 859,
                    price36: 1139,
                    dkprice: 1119,
                    dkprice36: 1479,
                    categ: "Пицца",
                    sost: "Состав: Маргарита+Пепперони и Ассорти+Сушибокс",
                    num: 1,
                    kombocheck: true,
                    salecheck: true,
                    totalprice: 859,
                    totalprice36: 1139,
                    totaldkprice: 1119,
                    totaldkprice36: 1479,
                    CheckStopList: false,
                },
                {
                    id: 8,
                    name: "Гречневая",
                    price: 149,
                    dkprice: 149,
                    categ: "ВОК",
                    num: 1,
                    dobcheck: false,
                    salecheck: true,
                    totalprice: 149,
                    totaldkprice: 149,
                    CheckStopList: false,
                },
                {
                    id: 9,
                    name: "Удон",
                    price: 159,
                    dkprice: 159,
                    categ: "ВОК",
                    num: 1,
                    dobcheck: false,
                    salecheck: true,
                    totalprice: 159,
                    totaldkprice: 159,
                    CheckStopList: false,
                },
                {
                    id: 10,
                    name: "Фунчеза",
                    price: 169,
                    dkprice: 169,
                    categ: "ВОК",                   
                    num: 1,
                    dobcheck: false,
                    salecheck: true,
                    totalprice: 169,
                    totaldkprice: 169,
                    CheckStopList: false,
                },
                {
                    id: 11,
                    name: "Яичная",
                    price: 179,
                    dkprice: 179,
                    categ: "ВОК",
                    num: 1,
                    dobcheck: false,
                    salecheck: true,
                    totalprice: 179,
                    totaldkprice: 179,
                    CheckStopList: false,
                },
                {
                    id: 12,
                    name: "Удон с курицей в соусе сладкий чили",
                    price: 259,
                    dkprice: 339,
                    categ: "ВОК",
                    num: 1,
                    dobcheck: true,
                    salecheck: true,
                    totalprice: 259,
                    totaldkprice: 339,
                    CheckStopList: false,
                },
                {
                    id: 13,
                    name: "Гречневая с говядиной в соусе сладкий чили",
                    price: 339,
                    dkprice: 439,
                    categ: "ВОК",
                    num: 1,
                    dobcheck: true,
                    salecheck: true,
                    totalprice: 339,
                    totaldkprice: 439,
                    CheckStopList: false,
                },
                {
                    id: 14,
                    name: "Сет №14",
                    price: 1799,
                    dkprice: 2339,
                    categ: "Сеты",
                    num: 1,
                    salecheck: true,
                    totalprice: 1799,
                    totaldkprice: 2339,
                    soysause: 5,
                    sost: "Состав: Чикен яки, Тамаго чикен hot, Калифорния запеченная в кунжуте, Бангкок, Рио, Филадельфия лайт, Тамаго краб, Ролл огурец, Ролл тунец, Самурай",
                    CheckStopList: false,
                },
                {
                    id: 15,
                    name: "Калифомания",
                    price: 599,
                    dkprice: 779,
                    categ: "Сеты",
                    num: 1,
                    salecheck: false,
                    totalprice: 599,
                    totaldkprice: 779,
                    soysause: 2,
                    sost: "Состав: Калифорния, Калифорния кунжут, Калифорния лосось, мини-ролл лосось",
                    CheckStopList: false,
                },
                {
                    id: 16,
                    name: "Крейзи краб hot",
                    price: 219,
                    dkprice: 289,
                    categ: "Запеченные Роллы",
                    num: 1,
                    salecheck: true,
                    totalprice: 219,
                    totaldkprice: 289,
                    soysause: 1,
                    sost: "Состав: Снежный краб темпура, огурец, сыр творожный Cremette, масаго, соус яки",
                    CheckStopList: false,
                },
                {
                    id: 17,
                    name: "Ролл Том ям",
                    price: 269,
                    dkprice: 349,
                    categ: "Запеченные Роллы",
                    num: 1,
                    salecheck: false,
                    totalprice: 269,
                    totaldkprice: 349,
                    soysause: 1,
                    sost: "Состав: Креветка, сыр творожный Cremette, огурец, том ям паста, соус унаги, соус яки, масаго, кунжут",
                    CheckStopList: false,
                },
                {
                    id: 18,
                    name: "Архыз",
                    price: 249,
                    dkprice: 319,
                    categ: "Горячие Роллы",
                    num: 1,
                    salecheck: true,
                    totalprice: 249,
                    totaldkprice: 319,
                    soysause: 1,
                    sost: "Состав: Куриное филе, сыр творожный Cremette, огурец, яки соус, угревидный кларий, болгарский перец, соус унаги, кунжут",
                    CheckStopList: false,
                },
                {
                    id: 19,
                    name: "Краб темпура",
                    price: 229,
                    dkprice: 299,
                    categ: "Горячие Роллы",
                    num: 1,
                    salecheck: false,
                    totalprice: 229,
                    totaldkprice: 299,
                    soysause: 1,
                    sost: "Состав: снежный краб, сыр творожный Cremette, огурец, паприка, тортилья",
                    CheckStopList: false,
                },
                {  
                    id: 101,
                    name: "Халапенью",
                    price: 50,
                    categ: "Добавка К Пицце",
                    num: 1,
                    salecheck: true,
                    totalprice: 50,
                    CheckStopList: false,
                },
                {
                    id: 102,
                    name: "Ананас",
                    price: 60,
                    categ: "Добавка К Пицце",
                    num: 1,
                    salecheck: true,
                    totalprice: 50,
                    CheckStopList: false,
                },
                {
                    id: 212,
                    name: "Курица",
                    price: 59,
                    dkprice: 59,
                    num: 1,
                    salecheck: true,
                    totalprice: 59,
                    podcat: "Мясо В Вок",
                    categ: "Добавка В Вок",
                    CheckStopList: false,
                },
                {
                    id: 213,
                    name: "Свинина",
                    price: 69,
                    dkprice: 69,
                    num: 1,
                    salecheck: true,
                    totalprice: 69,
                    podcat: "Мясо В Вок",
                    categ: "Добавка В Вок",
                    CheckStopList: false,
                },
                {
                    id: 214,
                    name: "Лосось",
                    price: 120,
                    dkprice: 120,
                    num: 1,
                    salecheck: true,
                    totalprice: 120,
                    podcat: "Мясо В Вок",
                    categ: "Добавка В Вок",
                    CheckStopList: false,
                },
                {
                    id: 215,
                    name: "Кукуруза",
                    price: 50,
                    dkprice: 50,
                    num: 1,
                    salecheck: true,
                    totalprice: 50,
                    podcat: "Доп В Вок",
                    categ: "Добавка В Вок",
                    CheckStopList: false,
                },
                {
                    id: 216,
                    name: "Пармезан",
                    price: 50,
                    dkprice: 50,
                    num: 1,
                    salecheck: true,
                    totalprice: 50,
                    podcat: "Доп В Вок",
                    categ: "Добавка В Вок",
                    CheckStopList: false,
                },
                {
                    id: 217,
                    name: "Сладкий чили",
                    price: 0,
                    dkprice: 0,
                    num: 1,
                    salecheck: true,
                    totalprice: 0,
                    podcat: "Соус В Вок",
                    categ: "Добавка В Вок",
                    CheckStopList: false,
                },
                {
                    id: 218,
                    name: "Терияки",
                    price: 0,
                    dkprice: 0,
                    num: 1,
                    salecheck: true,
                    totalprice: 0,
                    podcat: "Соус В Вок",
                    categ: "Добавка В Вок",
                    CheckStopList: false,
                },
                {
                    id: 219,
                    name: "Сливочный",
                    price: 0,
                    dkprice: 0,
                    num: 1,
                    salecheck: true,
                    totalprice: 0,
                    podcat: "Соус В Вок",
                    categ: "Добавка В Вок",
                    CheckStopList: false,
                },
            ],
            City: [
                {
                    idCity: 1,
                    city: "Шахты",
                    street: "пр. Победа Революции",
                    house: "83Б",
                    delivery: 60,
                    takeaway: 20,
                    condition: "Активен"
                },
                {
                    idCity: 2,
                    city: "Ессентуки",
                    street: "ул. Октябрьская",
                    house: "369/1",
                    delivery: 60,
                    takeaway: 20,
                    condition: "Активен"
                },
                {
                    idCity: 3,
                    city: "Азов",
                    street: "ул. Московская",
                    house: "62",
                    delivery: 60,
                    takeaway: 20,
                    condition: "Активен"
                },
                {
                    idCity: 4,
                    city: "Ростов-на-Дону",
                    street: "ул. Ерёменко",
                    house: "67/2",
                    delivery: 60,
                    takeaway: 20,
                    condition: "Активен"
                },
                {
                    idCity: 5,
                    city: "Ростов-на-Дону",
                    street: "пр. Коммунистический ",
                    house: "32",
                    delivery: 60,
                    takeaway: 20,
                    condition: "Активен"
                },
                {
                    idCity: 6,
                    city: "Новочеркасск",
                    street: "ул. Калинина",
                    house: "55",
                    delivery: 60,
                    takeaway: 20,
                    condition: "Активен"
                },
                {
                    idCity: 7,
                    city: "Каменск Шахтинский",
                    street: "пр. Карла Маркса",
                    house: "73А",
                    delivery: 60,
                    takeaway: 20 ,
                    condition: "Активен"
                },
            ],
            orderPosition: [//массив добавленных в заказ позиций 
            
            ],
            orderDobPizza: [//масси добавленных в заказ добавко ТУТ МЕНЯТЬ КОЛВО 
            
            ],
            orderSostWOK: [//массив добавленных в заказ составляющих вока
            
            ],
            orderTablewares: [//массив для приборов
            {num: 0}
            ],
            AlertCheck: [//массив для хранения уведомлений
                {
                    Check: 0,
                    Alert: ""
                }
            ],
            StopList: [
               
            ],
            StopCat: [

            ],
            StopPodCat: [

            ],
            OnCity: 
                {
                idCity: 0,
                city: "— Выберите филиал —",
                street: "",
                house: "",
                delivery: "--",
                takeaway: "--"
                },
            OpenListCity: false,
            Saved: [
                
            ],
            TimeSave: "",
            
        }

        this.PriceCheck = this.PriceCheck.bind(this)
        this.EditCat = this.EditCat.bind(this)
        this.addOrder = this.addOrder.bind(this) 
        this.addOrder2 = this.addOrder2.bind(this)        
        this.EditProverka = this.EditProverka.bind(this)    
        this.BPlusOrd = this.BPlusOrd.bind(this)   
        this.BMinusOrd = this.BMinusOrd.bind(this)
        this.AddDob = this.AddDob.bind(this) 
        this.deleteOrder = this.deleteOrder.bind(this) 
        this.EditInputOrd = this.EditInputOrd.bind(this) 
        
        this.SaveFunction = this.SaveFunction.bind(this) 
        this.SavedButtonClick = this.SavedButtonClick.bind(this) 
        this.CloseLastWindow = this.CloseLastWindow.bind(this) 
        

        this.BPlusDob = this.BPlusDob.bind(this) 
        this.BMinusDob = this.BMinusDob.bind(this) 
        this.EditInputDob = this.EditInputDob.bind(this) 
        this.deleteDob = this.deleteDob.bind(this)
        
        this.AddSostWOK = this.AddSostWOK.bind(this)  
        this.deleteSostWOK = this.deleteSostWOK.bind(this)  
        this.BPlusSostWOK = this.BPlusSostWOK.bind(this)  
        this.BMinusSostWOK = this.BMinusSostWOK.bind(this)  
        this.EditInputSostWOK = this.EditInputSostWOK.bind(this)  
        this.EditWOKNoodles = this.EditWOKNoodles.bind(this)

        this.TotalSumFunction = this.TotalSumFunction.bind(this)
        this.TotalSumSaleFunction = this.TotalSumSaleFunction.bind(this)
        this.SaleFunction = this.SaleFunction.bind(this)
        this.SaleWindowEditActive = this.SaleWindowEditActive.bind(this)
        this.SaleInpEdit = this.SaleInpEdit.bind(this)
        this.SaleInpEdit0 = this.SaleInpEdit0.bind(this)
        this.SaleInpEdit2 = this.SaleInpEdit2.bind(this)
        this.ButtonSaleColor = this.ButtonSaleColor.bind(this)
        
        
        
        this.cleanOrder = this.cleanOrder.bind(this)
        this.addTablewares = this.addTablewares.bind(this)
        
        this.StopListON = this.StopListON.bind(this)
        this.NewOrderON = this.NewOrderON.bind(this)      
        this.SavedOrdersON = this.SavedOrdersON.bind(this)
        this.openMenuFunction = this.openMenuFunction.bind(this)     
        
        this.StopListChekFunction = this.StopListChekFunction.bind(this)    
        this.StopListChekFunctionCat = this.StopListChekFunctionCat.bind(this)    
        this.StopListChekFunctionPodcat = this.StopListChekFunctionPodcat.bind(this)    
        this.StopListCityAdd = this.StopListCityAdd.bind(this)    
        
        
        
        this.AlertAdd = this.AlertAdd.bind(this)    
        this.AlertDelete = this.AlertDelete.bind(this)    
        this.AllertClick = this.AllertClick.bind(this)    
        
        this.StopListChekFunctionOnCity = this.StopListChekFunctionOnCity.bind(this)   
        this.StopListChekFunctionCatOnCity = this.StopListChekFunctionCatOnCity.bind(this) 
        this.StopListChecCatOnPositionOnCity = this.StopListChecCatOnPositionOnCity.bind(this)   
        this.StopListChekFunctionPodcatOnCity = this.StopListChekFunctionPodcatOnCity.bind(this)   
        
        this.CityChange = this.CityChange.bind(this)   
        this.CloseCityist = this.CloseCityist.bind(this)   
        this.ChangeTimeDeliveryCity = this.ChangeTimeDeliveryCity.bind(this)
        this.ChangeTimeTakeawayCity = this.ChangeTimeTakeawayCity.bind(this)
        this.ClearTimeOneCity = this.ClearTimeOneCity.bind(this)
        this.ChangeConditionCity = this.ChangeConditionCity.bind(this)
        
        this.getTime = this.getTime.bind(this)
        

    }

    render() {
        
    if (this.state.ActiveComponent === 0)
    {
    return (      
    <div className='GlobalDiv' onClick={(() => {
        if(this.state.OpenListCity === true)
        this.CloseCityist()
    })}> 

        <div className='MainMenu'>
            {this.state.LastWindowSaved === true && <LastWindow
            SaveFunction={this.SaveFunction}
            CloseLastWindow={this.CloseLastWindow}
            />}
            <MenuMain 
                openMenu={this.state.openMenu}
                openMenuFunction={this.openMenuFunction}
                StopListON={this.StopListON}
                NewOrderON={this.NewOrderON}
                SavedOrdersON={this.SavedOrdersON}
                ActiveComponent={this.state.ActiveComponent}
            />
        </div>

        <div className='MainDiv'>
            
            <StopAlerts
                AlertCheck={this.state.AlertCheck}
                AllertClick={this.AllertClick}
            />
        <div className='MainOrder'>
            
            <SaleSumWindow 
                SaleInpEdit={this.SaleInpEdit}
                SSumWindowActive={this.state.SSumWindowActive}
                ButtonSaleColor={this.ButtonSaleColor}
                SaleInp={this.state.SaleInp}
                Sale={this.state.Sale}
            />
            <OrderTitle />
            <div className='OrderOrder'>
            
            {this.state.orderPosition.map((el) => (
                <AddOrder 
                    AlertAdd={this.AlertAdd}
                    podcat={this.state.podcat}
                    EWN={this.EditWOKNoodles} 
                    ordSWOk={this.state.orderSostWOK} 
                    EISW={this.EditInputSostWOK} 
                    BMSW={this.BMinusSostWOK} 
                    BPSW={this.BPlusSostWOK} 
                    deleteSostWOK={this.deleteSostWOK} 
                    AddSostWOK={this.AddSostWOK} 
                    position={this.state.position} 
                    DelDob={this.deleteDob} DelOrd={this.deleteOrder} 
                    BPD={this.BPlusDob} BMD={this.BMinusDob} 
                    EID={this.EditInputDob} 
                    EIO={this.EditInputOrd} 
                    BMO={this.BMinusOrd} 
                    BPO={this.BPlusOrd} 
                    AddD={this.AddDob}  
                    ordDobP={this.state.orderDobPizza} 
                    EdP={this.EditProverka} 
                    OrdPos={el} 
                    PDK={this.state.pdkon} 
                    key={el.idOrd} 
                />
            ))}
        {this.state.orderTablewares.map((el) => (
            <TablewaresAdd 
                orderTablewares={el}    
            />
            ))}

             <TotalSum 
                totalSoy={this.state.totalSoy}
                totalSum={this.state.totalSum}
             />
             
            </div>
            
            <div className='OrdDownPanel'>
                < OrderDownPanel
                    SavedButtonClick={this.SavedButtonClick}
                    checkOnPanel={this.state.orderPosition.length}
                    addTW={this.addTablewares}
                    totalSumSale={this.state.totalSumSale}
                    clOrd={this.cleanOrder}
                    SaleFunction={ this.SaleFunction}
                    TotalSale={this.state.TotalSale}
                    SaleWindowEditActive={this.SaleWindowEditActive}
                    SaleInpEdit0={this.SaleInpEdit0}
                    SaleInp={this.state.SaleInp}
                    Ord={this.state.orderPosition.length}
                />
            </div>
        </div>   

        <div className='MainDetal'>
            <div className='City'>
                <div className='CityText'>
                    Филиал:
                </div>
                <div className={this.state.OpenListCity === true ? "CityName OpenCity" : "CityName"}>
                    <label className='CityNameText' onClick={(() => {
                this.setState({
                    OpenListCity: !this.state.OpenListCity
                })
            })}>
                <div>
                    <span className='CityNameTextMain'>
                    {this.state.OnCity.city}
                    </span>
                    <br/>
                    <span className='CityNameTextStreet'>
                    {this.state.OnCity.street + " " + this.state.OnCity.house}
                    </span>
                </div>
                        <IoChevronDown className={this.state.OpenListCity === true ? "CityNameIconArrow OpenCity" : "CityNameIconArrow"}/>
                        </label>
                    <div className={this.state.OpenListCity === true ? "CitySelector OpenCity" : "CitySelector"}>
                        {this.state.OpenListCity === true && this.state.City.map((el) => (<CityList
                        CloseCityist={this.CloseCityist}
                        CityChange={this.CityChange}
                        City={el}
                        key={el.id}
                        />))}
                    </div>
                </div>
            </div>
            <div className='TimeCity'>
                            <div className='TimeDeliveryMain'>
                                Время на доставку: 
                                <div className='TimeDelivery'>
                                    {this.state.OnCity.condition === "Доставка остановлена" ? "СТОП" :  this.state.OnCity.condition === "Полностью остановлен" ? "СТОП" : this.state.OnCity.delivery }
                                </div>
                            </div>
                            <div className='TimeTakeAwayMain'>
                                Время на вынос: 
                                <div className='TimeTakeAway'>
                                    {this.state.OnCity.condition === "Вынос остановлен" ? "СТОП" : this.state.OnCity.condition === "Полностью остановлен" ? "СТОП" : this.state.OnCity.takeaway}
                                </div>
                            </div>
                            
            </div>
            
        </div> 
    
        <div className='MainCateg'>
            <Categories  
                EdC={this.EditCat} 
                cat={this.state.cat}
            />
        </div> 

        <div className='MainPosition'>         
            <PositionsTitle 
                pCheck={this.PriceCheck} 
            />
            <div className='BPos'>
                <Positions 
                    AlertAdd={this.AlertAdd}
                    o36sm={this.sm36ON} 
                    onAdd2={this.addOrder2} 
                    onAdd={this.addOrder} 
                    OK={this.state.onCat} 
                    PDK={this.state.pdkon} 
                    position={this.state.position} 
                    cat={this.state.cat}
                />
            </div>
        </div> 
        </div>
    </div>)
    }
    else
    {
        if(this.state.ActiveComponent === 1)
        {
        return(
            
            <div className='GlobalDiv'>
                <div  className='MainDivStopList'>
                <Cities 
                        City={this.state.City}
                        ChangeTimeDeliveryCity={this.ChangeTimeDeliveryCity}
                        ChangeTimeTakeawayCity={this.ChangeTimeTakeawayCity}
                        ChangeConditionCity={this.ChangeConditionCity}
                        ClearTimeOneCity={this.ClearTimeOneCity}
                        StopListChecCatOnPositionOnCity={this.StopListChecCatOnPositionOnCity}
                        StopListChekFunctionPodcatOnCity={this.StopListChekFunctionPodcatOnCity}
                        StopListChekFunctionCatOnCity={this.StopListChekFunctionCatOnCity}
                        StopListChekFunctionOnCity={this.StopListChekFunctionOnCity}
                        cat={this.state.cat}
                        position={this.state.position}
                        podcat={this.state.podcat}
                        StopList={this.state.StopList}
                        StopCat={this.state.StopCat}
                        StopPodCat={this.state.StopPodCat}
                    />                
                </div>

                <div className='MainMenu'>
                    <MenuMain 
                        openMenu={this.state.openMenu }
                        openMenuFunction={this.openMenuFunction}
                        StopListON={this.StopListON}
                        NewOrderON={this.NewOrderON}
                        SavedOrdersON={this.SavedOrdersON}
                        ActiveComponent={this.state.ActiveComponent}
                    />
                </div>


        </div>
            
        )
        }
        if(this.state.ActiveComponent === 2)
        {
            return(
                <div className='GlobalDiv'>

                    <div className='SavedOrdersMainDiv'>
                        <SavedOrdersMain 
                        Saved = {this.state.Saved}
                        />
                    </div>

                    <div className='MainMenu'>
                        <MenuMain 
                            openMenu={this.state.openMenu }
                            openMenuFunction={this.openMenuFunction}
                            StopListON={this.StopListON}
                            NewOrderON={this.NewOrderON}
                            SavedOrdersON={this.SavedOrdersON}
                            ActiveComponent={this.state.ActiveComponent}
                        />
                    </div>
                </div>
            )
        }
    }
    }

    async PriceCheck(){ //изменение цен на дкшные и обратно
        if (this.state.pdkon === 0)
        {
            this.setState({pdkon: 1})
        }
        else
        {
            this.setState({pdkon: 0})
        }
        await this.setState
        this.TotalSumFunction()//пересчет итоговой суммы
        await this.TotalSumFunction()
        this.SaleInpEdit2()//пересчет скидки суммой
        await this.SaleInpEdit2()
        this.TotalSumSaleFunction()//пересчет итоговой суммы со скидкой
        
    }

    async EditCat(id, Check) { //выбор категории
        if (this.state.onCat !== id)
        {
            this.setState({onCat: id})
            if(Check === true)
            {
                this.AlertAdd("Cat")
            }
            await this.setState
            this.ButtonCatColor()
        }
        else 
        {
            this.setState({onCat: 0})
            await this.setState
            this.ButtonCatColor()
        }
    }

    async ButtonCatColor()
    {
        if (this.state.onCat !== 0)
        {
        this.state.cat.map((a) => {
            if(a.name !== "Добавка К Пицце" && a.name !== "Добавка В Вок")
            if(a.name === this.state.onCat)
            {
                document.getElementById('CatBut' + a.id).classList.add('active')
            }
            else
            {
                document.getElementById('CatBut' + a.id).classList.remove('active')
            }
            return(a)
        })
        }
        else
        {
            this.state.cat.map((a) =>{
                if(a.name !== "Добавка К Пицце" && a.name !== "Добавка В Вок")
                document.getElementById('CatBut' + a.id).classList.remove('active')
                return(a)
        })    
        }
    }

    async addOrder(pos) {  //добавление позиции в заказ
        var ch = this.state.orderPosition.find(function (c) {            
            return(c.id === pos.id)
        })
        if (ch !== undefined && ch.categ !== "Пицца" && ch.dobcheck !== false)
        {
        this.state.orderPosition.map((a) => {
            if(a.idOrd === ch.idOrd)
            {
                if (a.num !== 99)
                {
                    a.num = parseInt(a.num) + 1
                    a.totalprice = a.price * a.num
                    a.totaldkprice = a.dkprice * a.num
                    if (a.price36 > 0)
                    {
                        a.totalprice36 = a.price36 * a.num
                        a.totaldkprice36 = a.dkprice36 * a.num
                    }
                    this.setState({orderPosition: [...this.state.orderPosition]}) 
                    
                    
                }
            }
            return(a)})        
        }
        else
        {
            const idOrd = this.state.foridOrd      
            this.setState({ foridOrd: parseInt(this.state.foridOrd) + 1 })     
            this.setState({ orderPosition: [...this.state.orderPosition, {idOrd, ...pos}]})
            
            
            
        }
        await this.setState
        this.TotalSumFunction()
        this.TotalSumSaleFunction()
        this.SumSoySause()
    }          
            
        
    async addOrder2(pos) {  //добавление пиццы 36см в заказ          
        const idOrd = this.state.foridOrd      
        this.setState({ foridOrd: parseInt(this.state.foridOrd) + 1 })        
        const Proverka36 = true;     
        this.setState({ orderPosition: [...this.state.orderPosition, {idOrd, Proverka36, ...pos}]})
        await this.setState
        this.TotalSumFunction()
        this.TotalSumSaleFunction()
        this.SumSoySause()
    }

    async deleteOrder(id) { //удаление позиции из заказа
        if(this.state.orderPosition.length === 1)
        {
            this.setState({//очистка скидки
                Sale: 1
            })
            this.setState({//очистка скидки
                TotalSale: 0
            })
            this.setState({//очистка скидки суммой
                SaleInp: 0
            })
            this.setState({
                totalSoy: 0
            })
            this.setState({ //очистка кол-ва приборов
                orderTablewares: this.state.orderTablewares.filter((el) => el.id === id)
            })
            
        }
        this.setState({
            orderPosition: this.state.orderPosition.filter((el) => el.idOrd !== id)
        })
        this.setState({ //удаление добавок прикрепленных к этой же позиции
            orderDobPizza: this.state.orderDobPizza.filter((el) => el.idOrd !== id)
        })
        this.setState({
            orderSostWOK: this.state.orderSostWOK.filter((el) => el.idOrd !== id)
        })
        await this.setState
        this.TotalSumFunction()
        await this.TotalSumFunction()
        this.SaleInpEdit2()
        await this.SaleInpEdit2()
        this.TotalSumSaleFunction()
        this.SumSoySause()
        
    }
            
    async EditProverka (id) { //изменение диаметра пиццы
        this.state.orderPosition.map((a) => {      
            if (a.idOrd === id)             
                a.Proverka36 = !a.Proverka36             
                this.setState({orderPosition: [...this.state.orderPosition]})                 
                return(a)        
        })  
        await this.setState
        this.TotalSumFunction()
        await this.TotalSumFunction()
        this.SaleInpEdit2()
        await this.SaleInpEdit2()
        this.TotalSumSaleFunction()
    }

    async BPlusOrd(id) {//кнопка "+" в заказе прикрепленная к позиции, для добавления кол-ва
        this.state.orderPosition.map((a) => {
            if(a.idOrd === id)
            {
            a.num = parseInt(a.num) + 1
            a.totalprice = a.price * a.num
            a.totaldkprice = a.dkprice * a.num
                if (a.price36 > 0)
                    {
                    a.totalprice36 = a.price36 * a.num
                    a.totaldkprice36 = a.dkprice36 * a.num
                    }
            this.setState({orderPosition: [...this.state.orderPosition]}) 
            return(a)
                }
                return(a)
        })
        await this.setState
        this.TotalSumFunction()
        this.TotalSumSaleFunction()
        this.SumSoySause()
    }

    async BMinusOrd(id) {//кнопка "-" в заказе прикрепленная к позиции, для уменьшения кол-ва
this.state.orderPosition.map((a) => {
            if(a.idOrd === id)
            {
                a.num = parseInt(a.num) - 1
                a.totalprice = a.price * a.num
                a.totaldkprice = a.dkprice * a.num
                if (a.price36 > 0)
                    {
                    a.totalprice36 = a.price36 * a.num
                    a.totaldkprice36 = a.dkprice36 * a.num
                    }
                this.setState({orderPosition: [...this.state.orderPosition]}) 
                return(a)
            }
            return(a)
        })
        await this.setState
        this.TotalSumFunction()
        await this.TotalSumFunction()
        this.SaleInpEdit2()
        await this.SaleInpEdit2()
        this.TotalSumSaleFunction()
        this.SumSoySause()
    
    }

    async EditInputOrd(id, val) {//инпут в заказе прикрепленный к позиции, для изменения кол-ва ручками
        this.state.orderPosition.map((a) => {
            if(a.idOrd === id)
            a.num = parseInt(val)
            a.totalprice = a.price * a.num
            a.totaldkprice = a.dkprice * a.num
            if (a.price36 > 0)
                {
                a.totalprice36 = a.price36 * a.num
                a.totaldkprice36 = a.dkprice36 * a.num
                }
            this.setState({orderPosition: [...this.state.orderPosition]}) 
            return(a)
        })
        await this.setState
        this.TotalSumFunction()
        await this.TotalSumFunction()
        this.SaleInpEdit2()
        await this.SaleInpEdit2()
        this.TotalSumSaleFunction()
        this.SumSoySause()
    }

    async AddDob(dob, idOrd) {//добавление добавки к позиции 
        var ch = this.state.orderDobPizza.find(function (c) {            
            return(c.id === dob.id && c.idOrd === idOrd)
        })
        if (ch !== undefined)
        {
            this.state.orderDobPizza.map((a) => {
                if(a.idDob === ch.idDob)
                {
                    if (a.num !== 99)
                        a.num = parseInt(a.num) + 1
                        a.totalprice = a.price * a.num
                        a.totaldkprice = a.dkprice * a.num
                        this.setState({orderDobPizza: [...this.state.orderDobPizza]}) 
                }
            return(a)})        
        }
        else
        {
            const idDob = this.state.foridDob 
            this.setState({ foridDob: parseInt(this.state.foridDob) + 1 })
            this.setState({ orderDobPizza: [...this.state.orderDobPizza, {idOrd, idDob, ...dob}]})
        }
        await this.setState
        this.TotalSumFunction()
        this.TotalSumSaleFunction()
    }

    async deleteDob(id) {//удаление добавки из заказа
        this.setState({
            orderDobPizza: this.state.orderDobPizza.filter((el) => el.idDob !== id)
        })
        await this.setState
        this.TotalSumFunction()
        await this.TotalSumFunction()
        this.SaleInpEdit2()
        await this.SaleInpEdit2()
        this.TotalSumSaleFunction()
    }

    async BPlusDob(id) {//кнопка "+" в заказе прикрепленная к добавке, для добавления кол-ва
        this.state.orderDobPizza.map((a) => {
            if(a.idDob === id)
            a.num = parseInt(a.num) + 1
            a.totalprice = a.price * a.num
            a.totaldkprice = a.dkprice * a.num
            this.setState({orderDobPizza: [...this.state.orderDobPizza]}) 
            return(a)
        })
        await this.setState
        this.TotalSumFunction()
        this.TotalSumSaleFunction()
    }

    async BMinusDob(id) {//кнопка "-" в заказе прикрепленная к добавке, для уменьшения кол-ва
        this.state.orderDobPizza.map((a) => {
            if(a.idDob === id)
            a.num = parseInt(a.num) - 1
            a.totalprice = a.price * a.num
            a.totaldkprice = a.dkprice * a.num
            this.setState({orderDobPizza: [...this.state.orderDobPizza]}) 
            return(a)
        })
        await this.setState
        this.TotalSumFunction()
        await this.TotalSumFunction()
        this.SaleInpEdit2()
        await this.SaleInpEdit2()
        this.TotalSumSaleFunction()
    }

    async EditInputDob(id, val) {//инпут в заказе прикрепленный к добавке, для изменения кол-ва ручками
        this.state.orderDobPizza.map((a) => {
            if(a.idDob === id)
            a.num = parseInt(val)
            a.totalprice = a.price * a.num
            a.totaldkprice = a.dkprice * a.num
            this.setState({orderDobPizza: [...this.state.orderDobPizza]}) 
            return(a)
        })
        await this.setState
        this.TotalSumFunction()
        await this.TotalSumFunction()
        this.SaleInpEdit2()
        await this.SaleInpEdit2()
        this.TotalSumSaleFunction()
    }

    
    async AddSostWOK(sost, idOrd) {//добавление добавки к позиции 
        var ch = this.state.orderSostWOK.find(function (c) {            
            return(c.id === sost.id && c.idOrd === idOrd)
        })//проверка есть ли такая добавка к этой позиции уже в заказе
        if (ch !== undefined) //если нашло такую позицию  
        {
            if(sost.podcat !== "Соус В Вок")
            {
            this.state.orderSostWOK.map((a) => {
                if(a.idSost === ch.idSost)
                {
                    if (a.num !== 99)
                    a.num = parseInt(a.num) + 1
                    a.totalprice = a.price * a.num
                    a.totaldkprice = a.dkprice * a.num
                    this.setState({orderSostWOK: [...this.state.orderSostWOK]}) 
                }
                return(a)})        
            }
            else
            {
                this.AlertAdd("SauceSumLimit")
            }
            }
        else//если такой добавки еще нет
        {
            if(sost.podcat === "Соус В Вок")
            {
                if(this.state.orderSostWOK.filter((el) => el.podcat === "Соус В Вок").length >= 2)//проверка, чтобы больше 2ух соусов нельзя было добавить
                {
                    this.AlertAdd("SauceLimit")
                }
                else
                {
                    
                    const idSost = this.state.foridSost
                    this.setState({ foridSost: parseInt(this.state.foridSost) + 1 })
                    this.setState({ orderSostWOK: [...this.state.orderSostWOK, {idOrd, idSost, ...sost}]})
                }
            }
            else
            {
            const idSost = this.state.foridSost
            this.setState({ foridSost: parseInt(this.state.foridSost) + 1 })
            this.setState({ orderSostWOK: [...this.state.orderSostWOK, {idOrd, idSost, ...sost}]})
            }
        }
        await this.setState
        this.TotalSumFunction()
        this.TotalSumSaleFunction()
    }

    async deleteSostWOK(id) {//удаление составляющей ВОКа из заказа
        this.setState({
            orderSostWOK: this.state.orderSostWOK.filter((el) => el.idSost !== id)
        })
        await this.setState
        this.TotalSumFunction()
        await this.TotalSumFunction()
        this.SaleInpEdit2()
        await this.SaleInpEdit2()
        this.TotalSumSaleFunction()
    }


    async BPlusSostWOK(id) {//кнопка "+" в заказе прикрепленная к составляющей ВОКа, для добавления кол-ва
        this.state.orderSostWOK.map((a) => {
            if(a.idSost === id)
                if(a.podcat !== "Соус В Вок")
                {
                a.num = parseInt(a.num) + 1
                a.totalprice = a.price * a.num
                a.totaldkprice = a.dkprice * a.num
                this.setState({orderSostWOK: [...this.state.orderSostWOK]}) 
                return(a)
                }
                else
                {
                    this.AlertAdd("SauceSumLimit")
                }
                return(a)
        })
        await this.setState
        this.TotalSumFunction()
        this.TotalSumSaleFunction()
    }

    async BMinusSostWOK(id) {//кнопка "-" в заказе прикрепленная к составляющей ВОКа, для уменьшения кол-ва
        this.state.orderSostWOK.map((a) => {
            if(a.idSost === id)
                a.num = parseInt(a.num) - 1
                a.totalprice = a.price * a.num
                a.totaldkprice = a.dkprice * a.num
                this.setState({orderSostWOK: [...this.state.orderSostWOK]}) 
                return(a)
        })
        await this.setState
        this.TotalSumFunction()
        await this.TotalSumFunction()
        this.SaleInpEdit2()
        await this.SaleInpEdit2()
        this.TotalSumSaleFunction()
    }

    async EditInputSostWOK(id, val) {//инпут в заказе прикрепленный к добавке, для изменения кол-ва ручками
        this.state.orderSostWOK.map((a) => {
            if(a.idSost === id)
                a.num = parseInt(val)
                a.totalprice = a.price * a.num
                a.totaldkprice = a.dkprice * a.num
                this.setState({orderSostWOK: [...this.state.orderSostWOK]}) 
                return(a)
        })
        await this.setState
        this.TotalSumFunction()
        await this.TotalSumFunction()
        this.SaleInpEdit2()
        await this.SaleInpEdit2()
        this.TotalSumSaleFunction()
    }

    async EditWOKNoodles(pos, id){//функция изменения уже добавленной лапши
        this.state.orderPosition.map((a) => 
        {
            if(a.idOrd === id)
            {
                pos.num = a.num
                pos.totalprice = pos.price * pos.num
                a.name = pos.name
                a.price = pos.price
                a.totalprice = pos.totalprice
                this.setState({orderPosition: [...this.state.orderPosition]}) 
            }
                return(a)
                
        })
        await this.setState
        this.TotalSumFunction()
        await this.TotalSumFunction()
        this.SaleInpEdit2()
        await this.SaleInpEdit2()
        this.TotalSumSaleFunction()
    }

    async cleanOrder(id) { //удаление всех позиций из заказа
        this.setState({
            orderPosition: this.state.orderPosition.filter((el) => el.idOrd === id)
        })
        this.setState({ //удаление всех добавок к пицце
            orderDobPizza: this.state.orderDobPizza.filter((el) => el.idOrd === id)
        })
        this.setState({ //удаление всех добавок в вок
            orderSostWOK: this.state.orderSostWOK.filter((el) => el.idOrd === id)
        }) 
        this.setState({ //очистка кол-ва приборов
            orderTablewares: this.state.orderTablewares.filter((el) => el.id === id)
        })
        this.setState({
            orderTablewares: [{num: 0}]
        })
        this.setState({//очистка скидки
            Sale: 1
        })
        this.setState({//очистка скидки
            TotalSale: 0
        })
        this.setState({//очистка скидки суммой
            SaleInp: 0
        })
        this.setState({
            totalSoy: 0
        })
        this.setState({
            OnCity: {idCity: 0, city: "— Выберите филиал —", street:"", house: "", delivery:"--", takeaway: "--", condition: "Активен"} 
        })
        
        this.state.position.map((el) => {
            el.CheckStopList = false
            return(el)
        })
        this.setState({
            position: [...this.state.position]
        })
        this.state.cat.map((el) => {
            el.CheckStopList = false
            return(el)
        })
        this.setState({
            cat: [...this.state.cat]
        })
        this.state.podcat.map((el) => {
            el.CheckStopList = false
            return(el)
        })
        this.setState({
            podcat: [...this.state.podcat]
        })

        await this.setState 
        this.TotalSumFunction() //пересчет итоговой суммы
        this.TotalSumSaleFunction() //пересчет итоговой суммы со скидкой
        
    }

    async TotalSumFunction(){
        var res = 0
        this.state.orderPosition.map((a) => 
        {
            if(a.idOrd > 0)
            res = res + parseInt(document.getElementById('OrdPosTotSum' + a.idOrd).dataset.value)
            
            return(a)
        })
         
        this.state.orderDobPizza.map((a) =>
        {
            if(a.idDob > 0)
            res = res + parseInt(document.getElementById("OrdDobTotSum" + a.idDob).dataset.value)

            return(a)
        })

        this.state.orderSostWOK.map((a) => {
            if (a.idSost > 0)
            res = res + parseInt(document.getElementById("OrdSostWOKTotSum" + a.idSost).dataset.value)

            return(a)
        })
        
        this.setState({
            totalSum: res
        }) 
    }

    async TotalSumSaleFunction(){
        var res = 0
        this.state.orderPosition.map((a) => 
        {
            if(a.idOrd > 0)
                    if(a.salecheck === true && this.state.pdkon === 0)
                    {
                        res = res + (parseFloat(document.getElementById('OrdPosTotSum' + a.idOrd).dataset.value) * parseFloat(this.state.Sale))
                    }
                    else
                    {
                        res = res + parseInt(document.getElementById('OrdPosTotSum' + a.idOrd).dataset.value)
                    }

            return(a)
        })
         
        this.state.orderDobPizza.map((a) =>
        {
            if(a.idDob > 0)
            if(a.salecheck === true)
            {
                res = res + (parseFloat(document.getElementById("OrdDobTotSum" + a.idDob).dataset.value) * parseFloat(this.state.Sale))
            }
            else
            {
                res = res + parseInt(document.getElementById("OrdDobTotSum" + a.idDob).dataset.value)  
            }

            return(a)
        })

        this.state.orderSostWOK.map((a) => {
            if (a.idSost > 0)
            if(a.salecheck === true)
            {
                res = res + (parseInt(document.getElementById("OrdSostWOKTotSum" + a.idSost).dataset.value) * parseFloat(this.state.Sale))
            }
            else
            {
                res = res + parseInt(document.getElementById("OrdSostWOKTotSum" + a.idSost).dataset.value)
            }

            return(a)
        })
        
        if (this.state.SaleInp > 0)
        {
            if (this.state.Sale === 1)
            {
            res = res - this.state.SaleInp
            }
            else
            {
            this.setState({
                SaleInp: 0
            })
            }
        }

        
        this.setState({
            totalSumSale: Math.ceil(res)
        }) 
       
    }

    async SaleInpEdit(val) {
        if (val > this.state.totalSum)
        {
            this.setState({
                SaleInp: parseFloat(this.state.totalSum)
            })
            this.setState({
                Sale: 1
            })
        }
        else
        {
        this.setState({
            SaleInp: val
        })
        this.setState({
            Sale: 1
        })
        }
        await this.setState 
        if(this.state.SaleInp > 0)
        {
            this.ButtonSaleColor(1)
        }
        this.TotalSumSaleFunction() 
        this.SaleWindowEditActive()
    }

    async SaleInpEdit2() {
        if (this.state.SaleInp > this.state.totalSum)
        {
            this.setState({
                SaleInp: parseFloat(this.state.totalSum)
            })
        }
        
        await this.setState 
        this.TotalSumSaleFunction() 
    }
    
    async SaleInpEdit0() {
        this.setState({
            SaleInp: 0
        })
        this.setState({
            Sale: 1
        })
        await this.setState 
        this.TotalSumSaleFunction() 
    }

    async ButtonSaleColor(id) {
        if (id === 0)
        {
            document.getElementById('ButtonSale').classList.remove('active')
            this.setState({
                TotalSale: 0
            })
        }
        if (id > 0)
        {
            document.getElementById('ButtonSale').classList.add('active')
        }
       
    }

    async SaleFunction(val, id) {
        
        this.setState({
            Sale: parseFloat(val)
        })
        this.setState({
            TotalSale: (parseFloat(val) - 1) * 100
        })
    
    
        await this.setState 
        this.ButtonSaleColor(id)
        this.TotalSumSaleFunction() //пересчет итоговой суммы со скидкой
    }

    addTablewares(pos) {  //добавление/изменение кол-ва/удаление приборов в заказе 
         if(this.state.orderPosition.length > 0)   
            if(pos.id !== 0)     
            {
                if(this.state.orderTablewares.length < 1)//вот тут ниже добавление приборов
                {         
                this.setState({ orderTablewares: [...this.state.orderTablewares, { ...pos}]})
                }
                else//тут изменение кол-ва приборов
                {
                    this.state.orderTablewares.map((a) => 
                    {
                            a.id = pos.id
                            a.name = pos.name
                            a.num = pos.num
                            a.price = pos.price
                            a.totalprice = pos.totalprice
                        
                            this.setState({orderTablewares: [...this.state.orderTablewares]}) 
                            return(a)
                    })   
                }
            }
            else//тут удаление приборов из заказа
            {
                this.setState({
                    orderTablewares: this.state.orderTablewares.filter((el) => el.id === pos.id)
                })
                this.setState({
                    orderTablewares: [{num: 0}]
                })
            }
    }

    SaleWindowEditActive(id){
        this.setState({
            SSumWindowActive: !this.state.SSumWindowActive
        })
        this.setState({
            Sale: 1
        })
        this.ButtonSaleColor(id)
    }

    SumSoySause(){
            var res = 0
            this.state.orderPosition.map((a) => 
            {
                if(a.idOrd > 0)
                if(document.getElementById('OrdPosSouse' + a.idOrd).dataset.value > 0)
                res = res + parseInt(document.getElementById('OrdPosSouse' + a.idOrd).dataset.value)
                
                return(a)
            })
            this.setState({
                totalSoy: res
            })
    }

    StopListON() {//переключение "вкладки" на стоп лист
        this.setState({
            ActiveComponent: 1  
        })
       
        
    }

    NewOrderON(){//переключение "вкладки" на создание нового
        if(this.state.ActiveComponent !== 0)
        {
        this.setState({
            ActiveComponent: 0
        })
    }
    else
    {
        this.cleanOrder()
    }
        
    }

    SavedOrdersON(){
        this.setState({
            ActiveComponent: 2
        })
    }

    openMenuFunction() {//функия раскрытия/скрытия меню
        if(this.state.openMenu === false)
        {
          document.documentElement.style.setProperty('--WidhtMainMenu', '175px')
          setTimeout(() => {this.setState({
            openMenu: true
          })}, 150)
        }
        else
        {
          document.documentElement.style.setProperty('--WidhtMainMenu', '50px')
          this.setState({
            openMenu: false
          })
        }
      }

    StopListChekFunction(pos)//добавление позиции в стоп лист
    {
        this.state.position.map((a) =>
        {
            if(a.id === pos.id)
            {
                    
                    a.CheckStopList = !a.CheckStopList
                    this.setState({
                        position: [...this.state.position]
                    })
                
            }
            
            return(a)
        })
        this.StopListChecCatOnPosition()//вызов функции для проверки стопов по категориям, для корректного отображения
        
    }

    StopListChecCatOnPosition()//функция для проверки стопов по категориям, для корректного отображения
    {
        this.state.cat.map((el) => {
            if(el.name !== "Добавка В Вок")
            {
            var CheckCat = 0//счетчик для кол-ва позиций из категории которые в стопе
            var CheckPos = 0//счетчик для общего кол-ва позиций из категории
            this.state.position.map((a) => {
                if(a.categ === el.name)
                {
                    CheckPos = CheckPos + 1
                    if(a.CheckStopList === true)
                    {
                        CheckCat = CheckCat + 1
                    }
                }
                return(a)
            })
            if(CheckCat === CheckPos)
            {
                el.CheckStopList = true
                el.CheckIndeterminate = false
                this.setState({
                    cat: [...this.state.cat]
                })
                document.getElementById('StopListCatCheck' + el.id).indeterminate  = false
            }
            else
            {
                if(CheckCat === 0)
                {
                    el.CheckStopList = false
                    el.CheckIndeterminate = false
                    this.setState({
                    cat: [...this.state.cat]
                })
                    document.getElementById('StopListCatCheck' + el.id).indeterminate  = false
                }
                else
                {
                    el.CheckStopList = false
                    el.CheckIndeterminate = true
                    this.setState({
                    cat: [...this.state.cat]
                    })
                    document.getElementById('StopListCatCheck' + el.id).indeterminate  = true
                }
            }
        }
            return(el)
            
        })

        this.state.podcat.map((el) => {
            
            var CheckCat = 0//счетчик для кол-ва позиций из категории которые в стопе
            var CheckPos = 0//счетчик для общего кол-ва позиций из категории
            this.state.position.map((a) => {
                if(a.categ === "Добавка В Вок")
                
                if(a.podcat === el.name)
                {
                    CheckPos = CheckPos + 1
                    if(a.CheckStopList === true)
                    {
                        CheckCat = CheckCat + 1
                    }
                }
                return(a)
            })
            if(CheckCat === CheckPos)
            {
                el.CheckStopList = true
                el.CheckIndeterminate = false
                this.setState({
                    podcat: [...this.state.podcat]
                })
                document.getElementById('StopListPodCatCheck' + el.id).indeterminate  = false
            }
            else
            {
                if(CheckCat === 0)
                {
                    el.CheckStopList = false
                    el.CheckIndeterminate = false
                    this.setState({
                        podcat: [...this.state.podcat]
                })
                    document.getElementById('StopListPodCatCheck' + el.id).indeterminate  = false
                }
                else
                {
                    el.CheckStopList = false
                    el.CheckIndeterminate = true
                    this.setState({
                        podcat: [...this.state.podcat]
                    })
                    document.getElementById('StopListPodCatCheck' + el.id).indeterminate  = true
                }
            
        }
            return(el)
            
        })
    }

    StopListChekFunctionCat(id){
        this.state.cat.map((a) =>
        {
            if(a.id === id)
            {
                if(a.CheckStopList === true || a.CheckIndeterminate === true)
                {
                    a.CheckStopList = false
                    if (a.CheckIndeterminate === true)
                    {
                        a.CheckIndeterminate = false
                    }
                    this.setState({
                        cat: [...this.state.cat]
                    })
                }
                else
                {
                    a.CheckStopList = true
                   
                    this.setState({
                        cat: [...this.state.cat]
                    })
                }
            
                this.state.position.map((el) => {
                    if(a.name === el.categ)
                    {
                        if(a.CheckStopList === false)
                        {
                        el.CheckStopList = false
                        this.setState({
                            position: [...this.state.position]
                        })
                        }
                        else
                        {
                            el.CheckStopList = true
                            this.setState({
                                position: [...this.state.position]
                            })
                        }
                    
                        
                    }
                    return(el)
                })
            }
            return(a)
        })
    }

    StopListChekFunctionPodcat(id){
        this.state.podcat.map((a) =>
        {
            if(a.id === id)
            {
                if(a.CheckStopList === true || a.CheckIndeterminate === true)
                {
                    a.CheckStopList = false
                    if (a.CheckIndeterminate === true)
                    {
                        a.CheckIndeterminate = false
                    }
                    this.setState({
                        podcat: [...this.state.podcat]
                    })
                }
                else
                {
                    a.CheckStopList = true
                   
                    this.setState({
                        podcat: [...this.state.podcat]
                    })
                }
            
                this.state.position.map((el) => {
                    if(a.name === el.podcat)
                    {
                        if(a.CheckStopList === false)
                        {
                        el.CheckStopList = false
                        this.setState({
                            position: [...this.state.position]
                        })
                        }
                        else
                        {
                            el.CheckStopList = true
                            this.setState({
                                position: [...this.state.position]
                            })
                        }
                    
                        
                    }
                    return(el)
                })
            }
            return(a)
        })
    }

    AlertAdd(val){
        
       if (this.state.AlertCheck.length < 11)
        {
        var Check = this.state.forIdAlert
        this.setState({forIdAlert: parseInt(this.state.forIdAlert) + 1})
        var Alert = val
        this.setState({
            AlertCheck: [...this.state.AlertCheck, {Check, Alert}]
        })
        
        setTimeout(() => {this.AlertDelete(Check)}, 3950)
    }
    }

    AllertClick(id) {
        document.getElementById('StopAlertDiv' + id).classList.remove('active')
        document.getElementById('StopAlertDiv' + id).classList.add('deleted')
        
    }

    AlertDelete(id) {
        this.setState({
            AlertCheck: this.state.AlertCheck.filter((el) => el.Check !== id)
        })
       
    }

    
    async StopListCityAdd() {
        var StopPosArray = []
        var StopCatArray = []
        var StopPodCatArray = []
        for(var i = 0; i < this.state.City.length; i++)
        {
            for(var j = 0; j < this.state.position.length; j++)
            {
                StopPosArray.push({name: this.state.position[j].name, id: this.state.position[j].id, categ: this.state.position[j].categ, podcat: this.state.position[j].podcat, idCity: this.state.City[i].idCity, CheckStopList: false}) 
                
            }
            for(var j1 = 0; j1 < this.state.cat.length; j1++)
            {
                StopCatArray.push({name: this.state.cat[j1].name, id: this.state.cat[j1].id, idCity: this.state.City[i].idCity, CheckStopList: false, CheckIndeterminate: false}) 
                
            }
            for(var j2 = 0; j2 < this.state.podcat.length; j2++)
            {
                StopPodCatArray.push({name: this.state.podcat[j2].name, id: this.state.podcat[j2].id, categ: this.state.podcat[j2].categ, idCity: this.state.City[i].idCity, CheckStopList: false, CheckIndeterminate: false}) 
                
            }
        }


        this.setState({
            StopList: StopPosArray
        })

        this.setState({
            StopCat: StopCatArray
        })

        this.setState({
            StopPodCat: StopPodCatArray
        })
        
        await this.setState

    }

    componentDidMount(){
        this.StopListCityAdd()
    }
    
    StopListChekFunctionOnCity(pos, idCity)//добавление позиции в стоп лист
    {
        this.state.StopList.map((a) =>
        {
            if(a.id === pos.id && a.idCity === idCity)
            {
                    
                    a.CheckStopList = !a.CheckStopList
                    this.setState({
                        StopList: [...this.state.StopList]
                    })
                
            }
            
            return(a)
        })
        this.StopListChecCatOnPositionOnCity(idCity)//вызов функции для проверки стопов по категориям, для корректного отображения
       
        
    }

   StopListChecCatOnPositionOnCity(idCity)//функция для проверки стопов по категориям, для корректного отображения
    {
        this.state.StopCat.map((el) => {
            
            if(el.name !== "Добавка В Вок" && el.idCity === idCity)
            {
            var CheckCat = 0//счетчик для кол-ва позиций из категории которые в стопе
            var CheckPos = 0//счетчик для общего кол-ва позиций из категории
            this.state.StopList.map((a) => {
                if(a.categ === el.name && a.idCity === el.idCity)
                {
                    CheckPos = CheckPos + 1
                    if(a.CheckStopList === true)
                    {
                        CheckCat = CheckCat + 1
                    }
                }
                return(a)
            })
            if(CheckCat === CheckPos)
            {
                el.CheckStopList = true
                el.CheckIndeterminate = false
                this.setState({
                    StopCat: [...this.state.StopCat]
                })
                document.getElementById('StopListCatCheck' + el.id + " " + el.idCity).indeterminate  = false
            }
            else
            {
                if(CheckCat === 0)
                {
                    el.CheckStopList = false
                    el.CheckIndeterminate = false
                    this.setState({
                    StopCat: [...this.state.StopCat]
                })
                    document.getElementById('StopListCatCheck' + el.id + " " + el.idCity).indeterminate  = false
                }
                else
                {
                    el.CheckStopList = false
                    el.CheckIndeterminate = true
                    this.setState({
                    StopCat: [...this.state.StopCat]
                    })
                    document.getElementById('StopListCatCheck' + el.id + " " + el.idCity).indeterminate  = true
                }
            }
        }
            return(el)
            
        })

        this.state.StopPodCat.map((el) => {
            
            if(el.idCity === idCity)
            {
            var CheckCat = 0//счетчик для кол-ва позиций из категории которые в стопе
            var CheckPos = 0//счетчик для общего кол-ва позиций из категории
            this.state.StopList.map((a) => {
                if(a.categ === "Добавка В Вок")
                if(a.podcat === el.name && a.idCity === el.idCity)
                {
                    CheckPos = CheckPos + 1
                    if(a.CheckStopList === true)
                    {
                        CheckCat = CheckCat + 1
                    }
                }
                return(a)
            })
            if(CheckCat === CheckPos)
            {
                el.CheckStopList = true
                el.CheckIndeterminate = false
                this.setState({
                    StopPodCat: [...this.state.StopPodCat]
                })
                document.getElementById('StopListPodCatCheck' + el.id + " " + el.idCity).indeterminate  = false
            }
            else
            {
                if(CheckCat === 0)
                {
                    el.CheckStopList = false
                    el.CheckIndeterminate = false
                    this.setState({
                        StopPodCat: [...this.state.StopPodCat]
                })
                    document.getElementById('StopListPodCatCheck' + el.id + " " + el.idCity).indeterminate  = false
                }
                else
                {
                    el.CheckStopList = false
                    el.CheckIndeterminate = true
                    this.setState({
                        StopPodCat: [...this.state.StopPodCat]
                    })
                    document.getElementById('StopListPodCatCheck' + el.id + " " + el.idCity).indeterminate  = true
                }
            }
        }
            return(el)
            
        })
    }

    StopListChekFunctionCatOnCity(id, idCity){
        this.state.StopCat.map((a) =>
        {
            if(a.id === id && a.idCity === idCity)
            {
                if(a.CheckStopList === true || a.CheckIndeterminate === true)
                {
                    a.CheckStopList = false
                    if (a.CheckIndeterminate === true)
                    {
                        a.CheckIndeterminate = false
                    }
                    this.setState({
                        StopCat: [...this.state.StopCat]
                    })
                }
                else
                {
                    a.CheckStopList = true
                   
                    this.setState({
                        StopCat: [...this.state.StopCat]
                    })
                }
            
                this.state.StopList.map((el) => {
                    if(a.name === el.categ && el.idCity === a.idCity)
                    {
                        if(a.CheckStopList === false)
                        {
                        el.CheckStopList = false
                        this.setState({
                            StopList: [...this.state.StopList]
                        })
                        }
                        else
                        {
                            el.CheckStopList = true
                            this.setState({
                                StopList: [...this.state.StopList]
                            })
                        }
                    
                        
                    }
                    return(el)
                })
            }
            return(a)
        })
    }

    StopListChekFunctionPodcatOnCity(id, idCity){
        this.state.StopPodCat.map((a) =>
        {
            if(a.id === id && a.idCity === idCity)
            {
                if(a.CheckStopList === true || a.CheckIndeterminate === true)
                {
                    a.CheckStopList = false
                    if (a.CheckIndeterminate === true)
                    {
                        a.CheckIndeterminate = false
                    }
                    this.setState({
                        StopPodCat: [...this.state.StopPodCat]
                    })
                }
                else
                {
                    a.CheckStopList = true
                   
                    this.setState({
                        StopPodCat: [...this.state.StopPodCat]
                    })
                }
            
                this.state.StopList.map((el) => {
                    if(a.name === el.podcat && el.idCity === a.idCity)
                    {
                        if(a.CheckStopList === false)
                        {
                        el.CheckStopList = false
                        this.setState({
                            StopList: [...this.state.StopList]
                        })
                        }
                        else
                        {
                            el.CheckStopList = true
                            this.setState({
                                StopList: [...this.state.StopList]
                            })
                        }
                    
                        
                    }
                    return(el)
                })
            }
            return(a)
        })
    }

    CityChange(city) {
        this.setState({
            OnCity: {idCity: city.idCity, city: city.city, street: city.street, house: city.house, delivery: city.delivery, takeaway: city.takeaway, condition: city.condition} 
        })
        this.state.StopList.map((el) => {
            if(el.idCity === city.idCity)
            {
                this.state.position.map((a) => 
                {
                    if(a.id === el.id)
                    {
                        a.CheckStopList = el.CheckStopList
                        this.setState({
                            position: [...this.state.position]
                        })
                    }
                    return(a)
                })
            }
            return(el)
        })

        this.state.StopCat.map((el) => {
            if(el.idCity === city.idCity)
            {
                this.state.cat.map((a) => 
                {
                    if(a.id === el.id && el.name !== "Добавка В Вок")
                    {
                        a.CheckStopList = el.CheckStopList
                        this.setState({
                            cat: [...this.state.cat]
                        })
                    }
                    return(a)
                })
            }
            return(el)
        })

        this.state.StopPodCat.map((el) => {
            if(el.idCity === city.idCity)
            {
                this.state.podcat.map((a) => 
                {
                    if(a.id === el.id)
                    {
                        a.CheckStopList = el.CheckStopList
                        this.setState({
                            podcat: [...this.state.podcat]
                        })
                    }
                    return(a)
                })
            }
            return(el)
        })
    }

    CloseCityist(){
        this.setState({
            OpenListCity: false
        })
    }

    ChangeTimeDeliveryCity(val, idCity){
        this.state.City.map((el) => {
            if(el.idCity === idCity)
            {
                el.delivery = val
                this.setState({
                    City: [...this.state.City]
                })
            }
            return(el)
        })
    }

    ChangeTimeTakeawayCity(val, idCity){
        this.state.City.map((el) => {
            if(el.idCity === idCity)
            {
                el.takeaway = val
                this.setState({
                    City: [...this.state.City]
                })
            }
            return(el)
        })
    }

    ClearTimeOneCity(idCity){
        this.state.City.map((el) => {
            if(el.idCity === idCity)
            {
                el.delivery = 60
                el.takeaway = 20
                this.setState({
                    City: [...this.state.City]
                })
            }
            return(el)
        })
    }

    ChangeConditionCity(val, idCity){
        this.state.City.map((el) => {
            if(el.idCity === idCity)
            {
                el.condition = val
                this.setState({
                    City: [...this.state.City]
                })
            }
            return(el)
        })
    }

    async SavedButtonClick() {
        if(this.state.OnCity.idCity !== 0)
        {
            this.setState({
                LastWindowSaved: true
        })
        this.state.StopList.map((el) => {
            if(el.idCity === this.state.OnCity.idCity)
            {
                this.state.orderPosition.map((a) => 
                {
                    if(a.id === el.id)
                    {
                        a.CheckStopList = el.CheckStopList
                        this.setState({
                            orderPosition: [...this.state.orderPosition]
                        })
                        
                    }
                    return(a)
                })
            }
            return(el)})
            this.getTime()
            await this.setState
            this.state.orderPosition.map((el) => {
                if(el.CheckStopList === true)
                {
                    this.AlertAdd("StopOnSave")
                }
                return(el)
            })
                
        }
        else
        {
            this.AlertAdd("UnderCity")
        }
    }

    CloseLastWindow(){
        this.setState({
            LastWindowSaved: false
        })
    }

    async SaveFunction() {
        
        this.setState({
            LastWindowSaved: false
        })
        if(this.state.OnCity.idCity !== 0)
        {
        const SavedIdOrd = this.state.SavedIdOrd
        this.setState({SavedIdOrd: parseInt(this.state.SavedIdOrd) + 1})
        var orderPosSaved = []
        var orderDobPizzaSaved = []
        var orderSostWOKSaved = []
        var orderCity = []
        var orderDetal = []
        this.state.orderPosition.map((el) => {
            
            orderPosSaved.push({id: el.id + " " + SavedIdOrd, 
            idOrd: el.idOrd,
            name: el.name, 
            price: el.price, 
            dkprice: el.dkprice, 
            price36: el.price36, 
            dkprice36: el.dkprice36, 
            num: el.num, 
            salecheck: el.salecheck,
            totalprice: el.totalprice,
            podcat: el.podcat,
            categ: el.categ,
            CheckStopList: el.CheckStopList,
            soysause: el.soysause,
            sost: el.sost,
         })
         return(el)
        })
        this.state.orderDobPizza.map((el) => {
            orderDobPizzaSaved.push({
                id: el.id + " " + SavedIdOrd,
                idOrd: el.idOrd,
                price: el.price,
                dkprice: el.dkprice,
                name: el.name,
                num: el.num, 
                salecheck: el.salecheck,
                totalprice: el.totalprice,
                podcat: el.podcat,
                categ: el.categ,
                CheckStopList: el.CheckStopList,
            })
            return(el)
        })
        this.state.orderSostWOK.map((el) => {
            orderSostWOKSaved.push({
                id: el.id + " " + SavedIdOrd,
                idOrd: el.idOrd,
                price: el.price,
                dkprice: el.dkprice,
                name: el.name,
                num: el.num, 
                salecheck: el.salecheck,
                totalprice: el.totalprice,
                podcat: el.podcat,
                categ: el.categ,
                CheckStopList: el.CheckStopList,
            })
            return(el)
        })
        orderCity.push({idCity: this.state.OnCity.idCity,
            city: this.state.OnCity.city, 
            street: this.state.OnCity.street, 
            house: this.state.OnCity.house, 
            delivery: this.state.OnCity.delivery,
            takeaway: this.state.OnCity.takeaway
        })
        orderDetal.push({
            pdkon: this.state.pdkon,
            Tablewares: this.state.orderTablewares[0].num !== undefined ? this.state.orderTablewares[0].num : 0,
            totalSum: this.state.totalSum,
            totalSumSale: this.state.totalSumSale,
            Sale: this.state.Sale,
            SaleInp: this.state.SaleInp,
            TotalSale: this.state.TotalSale,
            TimeSave: this.state.TimeSave
        })
        this.setState({
            Saved: [...this.state.Saved, {SavedIdOrd, orderPosSaved, orderCity, orderDetal, orderDobPizzaSaved, orderSostWOKSaved}]
        })
        await this.setState
        console.log(this.state.Saved)
        this.cleanOrder()
        this.setState({
            ActiveComponent: 2
        })
    }
    
    }

    getTime(){
        var today = new Date(),

        TimeSave = today.getHours() + ':' + today.getMinutes();
        this.setState({
            TimeSave: TimeSave
        })
    }
    
    
}
export default App