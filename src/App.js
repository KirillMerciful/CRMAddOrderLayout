import React from 'react';
import { IoChevronDown } from "react-icons/io5";

import OrderTitle from './components/OrderTitle';
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
import Position from './components/Position';
import Categ from './components/Categ';
import AddMarksOnOrder from './components/AddMarksOnOrder';



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
            foridAddition: 1,//счетчки добавок
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
            OpenDropDownSale: false,//активность окна выбора скидки
            OpenDropDownTablewares: false,//активность окна выбора приборов
            
            cat: [ //массив для категорий
                {
                    id:1, //айди категории
                    name: "ВОК", //название категории
                    categories: "Добавка В ВОК",
                    CheckStopList: false,
                    CheckIndeterminate: false,
                    ThisAddition: true
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
                    id: 9,
                    name: "Мясо В Вок",
                    categories: "Добавка В ВОК",
                    CheckStopList: false,
                    CheckIndeterminate: false,
                    ThisAddition: true
                },
                {
                    id: 10,
                    name: "Доп В Вок",
                    categories: "Добавка В ВОК",
                    CheckStopList: false,
                    CheckIndeterminate: false,
                    ThisAddition: true
                },
                {
                    id: 11,
                    name: "Соус В Вок",
                    categories: "Добавка В ВОК",
                    CheckStopList: false,
                    CheckIndeterminate: false,
                    ThisAddition: true
                },
                {
                    id: 12,
                    name: "Добавка К Пицце",
                    categories: "Добавка В Пицца",
                    CheckStopList: false,
                    CheckIndeterminate: false,
                    ThisAddition: true
                },
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
                    haveAddition: true,
                    salecheck: true,
                    totalprice: 399,
                    totalprice36: 569,
                    totaldkprice: 499,
                    totaldkprice36: 739,
                    CheckStopList: false,
                    Proverka36: false,
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
                    haveAddition: true,
                    salecheck: false,
                    totalprice: 399,
                    totalprice36: 549,
                    totaldkprice: 499,
                    totaldkprice36: 699,
                    CheckStopList: false,
                    Proverka36: false,
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
                    salecheck: true,
                    totalprice: 859,
                    totalprice36: 1139,
                    totaldkprice: 1119,
                    totaldkprice36: 1479,
                    CheckStopList: false,
                    Proverka36: false,
                },
                {
                    id: 8,
                    name: "Гречневая",
                    price: 149,
                    dkprice: 149,
                    categ: "ВОК",
                    num: 1,
                    haveAddition: true,
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
                    haveAddition: true,
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
                    haveAddition: true,
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
                    haveAddition: true,
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
                    salecheck: true,
                    totalprice: 259,
                    totaldkprice: 339,
                    CheckStopList: false,
                    CanBeAddiion: false
                },
                {
                    id: 13,
                    name: "Гречневая с говядиной в соусе сладкий чили",
                    price: 339,
                    dkprice: 439,
                    categ: "ВОК",
                    num: 1,
                    salecheck: true,
                    totalprice: 339,
                    totaldkprice: 439,
                    CheckStopList: false,
                    CanBeAddiion: false
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
                    dkprice: 50,
                    categ: "Добавка К Пицце",
                    num: 1,
                    salecheck: true,
                    totalprice: 50,
                    totaldkprice: 50,
                    ThisAddition: true,
                    CheckStopList: false,
                },
                {
                    id: 102,
                    name: "Ананас",
                    price: 60,
                    dkprice: 60,
                    categ: "Добавка К Пицце",
                    num: 1,
                    salecheck: true,
                    totalprice: 50,
                    totaldkprice: 50,
                    ThisAddition: true,
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
                    categ: "Мясо В Вок",
                    ThisAddition: true,
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
                    categ: "Мясо В Вок",
                    ThisAddition: true,
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
                    categ: "Мясо В Вок",
                    ThisAddition: true,
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
                    categ: "Доп В Вок",
                    ThisAddition: true,
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
                    categ: "Доп В Вок",
                    ThisAddition: true,
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
                    categ: "Соус В Вок",
                    ThisAddition: true,
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
                    categ: "Соус В Вок",
                    ThisAddition: true,
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
                    categ: "Соус В Вок",
                    ThisAddition: true,
                    CheckStopList: false,
                },
            ],
            City: [
                {
                    idCity: 1,
                    city: "Шахты",
                    street: "Победы Революции",
                    streetType: "пр. ",
                    house: "83Б",
                    delivery: 60,
                    takeaway: 20,
                    condition: "Активен"
                },
                {
                    idCity: 2,
                    city: "Ессентуки",
                    street: "Октябрьская",
                    streetType: "ул. ",
                    house: "369/1",
                    delivery: 60,
                    takeaway: 20,
                    condition: "Активен"
                },
                {
                    idCity: 3,
                    city: "Азов",
                    street: "Московская",
                    streetType: "ул. ",
                    house: "62",
                    delivery: 60,
                    takeaway: 20,
                    condition: "Активен"
                },
                {
                    idCity: 4,
                    city: "Ростов-на-Дону",
                    street: "Ерёменко",
                    streetType: "ул. ",
                    house: "67/2",
                    delivery: 60,
                    takeaway: 20,
                    condition: "Активен"
                },
                {
                    idCity: 5,
                    city: "Ростов-на-Дону",
                    street: "Коммунистический ",
                    streetType: "пр. ",
                    house: "32",
                    delivery: 60,
                    takeaway: 20,
                    condition: "Активен"
                },
                {
                    idCity: 6,
                    city: "Новочеркасск",
                    street: "Калинина",
                    streetType: "ул. ",
                    house: "55",
                    delivery: 60,
                    takeaway: 20,
                    condition: "Активен"
                },
                {
                    idCity: 7,
                    city: "Каменск Шахтинский",
                    street: "Карла Маркса",
                    streetType: "пр. ",
                    house: "73А",
                    delivery: 60,
                    takeaway: 20 ,
                    condition: "Активен"
                },
            ],
            orderPosition: [//массив добавленных в заказ позиций 
            
            ],
            orderAddition: [//массив  добавленных в заказ добавок

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
            OnCity: 
                {
                idCity: 0,
                city: "— Выберите филиал —",
                streetType: "",
                street: "",
                house: "",
                delivery: "--",
                takeaway: "--"
                },
            OpenListCity: false,
            Saved: [
                
            ],
            TimeSave: [
                {
                    Hour: "",
                    Minutes: ""
                }
            ],
            DateSave: [
                {
                    Date: "",
                    Mounth: "",
                    Year: ""
                }
            ],
            address: [
                {
                    street: "",
                    house: "",
                    entrance: "",
                    floor: "",
                    flat: "",
                    comment: "",
                    PhoneNum: ""
                }
            ],
            TypeOrder: "delivery",
            MouseClickX: "",
            MouseClickY: "",
            MarksOrder: [
                {
                    idMark: 1,
                    name: "Автораспред",
                    Active: false
                },
                {
                    idMark: 2,
                    name: "ЯЕ",
                    Active: false
                },
                {
                    idMark: 3,
                    name: "ДК",
                    Active: false
                },
                {
                    idMark: 4,
                    name: "ВК",
                    Active: false
                },
                {
                    idMark: 5,
                    name: "К Порогу",
                    Active: false
                },
                {
                    idMark: 6,
                    name: "ЮКасса",
                    Active: false
                },
            ],
            CertificateContain: [
                {
                    idCertificate: 2,
                    typeCertificate: "percent",
                    name: "POL100LOL",
                    usage: 1,
                    val: 0.9
                },
                {
                    idCertificate: 3,
                    typeCertificate: "percent",
                    name: "PRO100STAS",
                    usage: 2,
                    val: 0.7
                },
                {
                    idCertificate: 1,
                    typeCertificate: "sum",
                    name: "SALE200RUB",
                    usage: "infinity",
                    val: 200
                }
            ],
            Payment: false,
            TodayDate: "",
            MaxDateInp: "",
            UsedCertificate: [],
            MaxTimeDelivery: [
                {
                    Hour: "",
                    Minutes: ""
                }
            ],
            MaxTimeTakeaway: [
                {
                    Hour: "",
                    Minutes: ""
                }
            ],
            AddTimeDelivery: 0,
            TimeInputContain: [
                {
                    Date: false,
                    Mounth: false,
                    Year: false,
                    Hour: false,
                    Minutes: false
                }
            ],
            PreOrder: false,
        }
        this.ChangeDiamPizzaOnPositionMenu = this.ChangeDiamPizzaOnPositionMenu.bind(this)
        this.ChangeDiamPizzaOnOrder = this.ChangeDiamPizzaOnOrder.bind(this)
        this.PriceCheck = this.PriceCheck.bind(this)
        this.EditCat = this.EditCat.bind(this)
        this.addOrder = this.addOrder.bind(this)      
        this.BPlusOrd = this.BPlusOrd.bind(this)   
        this.BMinusOrd = this.BMinusOrd.bind(this)
        this.deleteOrder = this.deleteOrder.bind(this) 
        this.EditInputOrd = this.EditInputOrd.bind(this) 
        
        this.SaveFunction = this.SaveFunction.bind(this) 
        this.SavedButtonClick = this.SavedButtonClick.bind(this) 
        this.CloseLastWindow = this.CloseLastWindow.bind(this) 
        this.ChangeStatusSavedOrd = this.ChangeStatusSavedOrd.bind(this)  
        this.DeleteSavedOrd = this.DeleteSavedOrd.bind(this)
        this.PaymentMark = this.PaymentMark.bind(this)


        this.TotalSumFunction = this.TotalSumFunction.bind(this)
        this.TotalSumSaleFunction = this.TotalSumSaleFunction.bind(this)
        this.SaleFunction = this.SaleFunction.bind(this)
        this.SaleWindowEditActive = this.SaleWindowEditActive.bind(this)
        this.SaleInpEdit = this.SaleInpEdit.bind(this)
        this.SaleInpEdit0 = this.SaleInpEdit0.bind(this)
        this.SaleInpEdit2 = this.SaleInpEdit2.bind(this)
        this.ButtonSaleColor = this.ButtonSaleColor.bind(this)
        

        this.AddAdditionFunc = this.AddAdditionFunc.bind(this)
        this.EditWOKNoodles = this.EditWOKNoodles.bind(this)
        this.MinusAdditionFunc = this.MinusAdditionFunc.bind(this)
        this.PlusAdditionFunc = this.PlusAdditionFunc.bind(this)
        this.EditInputAddition = this.EditInputAddition.bind(this)
        
        
        this.cleanOrder = this.cleanOrder.bind(this)
        this.addTablewares = this.addTablewares.bind(this)
        
        this.StopListON = this.StopListON.bind(this)
        this.NewOrderON = this.NewOrderON.bind(this)      
        this.SavedOrdersON = this.SavedOrdersON.bind(this)
        this.openMenuFunction = this.openMenuFunction.bind(this)     
        

        this.StopListChekFunction = this.StopListChekFunction.bind(this)    
        this.StopListChekFunctionCat = this.StopListChekFunctionCat.bind(this)    
        this.StopListCityAdd = this.StopListCityAdd.bind(this)    
        
        
        
        this.AlertAdd = this.AlertAdd.bind(this)    
        this.AlertDelete = this.AlertDelete.bind(this)    
        this.AllertClick = this.AllertClick.bind(this)    
        
        this.StopListChekFunctionOnCity = this.StopListChekFunctionOnCity.bind(this)   
        this.StopListChekFunctionCatOnCity = this.StopListChekFunctionCatOnCity.bind(this) 
        this.StopListChecCatOnPositionOnCity = this.StopListChecCatOnPositionOnCity.bind(this)   
        
        this.CityChange = this.CityChange.bind(this)   
        this.CloseCityist = this.CloseCityist.bind(this)   
        this.ChangeTimeDeliveryCity = this.ChangeTimeDeliveryCity.bind(this)
        this.ChangeTimeTakeawayCity = this.ChangeTimeTakeawayCity.bind(this)
        this.ClearTimeOneCity = this.ClearTimeOneCity.bind(this)
        this.ChangeConditionCity = this.ChangeConditionCity.bind(this)
        this.ClearTimeAndConditionAllCity = this.ClearTimeAndConditionAllCity.bind(this)
        this.ClearTimeAllCity = this.ClearTimeAllCity.bind(this)
        
        
        this.getTodayDay = this.getTodayDay.bind(this)
        this.getTime = this.getTime.bind(this)
        
        this.ClickOpenDropDownSale = this.ClickOpenDropDownSale.bind(this)
        this.CloseOpenDropDownSale = this.CloseOpenDropDownSale.bind(this)
        this.ClickOpenDropDownTablewares = this.ClickOpenDropDownTablewares.bind(this)
        this.CloseOpenDropDownTablewares = this.CloseOpenDropDownTablewares.bind(this)
        
        this.ClickMarksButton = this.ClickMarksButton.bind(this)
    }

    

    render() {
        
    if (this.state.ActiveComponent === 0)
    {
    return (      
    <div className='GlobalDiv' onClick={(() => {
        if(this.state.OpenListCity === true)
        this.CloseCityist()
        if(this.state.OpenDropDownSale === true)
        this.CloseOpenDropDownSale()
        if(this.state.OpenDropDownTablewares === true)
        this.CloseOpenDropDownTablewares()
        
    })}
    
    > 

        <div className='MainMenu'>
            {this.state.LastWindowSaved === true && <LastWindow
            AlertAdd={this.AlertAdd}
            totalSumSale={this.state.totalSumSale}
            PaymentMark={this.PaymentMark}
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
                    deleteOrder={this.deleteOrder}
                    AlertAdd={this.AlertAdd}
                    cat={this.state.cat}
                    EditWOKNoodles={this.EditWOKNoodles} 
                    position={this.state.position} 
                    EditInputOrd={this.EditInputOrd} 
                    BMinusOrd={this.BMinusOrd} 
                    BPlusOrd={this.BPlusOrd} 
                    AddDob={this.AddDob}  
                    ChangeDiamPizzaOnOrder={this.ChangeDiamPizzaOnOrder}
                    orderPosition={el}
                    orderAddition={this.state.orderAddition}
                    AddAdditionFunc={this.AddAdditionFunc}
                    PlusAdditionFunc={this.PlusAdditionFunc}
                    MinusAdditionFunc={this.MinusAdditionFunc}
                    EditInputAddition={this.EditInputAddition}
                    pdkon={this.state.pdkon} 
                    key={el.idOrd} 
                    
                />
            ))}

        {this.state.orderTablewares.map((el) => (
            <TablewaresAdd 
                orderTablewares={el}    
                key={'Tablewares' + el.num}
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
                    ClickOpenDropDownSale={this.ClickOpenDropDownSale}
                    ClickOpenDropDownTablewares={this.ClickOpenDropDownTablewares}
                    OpenDropDownTablewares={this.state.OpenDropDownTablewares}
                    OpenDropDownSale={this.state.OpenDropDownSale}
                />
            </div>
        </div>   

        <div className='MainDetal'>
            <div className='City'>
                <div className='CityText'>
                    Филиал:
                </div>
                <div 
                id={'CityName' + this.state.SavedIdOrd}
                className={this.state.OpenListCity === true ? "CityName OpenCity" : "CityName"}>
                    <label className='CityNameText' onClick={(() => {
                        document.getElementById('CityName' + this.state.SavedIdOrd).classList.remove('Allert')
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
                    {this.state.OnCity.streetType + this.state.OnCity.street + " " + this.state.OnCity.house}
                    </span>
                </div>
                        <IoChevronDown className={this.state.OpenListCity === true ? "CityNameIconArrow OpenCity" : "CityNameIconArrow"}/>
                        </label>
                    <div className={this.state.OpenListCity === true ? "CitySelector OpenCity" : "CitySelector"}>
                        {this.state.OpenListCity === true && this.state.City.map((el) => (<CityList
                        CloseCityist={this.CloseCityist}
                        CityChange={this.CityChange}
                        City={el}
                        key={el.idCity}
                        />))}
                    </div>
                </div>
            </div>
            <div className='TimeCity'>
                <table className='TimeCityTable'>
                    <tbody>
                        <tr>
                            <td className='TimeCityText'>
                                Время на доставку: 
                            </td>
                            <td 
                            className='TimeCityVal'
                            >
                                {this.state.OnCity.condition === "Доставка остановлена" ? "СТОП" :  this.state.OnCity.condition === "Полностью остановлен" ? "СТОП" : 
                                    <div
                                    className='TimeDeliveryDiv'
                                    >
                                        <label
                                        onClick={() => {
                                            this.setState({
                                                AddTimeDelivery: 0
                                            })
                                        }}
                                        >{this.state.OnCity.delivery}
                                        </label>
                                        {this.state.OnCity.idCity !== 0 &&
                                        <div className='TimeDeliveryDivButtons'>
                                            <button
                                            className={this.state.AddTimeDelivery === 30 ? 'ButtonAddTimeDelivery30 Actived' : 'ButtonAddTimeDelivery30'}
                                            onClick={() => {
                                                if(this.state.AddTimeDelivery !== 30)
                                                {
                                                    this.setState({
                                                        AddTimeDelivery: 30
                                                    })
                                                }
                                                else
                                                {
                                                    this.setState({
                                                        AddTimeDelivery: 0
                                                    })
                                                }
                                            }}
                                            >+30</button>
                                            <button
                                            className={this.state.AddTimeDelivery === 60 ? 'ButtonAddTimeDelivery60 Actived' : 'ButtonAddTimeDelivery60'}
                                            onClick={() => {
                                                if(this.state.AddTimeDelivery !== 60)
                                                {
                                                    this.setState({
                                                        AddTimeDelivery: 60
                                                    })
                                                }
                                                else
                                                {
                                                    this.setState({
                                                        AddTimeDelivery: 0
                                                    })
                                                }
                                            }}
                                            >+60</button>
                                        </div>
                                }
                                </div>
                                }
                            </td>
                        </tr>
                        <tr>
                            <td className='TimeCityText'>
                                Время на вынос: 
                            </td>
                            <td className='TimeCityVal'>
                                {this.state.OnCity.condition === "Вынос остановлен" ? "СТОП" : this.state.OnCity.condition === "Полностью остановлен" ? "СТОП" : 
                                <label>
                                {this.state.OnCity.takeaway}
                                </label>
                                }
                            </td>
                        </tr>
                    </tbody>
                </table>    
            </div>
            <div className='ChangerOrderTypeMainDiv'>
                <table className='ChangerOrderTypeTable'>
                    <tbody>
                        <tr>
                            <td className='ChangerOrderTypeTdText'>
                                Тип заказа:
                            </td>
                            <td  className='ChangerOrderTypeTdButtons'>
                                <button
                                className={this.state.TypeOrder === "delivery" ? "ChangerOrderTypeTdButtonDelivery Actived" : "ChangerOrderTypeTdButtonDelivery"}
                                onClick={(() => {
                                    this.setState({
                                        TypeOrder: "delivery"
                                    })
                                })}
                                >Доставка</button>
                                <button
                                className={this.state.TypeOrder === "takeaway" ? "ChangerOrderTypeTdButtonTakeaway Actived" : "ChangerOrderTypeTdButtonTakeaway"}
                                onClick={(() => {
                                    if(this.state.TypeOrder === "delivery")
                                    {
                                    document.getElementById('AddressDetalInpStreet' + this.state.SavedIdOrd).classList.remove('Allert')
                                    document.getElementById('AddressDetalInpHouse' + this.state.SavedIdOrd).classList.remove('Allert')
                                    }
                                    setTimeout(() => {
                                        this.setState({
                                            TypeOrder: "takeaway"
                                        })
                                    }, 50)
                                    
                                })}
                                >Вынос</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className='AddressDetalOb'>
                <div className='AddressDetalMainDiv'>
                    <table>
                        <tbody>
                        <tr className='TrTableAddressDetal'>
                                <td className='AddressDetalText PhoneNum'>
                                    Телефон
                                </td>
                                <td>
                                <input
                                    id={'AddressDetalInpPhoneNum' + this.state.SavedIdOrd}
                                    
                                    value={this.state.address[0].PhoneNum}
                                    className='AddressDetalInp PhoneNum'
                                    type='number'
                                    onClick={(() => {
                                        document.getElementById('AddressDetalInpPhoneNum' + this.state.SavedIdOrd).classList.remove('Allert')
                                    })}
                                    onChange={((e) => {
                                        
                                        if(e.target.value < 100000000000 && e.target.value > -1)
                                        {
                                        this.state.address.map((el) => 
                                        {
                                            
                                            el.PhoneNum = e.target.value
                                            return(el)
                                        })
                                        }
                                        this.setState({
                                            address: [...this.state.address]
                                        })
                                        
                                        
                                        
                                    })}

                                    onBlur={(() => {
                                        if(this.state.address[0].PhoneNum.length !== 11)
                                        {
                                            document.getElementById('AddressDetalInpPhoneNum' + this.state.SavedIdOrd).value = ""
                                            this.state.address.map((el) => 
                                            {
                                                el.PhoneNum = ""
                                                return(el)
                                            })
                                            this.setState({
                                                address: [...this.state.address]
                                            })
                                        }
                                    })}
                                    />
                                </td>
                            </tr>
                            {this.state.TypeOrder === "delivery" && <tr className='TrTableAddressDetal'>
                                <td className='AddressDetalText Street'>
                                    Улица
                                </td>
                                <td>
                                <input
                                    type="text"
                                    id={'AddressDetalInpStreet' + this.state.SavedIdOrd}
                                    className='AddressDetalInp Street'
                                    onClick={(() => {
                                        document.getElementById('AddressDetalInpStreet' + this.state.SavedIdOrd).classList.remove('Allert')
                                    })}
                                    onBlur={((e) => {
                                        this.state.address.map((el) => 
                                        {
                                            el.street = e.target.value
                                            return(el)
                                        })
                                        this.setState({
                                            address: [...this.state.address]
                                        })
                                        
                                    })}
                                    />
                                </td>
                            </tr>
                            }
                            {this.state.TypeOrder === "delivery" &&<tr className='TrTableAddressDetal'>
                                <td className='AddressDetalText House'>
                                    Дом
                                </td>
                                <td>
                                    <input
                                        type="text"
                                        id={'AddressDetalInpHouse' + this.state.SavedIdOrd}
                                        className='AddressDetalInp House'
                                        onClick={(() => {
                                            document.getElementById('AddressDetalInpHouse' + this.state.SavedIdOrd).classList.remove('Allert')
                                        })}
                                        onBlur={((e) => {
                                            this.state.address.map((el) => 
                                        {
                                            el.house = e.target.value
                                            return(el)
                                        })
                                        this.setState({
                                            address: [...this.state.address]
                                        })
                                            
                                        })}
                                        />
                                </td>
                            </tr>
                            }
                            {this.state.TypeOrder === "delivery" &&<tr className='TrTableAddressDetal'>
                                <td className='AddressDetalText Entrance'>
                                    Подъезд
                                </td>
                                <td>
                                    <input
                                        type="text"
                                        maxLength={3}
                                        className='AddressDetalInp Entrance'
                                        onBlur={((e) => {
                                            this.state.address.map((el) => 
                                        {
                                            el.entrance = e.target.value
                                            return(el)
                                        })
                                        this.setState({
                                            address: [...this.state.address]
                                        })
                                            
                                        })}
                                        />
                                </td>
                            </tr>
                            }
                            {this.state.TypeOrder === "delivery" &&<tr className='TrTableAddressDetal'>
                                <td className='AddressDetalText Floor'>
                                    Этаж
                                </td>
                                <td>
                                    <input
                                        type="text"
                                        maxLength={2}
                                        className='AddressDetalInp Floor'
                                        onBlur={((e) => {
                                            this.state.address.map((el) => 
                                        {
                                            el.floor = e.target.value
                                            return(el)
                                        })
                                        this.setState({
                                            address: [...this.state.address]
                                        })

                                        })}
                                        />
                                </td>
                            </tr>
                            }
                            {this.state.TypeOrder === "delivery" &&<tr className='TrTableAddressDetal'>
                                <td className='AddressDetalText Flat'>
                                    Кв
                                </td>
                                <td>
                                    <input
                                        type="text"
                                        maxLength={5}
                                        className='AddressDetalInp Flat'
                                        onBlur={((e) => {
                                            this.state.address.map((el) => 
                                        {
                                            el.flat = e.target.value
                                            return(el)
                                        })
                                        this.setState({
                                            address: [...this.state.address]
                                        })
                                            
                                        })}
                                        />
                                </td>
                            </tr>
                            }
                            <tr className='TrTableAddressDetal'>
                                <td className='AddressDetalText Comment'>
                                    Комментарий
                                </td>
                                <td>
                                    <textarea
                                        type="text"
                                        rows={1}
                                        className='AddressDetalInp Comment'
                                        maxLength={200}
                                        onBlur={((e) => {
                                            this.state.address.map((el) => 
                                        {
                                            el.comment = e.target.value
                                            return(el)
                                        })
                                        this.setState({
                                            address: [...this.state.address]
                                        })
                                            
                                        })}
                                        />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                
                </div>
            </div>
            {this.state.orderPosition.length > 0 && 
            this.state.OnCity.idCity !== 0 &&
            <div className='MarksOrderMainDiv'>
                
                <div
                className='CertificateDiv'
                >  
                    <div
                    className='CertificateText'
                    >
                    Сертификат
                    </div>
                    <div>
                        <input
                        className='CertificateInput'
                        id='CertificateInput'
                        type='text'
                        maxLength={10}
                        
                        ></input>
                        <button
                        onClick={() => {
                            var check = this.state.CertificateContain.find(function (c) {            
                                return(c.name === document.querySelector('#CertificateInput').value)
                            })
                            
                                if(check !== undefined)
                                {
                                    if(check.usage !== 0)
                                    {
                                        if(check.typeCertificate !== "sum")
                                        {
                                            this.SaleFunction(check.val, check.idCertificate)
                                            this.setState({
                                                UsedCertificate: check
                                            })
                                            
                                        }
                                        else
                                        {
                                            this.SaleInpEdit(check.val)
                                            this.setState({
                                                UsedCertificate: check
                                            })
                                            
                                        }   
                                    }
                                    else
                                    {
                                        this.AlertAdd("CertificateUsed")
                                    }
                                }
                                else
                                {
                                    
                                    this.AlertAdd('CertificateUnfien')
                                }
                                document.getElementById('CertificateInput').value = ""
                            
                        }}
                        className='CertificateButton'
                        >Найти</button> 
                    </div>
                </div>
    
                <div
                className='PreOrderDiv'
                >
                    Предзаказ
                    <input
                    id={'PreOrderInput'}
                    className='PreOrderInput'
                    min={this.state.TodayDate}//Минимальная дата предзаказа
                    max={this.state.MaxDateInp}//Максимальная дата предзаказа
                    type='datetime-local'
                    onClick={() => {
                        document.getElementById('PreOrderInput').classList.remove('False')
                    }}
                    onChange={(e) => {
                        //нужно провести сравнение текущего времени с введенным, после сравнить время на доставку/вынос с введенным
                        var ThisTime = new Date(e.target.value)
                       
                        this.setState({
                            TimeInputContain:[
                                {
                                    Hour: String(ThisTime.getHours()).padStart(2, "0"),
                                    Minutes: String(ThisTime.getMinutes()).padStart(2, "0"),
                                    Date: String(ThisTime.getDate()).padStart(2, "0"),
                                    Mounth: String(ThisTime.getMonth() + 1).padStart(2, "0"),
                                    Year: String(ThisTime.getFullYear())
                                }
                            ]
                        })
                        this.setState({
                            PreOrder: true
                        })
                        
                    }}
                    ></input>
                </div>
                {this.state.MarksOrder.map((el) => (
                    <AddMarksOnOrder
                    ClickMarksButton={this.ClickMarksButton}
                    MarksOrder={el}
                    key={el.idMark}
                    />
                    
                ))}
            </div>
    }
        </div> 
    
        <div className='MainCateg'>
            {this.state.cat.map((el) => (
            <Categ 
            EditCat={this.EditCat} 
            cat={el} 
            key={el.id}/>))}
            
        </div> 

        <div className='MainPosition'>         
            <PositionsTitle 
                position={this.state.position}
                PriceCheck={this.PriceCheck} 
                pdkon={this.state.pdkon}
                addOrder={this.addOrder} 
                AlertAdd={this.AlertAdd}
            />
            <div className='BPos'>
                <div className='ButtonPositions'>
                {this.state.position.map((el) => (
                    <Position
                        ChangeDiamPizzaOnPositionMenu={this.ChangeDiamPizzaOnPositionMenu}
                        AlertAdd={this.AlertAdd}
                        addOrder={this.addOrder} 
                        onCat={this.state.onCat} 
                        OnCity={this.state.OnCity}
                        pdkon={this.state.pdkon} 
                        cat={this.state.cat}
                        position={el} 
                        key={el.id}
                    />
                    ))}
                </div>
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
            
            <div className='GlobalDiv' 
           
            >
                <div  className='MainDivStopList'>
                <Cities 
                    
                    City={this.state.City}
                    ChangeTimeDeliveryCity={this.ChangeTimeDeliveryCity}
                    ChangeTimeTakeawayCity={this.ChangeTimeTakeawayCity}
                    ChangeConditionCity={this.ChangeConditionCity}
                    ClearTimeOneCity={this.ClearTimeOneCity}
                    ClearTimeAndConditionAllCity={this.ClearTimeAndConditionAllCity}
                    ClearTimeAllCity={this.ClearTimeAllCity}
                    StopListChecCatOnPositionOnCity={this.StopListChecCatOnPositionOnCity}
                    StopListChekFunctionPodcatOnCity={this.StopListChekFunctionPodcatOnCity}
                    StopListChekFunctionCatOnCity={this.StopListChekFunctionCatOnCity}
                    StopListChekFunctionOnCity={this.StopListChekFunctionOnCity}
                    cat={this.state.cat}
                    position={this.state.position}
                    podcat={this.state.podcat}
                    StopList={this.state.StopList}
                    StopCat={this.state.StopCat}
                    MouseClickX={this.state.MouseClickX}
                    MouseClickY={this.state.MouseClickY}
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
                <div className='GlobalDiv'
                >
                    

                    <div className='SavedOrdersMainDiv'>
                    
                        <StopAlerts
                            AlertCheck={this.state.AlertCheck}
                            AllertClick={this.AllertClick}
                        />

                        <SavedOrdersMain 
                        City={this.state.City}
                        DeleteSavedOrd={this.DeleteSavedOrd}
                        ChangeStatusSavedOrd={this.ChangeStatusSavedOrd}
                        Saved = {this.state.Saved}
                        AlertAdd={this.AlertAdd}
                        AlertCheck={this.state.AlertCheck}
                        AllertClick={this.AllertClick}
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
            if(a.ThisAddition !== true || a.name === "ВОК")
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
                if(a.ThisAddition !== true || a.name === "ВОК")
                document.getElementById('CatBut' + a.id).classList.remove('active')
                return(a)
        })    
        }
    }

    async addOrder(pos) {  //добавление позиции в заказ
        var ch = this.state.orderPosition.find(function (c) {            
            return(c.id === pos.id)
        })
        if (ch !== undefined && ch.categ !== "Пицца" && ch.haveAddition !== true)
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
        
        this.setState({
            orderAddition: this.state.orderAddition.filter((el) => el.idOrd !== id)
        })
        await this.setState
        this.TotalSumFunction()
        await this.TotalSumFunction()
        this.SaleInpEdit2()
        await this.SaleInpEdit2()
        this.TotalSumSaleFunction()
        this.SumSoySause()
        
    }

    async ChangeDiamPizzaOnPositionMenu(val, id){
        this.state.position.map((el) => {
            if(el.id === id)
            {
                el.Proverka36 = val
            }
            this.setState({
                position: [...this.state.position]
            })
            return(el)
        })
    }

    async ChangeDiamPizzaOnOrder(val, id){
        this.state.orderPosition.map((el) => {
            if(el.idOrd === id)
            {
                el.Proverka36 = val
            }
            this.setState({
                orderPosition: [...this.state.orderPosition]
            })
            return(el)
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
            this.setState({
                orderPosition: [...this.state.orderPosition]
            }) 
            
            }
            if(a.categ === "ВОК")
            {
                this.state.orderAddition.map((el) => {
                    if(el.idOrd === id && el.categ === "Соус В Вок")
                    {
                        el.num = a.num
                        this.setState({
                            orderAddition: [...this.state.orderAddition]
                        }) 
                    }
                    return(el)
                })
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
                
            }
            if(a.categ === "ВОК")
            {
                this.state.orderAddition.map((el) => {
                    if(el.idOrd === id && el.categ === "Соус В Вок")
                    {
                        el.num = a.num
                        this.setState({
                            orderAddition: [...this.state.orderAddition]
                        }) 
                    }
                    return(el)
                })
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


    async AddAdditionFunc(pos, idOrd, WOKnum){
        var ch = this.state.orderAddition.find(function (c) {            
            return(c.id === pos.id && c.idOrd === idOrd)
        })
        if (ch !== undefined)
        {
            this.state.orderAddition.map((a) => {
                if(a.idAddition === ch.idAddition)
                {
                    if(a.categ !== "Соус В Вок")
                    {
                    if (a.num !== 99)
                        a.num = parseInt(a.num) + 1
                        a.totalprice = a.price * a.num
                        a.totaldkprice = a.dkprice * a.num
                        this.setState({orderAddition: [...this.state.orderAddition]}) 
                    }
                    else
                    {
                        this.AlertAdd("SauceSumLimit")
                    }
                }
            return(a)})        
        }
        else
        {
            if(pos.categ === "Соус В Вок")
            {
                if(this.state.orderAddition.filter((el) => el.categ === "Соус В Вок" && el.idOrd === idOrd).length >= 2)//проверка, чтобы больше 2ух соусов нельзя было добавить
                {
                    this.AlertAdd("SauceLimit")
                }
                else
                {
                    pos.num = WOKnum
                    const idAddition = this.state.foridAddition 
                    this.setState({ foridAddition: parseInt(this.state.foridAddition) + 1 })
                    this.setState({ orderAddition: [...this.state.orderAddition, {idOrd, idAddition, ...pos}]})
                }
            }
            else
            {
                const idAddition = this.state.foridAddition 
                this.setState({ foridAddition: parseInt(this.state.foridAddition) + 1 })
                this.setState({ orderAddition: [...this.state.orderAddition, {idOrd, idAddition, ...pos}]})
            }
        await this.setState
        this.TotalSumFunction()
        this.TotalSumSaleFunction()
        }
    }

        async PlusAdditionFunc(idAddition){
            this.state.orderAddition.map((el) =>{
                if(el.categ !== "Соус В Вок")
                {
                    if(el.idAddition === idAddition)
                    {
                        if(el.num < 99)
                        {
                        el.num = parseInt(el.num) + 1
                        el.totalprice = el.price * el.num
                        this.setState({
                            orderAddition: [...this.state.orderAddition]
                        })
                        }
                    }
                }
                else
                {
                    this.AlertAdd('SauceSumLimit')
                }
                return(el)
            })
            await this.setState
            this.TotalSumFunction()
            this.TotalSumSaleFunction()
        }

        async MinusAdditionFunc(idAddition){
            this.state.orderAddition.map((el) =>{
                if(el.categ !== "Соус В Вок")
                {
                    if(el.idAddition === idAddition)
                    {
                        if(el.num > 1)
                        {
                        el.num = parseInt(el.num) - 1
                        el.totalprice = el.price * el.num
                        
                        this.setState({
                            orderAddition: [...this.state.orderAddition]
                        })
                        }
                        else
                        {
                            this.setState({
                                orderAddition: this.state.orderAddition.filter((a) => a.idAddition !== idAddition)
                            })
                        }
                    }
                }
                else
                {
                    this.AlertAdd('SauceSumLimit')
                }
                return(el)
            })
            await this.setState
            this.TotalSumFunction()
            this.TotalSumSaleFunction()
        }

        async EditInputAddition(idAddition, val) {//инпут в заказе прикрепленный к позиции, для изменения кол-ва ручками
            this.state.orderAddition.map((a) => {
                if(a.idAddition === idAddition)
                a.num = parseInt(val)
                a.totalprice = a.price * a.num
                a.totaldkprice = a.dkprice * a.num
                
                this.setState({orderAddition: [...this.state.orderAddition]}) 
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
                a.id = pos.id
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
        
        this.setState({ //удаление всех добавок в вок
            orderAddition: this.state.orderAddition.filter((el) => el.idOrd === id)
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
            OnCity: {
                idCity: 0, 
                city: "— Выберите филиал —", 
                street :"", 
                streetType: "",
                house: "", 
                delivery:"--", 
                takeaway: "--", 
                condition: "Активен"
            } 
        })
        this.setState({
            pdkon: 0
        })
        
        this.state.position.map((el) => {
            el.CheckStopList = false
            el.Proverka36 = false
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
        
        this.setState({
            address: [
            {
            street: "",
            house: "",
            entrance: "",
            floor: "",
            flat: "",
            comment: "",
            PhoneNum: ""
            }
            ]
        })
        this.state.MarksOrder.map((el) => {
            el.Active = false
            this.setState({
                MarksOrder: [...this.state.MarksOrder]
            })
            return(el)
        })
        this.setState({
            TypeOrder: "delivery"
        })

        this.setState({
            AddTimeDelivery: 0
        })

        this.setState({
            PreOrder: false
        })

        this.setState({
            TimeInputContain: [
                {
                    Date: false,
                    Mounth: false,
                    Year: false,
                    Hour: false,
                    Minutes: false
                }
            ]
        })

        document.getElementById('AddressDetalInpPhoneNum' + this.state.SavedIdOrd).classList.remove('Allert')
        if(this.state.TypeOrder === "delivery")
        {
        document.getElementById('AddressDetalInpStreet' + this.state.SavedIdOrd).classList.remove('Allert')
        document.getElementById('AddressDetalInpStreet' + this.state.SavedIdOrd).value = ""
        document.getElementById('AddressDetalInpHouse' + this.state.SavedIdOrd).classList.remove('Allert')
        document.getElementById('AddressDetalInpHouse' + this.state.SavedIdOrd).value = ""
        }
        document.getElementById('CityName' + this.state.SavedIdOrd).classList.remove('Allert')

        if(this.state.OnCity.idCity !== 0)
        {
        document.getElementById('CertificateInput').value = ""
        document.getElementById('PreOrderInput').value = ""
        }
        
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
         
        this.state.orderAddition.map((a) =>
        {
            if(a.idAddition > 0)
            res = res + parseInt(document.getElementById("orderAdditionTotalSum" + a.idAddition).dataset.value)

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

       this.state.orderAddition.map((a) => {
            if (a.idAddition > 0)
            if(a.salecheck === true)
            {
                res = res + (parseInt(document.getElementById("orderAdditionTotalSum" + a.idAddition).dataset.value) * parseFloat(this.state.Sale))
            }
            else
            {
                res = res + parseInt(document.getElementById("orderAdditionTotalSum" + a.idAddition).dataset.value)
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
        this.setState({
            SSumWindowActive: false
        })
        this.setState({
            Sale: 1
        })
        
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
        if(this.state.ActiveComponent === 2)
        {
            this.setState({
                ActiveComponent: 0
            })
        }
        setTimeout(() => {
            this.setState({
                ActiveComponent: 2
            })
        }, 1)
        
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

    async StopListChekFunction(pos)//добавление позиции в стоп лист
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
        for(var i = 0; i < this.state.City.length; i++)
        {
            for(var j = 0; j < this.state.position.length; j++)
            {
                StopPosArray.push({
                    name: this.state.position[j].name, 
                    id: this.state.position[j].id, 
                    categ: this.state.position[j].categ, 
                    podcat: this.state.position[j].podcat, 
                    idCity: this.state.City[i].idCity, 
                    CheckStopList: false}) 
                
            }
            for(var j1 = 0; j1 < this.state.cat.length; j1++)
            {
                StopCatArray.push({
                    name: this.state.cat[j1].name, 
                    id: this.state.cat[j1].id, 
                    idCity: this.state.City[i].idCity, 
                    CheckStopList: false, 
                    CheckIndeterminate: false}) 
                
            }
           
        }


        this.setState({
            StopList: StopPosArray
        })

        this.setState({
            StopCat: StopCatArray
        })

        
        
        await this.setState

    }

    componentDidMount(){
        this.StopListCityAdd()
        this.getTodayDay()

        this.state.position.sort((a, b) => 
        a.name > b.name ? 1 : -1
        )

        this.state.City.sort((a, b) => 
        a.city === b.city ? 
            a.street > b.street ? 1 : -1
            :
        a.city > b.city ? 1 : -1
        )
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


    async CityChange(city) {
        this.setState({
            AddTimeDelivery: 0
        })
        this.setState({
            OnCity: {
                idCity: city.idCity, 
                city: city.city, 
                street: city.street, 
                streetType: city.streetType,
                house: city.house, 
                delivery: city.delivery, 
                takeaway: city.takeaway, 
                condition: city.condition
            } 
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

        this.state.StopList.map((el) => {
            if(el.idCity === city.idCity)
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
                this.state.orderAddition.map((a) => 
                {
                    if(a.id === el.id)
                    {
                        a.CheckStopList = el.CheckStopList
                        this.setState({
                            orderAddition: [...this.state.orderAddition]
                        })
                        
                    }
                    return(a)
                })

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
            return(el)})
             
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
             

            this.getTime()
            await this.setState
            this.state.orderPosition.map((el) => {
                if(el.CheckStopList === true)
                {
                    this.AlertAdd("StopOnSave")
                    document.getElementById('OrdPosName' + el.idOrd).classList.add('Stoped')
                    setTimeout(() => {
                        document.getElementById('OrdPosName' + el.idOrd).classList.remove('Stoped')
                    }, 4000)
                }
                return(el)
            })

            this.state.orderAddition.map((el) => {
                if(el.CheckStopList === true)
                {
                    this.AlertAdd("StopOnSave")
                    document.getElementById('OrdPosName' + el.idAddition).classList.add('Stoped')
                    setTimeout(() => {
                        document.getElementById('OrdPosName' + el.idAddition).classList.remove('Stoped')
                    }, 4000)
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

    ClearTimeAllCity(){
        this.state.City.map((el) => {
                el.delivery = 60
                el.takeaway = 20
                this.setState({
                    City: [...this.state.City]
                })
            return(el)
        })
    }

    ClearTimeAndConditionAllCity(){
        this.state.City.map((el) => {
                el.delivery = 60
                el.takeaway = 20
                el.condition = "Активен"
                this.setState({
                    City: [...this.state.City]
                })
            return(el)
        })
    }

    async SavedButtonClick() {
        if(this.state.OnCity.idCity !== 0)
        {
            if(this.state.TypeOrder === "takeaway" && this.state.address[0].PhoneNum.length !== 11 )
            {
                
                document.getElementById('AddressDetalInpPhoneNum' + this.state.SavedIdOrd).classList.add('Allert')
                
                this.AlertAdd("NotFilled")
            }
            else
            {
                if(this.state.TypeOrder === "delivery" && (this.state.address[0].PhoneNum.length !== 11 || this.state.address[0].street.length < 1 || this.state.address[0].house.length < 1 ))
                {
                    this.AlertAdd("NotFilled")
                    if(this.state.address[0].PhoneNum.length !== 11)
                    {
                        document.getElementById('AddressDetalInpPhoneNum' + this.state.SavedIdOrd).classList.add('Allert')
                        
                    }
                    if(this.state.address[0].street.length < 1)
                    {
                        document.getElementById('AddressDetalInpStreet' + this.state.SavedIdOrd).classList.add('Allert')
                        
                    }
                    if(this.state.address[0].house.length < 1 )
                    {
                        document.getElementById('AddressDetalInpHouse' + this.state.SavedIdOrd).classList.add('Allert')
                        
                    }
                }
                else
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
                        this.state.orderAddition.map((a) => 
                        {
                            if(a.id === el.id)
                            {
                                a.CheckStopList = el.CheckStopList
                                this.setState({
                                    orderAddition: [...this.state.orderAddition]
                                })
                                
                            }
                            return(a)
                        })

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
                    return(el)})
                    
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
                                
                            }
                            else
                            {
                                el.CheckStopList = false
                                el.CheckIndeterminate = true
                                this.setState({
                                cat: [...this.state.cat]
                                })
                                
                            }
                        }
                    }
                        return(el)
                        
                    })    

                    this.getTime()
                    await this.setState
                    this.state.orderPosition.map((el) => {
                        if(el.CheckStopList === true)
                        {
                            this.AlertAdd("StopOnSave")
                            document.getElementById('OrdPosName' + el.idOrd).classList.add('Stoped')
                            setTimeout(() => {
                                document.getElementById('OrdPosName' + el.idOrd).classList.remove('Stoped')
                            }, 4000)
                        }
                        return(el)
                    })

                    this.state.orderAddition.map((el) => {
                        if(el.CheckStopList === true)
                        {
                            this.AlertAdd("StopOnSave")
                            document.getElementById('OrdPosName' + el.idAddition).classList.add('Stoped')
                            setTimeout(() => {
                                document.getElementById('OrdPosName' + el.idAddition).classList.remove('Stoped')
                            }, 4000)
                        }
                        
                        return(el)
                    })

                    if(this.state.PreOrder === true)
                    {
                        var InpDate = this.state.TimeInputContain[0].Date
                        var InpMounth = this.state.TimeInputContain[0].Mounth
                        var InpYear = this.state.TimeInputContain[0].Year
                        var InpHour = this.state.TimeInputContain[0].Hour
                        var InpMinutes = this.state.TimeInputContain[0].Minutes
                        var today = new Date()
                        var MinDate = String(today.getDate()).padStart(2 , "0")
                        var MinMounth = String(today.getMonth() + 1).padStart(2 , "0")
                        var MinYear = String(today.getFullYear())
                        
                        if(this.state.TypeOrder === 'delivery')
                        {
                            var MinHour = String(today.getHours()).padStart(2 , "0")
                            var MinMinutes = String(today.getMinutes() + this.state.OnCity.delivery + this.state.AddTimeDelivery).padStart(2 , "0")
                            if(parseInt(MinMinutes) > 60)
                            {
                                if(parseInt(MinMinutes) > 120)
                                {
                                    MinMinutes = String(parseInt(MinMinutes) - 120).padStart(2 , "0")
                                    MinHour = String(parseInt(MinHour) + 2).padStart(2 , "0")
                                }
                                else
                                {
                                    MinMinutes = String(parseInt(MinMinutes) - 60).padStart(2 , "0")
                                    MinHour = String(parseInt(MinHour) + 1).padStart(2 , "0")
                                }
                            }
                            
                            if(parseInt(InpYear) > parseInt(MinYear) || parseInt(InpMounth) > parseInt(MinMounth) || parseInt(InpDate) > parseInt(MinDate))
                            {
                                if(parseInt(InpHour) > 11)
                                {
                                    this.setState({
                                        PreOrder: true
                                    })
                                }
                                else
                                {
                                    if(parseInt(InpHour) === 11)
                                    {
                                        if(parseInt(InpMinutes) >= 30)
                                        {
                                            this.setState({
                                                PreOrder: true
                                            })
                                        }
                                        else
                                        {
                                            
                                            this.CloseLastWindow()
                                            
                                            this.setState({
                                                PreOrder: false
                                            })
                                            document.getElementById('PreOrderInput').value = ""
                                            document.getElementById('PreOrderInput').classList.add('False')
                                            this.AlertAdd('PreOrder')
                                        }
                                    }
                                    else
                                    {
                                        
                                        this.CloseLastWindow()
                                        
                                        this.setState({
                                            PreOrder: false
                                        })
                                        document.getElementById('PreOrderInput').value = ""
                                        document.getElementById('PreOrderInput').classList.add('False')
                                        this.AlertAdd('PreOrder')
                                    }
                                }
                                
                            }
                            else
                            {
                                var MinTime = (parseInt(MinHour) * 60) + parseInt(MinMinutes)
                                var InpTime = (parseInt(InpHour) * 60) + parseInt(InpMinutes)
                                if((InpTime - MinTime) >= 30)
                                {
                                    this.setState({
                                        PreOrder: true
                                    })
                                }
                                else
                                {

                                    this.CloseLastWindow()
                                            
                                            this.setState({
                                                PreOrder: false
                                            })
                                            
                                            this.AlertAdd('PreOrder')
                                }
                            }
                            
                        }
                        else
                        {
                            var MinHour = String(today.getHours()).padStart(2 , "0")
                            var MinMinutes = String(today.getMinutes() + this.state.OnCity.takeaway).padStart(2 , "0")
                            if(parseInt(MinMinutes) > 60)
                            {
                                MinMinutes = String(parseInt(MinMinutes) - 60).padStart(2 , "0")
                                MinHour = String(parseInt(MinHour) + 1).padStart(2 , "0")
                            }
                            if(parseInt(InpYear) > parseInt(MinYear) || parseInt(InpMounth) > parseInt(MinMounth) || parseInt(InpDate) > parseInt(MinDate))
                            {
                                
                                if(parseInt(InpHour) > 10)
                                {
                                    this.setState({
                                        PreOrder: true
                                    })
                                }
                                else
                                {
                                    if(parseInt(InpHour) === 10)
                                    {
                                        if(parseInt(InpMinutes) >= 30)
                                        {
                                            this.setState({
                                                PreOrder: true
                                            })
                                        }
                                        else
                                        {

                                            this.CloseLastWindow()
                                            
                                            this.setState({
                                                PreOrder: false
                                            })

                                            document.getElementById('PreOrderInput').value = ""
                                            document.getElementById('PreOrderInput').classList.add('False')
                                            this.AlertAdd('PreOrder')
                                        }
                                    }
                                    else
                                    {
                                        
                                        this.CloseLastWindow()
                                        
                                        this.setState({
                                            PreOrder: false
                                        })

                                        document.getElementById('PreOrderInput').value = ""
                                        document.getElementById('PreOrderInput').classList.add('False')
                                        this.AlertAdd('PreOrder')
                                    }
                                }
                            }
                            else
                            {
                                var MinTime = (parseInt(MinHour) * 60) + parseInt(MinMinutes)
                                var InpTime = (parseInt(InpHour) * 60) + parseInt(InpMinutes)
                                if((InpTime - MinTime) >= 30)
                                {
                                    this.setState({
                                        PreOrder: true
                                    })
                                }
                                else
                                {
                                    this.CloseLastWindow()
                                            
                                    this.setState({
                                        PreOrder: false
                                    })

                                    document.getElementById('PreOrderInput').value = ""
                                    document.getElementById('PreOrderInput').classList.add('False')
                                    this.AlertAdd('PreOrder')
                                }
                            }
                        }
                    }
            }
        }
        }
        else
        {
            this.AlertAdd("UnderCity")
            document.getElementById('CityName' + this.state.SavedIdOrd).classList.add('Allert')
            setTimeout(() => {
                document.getElementById('CityName' + this.state.SavedIdOrd).classList.remove('Allert')
            }, 4000)
        }
        
    }

    CloseLastWindow(){
        this.setState({
            LastWindowSaved: false
        })
    }

    async SaveFunction() {
        this.state.CertificateContain.map((el) => {
            if(el.usage !== "infinity" && el.name === this.state.UsedCertificate.name)
                {
                    el.usage = el.usage - 1
                        this.setState({
                            CertificateContain: [...this.state.CertificateContain]
                        })
                }
                return(el)
        })

        this.setState({
            LastWindowSaved: false
        })
        if(this.state.OnCity.idCity !== 0)
        {
        const SavedIdOrd = this.state.SavedIdOrd
        this.setState({SavedIdOrd: parseInt(this.state.SavedIdOrd) + 1})
        var orderMarksSaved = []
        var orderPosSaved = []
        var orderAdditionSaved = []
        var orderCity = []
        var orderDetal = []
        var orderAddress = []
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
            Proverka36: el.Proverka36
         })
         return(el)
        })
        
        this.state.orderAddition.map((el) => {
            orderAdditionSaved.push({
                id: el.idAddition + " " + SavedIdOrd,
                idOrd: el.idOrd,
                price: el.price,
                dkprice: el.dkprice,
                name: el.name,
                num: el.num, 
                salecheck: el.salecheck,
                totalprice: el.totalprice,
                categ: el.categ,
                CheckStopList: el.CheckStopList,
                
            })
            return(el)
        })
        this.state.address.map((el) => {
            orderAddress.push({
                street: el.street,
                house: el.house,
                flat: el.flat,
                florr: el.floor,
                entrance: el.entrance,
                comment: el.comment,
                PhoneNum: el.PhoneNum
            })
            return(el)
        })
        orderCity.push({
            idCity: this.state.OnCity.idCity,
            city: this.state.OnCity.city, 
            streetType: this.state.OnCity.streetType,
            street: this.state.OnCity.street, 
            house: this.state.OnCity.house, 
            delivery: this.state.OnCity.delivery,
            takeaway: this.state.OnCity.takeaway
        })
        if(this.state.PreOrder === false)
        {
            if(this.state.TypeOrder === "delivery")
            {
                var MaxTime = this.state.MaxTimeDelivery
            }
            else
            {
                var MaxTime = this.state.MaxTimeTakeaway
            }
        }
        else
        {
            var MaxTimeHour = this.state.TimeInputContain[0].Hour
            var MaxTimeMinutes = this.state.TimeInputContain[0].Minutes
            var MaxTime = [{Hour: MaxTimeHour, Minutes: MaxTimeMinutes}]
            this.setState({
                TimeSave: [
                    {
                        Hour: MaxTimeHour,
                        Minutes: MaxTimeMinutes
                    }
                ]
            })
            
            var DateSaveYear = this.state.TimeInputContain[0].Year
            var DateSaveMounth = this.state.TimeInputContain[0].Mounth
            var DateSaveDate = this.state.TimeInputContain[0].Date
            
                this.setState({
                    DateSave: [{
                        Date: DateSaveDate,
                        Mounth: DateSaveMounth,
                        Year: DateSaveYear
                    }]
                })
            await this.setState
        }
        var Status = "New"
        if(this.state.PreOrder === true)
        {
            Status = "Timeout"
        }
        orderDetal.push({
            pdkon: this.state.pdkon,
            Tablewares: this.state.orderTablewares[0].num !== undefined ? this.state.orderTablewares[0].num : 0,
            totalSum: this.state.totalSum,
            totalSumSale: this.state.totalSumSale,
            Sale: this.state.Sale,
            SaleInp: this.state.SaleInp,
            TotalSale: this.state.TotalSale,
            TimeSave: this.state.TimeSave,
            DateSave: this.state.DateSave,
            Status: Status,
            TypeOrder: this.state.TypeOrder,
            MaxTime: MaxTime,
            Payment: this.state.Payment,
            UsedCertificate: this.state.UsedCertificate
        })

        this.state.MarksOrder.map((el) => {
            orderMarksSaved.push({
                idMark: el.idMark,
                name: el.name,
                Active: el.Active
            })
            return(el)
        })
        this.setState({
            Saved: [...this.state.Saved, {SavedIdOrd, orderPosSaved, orderCity, orderDetal, orderAdditionSaved, orderAddress, orderMarksSaved}]
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
        var today = new Date()

        var TimeSaveHour =  String(today.getHours()).padStart(2, "0")
        var TimeSaveMinutes =  String(today.getMinutes()).padStart(2, "0")
        this.setState({
            TimeSave: [
                {
                    Hour: TimeSaveHour,
                    Minutes: TimeSaveMinutes
                }
            ]
        })

        var DateSaveDate = String(today.getDate()).padStart(2, "0") 
        var DateSaveMonth =  String(today.getMonth() + 1).padStart(2, "0")
        var DateSaveYear = String(today.getFullYear());
        this.setState({
            DateSave: [
                {
                    Date: DateSaveDate,
                    Mounth: DateSaveMonth,
                    Year: DateSaveYear
                }
            ]
        })
        var MaxMinDelivery =  String(today.getMinutes()+parseInt(this.state.OnCity.delivery)+parseInt(this.state.AddTimeDelivery)+1).padStart(2, "0")
        var MaxHourDelivery = String(today.getHours()).padStart(2, "0")

        if(MaxMinDelivery > 60 || MaxMinDelivery === 60)
        {
            if(MaxMinDelivery > 120 || MaxMinDelivery === 120)
            {
                MaxMinDelivery = String(parseInt(MaxMinDelivery) - 120).padStart(2, "0")
                MaxHourDelivery = String(parseInt(MaxHourDelivery) + 2).padStart(2, "0")
            }
            else
            {
                MaxMinDelivery = String(parseInt(MaxMinDelivery) - 60).padStart(2, "0")
                MaxHourDelivery = String(parseInt(MaxHourDelivery) + 1).padStart(2, "0")
            }
        }
        
        this.setState({
            MaxTimeDelivery: [
                {
                    Hour: MaxHourDelivery,
                    Minutes: MaxMinDelivery
                }
            ]
        })

        var MaxMinTakeaway = String(today.getMinutes()+parseInt(this.state.OnCity.takeaway)+1).padStart(2, "0")
        var MaxHourTakeaway = String(today.getHours()).padStart(2, "0")

        if(MaxMinTakeaway > 60)
        {
            if(MaxMinTakeaway > 120)
            {
                MaxMinTakeaway = String(parseInt(MaxMinTakeaway) - 120).padStart(2, "0")
                MaxHourTakeaway = String(parseInt(MaxHourTakeaway) + 2).padStart(2, "0")
            }
            else
            {
                MaxMinTakeaway = String(parseInt(MaxMinTakeaway) - 60).padStart(2, "0")
                MaxHourTakeaway = String(parseInt(MaxHourTakeaway) + 1).padStart(2, "0")
            }
        }
        
        this.setState({
            MaxTimeTakeaway: [
                {
                    Hour: MaxHourTakeaway,
                    Minutes: MaxMinTakeaway
                }
            ]
        })
        
    }

    async PaymentMark(val){
        switch(val){
            default:{
                this.setState({
                    Payment: "Наличными сдача с " + val + " руб."
                })
                break;
            }
            case("Картой"): {
                this.setState({
                    Payment: val
                })
                break;
            }
            case("Оплачено"): {
                this.setState({
                    Payment: val
                })
                break;
            }
            case("Б/С"): {
                this.setState({
                    Payment: "Наличными " + val 
                })
                break;
            }
        }
        await this.setState
        
        this.SaveFunction()
    }

    ChangeStatusSavedOrd(val, SavedIdOrd){
        this.state.Saved.map((el) => {
            if(el.SavedIdOrd === SavedIdOrd)
            {
                el.orderDetal[0].Status = val
                this.setState({
                    Saved:  [...this.state.Saved]
                })
            }
            return(el)
        })
    }


    DeleteSavedOrd(id){
        this.setState({
            Saved: this.state.Saved.filter((el) => el.SavedIdOrd !== id)
        })
    }
    
    
    ClickOpenDropDownSale(){
        this.setState({
            OpenDropDownSale: true
        })
    }

    CloseOpenDropDownSale(){
        this.setState({
            OpenDropDownSale: false
        })
    }

    ClickOpenDropDownTablewares(){
        this.setState({
            OpenDropDownTablewares: true
        })
    }

    CloseOpenDropDownTablewares(){
        this.setState({
            OpenDropDownTablewares: false
        })
    }

    ClickMarksButton(idMark){
        this.state.MarksOrder.map((el) =>{
            if(el.idMark === idMark)
            {
                el.Active = !el.Active
                this.setState({
                    MarksOrder: [...this.state.MarksOrder]
                })
            }
            return(el)
        })
    }

    getTodayDay(){
        var today = new Date()

        var TodayDate = String(today.getFullYear() + "-" + String(today.getMonth() + 1).padStart(2 , "0") + "-" + String(today.getDate()).padStart(2, "0") + " 00:00" );
        this.setState({
            TodayDate: TodayDate
        })
        var MaxInpDay = String(today.getDate() + 7).padStart(2, "0")
        var MaxInpMounth = String(today.getMonth() + 1).padStart(2 , "0")
        var MaxInpYear = String(today.getFullYear())
        if(MaxInpMounth === "01" || MaxInpMounth === "03" || MaxInpMounth === "05" || MaxInpMounth === "07" || MaxInpMounth === "08" || MaxInpMounth === "10" || MaxInpMounth === "12")
        {
            if(parseInt(MaxInpDay) > 31)
            {
                MaxInpDay = String(parseInt(MaxInpDay) - 31).padStart(2, "0")
                MaxInpMounth = String(parseInt(MaxInpMounth) + 1).padStart(2, "0")
                if(parseInt(MaxInpMounth) === 13)
                {
                    MaxInpMounth = String(parseInt(MaxInpMounth) - 12).padStart(2, "0")
                    MaxInpYear = String(parseInt(MaxInpYear) + 1)
                }
            }
        }
        else
        {
            if(MaxInpMounth === "02")
            {
                if(parseInt(MaxInpDay) > 28)
                {
                    MaxInpDay = String(parseInt(MaxInpDay) - 28).padStart(2, "0")
                    MaxInpMounth = String(parseInt(MaxInpMounth) + 1).padStart(2, "0")
                }
            }
            else
            {
                if(parseInt(MaxInpDay) > 30)
                {
                MaxInpDay = String(parseInt(MaxInpDay) - 30).padStart(2, "0")
                MaxInpMounth = String(parseInt(MaxInpMounth) + 1).padStart(2, "0")
                }
            }
        }
        var MaxDateInp = MaxInpYear + "-" + MaxInpMounth + "-" + MaxInpDay + " 00:00"
        this.setState({
            MaxDateInp: MaxDateInp
        })
       
    }
    
}


export default App