import React from 'react';
import { IoChevronDown, IoStatsChart } from "react-icons/io5";
import { PiMagnifyingGlass } from "react-icons/pi";
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
import WindowStatisticsClient from './components/StatisticsClient/WindowStatisticsClient';



class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            openMenu: false,
            ActiveComponent: 0,//выбранный активный компонент
            SSumWindowActive: false,//активность окна для ввода скидки суммой
            LastWindowSaved: false, //активность окна для сохранения заказа
            totalSoy: 0, //счетчик соевых
            SushiSoy: 0, //счетчик соевых для суши
            foridSost: 1, //счетчик для присваивания айди добавкам в ВОК
            foridDob: 1, //счетчик для присваивания айди добавкам в пиццу
            foridAddition: 1,//счетчки добавок
            forIdAlert: 1,
            foridOrd: 1, //счетчик для присваивания айди позициям в заказе
            SavedIdOrd: 1,//счетчик для присваивания айди сохраненным заказам
            SaverForSavedIdOrd: false,
            totalSum: 0,//счетчик суммы заказа 
            totalSumSale: 0,//счетчик суммы заказа со скидкой
            Sale: 1,//множитель скидки
            SaleInp: 0,//скидка суммой
            TotalSale: 0,//стейт для вывода скидки в виде "-ХХ%"/"-ХХХХ руб."
            pdkon: 0, //счетчик для проверки активен ли переключатель цен на дк, логичнее было бы true/false использовать, но я уже сделал так, так что будет так
            onCat: 0, //хранение какая категория выбрана, изначально никакая. Вводятся не айди а названия, мне так удобнее
            OpenDropDownSale: false,//активность окна выбора скидки
            OpenDropDownTablewares: false,//активность окна выбора приборов
            EditOrderCheck: false,
            EditOrderStatus: false,
            
            cat: [ //массив для категорий
                {
                    id: 1, //айди категории
                    name: "ВОК", //название категории
                    categories: "Добавка В ВОК",
                    CheckStopList: false,
                    CheckIndeterminate: false,
                    ThisAddition: true
                },
                {
                    id: 2,
                    name: "Поке",
                    CheckStopList: false,
                    CheckIndeterminate: false
                },
                {
                    id: 3,
                    name: "Роллы",
                    CheckStopList: false,
                    CheckIndeterminate: false
                },
                {
                    id: 4,
                    name: "Запеченные Роллы",
                    CheckStopList: false,
                    CheckIndeterminate: false
                },
                {
                    id: 5,
                    name: "Горячие Роллы",
                    CheckStopList: false,
                    CheckIndeterminate: false
                },
                {
                    id: 6,
                    name: "Сеты",
                    CheckStopList: false,
                    CheckIndeterminate: false
                },
                {
                    id: 7,
                    name: "Мини Роллы",
                    CheckStopList: false,
                    CheckIndeterminate: false
                },
                {
                    id: 8,
                    name: "Суши",
                    CheckStopList: false,
                    CheckIndeterminate: false,
                },
                {
                    id: 9,
                    name: "Пицца",
                    CheckStopList: false,
                    CheckIndeterminate: false
                },
                {
                    id: 10,
                    name: "Комбо",
                    CheckStopList: false,
                    CheckIndeterminate: false
                },
                {
                    id: 11,
                    name: "Бизнес обеды (с 11 до 15)",
                    CheckStopList: false,
                    CheckIndeterminate: false
                },
                {
                    id: 12,
                    name: "Допы",
                    CheckStopList: false,
                    CheckIndeterminate: false
                },
                {
                    id: 13,
                    name: "Салаты",
                    CheckStopList: false,
                    CheckIndeterminate: false
                },
                {
                    id: 14,
                    name: "Супы",
                    CheckStopList: false,
                    CheckIndeterminate: false
                },
                {
                    id: 15,
                    name: "Горячие блюда",
                    CheckStopList: false,
                    CheckIndeterminate: false
                },
                {
                    id: 16,
                    name: "Напитки",
                    CheckStopList: false,
                    CheckIndeterminate: false
                },
                {
                    id: 17,
                    name: "Десерты",
                    CheckStopList: false,
                    CheckIndeterminate: false
                },
                {
                    id: 18,
                    name: "Мясо В ВОК",
                    categories: "Добавка В ВОК",
                    CheckStopList: false,
                    CheckIndeterminate: false,
                    ThisAddition: true
                },
                {
                    id: 19,
                    name: "Доп В ВОК",
                    categories: "Добавка В ВОК",
                    CheckStopList: false,
                    CheckIndeterminate: false,
                    ThisAddition: true
                },
                {
                    id: 20,
                    name: "Соус В ВОК",
                    categories: "Добавка В ВОК",
                    CheckStopList: false,
                    CheckIndeterminate: false,
                    ThisAddition: true
                },
                {
                    id: 21,
                    name: "Добавка К Пицце",
                    categories: "Добавка В Пицца",
                    CheckStopList: false,
                    CheckIndeterminate: false,
                    ThisAddition: true
                },
                
                
            ],
            position: [ //массив позиций
            {
                id: 1,
                name: "Бостон",
                salecheck: true,
                soysause: 1,
                categ: "Роллы",
                sost: "Состав: Курица, сыр творожный Cremette, огурец, бекон.",
                price: 229,
                dkprice: 309,
                num: 1,
                totalprice: 229,
                totaldkprice: 309, 
                CheckStopList: false,
            },
            {
                id: 2,
                name: "Дракон",
                salecheck: true,
                soysause: 1,
                categ: "Роллы",
                sost: "Состав: Угорь, сыр творожный Cremette, пекинская капуста, паприка, огурец, соус унаги.",
                price: 359,
                dkprice: 469,
                num: 1,
                totalprice: 359,
                totaldkprice: 469, 
                CheckStopList: false,
            },
            {
                id: 3,
                name: "Дракон с креветкой",
                salecheck: true,
                soysause: 1,
                categ: "Роллы",
                sost: "Состав: Угорь, креветка, сыр творожный Cremette, паприка, огурец, унаги, кунжут.",
                price: 439,
                dkprice: 569,
                num: 1,
                totalprice: 439,
                totaldkprice: 569, 
                CheckStopList: false,
            },
            {
                id: 5,
                name: "Калифорния",
                salecheck: false,
                soysause: 1,
                categ: "Роллы",
                sost: "Состав: Снежный краб, майонез, огурец, масаго.",
                price: 199,
                dkprice: 259,
                num: 1,
                totalprice: 199,
                totaldkprice: 259, 
                CheckStopList: false,
            },
            {
                id: 6,
                name: "Калифорния кунжут",
                salecheck: false,
                soysause: 1,
                categ: "Роллы",
                sost: "Состав: Снежный краб, майонез, огурец, кунжут.",
                price: 199,
                dkprice: 259,
                num: 1,
                totalprice: 199,
                totaldkprice: 259,
                CheckStopList: false, 
            },
            {
                id: 7,
                name: "Калифорния лосось",
                salecheck: true,
                soysause: 1,
                categ: "Роллы",
                sost: "Состав: Лосось, майонез, огурец, масаго.",
                price: 299,
                dkprice: 389,
                num: 1,
                totalprice: 299,
                totaldkprice: 389,
                CheckStopList: false, 
            },
            {
                id: 8,
                name: "Калифорния с креветкой",
                salecheck: true,
                soysause: 1,
                categ: "Роллы",
                sost: "Состав: Креветка, майонез, огурец, масаго.",
                price: 279,
                dkprice: 359,
                num: 1,
                totalprice: 279,
                totaldkprice: 359,
                CheckStopList: false, 
            },
            {
                id: 9,
                name: "Калифорния хит",
                salecheck: true,
                soysause: 1,
                categ: "Роллы",
                sost: "Состав: Лосось, сыр творожный Cremette, огурец, масаго.",
                price: 319,
                dkprice: 419,
                num: 1,
                totalprice: 319,
                totaldkprice: 419,
                CheckStopList: false, 
            },
            {
                id: 10,
                name: "Камчатка",
                salecheck: true,
                soysause: 1,
                categ: "Роллы",
                sost: "Состав: Креветка, сыр творожный Cremette, огурец.",
                price: 279,
                dkprice: 359,
                num: 1,
                totalprice: 279,
                totaldkprice: 359,
                CheckStopList: false, 
            },
            {
                id: 11,
                name: "Канада",
                salecheck: true,
                soysause: 1,
                categ: "Роллы",
                sost: "Состав: Угорь, лосось, сыр творожный Cremette, огурец.",
                price: 459,
                dkprice: 599,
                num: 1,
                totalprice: 459,
                totaldkprice: 599,
                CheckStopList: false, 
            },
            {
                id: 12,
                name: "Крейзи краб",
                salecheck: true,
                soysause: 1,
                categ: "Роллы",
                sost: "Состав: Снежный краб, огурец, сыр творожный Cremette, масаго.",
                price: 209,
                dkprice: 269,
                num: 1,
                totalprice: 209,
                totaldkprice: 269,
                CheckStopList: false, 
            },
            {
                id: 13,
                name: "Мексиканский",
                salecheck: true,
                soysause: 1,
                categ: "Роллы",
                sost: "Состав: Креветка, огурец, соус спайси (в составе репчатый лук), масаго.",
                price: 269,
                dkprice: 349,
                num: 1,
                totalprice: 269,
                totaldkprice: 349,
                CheckStopList: false, 
            },
            {
                id: 15,
                name: "Сливочная калифорния",
                salecheck: true,
                soysause: 1,
                categ: "Роллы",
                sost: "Состав: Снежный краб, огурец, сыр творожный Cremette, масаго.",
                price: 249,
                dkprice: 329,
                num: 1,
                totalprice: 249,
                totaldkprice: 329,
                CheckStopList: false, 
            },
            {
                id: 16,
                name: "Спайси угорь",
                salecheck: true,
                soysause: 1,
                categ: "Роллы",
                sost: "Состав: Угревидный кларий, соус спайси (в составе репчатый лук), огурец, кунжут.",
                price: 239,
                dkprice: 319,
                num: 1,
                totalprice: 239,
                totaldkprice: 319,
                CheckStopList: false, 
            },
            {
                id: 17,
                name: "Тай",
                salecheck: true,
                soysause: 1,
                categ: "Роллы",
                sost: "Состав: Лосось, омлет Тамаго, сыр творожный Cremette, огурец.",
                price: 239,
                dkprice: 319,
                num: 1,
                totalprice: 239,
                totaldkprice: 319,
                CheckStopList: false, 
            },
            {
                id: 18,
                name: "Тамаго краб",
                salecheck: true,
                soysause: 1,
                categ: "Роллы",
                sost: "Состав: Снежный краб, сыр творожный Cremette, омлет Тамаго, огурец, масаго.",
                price: 219,
                dkprice: 289,
                num: 1,
                totalprice: 219,
                totaldkprice: 289,
                CheckStopList: false, 
            },
            {
                id: 19,
                name: "Тидзу",
                salecheck: true,
                soysause: 1,
                categ: "Роллы",
                sost: "Состав: Креветка, сыр творожный Cremette, огурец, масаго, лук перо.",
                price: 299,
                dkprice: 389,
                num: 1,
                totalprice: 299,
                totaldkprice: 389,
                CheckStopList: false, 
            },
            {
                id: 20,
                name: "Тунец Блэк",
                salecheck: true,
                soysause: 1,
                categ: "Роллы",
                sost: "Состав: Тунец, сыр творожный Cremette, огурец, масаго.",
                price: 279,
                dkprice: 369,
                num: 1,
                totalprice: 279,
                totaldkprice: 369,
                CheckStopList: false, 
            },
            {
                id: 21,
                name: "Тунец лайт",
                salecheck: true,
                soysause: 1,
                categ: "Роллы",
                sost: "Состав: Тунец, сыр творожный Cremette, огурец.",
                price: 239,
                dkprice: 319,
                num: 1,
                totalprice: 239,
                totaldkprice: 319,
                CheckStopList: false, 
            },
            {
                id: 22,
                name: "Филадельфия лайт",
                salecheck: true,
                soysause: 1,
                categ: "Роллы",
                sost: "Состав: Лосось, сыр творожный Cremette, огурец.",
                price: 269,
                dkprice: 349,
                num: 1,
                totalprice: 269,
                totaldkprice: 349,
                CheckStopList: false, 
            },
            {
                id: 23,
                name: "Филадельфия люкс",
                salecheck: true,
                soysause: 1,
                categ: "Роллы",
                sost: "Состав: Лосось, сыр творожный Cremette, огурец.",
                price: 399,
                dkprice: 519,
                num: 1,
                totalprice: 399,
                totaldkprice: 519,
                CheckStopList: false, 
            },
            {
                id: 24,
                name: "Филадельфия премиум",
                salecheck: true,
                soysause: 1,
                categ: "Роллы",
                sost: "Состав: Лосось, сыр творожный Cremette, огурец.",
                price: 549,
                dkprice: 719,
                num: 1,
                totalprice: 549,
                totaldkprice: 719,
                CheckStopList: false, 
            },
            {
                id: 25,
                name: "Филадельфия с креветкой",
                salecheck: true,
                soysause: 1,
                categ: "Роллы",
                sost: "Состав: Лосось, креветка, сыр творожный Cremette, огурец.",
                price: 399,
                dkprice: 519,
                num: 1,
                totalprice: 399,
                totaldkprice: 519,
                CheckStopList: false, 
            },
            {
                id: 26,
                name: "Филадельфия с тунцом",
                salecheck: true,
                soysause: 1,
                categ: "Роллы",
                sost: "Состав: Тунец, сыр творожный Cremette, огурец.",
                price: 299,
                dkprice: 389,
                num: 1,
                totalprice: 299,
                totaldkprice: 389,
                CheckStopList: false, 
            },
            {
                id: 27,
                name: "Филадельфия с угрем",
                salecheck: true,
                soysause: 1,
                categ: "Роллы",
                sost: "Состав: Угорь, сыр творожный Cremette, огурец.",
                price: 399,
                dkprice: 519,
                num: 1,
                totalprice: 399,
                totaldkprice: 519,
                CheckStopList: false, 
            },
            {
                id: 28,
                name: "Хатано",
                salecheck: false,
                soysause: 1,
                categ: "Роллы",
                sost: "Состав: Бекон, куриное филе, огурец, сыр творожный Cremette, укроп, соус спайси (в составе репчатый лук)",
                price: 199,
                dkprice: 259,
                num: 1,
                totalprice: 199,
                totaldkprice: 259,
                CheckStopList: false, 
            },
            {
                id: 29,
                name: "Эби маки",
                salecheck: true,
                soysause: 1,
                categ: "Роллы",
                sost: "Состав: Креветка, сыр творожный Cremette, огурец, кунжут, масаго",
                price: 269,
                dkprice: 349,
                num: 1,
                totalprice: 269,
                totaldkprice: 349,
                CheckStopList: false, 
            },
            {
                id: 30,
                name: "Эдо",
                salecheck: true,
                soysause: 1,
                categ: "Роллы",
                sost: "Состав: Лосось, тунец, сыр творожный Cremette, огурец, масаго.",
                price: 279,
                dkprice: 369,
                num: 1,
                totalprice: 279,
                totaldkprice: 369,
                CheckStopList: false, 
            },
            {
                id: 31,
                name: "Ясай",
                salecheck: true,
                soysause: 1,
                categ: "Роллы",
                sost: "Состав: Огурец, паприка, помидор, пекинская капуста.",
                price: 169,
                dkprice: 219,
                num: 1,
                totalprice: 169,
                totaldkprice: 219,
                CheckStopList: false, 
            },
            {
                id: 32,
                name: "Радуга",
                salecheck: true,
                soysause: 1,
                categ: "Роллы",
                sost: "Состав: Лосось, тунец, сыр творожный Cremette, пекинская капуста, огурец, перец болгарский",
                price: 289,
                dkprice: 379,
                num: 1,
                totalprice: 289,
                totaldkprice: 379,
                CheckStopList: false, 
            },
            {
                id: 33,
                name: "Ями",
                salecheck: true,
                soysause: 1,
                categ: "Роллы",
                sost: "Состав: Окунь темпура, огурец, лук зеленый перо, спайси соус",
                price: 219,
                dkprice: 289,
                num: 1,
                totalprice: 219,
                totaldkprice: 289,
                CheckStopList: false, 
            },
            {
                id: 34,
                name: "Ассорти",
                salecheck: true,
                categ: "Пицца",
                sost: "Состав: Соус, сыр Моццарелла, курица, бекон, помидор.",
                price: 409,
                dkprice: 529,
                num: 1,
                totalprice: 409,
                totaldkprice: 529,
                haveAddition: true,
                CheckStopList: false, 
                price36: 579,
                dkprice36: 759,
                totalprice36: 579,
                totaldkprice36: 759,
                Proverka36: false
                                
            },
            {
                id: 35,
                name: "Гавайская",
                salecheck: true,
                categ: "Пицца",
                sost: "Состав: Соус, сыр Моцарелла, курица, ананас, кукуруза, сыр Фета.",
                price: 449,
                dkprice: 589,
                num: 1,
                totalprice: 449,
                totaldkprice: 589,
                haveAddition: true,
                CheckStopList: false, 
                price36: 599,
                dkprice36: 779,
                totalprice36: 599,
                totaldkprice36: 779,
                Proverka36: false
            },
            {
                id: 36,
                name: "Грибная",
                salecheck: true,
                categ: "Пицца",
                sost: "Состав: Соус, сыр Моцарелла, грибы шампиньоны.",
                price: 349,
                dkprice: 459,
                num: 1,
                totalprice: 349,
                totaldkprice: 459,
                haveAddition: true,
                CheckStopList: false, 
                price36: 469,
                dkprice36: 609,
                totalprice36: 469,
                totaldkprice36: 609,
                Proverka36: false
            },
            {
                id: 37,
                name: "Дары моря",
                salecheck: true,
                categ: "Пицца",
                sost: "Состав: Соус, сыр Моцарелла, креветка, лосось, мидии, укроп.",
                price: 549,
                dkprice: 719,
                num: 1,
                totalprice: 549,
                totaldkprice: 719,
                haveAddition: true,
                CheckStopList: false, 
                price36: 699,
                dkprice36: 909,
                totalprice36: 699,
                totaldkprice36: 909,
                Proverka36: false
            },
            {
                id: 38,
                name: "Домашняя",
                salecheck: true,
                categ: "Пицца",
                sost: "Состав: Соус, сыр Моцарелла, курица, ветчина, кукуруза.",
                price: 399,
                dkprice: 519,
                num: 1,
                totalprice: 399,
                totaldkprice: 519,
                haveAddition: true,
                CheckStopList: false, 
                price36: 559,
                dkprice36: 729,
                totalprice36: 559,
                totaldkprice36: 729,
                Proverka36: false
            },
            {
                id: 39,
                name: "Кантри",
                salecheck: true,
                categ: "Пицца",
                sost: "Состав: Соус, сыр Моцарелла, курица, грибы, кукуруза.",
                price: 399,
                dkprice: 519,
                num: 1,
                totalprice: 399,
                totaldkprice: 519,
                haveAddition: true,
                CheckStopList: false, 
                price36: 559,
                dkprice36: 729,
                totalprice36: 559,
                totaldkprice36: 729,
                Proverka36: false
            },
            {
                id: 40,
                name: "Капуя",
                salecheck: true,
                categ: "Пицца",
                sost: "Состав: Сыр Моцарелла, курица, помидор, соленый огурец, соус.",
                price: 399,
                dkprice: 519,
                num: 1,
                totalprice: 399,
                totaldkprice: 519,
                haveAddition: true,
                CheckStopList: false, 
                price36: 559,
                dkprice36: 729,
                totalprice36: 559,
                totaldkprice36: 729,
                Proverka36: false
            },
            {
                id: 41,
                name: "Маргарита",
                salecheck: true,
                categ: "Пицца",
                sost: "Состав: Соус, сыр Моцарелла, помидоры.",
                price: 349,
                dkprice: 459,
                num: 1,
                totalprice: 349,
                totaldkprice: 459,
                haveAddition: true,
                CheckStopList: false, 
                price36: 459,
                dkprice36: 599,
                totalprice36: 459,
                totaldkprice36: 599,
                Proverka36: false
            },
            {
                id: 42,
                name: "Мексиканская",
                salecheck: true,
                categ: "Пицца",
                sost: "Состав: Соус, сыр Моцарелла, говядина, охотничьи колбаски, болгарский перец, халапенью.",
                price: 429,
                dkprice: 559,
                num: 1,
                totalprice: 429,
                totaldkprice: 559,
                haveAddition: true,
                CheckStopList: false, 
                price36: 599,
                dkprice36: 779,
                totalprice36: 599,
                totaldkprice36: 779,
                Proverka36: false
            },
            {
                id: 43,
                name: "Охотничья",
                salecheck: true,
                categ: "Пицца",
                sost: "Состав: Соус, сыр Моцарелла, охотничьи колбаски, помидоры, маслины.",
                price: 399,
                dkprice: 519,
                num: 1,
                totalprice: 399,
                totaldkprice: 519,
                haveAddition: true,
                CheckStopList: false, 
                price36: 559,
                dkprice36: 729,
                totalprice36: 559,
                totaldkprice36: 729,
                Proverka36: false
            },
            {
                id: 44,
                name: "Пепперони",
                salecheck: true,
                categ: "Пицца",
                sost: "Состав: Соус, сыр Моцарелла, колбаса пепперони.",
                price: 399,
                dkprice: 519,
                num: 1,
                totalprice: 399,
                totaldkprice: 519,
                haveAddition: true,
                CheckStopList: false, 
                price36: 549,
                dkprice36: 719,
                totalprice36: 549,
                totaldkprice36: 719,
                Proverka36: false
            },
            {
                id: 45,
                name: "Пикантная",
                salecheck: true,
                categ: "Пицца",
                sost: "Состав: Соус, сыр Моцарелла, охотничьи колбаски, ветчина, пепперони, маслины, укроп.",
                price: 399,
                dkprice: 519,
                num: 1,
                totalprice: 399,
                totaldkprice: 519,
                haveAddition: true,
                CheckStopList: false, 
                price36: 549,
                dkprice36: 719,
                totalprice36: 549,
                totaldkprice36: 719,
                Proverka36: false
            },
            {
                id: 46,
                name: "Сушибокс",
                salecheck: true,
                categ: "Пицца",
                sost: "Состав: Соус, сыр Моцарелла, говядина, ветчина, курица, помидор.",
                price: 469,
                dkprice: 609,
                num: 1,
                totalprice: 469,
                totaldkprice: 609,
                haveAddition: true,
                CheckStopList: false, 
                price36: 619,
                dkprice36: 799,
                totalprice36: 619,
                totaldkprice36: 799,
                Proverka36: false
            },
            {
                id: 47,
                name: "Том ям",
                salecheck: true,
                categ: "Пицца",
                sost: "Состав: Куриное филе, креветки, грибы шампиньоны, помидоры черри, сыр Моцарелла, укроп, петрушка, соус том ям.",
                price: 569,
                dkprice: 739,
                num: 1,
                totalprice: 569,
                totaldkprice: 739,
                haveAddition: true,
                CheckStopList: false, 
                price36: 709,
                dkprice36: 919,
                totalprice36: 709,
                totaldkprice36: 919,
                Proverka36: false
            },
            {
                id: 48,
                name: "Четыре сыра",
                salecheck: true,
                categ: "Пицца",
                sost: "Состав: Соус, сыр Моцарелла, сыр Гауда, сыр Пармезан, сыр Фета.",
                price: 399,
                dkprice: 519,
                num: 1,
                totalprice: 399,
                totaldkprice: 519,
                haveAddition: true,
                CheckStopList: false, 
                price36: 549,
                dkprice36: 719,
                totalprice36: 549,
                totaldkprice36: 719,
                Proverka36: false
            },
            {
                id: 49,
                name: "Вулкан спайси",
                salecheck: true,
                soysause: 1,
                categ: "Запеченные Роллы",
                sost: "Состав: Окунь темпура, сыр творожный Cremette, огурец, спайси соус, масаго.",
                price: 279,
                dkprice: 369,
                num: 1,
                totalprice: 279,
                totaldkprice: 369,
                CheckStopList: false, 
            },
            {
                id: 50,
                name: "Домбай",
                salecheck: true,
                soysause: 1,
                categ: "Запеченные Роллы",
                sost: "Состав: Лосось, сыр творожный Cremette, огурец, яки соус, угревидный кларий, соус унаги, кунжут.",
                price: 369,
                dkprice: 479,
                num: 1,
                totalprice: 369,
                totaldkprice: 479,
                CheckStopList: false, 
            },
            {
                id: 51,
                name: "Запеченная калифорния",
                salecheck: true,
                soysause: 1,
                categ: "Запеченные Роллы",
                sost: "Состав: Снежный краб, сыр творожный Cremette, огурец, масаго, соус яки.",
                price: 259,
                dkprice: 339,
                num: 1,
                totalprice: 259,
                totaldkprice: 339,
                CheckStopList: false, 
            },
            {
                id: 52,
                name: "Запеченная калифорния в кунжуте",
                salecheck: true,
                soysause: 1,
                categ: "Запеченные Роллы",
                sost: "Состав: Снежный краб, сыр творожный Cremette, огурец, кунжут, соус яки.",
                price: 229,
                dkprice: 299,
                num: 1,
                totalprice: 229,
                totaldkprice: 299,
                CheckStopList: false, 
            },
            {
                id: 53,
                name: "Запеченный эдо",
                salecheck: true,
                soysause: 1,
                categ: "Запеченные Роллы",
                sost: "Состав: Лосось, тунец, сыр творожный Cremette, огурец, масаго, соус яки.",
                price: 319,
                dkprice: 419,
                num: 1,
                totalprice: 319,
                totaldkprice: 419,
                CheckStopList: false, 
            },
            {
                id: 54,
                name: "Киото",
                salecheck: true,
                soysause: 1,
                categ: "Запеченные Роллы",
                sost: "Состав: Угревидный кларий, омлет Тамаго, сыр творожный Cremette, огурец, лук зеленый, яки соус, унаги соус, кунжут.",
                price: 299,
                dkprice: 389,
                num: 1,
                totalprice: 299,
                totaldkprice: 389,
                CheckStopList: false, 
            },
            {
                id: 55,
                name: "Креветка спайси hot",
                salecheck: true,
                soysause: 1,
                categ: "Запеченные Роллы",
                sost: "Состав: Креветка, снежный краб, сыр творожный Cremette, огурец, соус спайси (в составе зеленый лук), унаги, кунжут, масаго.",
                price: 369,
                dkprice: 479,
                num: 1,
                totalprice: 369,
                totaldkprice: 479,
                CheckStopList: false, 
            },
            {
                id: 56,
                name: "Крейзи краб hot",
                salecheck: true,
                soysause: 1,
                categ: "Запеченные Роллы",
                sost: "Состав: Снежный краб темпура, огурец, сыр творожный Cremette, масаго, соус яки.",
                price: 259,
                dkprice: 339,
                num: 1,
                totalprice: 259,
                totaldkprice: 339,
                CheckStopList: false, 
            },
            {
                id: 57,
                name: "Крейзи спайси hot",
                salecheck: true,
                soysause: 1,
                categ: "Запеченные Роллы",
                sost: "Состав: Снежный краб, огурец, сыр творожный Cremette, кунжут, соус спайси (в составе репчатый лук).",
                price: 229,
                dkprice: 299,
                num: 1,
                totalprice: 229,
                totaldkprice: 299,
                CheckStopList: false, 
            },
            {
                id: 58,
                name: "Лава",
                salecheck: true,
                soysause: 1,
                categ: "Запеченные Роллы",
                sost: "Состав: Угревидный кларий, куриное филе, сыр творожный Cremette, огурец, яки соус, унаги соус, кунжут.",
                price: 329,
                dkprice: 419,
                num: 1,
                totalprice: 329,
                totaldkprice: 419,
                CheckStopList: false, 
            },
            {
                id: 59,
                name: "Лосось спайси hot",
                salecheck: true,
                soysause: 1,
                categ: "Запеченные Роллы",
                sost: "Состав: Лосось, снежный краб, сыр творожный Cremette, огурец, соус спайси (в составе зеленый лук), унаги, кунжут.",
                price: 339,
                dkprice: 439,
                num: 1,
                totalprice: 339,
                totaldkprice: 439,
                CheckStopList: false, 
            },
            {
                id: 60,
                name: "Ниппон hot",
                salecheck: true,
                soysause: 1,
                categ: "Запеченные Роллы",
                sost: "Состав: Снежный краб, лосось, огурец, сыр творожный Cremette, соус яки.",
                price: 269,
                dkprice: 349,
                num: 1,
                totalprice: 269,
                totaldkprice: 349,
                CheckStopList: false, 
            },
            {
                id: 61,
                name: "Ред hot",
                salecheck: true,
                soysause: 1,
                categ: "Запеченные Роллы",
                sost: "Состав: Угревидный кларий, креветка, сыр творожный Cremette, огурец, масаго, соус яки, соус унаги, кунжут.",
                price: 399,
                dkprice: 499,
                num: 1,
                totalprice: 399,
                totaldkprice: 499,
                CheckStopList: false, 
            },
            {
                id: 62,
                name: "РИО",
                salecheck: true,
                soysause: 1,
                categ: "Запеченные Роллы",
                sost: "Состав: Лосось, сыр творожный Cremette, огурец, соус яки, пармезан.",
                price: 329,
                dkprice: 419,
                num: 1,
                totalprice: 329,
                totaldkprice: 419,
                CheckStopList: false, 
            },
            {
                id: 63,
                name: "Ролл Том ям",
                salecheck: true,
                soysause: 1,
                categ: "Запеченные Роллы",
                sost: "Состав: Креветка, сыр творожный Cremette, огурец, том ям паста, соус унаги, соус яки, масаго, кунжут.",
                price: 299,
                dkprice: 389,
                num: 1,
                totalprice: 299,
                totaldkprice: 389,
                CheckStopList: false, 
            },
            {
                id: 64,
                name: "Сакура",
                salecheck: true,
                soysause: 1,
                categ: "Запеченные Роллы",
                sost: "Состав: Куриное филе, сыр творожный Cremette, огурец, яки соус, угревидный кларий, лук перо, соус унаги, кунжут.",
                price: 269,
                dkprice: 349,
                num: 1,
                totalprice: 269,
                totaldkprice: 349,
                CheckStopList: false, 
            },
            {
                id: 65,
                name: "Сенсей",
                salecheck: true,
                soysause: 1,
                categ: "Запеченные Роллы",
                sost: "Состав: Окунь темпура, сыр творожный Cremette, огурец, яки соус, кунжут.",
                price: 239,
                dkprice: 309,
                num: 1,
                totalprice: 239,
                totaldkprice: 309,
                CheckStopList: false, 
            },
            {
                id: 66,
                name: "Сяке hot",
                salecheck: true,
                soysause: 1,
                categ: "Запеченные Роллы",
                sost: "Состав: Лосось, снежный краб, сыр творожный Cremette, огурец, соус яки, соус унаги, пармезан.",
                price: 329,
                dkprice: 429,
                num: 1,
                totalprice: 329,
                totaldkprice: 429,
                CheckStopList: false, 
            },
                {
                id: 67,
                name: "Тай hot",
                salecheck: true,
                soysause: 1,
                categ: "Запеченные Роллы",
                sost: "Состав: Лосось, омлет Тамаго, сыр творожный Cremette, огурец, яки соус.",
                price: 259,
                dkprice: 339,
                num: 1,
                totalprice: 259,
                totaldkprice: 339,
                CheckStopList: false, 
            },
            {
                id: 68,
                name: "Тамаго краб hot",
                salecheck: true,
                soysause: 1,
                categ: "Запеченные Роллы",
                sost: "Состав: Снежный краб, сыр творожный Cremette, омлет Тамаго, огурец, соус спайси (в составе зеленый лук), масаго.",
                price: 259,
                dkprice: 339,
                num: 1,
                totalprice: 259,
                totaldkprice: 339,
                CheckStopList: false, 
            },
            {
                id: 69,
                name: "Тамаго чикен hot",
                salecheck: false,
                soysause: 1,
                categ: "Запеченные Роллы",
                sost: "Состав: Куриное филе, омлет Тамаго, майонез, огурец, яки соус, кунжут.",
                price: 199,
                dkprice: 259,
                num: 1,
                totalprice: 199,
                totaldkprice: 259,
                CheckStopList: false, 
            },
            {
                id: 70,
                name: "Тунец hot",
                salecheck: true,
                soysause: 1,
                categ: "Запеченные Роллы",
                sost: "Состав: Тунец, сыр творожный Cremette, огурец, яки соус, масаго.",
                price: 299,
                dkprice: 389,
                num: 1,
                totalprice: 299,
                totaldkprice: 389,
                CheckStopList: false, 
            },
            {
                id: 71,
                name: "Угорь спайси hot",
                salecheck: true,
                soysause: 1,
                categ: "Запеченные Роллы",
                sost: "Состав: Угревидный кларий, снежный краб, сыр творожный Cremette, огурец, соус спайси (в составе зеленый лук), унаги, кунжут, масаго.",
                price: 329,
                dkprice: 429,
                num: 1,
                totalprice: 329,
                totaldkprice: 429,
                CheckStopList: false, 
            },
            {
                id: 72,
                name: "Унаги hot",
                salecheck: true,
                soysause: 1,
                categ: "Запеченные Роллы",
                sost: "Состав: Угревидный кларий, снежный краб, сыр творожный Cremette, огурец, соус яки, соус унаги, пармезан.",
                price: 299,
                dkprice: 389,
                num: 1,
                totalprice: 299,
                totaldkprice: 389,
                CheckStopList: false, 
            },
            {
                id: 73,
                name: "Филадельфия запеченная",
                salecheck: true,
                soysause: 1,
                categ: "Запеченные Роллы",
                sost: "Состав: Лосось, сыр творожный Cremette, огурец.",
                price: 339,
                dkprice: 439,
                num: 1,
                totalprice: 339,
                totaldkprice: 439,
                CheckStopList: false, 
            },
            {
                id: 74,
                name: "Чеддер бекон",
                salecheck: true,
                soysause: 1,
                categ: "Запеченные Роллы",
                sost: "Состав: Куриное филе, огурец, сыр творожный Cremette, сыр Чеддер, бекон, соус Макси, лук перо.",
                price: 289,
                dkprice: 389,
                num: 1,
                totalprice: 289,
                totaldkprice: 389,
                CheckStopList: false, 
            },
            {
                id: 75,
                name: "Чикен Яки",
                salecheck: true,
                soysause: 1,
                categ: "Запеченные Роллы",
                sost: "Состав: Курица, майонез, огурец, кунжут, соус яки.",
                price: 229,
                dkprice: 289,
                num: 1,
                totalprice: 229,
                totaldkprice: 289,
                CheckStopList: false, 
            },
            {
                id: 76,
                name: "Эби-Туна",
                salecheck: true,
                soysause: 1,
                categ: "Запеченные Роллы",
                sost: "Состав: Креветка, тунец, сыр творожный Cremette, огурец, кунжут, соус яки.",
                price: 269,
                dkprice: 349,
                num: 1,
                totalprice: 269,
                totaldkprice: 349,
                CheckStopList: false, 
            },
            {
                id: 77,
                name: "Архыз",
                salecheck: true,
                soysause: 1,
                categ: "Горячие Роллы",
                sost: "Состав: Куриное филе, сыр творожный Cremette, огурец, яки соус, угревидный кларий, болгарский перец, соус унаги, кунжут.",
                price: 279,
                dkprice: 349,
                num: 1,
                totalprice: 279,
                totaldkprice: 349,
                CheckStopList: false, 
            },
            {
                id: 78,
                name: "Бангкок",
                salecheck: true,
                soysause: 1,
                categ: "Горячие Роллы",
                sost: "Состав: Мидии, огурец, соус спайси (в составе репчатый лук).",
                price: 259,
                dkprice: 339,
                num: 1,
                totalprice: 259,
                totaldkprice: 339,
                CheckStopList: false, 
            },
            {
                id: 79,
                name: "Краб темпура",
                salecheck: true,
                soysause: 1,
                categ: "Горячие Роллы",
                sost: "Состав: Снежный краб, сыр творожный Cremette, огурец, паприка, тортилья.",
                price: 249,
                dkprice: 319,
                num: 1,
                totalprice: 249,
                totaldkprice: 319,
                CheckStopList: false, 
            },
            {
                id: 80,
                name: "Роял фиш",
                salecheck: true,
                soysause: 1,
                categ: "Горячие Роллы",
                sost: "Состав: Лосось, угревидный кларий, сыр творожный Cremette, огурец.",
                price: 299,
                dkprice: 379,
                num: 1,
                totalprice: 299,
                totaldkprice: 379,
                CheckStopList: false, 
            },
            {
                id: 81,
                name: "Самурай",
                salecheck: true,
                soysause: 1,
                categ: "Горячие Роллы",
                sost: "Состав: Лосось, снежный краб, сыр творожный Cremette, огурец.",
                price: 269,
                dkprice: 349,
                num: 1,
                totalprice: 269,
                totaldkprice: 349,
                CheckStopList: false, 
            },
            {
                id: 82,
                name: "Санрайз темпура",
                salecheck: true,
                soysause: 1,
                categ: "Горячие Роллы",
                sost: "Состав: Креветка темпура, сыр творожный Cremette, огурец, паприка, тортилья.",
                price: 299,
                dkprice: 389,
                num: 1,
                totalprice: 299,
                totaldkprice: 389,
                CheckStopList: false, 
            },
            {
                id: 83,
                name: "Тануки",
                salecheck: true,
                soysause: 1,
                categ: "Горячие Роллы",
                sost: "Состав: Креветка, сыр творожный Cremette, огурец.",
                price: 299,
                dkprice: 389,
                num: 1,
                totalprice: 299,
                totaldkprice: 389,
                CheckStopList: false, 
            },
            {
                id: 84,
                name: "Токио",
                salecheck: true,
                soysause: 1,
                categ: "Горячие Роллы",
                sost: "Состав: Лосось, сыр творожный Cremette, огурец.",
                price: 299,
                dkprice: 389,
                num: 1,
                totalprice: 299,
                totaldkprice: 389,
                CheckStopList: false, 
            },
            {
                id: 85,
                name: "Тунец темпура",
                salecheck: true,
                soysause: 1,
                categ: "Горячие Роллы",
                sost: "Состав: Тунец, снежный краб, сыр творожный Cremette, огурец.",
                price: 249,
                dkprice: 319,
                num: 1,
                totalprice: 249,
                totaldkprice: 319,
                CheckStopList: false, 
            },
            {
                id: 86,
                name: "Чикен бекон темпура",
                salecheck: true,
                soysause: 1,
                categ: "Горячие Роллы",
                sost: "Состав: Куриное филе, бекон, сыр творожный Cremette, огурец, паприка, тортилья.",
                price: 269,
                dkprice: 369,
                num: 1,
                totalprice: 269,
                totaldkprice: 369,
                CheckStopList: false, 
            },
            {
                id: 87,
                name: "Гурман",
                salecheck: true,
                soysause: 2,
                categ: "Сеты",
                sost: "Состав: (24шт.) Тай, Краб темпура, чикен яки.",
                price: 639,
                dkprice: 829,
                num: 1,
                totalprice: 639,
                totaldkprice: 829,
                CheckStopList: false, 
            },
            {
                id: 88,
                name: "Запеченный хит",
                salecheck: true,
                soysause: 2,
                categ: "Сеты",
                sost: "Состав: (21шт.) Тамаго чикен hot, Запеченная калифорния, Сырный (с лососем).",
                price: 599,
                dkprice: 779,
                num: 1,
                totalprice: 599,
                totaldkprice: 779,
                CheckStopList: false, 
            },
            {
                id: 89,
                name: "Калифомания",
                salecheck: true,
                soysause: 2,
                categ: "Сеты",
                sost: "Состав: (30шт.) Калифорния, Калифорния кунжут, Калифорния лосось, мини-ролл лосось.",
                price: 819,
                dkprice: 1109,
                num: 1,
                totalprice: 819,
                totaldkprice: 1109,
                CheckStopList: false, 
            },
            {
                id: 90,
                name: "Мини сет",
                salecheck: true,
                soysause: 2,
                categ: "Сеты",
                sost: "Состав: (22шт.) Крейзи краб, Калифорния в кунжуте, ролл тунец.",
                price: 469,
                dkprice: 599,
                num: 1,
                totalprice: 469,
                totaldkprice: 599,
                CheckStopList: false, 
            },
            {
                id: 91,
                name: "Сет Азия",
                salecheck: true,
                soysause: 2,
                categ: "Сеты",
                sost: "Состав: (24шт.) Тануки, Крейзи краб хот, Тунец хот.",
                price: 739,
                dkprice: 939,
                num: 1,
                totalprice: 739,
                totaldkprice: 939,
                CheckStopList: false, 
            },
            {
                id: 92,
                name: "Сет Горячий хит",
                salecheck: true,
                soysause: 2,
                categ: "Сеты",
                sost: "Состав: (32шт.) Токио, тунец темпура, санрайз темпура, краб темпура.",
                price: 999,
                dkprice: 1349,
                num: 1,
                totalprice: 999,
                totaldkprice: 1349,
                CheckStopList: false, 
            },
            {
                id: 93,
                name: "сет №10",
                salecheck: true,
                soysause: 2,
                categ: "Сеты",
                sost: "Состав: (32шт.) Филадельфия запеченная, Тамаго чикен hot, Калифорния запеченная в кунжуте, Роял фиш.",
                price: 999,
                dkprice: 1349,
                num: 1,
                totalprice: 999,
                totaldkprice: 1349,
                CheckStopList: false, 
            },
            {
                id: 94,
                name: "Сет №21",
                salecheck: true,
                soysause: 2,
                categ: "Сеты",
                sost: "Состав: (32шт.) Сяке hot, Лосось спайси hot, Креветка спайси hot, Калифорния.",
                price: 1179,
                dkprice: 1529,
                num: 1,
                totalprice: 1179,
                totaldkprice: 1529,
                CheckStopList: false, 
            },
            {
                id: 95,
                name: "Сет №25",
                salecheck: true,
                soysause: 2,
                categ: "Сеты",
                sost: "Состав: (32шт.) Ниппон hot, Крейзи краб hot, Запеченная калифорния в кунжуте, Тай хот.",
                price: 899,
                dkprice: 1219,
                num: 1,
                totalprice: 899,
                totaldkprice: 1219,
                CheckStopList: false, 
            },
            {
                id: 96,
                name: "Сет №4",
                salecheck: true,
                soysause: 2,
                categ: "Сеты",
                sost: "Состав: (24шт.) Филадельфия лайт, Калифорния, Радуга",
                price: 749,
                dkprice: 1009,
                num: 1,
                totalprice: 749,
                totaldkprice: 1009,
                CheckStopList: false, 
            },
            {
                id: 97,
                name: "Сет №9",
                salecheck: true,
                soysause: 2,
                categ: "Сеты",
                sost: "Состав: (24 шт.) Ролл лосось, ролл креветка, ролл угорь, ролл огурец",
                price: 499,
                dkprice: 649,
                num: 1,
                totalprice: 499,
                totaldkprice: 649,
                CheckStopList: false, 
            },
            {
                id: 98,
                name: "Уикенд",
                salecheck: true,
                soysause: 2,
                categ: "Сеты",
                sost: "Состав: (32шт.) Чикен бекон темпура, Самурай, Тамаго краб hot, Эби-Туна.",
                price: 999,
                dkprice: 1349,
                num: 1,
                totalprice: 999,
                totaldkprice: 1349,
                CheckStopList: false, 
            },
            {
                id: 99,
                name: "Филомания",
                soysause: 2,
                salecheck: true,
                categ: "Сеты",
                sost: "Состав: (30шт.) Филадельфия лайт, Филадельфия с угрем, Тунец лайт, ролл огурец.",
                price: 989,
                dkprice: 1339,
                num: 1,
                totalprice: 989,
                totaldkprice: 1339,
                CheckStopList: false, 
            },
            {
                id: 100,
                name: "Все Дома",
                soysause: 3,
                salecheck: true,
                categ: "Сеты",
                sost: "Состав: (40 шт.) Бостон, Чикен Яки, Сливочная калифорния, Крейзи краб, Тай хот.",
                price: 1039,
                dkprice: 1399,
                num: 1,
                totalprice: 1039,
                totaldkprice: 1399,
                CheckStopList: false, 
            },
            {
                id: 101,
                name: "Сет Шанхай",
                soysause: 3,
                salecheck: true,
                categ: "Сеты",
                sost: "Состав: (40шт.) Киото, Вулкан спайси, Чеддер бекон, Тунец блэк, Санрайз темпура.",
                price: 1399,
                dkprice: 1889,
                num: 1,
                totalprice: 1399,
                totaldkprice: 1889,
                CheckStopList: false, 
            },
            {
                id: 102,
                name: "Сет №22",
                salecheck: true,
                soysause: 3,
                categ: "Сеты",
                sost: "Состав: (40 шт.) Лосось спайси hot, Угорь спайси hot, Унаги hot, Эдо, Бостон.",
                price: 1459,
                dkprice: 1969,
                num: 1,
                totalprice: 1459,
                totaldkprice: 1969,
                CheckStopList: false, 
            },
            {
                id: 103,
                name: "Мега сет",
                salecheck: true,
                soysause: 4,
                categ: "Сеты",
                sost: "Состав: (62шт.) Сакура, Ролл Том ям, Сливочная Калифорния, Калифорния в кунжуте, Унаги хот, Самурай, Тануки, Ролл огурец.",
                price: 1799,
                dkprice: 2429,
                num: 1,
                totalprice: 1799,
                totaldkprice: 2429,
                CheckStopList: false, 
            },
            {
                id: 104,
                name: "Сет Все включено",
                salecheck: true,
                soysause: 4,
                categ: "Сеты",
                sost: "Состав: (46шт) Калифорния в кунжуте, самурай, крейзи спайси хот, тай хот, ролл креветка, тунец лайт.",
                price: 1299,
                dkprice: 1759,
                num: 1,
                totalprice: 1299,
                totaldkprice: 1759,
                CheckStopList: false, 
            },
            {
                id: 105,
                name: "Сет Корпоратив",
                salecheck: true,
                soysause: 4,
                categ: "Сеты",
                sost: "Состав: (64 шт.) Лава, Киото, Сенсей, Сливочная калифорния, Тай, Тунец лайт, Чикен бекон темпура, Бангкок.",
                price: 1999,
                dkprice: 2699,
                num: 1,
                totalprice: 1999,
                totaldkprice: 2699,
                CheckStopList: false, 
            },
            {
                id: 107,
                name: "Сет №11",
                salecheck: true,
                soysause: 4,
                categ: "Сеты",
                sost: "Состав: (56шт.) Филадельфия лайт, Филадельфия с угрем, Калифорния, Хатано, Ясай, Калифорния запеченная в кунжуте, Ями ролл",
                price: 1699,
                dkprice: 2299,
                num: 1,
                totalprice: 1699,
                totaldkprice: 2299,
                CheckStopList: false, 
            },
            {
                id: 108,
                name: "Сет №14",
                salecheck: true,
                soysause: 5,
                categ: "Сеты",
                sost: "Состав: (76шт.) Чикен яки, Тамаго чикен hot, Калифорния запеченная в кунжуте, Бангкок, Рио, Филадельфия лайт, Тамаго краб, Ролл огурец, Ролл тунец, Самурай.",
                price: 1999,
                dkprice: 2699,
                num: 1,
                totalprice: 1999,
                totaldkprice: 2699,
                CheckStopList: false, 
            },
            {
                id: 109,
                name: "Сет ИМЕНИННИКА",
                salecheck: false,
                soysause: 5,
                categ: "Сеты",
                sost: "Состав: (86 шт.) Калифорния, Ями ролл, ролл огурец, Сенсей, Киото, Чеддер бекон, Тамаго чикен хот, Тай хот, Том ям, Тунец темпура, Краб темпура",
                price: 2499,
                dkprice: 3379,
                num: 1,
                totalprice: 2499,
                totaldkprice: 3379,
                CheckStopList: false, 
            },
            {
                id: 110,
                name: "Больше сотни",
                soysause: 8,
                salecheck: true,
                categ: "Сеты",
                sost: "Состав: (102 шт.) Вулкан спайси, Сенсей, Сакура, Тунец хот, Ролл Том Ям, Тай хот, Санрайз темпура, Бангкок, Краб темпура, Филадельфия лайт, Сливочная Калифорния, Бостон, мини ролл огурец",
                price: 3299,
                dkprice: 4459,
                num: 1,
                totalprice: 3299,
                totaldkprice: 4459,
                CheckStopList: false, 
            },
            {
                id: 111,
                name: "Бургер мал. белый",
                salecheck: true,
                categ: "Горячие блюда",
                sost: "Состав: Котлета говяжья, пекинская капуста, сыр, соус, соленый огурец, помидор.",
                price: 219,
                dkprice: 289,
                num: 1,
                totalprice: 219,
                totaldkprice: 289,
                CheckStopList: false, 
            },
            {
                id: 112,
                name: "Даблбургер",
                salecheck: true,
                categ: "Горячие блюда",
                sost: "Состав: Котлета говяжья, пекинская капуста, сыр, соус, соленый огурец.",
                price: 279,
                dkprice: 359,
                num: 1,
                totalprice: 279,
                totaldkprice: 359,
                CheckStopList: false, 
            },
            {
                id: 113,
                name: "Дольки",
                salecheck: true,
                categ: "Горячие блюда",
                sost: "Состав: Картофель",
                price: 129,
                dkprice: 169,
                num: 1,
                totalprice: 129,
                totaldkprice: 169,
                CheckStopList: false, 
            },
            {
                id: 114,
                name: "Запеченные мидии",
                salecheck: true,
                categ: "Горячие блюда",
                sost: "Состав: Мидии, соус яки.",
                price: 269,
                dkprice: 349,
                num: 1,
                totalprice: 269,
                totaldkprice: 349,
                CheckStopList: false, 
            },
            {
                id: 115,
                name: "Запеченные мидии спайси",
                salecheck: true,
                categ: "Горячие блюда",
                sost: "Состав: Мидии, спайси соус (в составе репчатый лук).",
                price: 269,
                dkprice: 349,
                num: 1,
                totalprice: 269,
                totaldkprice: 349,
                CheckStopList: false, 
            },
            {
                id: 116,
                name: "МаксиБургер с говяж.",
                salecheck: true,
                categ: "Горячие блюда",
                sost: "Состав: Котлета говяжья, пекинская капуста, сыр, соус, соленый огурец, помидор.",
                price: 309,
                dkprice: 399,
                num: 1,
                totalprice: 309,
                totaldkprice: 399,
                CheckStopList: false, 
            },
            {
                id: 117,
                name: "МаксиБургер с говяж. острый",
                salecheck: true,
                categ: "Горячие блюда",
                sost: "Состав: Котлета говяжья, пекинская капуста, сыр, острый соус (в составе репчатый лук), соленый огурец, помидор, лук.",
                price: 309,
                dkprice: 399,
                num: 1,
                totalprice: 309,
                totaldkprice: 399,
                CheckStopList: false, 
            },
            {
                id: 118,
                name: "Наггетсы 8 шт",
                salecheck: true,
                categ: "Горячие блюда",
                price: 199,
                dkprice: 259,
                num: 1,
                totalprice: 199,
                totaldkprice: 259,
                CheckStopList: false, 
            },
            {
                id: 119,
                name: "Фри",
                salecheck: true,
                categ: "Горячие блюда",
                price: 119,
                dkprice: 149,
                num: 1,
                totalprice: 119,
                totaldkprice: 149,
                CheckStopList: false, 
            },
            {
                id: 120,
                name: "Черный бургер большой",
                salecheck: true,
                categ: "Горячие блюда",
                sost: "Состав: Котлета говяжья, пекинская капуста, сыр, соус, соленый огурец, помидор, лук.",
                price: 339,
                dkprice: 399,
                num: 1,
                totalprice: 339,
                totaldkprice: 399,
                CheckStopList: false, 
            },
            {
                id: 121,
                name: "Чикенбекон (бургер)",
                salecheck: true,
                categ: "Горячие блюда",
                sost: "Состав: Котлета куриная, бекон, пекинская капуста, соленый огурец, помидор, соус.",
                price: 309,
                dkprice: 399,
                num: 1,
                totalprice: 309,
                totaldkprice: 399,
                CheckStopList: false, 
            },
            {
                id: 122,
                name: "ЧикенБургер",
                salecheck: true,
                categ: "Горячие блюда",
                sost: "Состав: Котлета куриная, пекинская капуста, соленый огурец, помидор, соус.",
                price: 269,
                dkprice: 349,
                num: 1,
                totalprice: 269,
                totaldkprice: 349,
                CheckStopList: false, 
            },
            {
                id: 123,
                name: "ЧикенБургер острый",
                salecheck: true,
                categ: "Горячие блюда",
                sost: "Состав: Котлета куриная, пекинская капуста, соленый огурец, помидор, острый соус (в составе репчатый лук).",
                price: 269,
                dkprice: 349,
                num: 1,
                totalprice: 269,
                totaldkprice: 349,
                CheckStopList: false, 
            },
            {
                id: 124,
                name: "Эби темпура",
                salecheck: true,
                categ: "Горячие блюда",
                sost: "Состав: Креветки темпура.",
                price: 269,
                dkprice: 349,
                num: 1,
                totalprice: 269,
                totaldkprice: 349,
                CheckStopList: false, 
            },
            {
                id: 125,
                name: "Суши-бургер Лосось-Краб",
                salecheck: true,
                categ: "Горячие блюда",
                sost: "Состав: Лосось, снежный краб, майонез, пекинская капуста, огурец",
                price: 319,
                dkprice: 419,
                num: 1,
                totalprice: 319,
                totaldkprice: 419,
                CheckStopList: false, 
            },
            {
                id: 126,
                name: "Суши-бургер Окунь-Краб",
                salecheck: true,
                categ: "Горячие блюда",
                sost: "Состав: Окунь темпура, снежный краб, майонез, пекинская капуста, огурец, имбирь, соус сладкий чили, масаго",
                price: 279,
                dkprice: 369,
                num: 1,
                totalprice: 279,
                totaldkprice: 369,
                CheckStopList: false, 
            },
            {
                id: 127,
                name: "Суши-дог Лосось",
                salecheck: true,
                categ: "Горячие блюда",
                sost: "Состав: Лосось, снежный краб, сыр творожный Cremette, майонез, огурец, спайси соус, масаго",
                price: 299,
                dkprice: 389,
                num: 1,
                totalprice: 299,
                totaldkprice: 389,
                CheckStopList: false, 
            },
            {
                id: 128,
                name: "Суши-дог Окунь",
                salecheck: true,
                categ: "Горячие блюда",
                sost: "Состав: Окунь темпура, снежный краб, сыр творожный Cremette, майонез, огурец, соус сладкий чили, масаго",
                price: 269,
                dkprice: 349,
                num: 1,
                totalprice: 269,
                totaldkprice: 349,
                CheckStopList: false, 
            },
            {
                id: 129,
                name: "Суши креветка",
                salecheck: true,
                soysause: 0,
                categ: "Суши",
                sost: "Состав: Креветка, рис.",
                price: 59,
                dkprice: 59,
                num: 1,
                totalprice: 59,
                totaldkprice: 59,
                CheckStopList: false, 
            },
            {
                id: 130,
                name: "Суши лосось",
                salecheck: true,
                soysause: 0,
                categ: "Суши",
                sost: "Состав: Лосось, рис.",
                price: 89,
                dkprice: 89,
                num: 1,
                totalprice: 89,
                totaldkprice: 89,
                CheckStopList: false, 
            },
            {
                id: 131,
                name: "Суши тунец",
                salecheck: true,
                soysause: 0,
                categ: "Суши",
                sost: "Состав: Тунец, рис.",
                price: 89,
                dkprice: 89,
                num: 1,
                totalprice: 89,
                totaldkprice: 89,
                CheckStopList: false, 
            },
            {
                id: 132,
                name: "Суши угорь",
                salecheck: true,
                soysause: 0,
                categ: "Суши",
                sost: "Состав: Угорь, рис, нори.",
                price: 89,
                dkprice: 89,
                num: 1,
                totalprice: 89,
                totaldkprice: 89,
                CheckStopList: false, 
            },
            {
                id: 133,
                name: "Суши запеченная креветка",
                salecheck: true,
                soysause: 0,
                categ: "Суши",
                sost: "Состав: Рис, нори, креветка, соус сырный.",
                price: 89,
                dkprice: 89,
                num: 1,
                totalprice: 89,
                totaldkprice: 89,
                CheckStopList: false, 
            },
            {
                id: 134,
                name: "Суши запеченный лосось",
                salecheck: true,
                soysause: 0,
                categ: "Суши",
                sost: "Состав: Рис, нори, лосось, соус сырный.",
                price: 89,
                dkprice: 89,
                num: 1,
                totalprice: 89,
                totaldkprice: 89,
                CheckStopList: false, 
            },
            {
                id: 135,
                name: "Суши запеченный тунец",
                salecheck: true,
                soysause: 0,
                categ: "Суши",
                sost: "Состав: Рис, нори, тунец, соус сырный.",
                price: 89,
                dkprice: 89,
                num: 1,
                totalprice: 89,
                totaldkprice: 89,
                CheckStopList: false, 
            },
            {
                id: 136,
                name: "Суши запеченный угорь",
                salecheck: true,
                soysause: 0,
                categ: "Суши",
                sost: "Состав: Рис, нори, угорь, соус сырный.",
                price: 89,
                dkprice: 89,
                num: 1,
                totalprice: 89,
                totaldkprice: 89,
                CheckStopList: false, 
            },
            {
                id: 137,
                name: "Суши острая креветка",
                salecheck: true,
                soysause: 0,
                categ: "Суши",
                sost: "Состав: Рис, нори, креветка, соус спайси (в составе репчатый лук).",
                price: 89,
                dkprice: 89,
                num: 1,
                totalprice: 89,
                totaldkprice: 89,
                CheckStopList: false, 
            },
            {
                id: 138,
                name: "Суши острый лосось",
                salecheck: true,
                soysause: 0,
                categ: "Суши",
                sost: "Состав: Рис, нори, лосось, соус спайси (в составе репчатый лук).",
                price: 89,
                dkprice: 89,
                num: 1,
                totalprice: 89,
                totaldkprice: 89,
                CheckStopList: false, 
            },
            {
                id: 139,
                name: "Суши острый тунец",
                salecheck: true,
                soysause: 0,
                categ: "Суши",
                sost: "Состав: Рис, нори, тунец, соус спайси.",
                price: 89,
                dkprice: 89,
                num: 1,
                totalprice: 89,
                totaldkprice: 89,
                CheckStopList: false, 
            },
            {
                id: 140,
                name: "Суши острый угорь",
                salecheck: true,
                soysause: 0,
                categ: "Суши",
                sost: "Состав: Рис, нори, угорь, соус спайси (в составе репчатый лук).",
                price: 89,
                dkprice: 89,
                num: 1,
                totalprice: 89,
                totaldkprice: 89,
                CheckStopList: false, 
            },
            {
                id: 141,
                name: "Ролл креветка",
                salecheck: true,
                soysause: 1,
                categ: "Мини Роллы",
                sost: "Состав: Рис, нори, креветка.",
                price: 139,
                dkprice: 179,
                num: 1,
                totalprice: 139,
                totaldkprice: 179,
                CheckStopList: false, 
            },
            {
                id: 142,
                name: "Ролл лосось",
                salecheck: true,
                soysause: 1,
                categ: "Мини Роллы",
                sost: "Состав: Рис, нори, лосось.",
                price: 159,
                dkprice: 209,
                num: 1,
                totalprice: 159,
                totaldkprice: 209,
                CheckStopList: false, 
            },
            {
                id: 143,
                name: "Ролл огурец",
                salecheck: true,
                soysause: 1,
                categ: "Мини Роллы",
                sost: "Состав: Рис, нори, огурец, кунжут.",
                price: 99,
                dkprice: 129,
                num: 1,
                totalprice: 99,
                totaldkprice: 129,
                CheckStopList: false, 
            },
            {
                id: 144,
                name: "Ролл тунец",
                salecheck: true,
                soysause: 1,
                categ: "Мини Роллы",
                sost: "Состав: Рис, тунец, нори.",
                price: 139,
                dkprice: 179,
                num: 1,
                totalprice: 139,
                totaldkprice: 179,
                CheckStopList: false, 
            },
            {
                id: 145,
                name: "Ролл угорь",
                salecheck: true,
                soysause: 1,
                categ: "Мини Роллы",
                sost: "Состав: Рис, нори, угорь, кунжут.",
                price: 159,
                dkprice: 209,
                num: 1,
                totalprice: 159,
                totaldkprice: 209,
                CheckStopList: false, 
            },
            {
                id: 146,
                name: "Ролл Чука",
                salecheck: true,
                soysause: 1,
                categ: "Мини Роллы",
                sost: "Состав: Рис, нори, чука.",
                price: 99,
                dkprice: 129,
                num: 1,
                totalprice: 99,
                totaldkprice: 129,
                CheckStopList: false, 
            },
            {
                id: 147,
                name: "Греческий",
                salecheck: true,
                categ: "Салаты",
                sost: "Состав: Пекинская капуста, перец болгарский, помидор, огурец, сыр фета, маслины, перец черный, соль, оливковое масло.",
                price: 259,
                dkprice: 259,
                num: 1,
                totalprice: 259,
                totaldkprice: 259,
                CheckStopList: false, 
            },
            {
                id: 148,
                name: "Салат с креветкой",
                salecheck: true,
                categ: "Салаты",
                sost: "Состав: Пекинская капуста, креветка, соус цезарь, помидор, сухари, пармезан.",
                price: 329,
                dkprice: 329,
                num: 1,
                totalprice: 329,
                totaldkprice: 329,
                CheckStopList: false, 
            },
            {
                id: 149,
                name: "Салат с курицей",
                salecheck: true,
                categ: "Салаты",
                sost: "Состав: Пекинская капуста, курица, соус цезарь, помидор, сухари, пармезан.",
                price: 239,
                dkprice: 239,
                num: 1,
                totalprice: 239,
                totaldkprice: 239,
                CheckStopList: false, 
            },
            {
                id: 150,
                name: "Салат с лососем",
                salecheck: true,
                categ: "Салаты",
                sost: "Состав: Пекинская капуста, лосось, соус цезарь, помидор, сухари, пармезан.",
                price: 449,
                dkprice: 449,
                num: 1,
                totalprice: 449,
                totaldkprice: 449,
                CheckStopList: false, 
            },
            {
                id: 151,
                name: "Чука",
                salecheck: true,
                categ: "Салаты",
                sost: "Состав: Чука, соус ореховый, кунжут.",
                price: 199,
                dkprice: 199,
                num: 1,
                totalprice: 199,
                totaldkprice: 199,
                CheckStopList: false, 
            },
            {
                id: 152,
                name: "Васаби",
                salecheck: true,
                categ: "Допы",
                price: 30,
                dkprice: 30,
                num: 1,
                totalprice: 30,
                totaldkprice: 30,
                CheckStopList: false, 
            },
            {
                id: 153,
                name: "Имбирь",
                salecheck: true,
                categ: "Допы",
                price: 30,
                dkprice: 30,
                num: 1,
                totalprice: 30,
                totaldkprice: 30,
                CheckStopList: false, 
            },
            {
                id: 154,
                name: "Соевый соус",
                salecheck: false,
                soysause: 1,
                categ: "Допы",
                price: 20,
                dkprice: 20,
                num: 1,
                totalprice: 20,
                totaldkprice: 20,
                CheckStopList: false, 
            },
            {
                id: 155,
                name: "Соус кисло-сладкий",
                salecheck: true,
                categ: "Допы",
                price: 40,
                dkprice: 40,
                num: 1,
                totalprice: 40,
                totaldkprice: 40,
                CheckStopList: false, 
            },
            {
                id: 156,
                name: "Соус ореховый",
                salecheck: true,
                categ: "Допы",
                price: 50,
                dkprice: 50,
                num: 1,
                totalprice: 50,
                totaldkprice: 50,
                CheckStopList: false, 
            },
            {
                id: 157,
                name: "Соус спайси",
                salecheck: true,
                categ: "Допы",
                price: 30,
                dkprice: 30,
                num: 1,
                totalprice: 30,
                totaldkprice: 30,
                CheckStopList: false, 
            },
            {
                id: 158,
                name: "Соус сырный",
                salecheck: true,
                categ: "Допы",
                price: 50,
                dkprice: 50,
                num: 1,
                totalprice: 50,
                totaldkprice: 50,
                CheckStopList: false, 
            },
            {
                id: 159,
                name: "Комбо специй",
                salecheck: false,
                soysause: 1,
                categ: "Допы",
                sost: "Состав: Имбирь, васаби, соевый соус",
                price: 70,
                dkprice: 70,
                num: 1,
                totalprice: 70,
                totaldkprice: 70,
                CheckStopList: false, 
            },
            {
                id: 160,
                name: "Мисо",
                salecheck: true,
                categ: "Супы",
                sost: "Состав: Тофу, Намеко, Вакаме.",
                price: 199,
                dkprice: 199,
                num: 1,
                totalprice: 199,
                totaldkprice: 199,
                CheckStopList: false, 
            },
            {
                id: 161,
                name: "Суп сливочный с лососем",
                salecheck: true,
                categ: "Супы",
                sost: "Состав: Сливочный соус, Лосось, Фунчеза, Вакаме, Намеко.",
                price: 379,
                dkprice: 379,
                num: 1,
                totalprice: 379,
                totaldkprice: 379,
                CheckStopList: false, 
            },
            {
                id: 162,
                name: "Суп Тайский",
                salecheck: true,
                categ: "Супы",
                sost: "Состав: Креветка, куриное филе, черри, паста Том-ям, кокосовое молоко, грибы шампиньоны.",
                price: 299,
                dkprice: 299,
                num: 1,
                totalprice: 299,
                totaldkprice: 299,
                CheckStopList: false, 
            },
            {
                id: 163,
                name: "Суп Том ям Га",
                salecheck: true,
                categ: "Супы",
                sost: "Состав: Куриное филе, черри, грибы шампиньоны,  рыбный бульон, коксовое молоко, паста Том-ям",
                price: 269,
                dkprice: 269,
                num: 1,
                totalprice: 269,
                totaldkprice: 269,
                CheckStopList: false, 
            },
            {
                id: 164,
                name: "Суп Том ям с морепродуктами",
                salecheck: true,
                categ: "Супы",
                sost: "Состав: Креветки, мидии Киви, куриное филе, черри, грибы шампиньоны,  рыбный бульон, коксовое молоко, паста Том-ям",
                price: 299,
                dkprice: 299,
                num: 1,
                totalprice: 299,
                totaldkprice: 299,
                CheckStopList: false, 
            },
            {
                id: 165,
                name: "Рис",
                salecheck: true,
                categ: "Супы",
                sost: "Состав: Рис, кунжут",
                price: 50,
                dkprice: 50,
                num: 1,
                totalprice: 50,
                totaldkprice: 50,
                CheckStopList: false, 
            },
            {
                id: 166,
                name: "Поке Веган",
                salecheck: true,
                categ: "Поке",
                sost: "Состав: Рис, черри, терияки, тофу, фасоль перец болгарский, огурец, кукуруза, шампиньоны, лук зеленый.",
                price: 239,
                dkprice: 319,
                num: 1,
                totalprice: 239,
                totaldkprice: 319,
                CheckStopList: false, 
            },
            {
                id: 167,
                name: "Поке с креветкой",
                salecheck: true,
                categ: "Поке",
                sost: "Состав: Рис, креветка, соус сладкий чили, черри, фасоль, огурец, кукуруза, имбирь, сыр творожный Cremette, кунжут.",
                price: 349,
                dkprice: 459,
                num: 1,
                totalprice: 349,
                totaldkprice: 459,
                CheckStopList: false, 
            },
            {
                id: 168,
                name: "Поке с курицей",
                salecheck: true,
                categ: "Поке",
                sost: "Состав: Рис, куриное филе, соус терияки, черри, ананас, фасоль, огурец, кукуруза, кунжут.",
                price: 269,
                dkprice: 349,
                num: 1,
                totalprice: 269,
                totaldkprice: 349,
                CheckStopList: false, 
            },
            {
                id: 169,
                name: "Поке с лососем",
                salecheck: true,
                categ: "Поке",
                sost: "Состав: Рис, лосось, соус сладкий чили, черри, фасоль, огурец, кукуруза, имбирь, сыр творожный Cremette, кунжут.",
                price: 419,
                dkprice: 549,
                num: 1,
                totalprice: 419,
                totaldkprice: 549,
                CheckStopList: false, 
            },
            {
                id: 170,
                name: "Поке с тунцом",
                salecheck: true,
                categ: "Поке",
                sost: "Состав: Рис, тунец, соус терияки, черри, ананас, фасоль, огурец, кукуруза, кунжут.",
                price: 359,
                dkprice: 469,
                num: 1,
                totalprice: 359,
                totaldkprice: 469,
                CheckStopList: false, 
            },
            {
                id: 171,
                name: "Поке со свининой",
                salecheck: true,
                categ: "Поке",
                sost: "Состав: Рис, свинина, черри, фасоль, соус терияки, перец болгарский, огурец, морковь, кукуруза, лук зеленый, кунжут.",
                price: 269,
                dkprice: 349,
                num: 1,
                totalprice: 269,
                totaldkprice: 349,
                CheckStopList: false, 
            },
            {
                id: 172,
                name: "Evervess COLA без сахара 0,5л",
                salecheck: false,
                categ: "Напитки",
                price: 110,
                dkprice: 110,
                num: 1,
                totalprice: 110,
                totaldkprice: 110,
                CheckStopList: false, 
            },
            {
                id: 173,
                name: "Evervess COLA без сахара 1л",
                salecheck: false,
                categ: "Напитки",
                price: 135,
                dkprice: 135,
                num: 1,
                totalprice: 135,
                totaldkprice: 135,
                CheckStopList: false, 
            },
            {
                id: 174,
                name: "Липтон зеленый чай 0,5л",
                salecheck: false,
                categ: "Напитки",
                price: 95,
                dkprice: 95,
                num: 1,
                totalprice: 95,
                totaldkprice: 95,
                CheckStopList: false, 
            },
            {
                id: 175,
                name: "Липтон зеленый чай 1л",
                salecheck: false,
                categ: "Напитки",
                price: 140,
                dkprice: 140,
                num: 1,
                totalprice: 140,
                totaldkprice: 140,
                CheckStopList: false, 
            },
            {
                id: 176,
                name: "Липтон лимон 0,5л",
                salecheck: false,
                categ: "Напитки",
                price: 90,
                dkprice: 90,
                num: 1,
                totalprice: 90,
                totaldkprice: 90,
                CheckStopList: false, 
            },
            {
                id: 177,
                name: "Липтон лимон 1л",
                salecheck: false,
                categ: "Напитки",
                price: 140,
                dkprice: 140,
                num: 1,
                totalprice: 140,
                totaldkprice: 140,
                CheckStopList: false, 
            },
            {
                id: 178,
                name: "Морс Клюквенный 0,5 л",
                salecheck: true,
                categ: "Напитки",
                sost: "Состав: Клюква, сахар, вода.",
                price: 99,
                dkprice: 129,
                num: 1,
                totalprice: 99,
                totaldkprice: 129,
                CheckStopList: false, 
            },
            {
                id: 179,
                name: "Морс Клюквенный 1 л",
                salecheck: true,
                categ: "Напитки",
                sost: "Состав: Клюква, сахар, вода.",
                price: 159,
                dkprice: 209,
                num: 1,
                totalprice: 159,
                totaldkprice: 209,
                CheckStopList: false, 
            },
            {
                id: 180,
                name: "Морс Смородина 0,5 л",
                salecheck: true,
                categ: "Напитки",
                sost: "Состав: Смородина, сахар, вода.",
                price: 99,
                dkprice: 129,
                num: 1,
                totalprice: 99,
                totaldkprice: 129,
                CheckStopList: false, 
            },
            {
                id: 181,
                name: "Морс Смородина 1 л",
                salecheck: true,
                categ: "Напитки",
                sost: "Состав: Смородина, сахар, вода.",
                price: 159,
                dkprice: 209,
                num: 1,
                totalprice: 159,
                totaldkprice: 209,
                CheckStopList: false, 
            },
            {
                id: 182,
                name: "Сок Любимый 0,2",
                salecheck: false,
                categ: "Напитки",
                sost: "Состав: Сок мультифрукт",
                price: 60,
                dkprice: 60,
                num: 1,
                totalprice: 60,
                totaldkprice: 60,
                CheckStopList: false, 
            },
            {
                id: 183,
                name: "Сок Любимый 0,97л",
                salecheck: false,
                categ: "Напитки",
                sost: "Состав: Сок мультифрукт",
                price: 170,
                dkprice: 170,
                num: 1,
                totalprice: 170,
                totaldkprice: 170,
                CheckStopList: false, 
            },
            {
                id: 184,
                name: "Моти Вишня",
                salecheck: true,
                categ: "Десерты",
                sost: "Состав: Тесто из рисовой муки (без глютена), творожный сливочный сыр, сахар, сливки, начинка из вишни.",
                price: 129,
                dkprice: 169,
                num: 1,
                totalprice: 129,
                totaldkprice: 169,
                CheckStopList: false, 
            },
            {
                id: 185,
                name: "Моти Карамель",
                salecheck: true,
                categ: "Десерты",
                sost: "Состав: Тесто из рисовой муки (без глютена), творожный сливочный сыр, сахар, сливки, начинка из карамели.",
                price: 129,
                dkprice: 169,
                num: 1,
                totalprice: 129,
                totaldkprice: 169,
                CheckStopList: false, 
            },
            {
                id: 186,
                name: "Моти Клубника",
                salecheck: true,
                categ: "Десерты",
                sost: "Состав: Тесто из рисовой муки (без глютена), творожный сливочный сыр, сахар, сливки, начинка из клубники.",
                price: 129,
                dkprice: 169,
                num: 1,
                totalprice: 129,
                totaldkprice: 169,
                CheckStopList: false, 
            },
            {
                id: 187,
                name: "Моти Манго",
                salecheck: true,
                categ: "Десерты",
                sost: "Состав: Тесто из рисовой муки (без глютена), творожный сливочный сыр, сахар, сливки, начинка из манго.",
                price: 129,
                dkprice: 169,
                num: 1,
                totalprice: 129,
                totaldkprice: 169,
                CheckStopList: false, 
            },
            {
                id: 188,
                name: "Моти Черника",
                salecheck: true,
                categ: "Десерты",
                sost: "Состав: Тесто из рисовой муки (без глютена), творожный сливочный сыр, сахар, сливки, начинка из черники.",
                price: 129,
                dkprice: 169,
                num: 1,
                totalprice: 129,
                totaldkprice: 169,
                CheckStopList: false, 
            },
            {
                id: 189,
                name: "Острый",
                salecheck: true,
                categ: "Соус В ВОК",
                price: 0,
                dkprice: 0,
                num: 1,
                totalprice: 0,
                totaldkprice: 0,
                ThisAddition: true,
                CheckStopList: false, 
            },
            {
                id: 190,
                name: "Сладкий чили",
                salecheck: true,
                categ: "Соус В ВОК",
                price: 0,
                dkprice: 0,
                num: 1,
                totalprice: 0,
                totaldkprice: 0,
                ThisAddition: true,
                CheckStopList: false, 
            },
            {
                id: 191,
                name: "Сливочный",
                salecheck: true,
                categ: "Соус В ВОК",
                price: 0,
                dkprice: 0,
                num: 1,
                totalprice: 0,
                totaldkprice: 0,
                ThisAddition: true,
                CheckStopList: false, 
            },
            {
                id: 192,
                name: "Терияки",
                salecheck: true,
                categ: "Соус В ВОК",
                price: 0,
                dkprice: 0,
                num: 1,
                totalprice: 0,
                totaldkprice: 0,
                ThisAddition: true,
                CheckStopList: false, 
            },
            {
                id: 193,
                name: "Том ям",
                salecheck: true,
                categ: "Соус В ВОК",
                price: 0,
                dkprice: 0,
                num: 1,
                totalprice: 0,
                totaldkprice: 0,
                ThisAddition: true,
                CheckStopList: false, 
            },
            {
                id: 194,
                name: "Устричный",
                salecheck: true,
                categ: "Соус В ВОК",
                price: 0,
                dkprice: 0,
                num: 1,
                totalprice: 0,
                totaldkprice: 0,
                ThisAddition: true,
                CheckStopList: false, 
            },
            {
                id: 195,
                name: "Грибы",
                salecheck: true,
                categ: "Доп В ВОК",
                price: 50,
                dkprice: 50,
                num: 1,
                totalprice: 50,
                totaldkprice: 50,
                ThisAddition: true,
                CheckStopList: false, 
            },
            {
                id: 196,
                name: "Кукуруза",
                salecheck: true,
                categ: "Доп В ВОК",
                price: 50,
                dkprice: 50,
                num: 1,
                totalprice: 50,
                totaldkprice: 50,
                ThisAddition: true,
                CheckStopList: false, 
            },
            {
                id: 197,
                name: "Пармезан",
                salecheck: true,
                categ: "Доп В ВОК",
                price: 50,
                dkprice: 50,
                num: 1,
                totalprice: 50,
                totaldkprice: 50,
                ThisAddition: true,
                CheckStopList: false, 
            },
            {
                id: 198,
                name: "Фасоль",
                salecheck: true,
                categ: "Доп В ВОК",
                price: 50,
                dkprice: 50,
                num: 1,
                totalprice: 50,
                totaldkprice: 50,
                ThisAddition: true,
                CheckStopList: false, 
            },
            {
                id: 199,
                name: "Гречневая",
                salecheck: true,
                categ: "ВОК",
                price: 159,
                dkprice: 189,
                num: 1,
                totalprice: 159,
                totaldkprice: 189,
                haveAddition: true,
                CheckStopList: false, 
            },
            {
                id: 200,
                name: "Удон",
                salecheck: true,
                categ: "ВОК",
                price: 159,
                dkprice: 189,
                num: 1,
                totalprice: 159,
                totaldkprice: 189,
                haveAddition: true,
                CheckStopList: false, 
            },
            {
                id: 201,
                name: "Фунчеза",
                salecheck: true,
                categ: "ВОК",
                price: 159,
                dkprice: 189,
                num: 1,
                totalprice: 159,
                totaldkprice: 189,
                haveAddition: true,
                CheckStopList: false, 
            },
            {
                id: 202,
                name: "Яичная",
                salecheck: true,
                categ: "ВОК",
                price: 159,
                dkprice: 189,
                num: 1,
                totalprice: 159,
                totaldkprice: 189,
                haveAddition: true,
                CheckStopList: false, 
            },
            {
                id: 203,
                name: "Говядина",
                salecheck: true,
                categ: "Мясо В ВОК",
                price: 180,
                dkprice: 180,
                num: 1,
                totalprice: 180,
                totaldkprice: 180,
                ThisAddition: true,
                CheckStopList: false, 
            },
            {
                id: 204,
                name: "Креветка",
                salecheck: true,
                categ: "Мясо В ВОК",
                price: 190,
                dkprice: 190,
                num: 1,
                totalprice: 190,
                totaldkprice: 190,
                ThisAddition: true,
                CheckStopList: false, 
            },
            {
                id: 205,
                name: "Курица",
                salecheck: true,
                categ: "Мясо В ВОК",
                price: 100,
                dkprice: 100,
                num: 1,
                totalprice: 100,
                totaldkprice: 100,
                ThisAddition: true,
                CheckStopList: false, 
            },
            {
                id: 206,
                name: "Лосось",
                salecheck: true,
                categ: "Мясо В ВОК",
                price: 220,
                dkprice: 220,
                num: 1,
                totalprice: 220,
                totaldkprice: 220,
                ThisAddition: true,
                CheckStopList: false, 
            },
            {
                id: 207,
                name: "Свинина",
                salecheck: true,
                categ: "Мясо В ВОК",
                price: 120,
                dkprice: 120,
                num: 1,
                totalprice: 120,
                totaldkprice: 120,
                ThisAddition: true,
                CheckStopList: false, 
            },
            {
                id: 208,
                name: "Гречневая с говядиной в соусе сладкий чили",
                salecheck: true,
                categ: "ВОК",
                sost: "Состав: Говядина, капуста, морковь, болгарский перец, соус сладкий чили.",
                price: 349,
                dkprice: 449,
                num: 1,
                totalprice: 349,
                totaldkprice: 449,
                CanBeAddition: false,
                CheckStopList: false, 
            },
            {
                id: 209,
                name: "Удон с креветкой в соусе терияки",
                salecheck: true,
                categ: "ВОК",
                sost: "Состав: Креветки, капуста, морковь, болгарский перец, соус терияки.",
                price: 359,
                dkprice: 469,
                num: 1,
                totalprice: 359,
                totaldkprice: 469,
                CanBeAddition: false,
                CheckStopList: false, 
            },
            {
                id: 210,
                name: "Удон с курицей в соусе сладкий чили",
                salecheck: true,
                categ: "ВОК",
                sost: "Состав: Куриное филе, капуста, морковь, болгарский перец, соус сладкий чили.",
                price: 259,
                dkprice: 339,
                num: 1,
                totalprice: 259,
                totaldkprice: 339,
                CanBeAddition: false,
                CheckStopList: false, 
            },
            {
                id: 211,
                name: "Фунчеза со свининой в соусе терияки",
                salecheck: true,
                categ: "ВОК",
                sost: "Состав: Свинина, капуста, морковь, болгарский перец, соус терияки.",
                price: 279,
                dkprice: 359,
                num: 1,
                totalprice: 279,
                totaldkprice: 359,
                CanBeAddition: false,
                CheckStopList: false, 
            },
            {
                id: 212,
                name: "Яичная с курицей в сливочном соусе",
                salecheck: true,
                categ: "ВОК",
                sost: "Состав: Куриное филе, капуста, морковь, болгарский перец, соус сливочный.",
                price: 259,
                dkprice: 339,
                num: 1,
                totalprice: 259,
                totaldkprice: 339,
                CanBeAddition: false,
                CheckStopList: false, 
            },
            {
                id: 213,
                name: "Рис с овощами",
                salecheck: true,
                categ: "ВОК",
                sost: "Состав: Капуста, морковь, болгарский перец, соус терияки.",
                price: 159,
                dkprice: 209,
                num: 1,
                totalprice: 159,
                totaldkprice: 209,
                haveAddition: true,
                CanBeAddition: false,
                CheckStopList: false, 
            },
            {
                id: 214,
                name: "Комбо Пиццы 4 вкуса №1",
                salecheck: true,
                categ: "Пицца",
                sost: "Состав: Маргарита+Пепперони 30см, Ассорти+Сушибокс 30см.",
                price: 859,
                dkprice: 1119,
                num: 1,
                totalprice: 859,
                totaldkprice: 1119,
                CheckStopList: false, 
                price36: 1139,
                dkprice36: 1479,
                totalprice36: 1139,
                totaldkprice36: 1479,
                Proverka36: false
            },
            {
                id: 215,
                name: "Комбо Пиццы 4 вкуса №2",
                salecheck: true,
                categ: "Пицца",
                sost: "Состав: Капуя+Кантри 30см, Пикантная+Охотничья 30см.",
                price: 759,
                dkprice: 989,
                num: 1,
                totalprice: 759,
                totaldkprice: 989,
                CheckStopList: false, 
                price36: 1059,
                dkprice36: 1379,
                totalprice36: 1059,
                totaldkprice36: 1379,
                Proverka36: false
            },
            {
                id: 216,
                name: "Комбо Пиццы 4 вкуса №3",
                salecheck: true,
                categ: "Пицца",
                sost: "Состав: Капуя+Кантри 30см, Домашняя+Мексиканская 30см.",
                price: 759,
                dkprice: 989,
                num: 1,
                totalprice: 759,
                totaldkprice: 989,
                CheckStopList: false, 
                price36: 1069,
                dkprice36: 1389,
                totalprice36: 1069,
                totaldkprice36: 1389,
                Proverka36: false
            },
            {
                id: 217,
                name: "Ассорти Сушибокс",
                salecheck: true,
                categ: "Пицца",
                sost: "Состав: 1/2 Ассорти: соус, сыр Моцарелла, курица, бекон, помидор; 1/2 Сушибокс: соус, сыр Моцарелла, говядина, ветчина, курица, помидор.",
                price: 439,
                dkprice: 579,
                num: 1,
                totalprice: 439,
                totaldkprice: 579,
                CheckStopList: false, 
                price36: 599,
                dkprice36: 779,
                totalprice36: 599,
                totaldkprice36: 779,
                Proverka36: false
            },
            {
                id: 218,
                name: "Домашняя Мексиканская",
                salecheck: true,
                categ: "Пицца",
                sost: "Состав: 1/2 Домашняя: соус, сыр Моцарелла, курица, ветчина, кукуруза; 1/2 Мексиканская: соус, сыр Моцарелла, говядина, охотничьи колбаски, болгарский перец, халапенью.",
                price: 399,
                dkprice: 519,
                num: 1,
                totalprice: 399,
                totaldkprice: 519,
                CheckStopList: false, 
                price36: 609,
                dkprice36: 799,
                totalprice36: 609,
                totaldkprice36: 799,
                Proverka36: false
            },
            {
                id: 219,
                name: "Капуя Кантри",
                salecheck: true,
                categ: "Пицца",
                sost: "Состав: 1/2 Капуя: сыр Моцарелла, курица, помидор, соленый огурец, соус; 1/2 Кантри: соус, сыр Моцарелла, курица, грибы, кукуруза.",
                price: 399,
                dkprice: 519,
                num: 1,
                totalprice: 399,
                totaldkprice: 519,
                CheckStopList: false, 
                price36: 549,
                dkprice36: 719,
                totalprice36: 549,
                totaldkprice36: 719,
                Proverka36: false
            },
            {
                id: 220,
                name: "Маргарита Пепперони",
                salecheck: true,
                categ: "Пицца",
                sost: "Состав: 1/2 Маргарита: Соус, сыр Моцарелла, помидоры; 1/2 Пепперони: соус, сыр Моцарелла, колбаса пепперони.",
                price: 369,
                dkprice: 479,
                num: 1,
                totalprice: 369,
                totaldkprice: 479,
                CheckStopList: false, 
                price36: 499,
                dkprice36: 649,
                totalprice36: 499,
                totaldkprice36: 649,
                Proverka36: false
            },
            {
                id: 221,
                name: "Охотничья Пикантная",
                salecheck: true,
                categ: "Пицца",
                sost: "Состав: 1/2 Охотничья: соус, сыр Моцарелла, охотничьи колбаски, помидоры, маслины; 1/2 Пикантная: соус, сыр Моцарелла, охотничьи колбаски, ветчина, пепперони, маслины, укроп.",
                price: 399,
                dkprice: 519,
                num: 1,
                totalprice: 399,
                totaldkprice: 519,
                CheckStopList: false, 
                price36: 549,
                dkprice36: 649,
                totalprice36: 549,
                totaldkprice36: 649,
                Proverka36: false
            },
            {
                id: 222,
                name: "КОМБО ДЛЯ СЕБЯ",
                salecheck: false,
                soysause: 1,
                categ: "Комбо",
                sost: "Состав: Пицца Охотничья 30см, Крейзи краб.",
                price: 559,
                dkprice: 729,
                num: 1,
                totalprice: 559,
                totaldkprice: 729,
                CheckStopList: false, 
            },
            {
                id: 223,
                name: "КОМБО СЕМЕЙНЫЙ",
                salecheck: false,
                soysause: 2,
                categ: "Комбо",
                sost: "Состав: Пицца Домашняя 30см, Пепперони 30см, Ролл Камчатка, Крейзи краб.",
                price: 1169,
                dkprice: 1519,
                num: 1,
                totalprice: 1169,
                totaldkprice: 1519,
                CheckStopList: false, 
            },
            {
                id: 224,
                name: "КОМБО ТЕТ-А-ТЕТ",
                salecheck: false,
                soysause: 2,
                categ: "Комбо",
                sost: "Состав: Пицца Ассорти 30см, Ролл Чикен Яки, Ролл Ниппон hot.",
                price: 799,
                dkprice: 1039,
                num: 1,
                totalprice: 799,
                totaldkprice: 1039,
                CheckStopList: false, 
            },
            {
                id: 225,
                name: "Комбо Флорида",
                salecheck: false,
                soysause: 2,
                categ: "Комбо",
                sost: "Состав: Пицца Четыре сыра 30см, Крейзи краб, Калифорния лосось.",
                price: 739,
                dkprice: 969,
                num: 1,
                totalprice: 739,
                totaldkprice: 969,
                CheckStopList: false, 
            },
            {
                id: 226,
                name: 'Комбо стрит-фуд "Потрясное"',
                salecheck: false,
                soysause: 1,
                categ: "Комбо",
                sost: "Состав: Суши-дог Окунь, картофель фри, соус сырный, морс 0,5л смородина",
                price: 489,
                dkprice: 659,
                num: 1,
                totalprice: 489,
                totaldkprice: 659,
                CheckStopList: false, 
            },
            {
                id: 227,
                name: 'Комбо стрит-фуд "Кайфовое"',
                salecheck: false,
                soysause: 1,
                categ: "Комбо",
                sost: "Состав: Суши-дог Лосось, салат с курицей, морс 0,5л смородина",
                price: 589,
                dkprice: 799,
                num: 1,
                totalprice: 589,
                totaldkprice: 799,
                CheckStopList: false, 
            },
            {
                id: 228,
                name: 'Комбо стрит-фуд "Офигенное"',
                salecheck: false,
                soysause: 1,
                categ: "Комбо",
                sost: "Состав: Суши-бургер Лосось-Краб, Суши-дог Окунь, морс 1л клюква",
                price: 689,
                dkprice: 929,
                num: 1,
                totalprice: 689,
                totaldkprice: 929,
                CheckStopList: false, 
            },
            {
                id: 229,
                name: "Крейзи обед",
                salecheck: false,
                soysause: 2,
                categ: "Бизнес обеды (с 11 до 15)",
                sost: "Состав: Крейзи краб, суши острый тунец, суши острая креветка, морс 0,5л (смородина).",
                price: 349,
                dkprice: 349,
                num: 1,
                totalprice: 349,
                totaldkprice: 349,
                CheckStopList: false, 
            },
            {
                id: 230,
                name: "Обед выгодный",
                salecheck: false,
                soysause: 1,
                categ: "Бизнес обеды (с 11 до 15)",
                sost: "Состав: Ролл лосось, Калифорния кунжут.",
                price: 349,
                dkprice: 349,
                num: 1,
                totalprice: 349,
                totaldkprice: 349,
                CheckStopList: false, 
            },
            {
                id: 231,
                name: "Обед с морепродуктами",
                salecheck: false,
                soysause: 1,
                categ: "Бизнес обеды (с 11 до 15)",
                sost: "Состав: Суп Тайский, ролл креветка.",
                price: 399,
                dkprice: 399,
                num: 1,
                totalprice: 399,
                totaldkprice: 399,
                CheckStopList: false, 
            },
            {
                id: 232,
                name: "Обед Супер",
                salecheck: false,
                soysause: 1,
                categ: "Бизнес обеды (с 11 до 15)",
                sost: "Состав: Тамаго краб хот, Морс 0,5л (смородина).",
                price: 279,
                dkprice: 279,
                num: 1,
                totalprice: 279,
                totaldkprice: 279,
                CheckStopList: false, 
            },
            {
                id: 233,
                name: "Обед сытный",
                salecheck: false,
                soysause: 0,
                categ: "Бизнес обеды (с 11 до 15)",
                sost: "Состав: ВОК с яичной лапшой, курицей в сливочном соусе, салат с курицей, морс 0,5л(смородина).",
                price: 449,
                dkprice: 449,
                num: 1,
                totalprice: 449,
                totaldkprice: 449,
                CheckStopList: false, 
            },
            {
                id: 234,
                name: "Обед японский",
                salecheck: false,
                soysause: 2,
                categ: "Бизнес обеды (с 11 до 15)",
                sost: "Состав: Ролл Том-Ям, суши тунец, суши угорь.",
                price: 369,
                dkprice: 369,
                num: 1,
                totalprice: 369,
                totaldkprice: 369,
                CheckStopList: false, 
            },
            {
                id: 235,
                name: "Ананас 50г",
                salecheck: true,
                categ: "Добавка К Пицце",
                price: 50,
                dkprice: 50,
                num: 1,
                totalprice: 50,
                totaldkprice: 50,
                ThisAddition: true,
                CheckStopList: false, 
            },
            {
                id: 236,
                name: "Ветчина 70г",
                salecheck: true,
                categ: "Добавка К Пицце",
                price: 50,
                dkprice: 50,
                num: 1,
                totalprice: 50,
                totaldkprice: 50,
                ThisAddition: true,
                CheckStopList: false, 
            },
            {
                id: 237,
                name: "Говядина 70г",
                salecheck: true,
                categ: "Добавка К Пицце",
                price: 150,
                dkprice: 150,
                num: 1,
                totalprice: 150,
                totaldkprice: 150,
                ThisAddition: true,
                CheckStopList: false, 
            },
            {
                id: 238,
                name: "Курица 70г",
                salecheck: true,
                categ: "Добавка К Пицце",
                price: 90,
                dkprice: 90,
                num: 1,
                totalprice: 90,
                totaldkprice: 90,
                ThisAddition: true,
                CheckStopList: false, 
            },
            {
                id: 239,
                name: "Лосось 70г",
                salecheck: true,
                categ: "Добавка К Пицце",
                price: 160,
                dkprice: 160,
                num: 1,
                totalprice: 160,
                totaldkprice: 160,
                ThisAddition: true,
                CheckStopList: false, 
            },
            {
                id: 240,
                name: "Маслины 50г",
                salecheck: true,
                categ: "Добавка К Пицце",
                price: 75,
                dkprice: 75,
                num: 1,
                totalprice: 75,
                totaldkprice: 75,
                ThisAddition: true,
                CheckStopList: false, 
            },
            {
                id: 241,
                name: "Моцарелла 70г",
                salecheck: true,
                categ: "Добавка К Пицце",
                price: 90,
                dkprice: 90,
                num: 1,
                totalprice: 90,
                totaldkprice: 90,
                ThisAddition: true,
                CheckStopList: false, 
            },
            {
                id: 242,
                name: "Охотничьи колб. 70г",
                salecheck: true,
                categ: "Добавка К Пицце",
                price: 60,
                dkprice: 60,
                num: 1,
                totalprice: 60,
                totaldkprice: 60,
                ThisAddition: true,
                CheckStopList: false, 
            },
            {
                id: 243,
                name: "Пепперони 60г",
                salecheck: true,
                categ: "Добавка К Пицце",
                price: 80,
                dkprice: 80,
                num: 1,
                totalprice: 80,
                totaldkprice: 80,
                ThisAddition: true,
                CheckStopList: false, 
            },
            {
                id: 244,
                name: "Халапеньо 40г",
                salecheck: true,
                categ: "Добавка К Пицце",
                price: 50,
                dkprice: 50,
                num: 1,
                totalprice: 50,
                totaldkprice: 50,
                ThisAddition: true,
                CheckStopList: false, 
            },
            {
                id: 245,
                name: "Шампиньоны 50г",
                salecheck: true,
                categ: "Добавка К Пицце",
                price: 50,
                dkprice: 50,
                num: 1,
                totalprice: 50,
                totaldkprice: 50,
                ThisAddition: true,
                CheckStopList: false, 
            }
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
                    city: "Новошахтинск",
                    street: "Ленина",
                    streetType: "пр. ",
                    house: "7",
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
                {
                    idCity: 8,
                    city: "Ставрополь",
                    street: "Тухачевского",
                    streetType: "ул. ",
                    house: "16/1",
                    delivery: 60,
                    takeaway: 20 ,
                    condition: "Активен"
                },
                {
                    idCity: 9,
                    city: "Ставрополь",
                    street: "Макарова",
                    streetType: "пер. ",
                    house: "2",
                    delivery: 60,
                    takeaway: 20 ,
                    condition: "Активен"
                },
                {
                    idCity: 10,
                    city: "Ставрополь",
                    street: "Серова",
                    streetType: "ул. ",
                    house: "486/1",
                    delivery: 60,
                    takeaway: 20 ,
                    condition: "Активен"
                },
                {
                    idCity: 11,
                    city: "Волгодонск",
                    street: "30 лет Победы",
                    streetType: "ул. ",
                    house: "33",
                    delivery: 60,
                    takeaway: 20 ,
                    condition: "Активен"
                },
                {
                    idCity: 12,
                    city: "Донецк",
                    street: "Ленина",
                    streetType: "пр. ",
                    house: "10",
                    delivery: 60,
                    takeaway: 20 ,
                    condition: "Активен"
                },
                {
                    idCity: 13,
                    city: "Новочеркасск",
                    street: "Ермака",
                    streetType: "пр. ",
                    house: "85/2",
                    delivery: 60,
                    takeaway: 20 ,
                    condition: "Активен"
                },
                {
                    idCity: 14,
                    city: "Новочеркасск",
                    street: "Калинина",
                    streetType: "ул. ",
                    house: "55",
                    delivery: 60,
                    takeaway: 20 ,
                    condition: "Активен"
                },
                {
                    idCity: 15,
                    city: "Невинномыск",
                    street: "Калинина",
                    streetType: "ул. ",
                    house: "53",
                    delivery: 60,
                    takeaway: 20 ,
                    condition: "Активен"
                },
                {
                    idCity: 16,
                    city: "Невинномыск",
                    street: "Гагарина",
                    streetType: "ул. ",
                    house: "18",
                    delivery: 60,
                    takeaway: 20 ,
                    condition: "Активен"
                },
                {
                    idCity: 17,
                    city: "Ростов-на-Дону",
                    street: "2-я Пролетарская",
                    streetType: "ул. ",
                    house: "69",
                    delivery: 60,
                    takeaway: 20 ,
                    condition: "Активен"
                },
                {
                    idCity: 18,
                    city: "Прохладный",
                    street: "Свободы",
                    streetType: "ул. ",
                    house: "178",
                    delivery: 60,
                    takeaway: 20 ,
                    condition: "Активен"
                },
                {
                    idCity: 19,
                    city: "Майкоп",
                    street: "Пионерская",
                    streetType: "ул. ",
                    house: "403",
                    delivery: 60,
                    takeaway: 20 ,
                    condition: "Активен"
                },
                {
                    idCity: 20,
                    city: "Ростов-на-Дону",
                    street: "Обский",
                    streetType: "пер. ",
                    house: "4А",
                    delivery: 60,
                    takeaway: 20 ,
                    condition: "Активен"
                },
                {
                    idCity: 21,
                    city: "Аксай",
                    street: "Садовая",
                    streetType: "ул. ",
                    house: "8А",
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
            StopList: [],
            StopCat: [],
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
            OpenCitySearchInp: false,
            ResSearchCity: [],
            StatisticsClient: [],
            OpenModalStatisticsClient: false,
            UsedStatus: [],
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
        this.SushiChecker = this.SushiChecker.bind(this) 
        
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
        this.ClearStopList = this.ClearStopList.bind(this)
        
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

        this.CloseModalStatisticsClient = this.CloseModalStatisticsClient.bind(this)
        this.EditOrder = this.EditOrder.bind(this)
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
            {this.state.OpenModalStatisticsClient === true &&
            <WindowStatisticsClient 
            CloseModalStatisticsClient={this.CloseModalStatisticsClient}
            StatisticsClient={this.state.StatisticsClient}
            />
            }

            {this.state.LastWindowSaved === true && <LastWindow
            AlertAdd={this.AlertAdd}
            totalSumSale={this.state.totalSumSale}
            PaymentMark={this.PaymentMark}
            SaveFunction={this.SaveFunction}
            CloseLastWindow={this.CloseLastWindow}
            />}

            <MenuMain 
                EditOrderCheck={this.state.EditOrderCheck}
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
            
            
            <div>
            {this.state.SSumWindowActive === true &&<SaleSumWindow 
                SaleInpEdit={this.SaleInpEdit}
                SSumWindowActive={this.state.SSumWindowActive}
                ButtonSaleColor={this.ButtonSaleColor}
                SaleInp={this.state.SaleInp}
                Sale={this.state.Sale}
            />}

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

            {this.state.orderPosition.length > 0 &&
                <TotalSum 
                    totalSoy={this.state.totalSoy}
                    totalSum={this.state.totalSum}
                />
            }
                
                </div>
            </div>
            <div className='OrdDownPanel'>
                < OrderDownPanel
                    SavedButtonClick={this.SavedButtonClick}
                    checkOnPanel={this.state.orderPosition.length}
                    addTW={this.addTablewares}
                    totalSumSale={this.state.totalSumSale}
                    clOrd={this.cleanOrder}
                    EditOrderCheck={this.state.EditOrderCheck}
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
                    <label 
                    className='CityNameText' 
                    onClick={(() => {
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
                <PiMagnifyingGlass 
                className='SearchingCityOnNewOrderIcon'
                onClick={() => {
                    this.setState({
                        OpenCitySearchInp: true
                    })
                    setTimeout(() => {
                        document.getElementById('SearchingCityOnNewOrderInput').focus()
                    }, 50)
                }}
                />
            </div>
            {this.state.OpenCitySearchInp === true && 
            <div
            className='SearchingCityOnNewOrderDiv'
            >
                <div>
                    <input
                    className={this.state.ResSearchCity.length !== 0 ? 'SearchingCityOnNewOrderInput OpenDrop' : 'SearchingCityOnNewOrderInput'}
                    id='SearchingCityOnNewOrderInput'
                    placeholder='Поиск филиала'
                    onBlur={() => {
                        setTimeout(() => {
                            
                            this.setState({
                                ResSearchCity: []
                            })
                        }, 100)
                        setTimeout(() => {
                            this.setState({
                                OpenCitySearchInp: false
                            })
                        }, 100)
                    }}
                    onChange={(e) => {
                        if(e.target.value !== "")
                        {
                            var Val = e.target.value.toLowerCase()
                        var CitySearch = this.state.City.filter(el => {
                            return (el.city + " " + el.street).toLowerCase().includes(Val)
                        })
                        
                        this.setState({
                            ResSearchCity: [...CitySearch]
                        })
                        
                        
                        }
                        else
                        {
                        this.setState({
                            ResSearchCity: []
                        })
                        
                        }
                    }}
                    />
                </div>
                {this.state.ResSearchCity.length > 0 && 
                <div
                className='CitySelectorResSearch'
                >
                    {this.state.ResSearchCity.slice(0, 5).map((el) => (<CityList
                        CloseCityist={this.CloseCityist}
                        CityChange={this.CityChange}
                        City={el}
                        key={el.idCity}
                        />))}
                </div>
                }
            </div>
            }
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
                    <table
                    className='TableAddressDetal'
                    >
                        <tbody>
                        <tr className='TrTableAddressDetal'>
                                <td className='AddressDetalText PhoneNum'>
                                    Телефон
                                </td>
                                <td
                                className='TdAddressDetalInpPhoneNum'                                
                                >
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
                                        
                                            
                                            this.setState({
                                                StatisticsClient: this.state.Saved.filter((el) => el.orderAddress[0].PhoneNum === this.state.address[0].PhoneNum)
                                            })
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
                                    
                                   {this.state.StatisticsClient.length > 0 &&
                                        <IoStatsChart
                                        className='StatisticsClientIcon'
                                        onClick={() => {
                                            this.setState({
                                                OpenModalStatisticsClient: true
                                            })
                                        }}
                                        />
                                    }
    
                                    
                                </td>
                            </tr>
                            {this.state.TypeOrder === "delivery" && <tr className='TrTableAddressDetal'>
                                <td className='AddressDetalText Street'>
                                    Улица
                                </td>
                                <td>
                                <input
                                    type="text"
                                    maxLength={32}
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
                                        maxLength={10}
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
                                        id = {'AddressDetalInpEntrance' + this.state.SavedIdOrd}
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
                                        id = {'AddressDetalInpFloor' + this.state.SavedIdOrd}
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
                                        id = {'AddressDetalInpFlat' + this.state.SavedIdOrd}
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
                                        id = {'AddressDetalInpComment' + this.state.SavedIdOrd}
                                        maxLength={100}
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
            <div
            className='MainCategAndPosition'
            >
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
                <StopAlerts
                            AlertCheck={this.state.AlertCheck}
                            AllertClick={this.AllertClick}
                />

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
                    ClearStopList={this.ClearStopList}
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
                        EditOrderCheck={this.state.EditOrderCheck}
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
                        EditOrder={this.EditOrder}
                        City={this.state.City}
                        DeleteSavedOrd={this.DeleteSavedOrd}
                        ChangeStatusSavedOrd={this.ChangeStatusSavedOrd}
                        Saved = {this.state.Saved}
                        AlertAdd={this.AlertAdd}
                        AlertCheck={this.state.AlertCheck}
                        AllertClick={this.AllertClick}
                        UsedStatus={this.state.UsedStatus}
                        />
                    </div>

                    
                    <div className='MainMenu'>
                        <MenuMain 
                            EditOrderCheck={this.state.EditOrderCheck}
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

    async SushiChecker() {
        var SushiCheck = 0
            SushiCheck = this.state.orderPosition.filter((el) => el.categ === "Суши")
            var SushiNum = 0
            SushiCheck.map((el) => {
                SushiNum = SushiNum + el.num
                return(el)
            })
            
            if(SushiNum > 0)
            {
            var SushiSoyVar = Math.ceil(SushiNum / 6)
                        
                this.setState({
                    SushiSoy: SushiSoyVar 
                })
                await this.setState
                this.SumSoySause()
            }
            else
            {
                this.setState({
                    SushiSoy: 0
                })
                await this.setState
                this.SumSoySause()
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
        this.SushiChecker()
        
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
                totalSoy: 0,
                SushiSoy: 0
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
        this.SushiChecker()
        
        
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
                    if(el.idOrd === id && el.categ === "Соус В ВОК")
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
        this.SushiChecker()
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
                    if(el.idOrd === id && el.categ === "Соус В ВОК")
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
        this.SushiChecker()
    
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
            if(a.categ === "ВОК")
                {
                    this.state.orderAddition.map((el) => {
                        if(el.idOrd === id && el.categ === "Соус В ВОК")
                        {
                            el.num = a.num
                            this.setState({
                                orderAddition: [...this.state.orderAddition]
                            }) 
                        }
                        return(el)
                    })
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
                    if(a.categ !== "Соус В ВОК")
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
            if(pos.categ === "Соус В ВОК")
            {
                if(this.state.orderAddition.filter((el) => el.categ === "Соус В ВОК" && el.idOrd === idOrd).length >= 2)//проверка, чтобы больше 2ух соусов нельзя было добавить
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
                
                    if(el.idAddition === idAddition)
                    {
                        if(el.categ !== "Соус В ВОК")
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
                        else
                        {
                           this.AlertAdd('SauceSumLimit')
                        }
                    
                }
                
                return(el)
            })
            await this.setState
            this.TotalSumFunction()
            this.TotalSumSaleFunction()
        }

        async MinusAdditionFunc(idAddition){
            this.state.orderAddition.map((el) =>{
                
                    if(el.idAddition === idAddition)
                    {
                        if(el.categ !== "Соус В ВОК")
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
                        else
                        {
                            this.setState({
                                orderAddition: this.state.orderAddition.filter((a) => a.idAddition !== idAddition)
                            })
                        }
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
                {
                    if(a.categ !== "Соус В ВОК")
                    {
                        a.num = parseInt(val)
                        a.totalprice = a.price * a.num
                        a.totaldkprice = a.dkprice * a.num
                    }
                    else
                    {
                        this.AlertAdd('SauceSumLimit')
                    }
                }
                
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

    CloseModalStatisticsClient(){
        this.setState({
            OpenModalStatisticsClient: false
        })
    }

    async cleanOrder(id) { //удаление всех позиций из заказа
        this.setState({
            StatisticsClient: []
        })
        if(this.state.orderPosition.length > 0)
        {
        this.setState({
            orderPosition: this.state.orderPosition.filter((el) => el.idOrd === id)
        })
        }
        
        if(this.state.orderAddition.length > 0)
        {
        this.setState({ //удаление всех добавок в вок
            orderAddition: this.state.orderAddition.filter((el) => el.idOrd === id)
        }) 
        }

        this.setState({ //очистка кол-ва приборов
            orderTablewares: this.state.orderTablewares.filter((el) => el.id === id)
        })

        this.setState({
            orderTablewares: [{num: 0}]
        })

        this.setState({//очистка скидки
            Sale: 1,
            TotalSale: 0,
            SaleInp: 0//очистка скидки суммой
        })

        

        this.setState({//очистка соевых
            totalSoy: 0,
            SushiSoy: 0
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
        document.getElementById('AddressDetalInpFloor' + this.state.SavedIdOrd).value = ""
        document.getElementById('AddressDetalInpFlat' + this.state.SavedIdOrd).value = ""
        document.getElementById('AddressDetalInpEntrance' + this.state.SavedIdOrd).value = ""
        document.getElementById('AddressDetalInpComment' + this.state.SavedIdOrd).value = ""
        }
        document.getElementById('CityName' + this.state.SavedIdOrd).classList.remove('Allert')

        if(this.state.OnCity.idCity !== 0 && this.state.orderPosition.length > 0)
        {
        document.getElementById('CertificateInput').value = ""
        document.getElementById('PreOrderInput').value = ""
        }
        
        await this.setState 
        this.TotalSumFunction() //пересчет итоговой суммы
        this.TotalSumSaleFunction() //пересчет итоговой суммы со скидкой

        if(this.state.EditOrderCheck === true)
        {
            this.setState({
                ActiveComponent: 2
            })
        }
        
        this.setState({
            EditOrderCheck: false,
            EditOrderStatus: false
        })

        if(this.state.SaverForSavedIdOrd !== false)
        this.setState({
            SavedIdOrd: this.state.SaverForSavedIdOrd,
            SaverForSavedIdOrd: false
        })
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
                if(this.state.orderTablewares.length < 1)//тут ниже добавление приборов
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
            var res = this.state.SushiSoy
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

    async StopListON() {//переключение "вкладки" на стоп лист
        this.setState({
            ActiveComponent: 1  
        })
        if(this.state.EditOrderCheck === true)
        {
            this.cleanOrder()
            await this.cleanOrder()
            this.setState({
                ActiveComponent: 1  
            })
        }
        
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
        if(this.state.EditOrderCheck === true)
        {
            this.cleanOrder()
        }
    }

    openMenuFunction() {//функия раскрытия/скрытия меню
        const mediaQuery1 = window.matchMedia('(max-width: 1050px)')
        const mediaQuery2 = window.matchMedia('(min-width: 2200px)')
        if(this.state.openMenu === false)
        {
            if(mediaQuery1.matches)
            {
                document.documentElement.style.setProperty('--WidhtMainMenu', '150px')
            }
            else
            {
                if(mediaQuery2.matches)
                {
                    document.documentElement.style.setProperty('--WidhtMainMenu', '200px')
                }
                else
                {
                    document.documentElement.style.setProperty('--WidhtMainMenu', '175px')
                }
            }
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
            if(el.name !== "Добавка В ВОК")
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
        setTimeout(() => {this.AlertDelete(id)}, 400)
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

    ClearStopList(idCity){
        this.state.StopList.map((a) =>
        {
            if(a.idCity === idCity)
            {
                    
                    a.CheckStopList = false
                    this.setState({
                        StopList: [...this.state.StopList]
                    })
                
            }
            
            return(a)
        })

        
       
    }

   StopListChecCatOnPositionOnCity(idCity)//функция для проверки стопов по категориям, для корректного отображения
    {
        this.state.StopCat.map((el) => {
            
            if(el.name !== "Добавка В ВОК" && el.idCity === idCity)
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
                        if(a.id === el.id && el.name !== "Добавка В ВОК")
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
                }
                return(el)
            })

            this.state.orderAddition.map((el) => {
                if(el.CheckStopList === true)
                {
                    this.AlertAdd("StopOnSave")
                    document.getElementById('OrdPosName' + el.idAddition).classList.add('Stoped')
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
        
        this.state.orderPosition.map((el) => {
            if(el.categ === "ВОК" && el.haveAddition === true)
            {
                if(this.state.orderAddition.filter((a) => a.categ === "Соус В ВОК" && a.idOrd === el.idOrd).length > 0)
                {

                }
                else
                {
                    document.getElementById('OrdPosName' + el.idOrd).classList.add('Stoped')
                    this.AlertAdd('UndefiendSousage')
                    setTimeout(() => {
                        this.setState({
                            LastWindowSaved: false
                        })
                    }, 5)
                    
                }
                
                

                
            }
            return(el)
        })
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
                        if(el.name !== "Добавка В ВОК")
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
                        }
                        return(el)
                    })

                    this.state.orderAddition.map((el) => {
                        if(el.CheckStopList === true)
                        {
                            this.AlertAdd("StopOnSave")
                            document.getElementById('OrdPosName' + el.idAddition).classList.add('Stoped')
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
                        var MinHour = 0
                        var MinMinutes = 0
                        var MinTime = 0
                        var InpTime = 0
                        
                        if(this.state.TypeOrder === 'delivery')
                        {
                            MinHour = String(today.getHours()).padStart(2 , "0")
                            MinMinutes = String(today.getMinutes() + this.state.OnCity.delivery + this.state.AddTimeDelivery).padStart(2 , "0")
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
                                MinTime = (parseInt(MinHour) * 60) + parseInt(MinMinutes)
                                InpTime = (parseInt(InpHour) * 60) + parseInt(InpMinutes)
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
                            MinHour = String(today.getHours()).padStart(2 , "0")
                            MinMinutes = String(today.getMinutes() + this.state.OnCity.takeaway).padStart(2 , "0")
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
                                MinTime = (parseInt(MinHour) * 60) + parseInt(MinMinutes)
                                InpTime = (parseInt(InpHour) * 60) + parseInt(InpMinutes)
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

        if(this.state.EditOrderCheck === true)
        {
            
            this.setState({
                Saved: this.state.Saved.filter((el) => el.SavedIdOrd !== this.state.SavedIdOrd)
            })
            
        }


        await this.setState
        
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
            totalprice36: el.totalprice36,
            totaldkprice: el.totaldkprice,
            totaldkprice36: el.totaldkprice36,
            podcat: el.podcat,
            categ: el.categ,
            CheckStopList: el.CheckStopList,
            soysause: el.soysause,
            sost: el.sost,
            Proverka36: el.Proverka36,
            haveAddition: el.haveAddition,
         })
         return(el)
        })
        
        this.state.orderAddition.map((el) => {
            orderAdditionSaved.push({
                id: el.id + " " + SavedIdOrd,
                idOrd: el.idOrd,
                price: el.price,
                dkprice: el.dkprice,
                name: el.name,
                num: el.num, 
                salecheck: el.salecheck,
                totalprice: el.totalprice,
                categ: el.categ,
                CheckStopList: el.CheckStopList,
                ThisAddition: el.ThisAddition,
                idAddition: el.idAddition
                
            })
            return(el)
        })
        this.state.address.map((el) => {
            orderAddress.push({
                street: el.street,
                house: el.house,
                flat: el.flat,
                floor: el.floor,
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
                MaxTime = this.state.MaxTimeTakeaway
            }
        }
        else
        {
            var MaxTimeHour = this.state.TimeInputContain[0].Hour
            var MaxTimeMinutes = this.state.TimeInputContain[0].Minutes
            MaxTime = [{Hour: MaxTimeHour, Minutes: MaxTimeMinutes}]
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
        if(this.state.EditOrderCheck === false)
        {
            var Status = "New"
        }
        else
        {
            Status = this.state.EditOrderStatus
        }
        if(this.state.PreOrder === true)
        {
            Status = "Timeout"
        }
        var today = new Date()

        if(Status !== this.state.EditOrderStatus)
        this.setState({
            UsedStatus: [...this.state.UsedStatus, 
        {

        SavedIdOrd: SavedIdOrd,
        Status: Status,
        Hour: String(today.getHours()).padStart(2 , "0"),
        Minutes: String(today.getMinutes()).padStart(2 , "0"),
        Date: String(today.getDate()).padStart(2 , "0"),
        Month: String(today.getMonth() + 1).padStart(2 , "0"),
        Year: String(today.getFullYear()).padStart(2 , "0"),
        }]       
        })
        var EditTimeHour = String(today.getHours()).padStart(2 , "0")
        var EditTimeMinutes = String(today.getMinutes()).padStart(2 , "0")
        var EditDateDate = String(today.getDate()).padStart(2 , "0")
        var EditDateMonth = String(today.getMonth() + 1).padStart(2 , "0")
        var EditDateYear = String(today.getFullYear())
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
            UsedCertificate: this.state.UsedCertificate,
            EditTimeAndDate: {
                EditTimeHour: EditTimeHour,
                EditTimeMinutes: EditTimeMinutes,
                EditDateDate: EditDateDate,
                EditDateMonth: EditDateMonth,
                EditDateYear: EditDateYear
            }
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
        this.cleanOrder()
        this.setState({
            ActiveComponent: 2
        })
        }


        this.setState({
            EditOrderCheck: false,
            EditOrderStatus: false
        })

        if(this.state.SaverForSavedIdOrd !== false)
        this.setState({
            SavedIdOrd: this.state.SaverForSavedIdOrd,
            SaverForSavedIdOrd: false
        })
    
    }

    getTime(){
        if(this.state.EditOrderCheck === false)
        {
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
                var today = new Date()
                var CheckUsedStatus = this.state.UsedStatus.filter((el) => el.Status === val && el.SavedIdOrd === SavedIdOrd)
                if(CheckUsedStatus.length === 0)
                {
                    this.setState({
                        UsedStatus: [...this.state.UsedStatus, 
                    {
                    SavedIdOrd: SavedIdOrd,
                    Status: val,
                    Hour: String(today.getHours()).padStart(2 , "0"),
                    Minutes: String(today.getMinutes()).padStart(2 , "0"),
                    Date: String(today.getDate()).padStart(2 , "0"),
                    Month: String(today.getMonth() + 1).padStart(2 , "0"),
                    Year: String(today.getFullYear()).padStart(2 , "0"),
                    }]       
                    })
                }
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

    async EditOrder(Saved){
        this.setState({
            ActiveComponent: 0,
            EditOrderCheck: true
        })

        var CheckerCity = this.state.City.filter((el) => el.idCity === Saved.orderCity[0].idCity)

        this.setState({
            OnCity: {
                idCity: CheckerCity[0].idCity,
                city: CheckerCity[0].city,
                streetType: CheckerCity[0].streetType,
                street: CheckerCity[0].street,
                house: CheckerCity[0].house,
                delivery: CheckerCity[0].delivery,
                takeaway: CheckerCity[0].takeaway
            }
        })

        this.setState({
            AddTimeDelivery: 0
        })
        
        this.state.StopList.map((el) => {
            if(el.idCity === Saved.orderCity[0].idCity)
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
            if(el.idCity === Saved.orderCity[0].idCity)
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
                if(el.idCity === Saved.orderCity[0].idCity)
                {
                    this.state.cat.map((a) => 
                    {
                        if(a.id === el.id && el.name !== "Добавка В ВОК")
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

        this.setState({
            TypeOrder:  Saved.orderDetal[0].TypeOrder,
            pdkon: Saved.orderDetal[0].pdkon,
            totalSum: Saved.orderDetal[0].TotalSum,
            totalSumSale: Saved.orderDetal[0].TotalSumSale,
            UsedCertificate: Saved.orderDetal[0].UsedCertificate,
            TotalSale: Saved.orderDetal[0].TotalSale,
            EditOrderStatus: Saved.orderDetal[0].Status,
            Sale: Saved.orderDetal[0].Sale,
            SaleInp: Saved.orderDetal[0].SaleInp,
            
        })

        this.setState({
            SaverForSavedIdOrd: this.state.SavedIdOrd
        })

        await this.setState

        this.setState({
            SavedIdOrd: Saved.SavedIdOrd
        })


        this.setState({
            address: [
                {
                    street:  Saved.orderAddress[0].street,
                    house: Saved.orderAddress[0].house,
                    entrance: Saved.orderAddress[0].entrance,
                    floor: Saved.orderAddress[0].floor,
                    flat: Saved.orderAddress[0].flat,
                    comment: Saved.orderAddress[0].comment,
                    PhoneNum: Saved.orderAddress[0].PhoneNum
                }
            ]
        })

        await this.setState

        if(this.state.TypeOrder === 'delivery')
        {
        document.getElementById('AddressDetalInpStreet' + this.state.SavedIdOrd).value = this.state.address[0].street
        document.getElementById('AddressDetalInpHouse' + this.state.SavedIdOrd).value = this.state.address[0].house
        document.getElementById('AddressDetalInpEntrance' + this.state.SavedIdOrd).value = this.state.address[0].entrance
        document.getElementById('AddressDetalInpFloor' + this.state.SavedIdOrd).value = this.state.address[0].floor
        document.getElementById('AddressDetalInpFlat' + this.state.SavedIdOrd).value = this.state.address[0].flat
        }
        document.getElementById('AddressDetalInpComment' + this.state.SavedIdOrd).value = this.state.address[0].comment

        this.state.MarksOrder.map((el) => {
            Saved.orderMarksSaved.map((a) => {
                if(el.idMark === a.idMark)
                {
                    el.Active = a.Active
                    this.setState({
                        MarksOrder: [...this.state.MarksOrder]
                    })
                }
                return(a)
            })
            return(el)
        })
        var orderPositionArray = []
        var orderAdditionArray = []
        Saved.orderPosSaved.map((el) => {
            this.state.position.map((a) => {
                if(el.name === a.name)
                {
                    el.id = a.id
                    orderPositionArray.push(el)
                }
                return(a)
            })
            
            return(el)
        })

        Saved.orderAdditionSaved.map((el) => {
            this.state.position.map((a) => {
                if(el.name === a.name)
                {
                    el.id = a.id
                    orderAdditionArray.push(el)
                }
                return(a)
            })
            return(el)
        })

        this.setState({
            orderPosition: orderPositionArray            
        })
        
        await this.setState

        this.setState({
            orderAddition: [...orderAdditionArray]
        })

        this.setState({
            orderTablewares: [{num: Saved.orderDetal[0].Tablewares}]
        })

        this.setState({
            TimeSave: [
                {
                    Hour: Saved.orderDetal[0].TimeSave[0].Hour,
                    Minutes: Saved.orderDetal[0].TimeSave[0].Minutes
                }
            ]
        })

        this.setState({
            DateSave: [
                {
                    Date: Saved.orderDetal[0].DateSave[0].Date,
                    Mounth: Saved.orderDetal[0].DateSave[0].Mounth,
                    Year: Saved.orderDetal[0].DateSave[0].Year
                }
            ],
        })

        this.setState({
            MaxTimeDelivery:[
                {
                    Hour: Saved.orderDetal[0].MaxTime[0].Hour,
                    Minutes: Saved.orderDetal[0].MaxTime[0].Minutes,
                }
            ],
            MaxTimeTakeaway:[
                {
                    Hour: Saved.orderDetal[0].MaxTime[0].Hour,
                    Minutes: Saved.orderDetal[0].MaxTime[0].Minutes,
                }
            ]
        })

          
        if(Saved.orderDetal[0].Tablewares !== 0)     
        {
            this.state.orderTablewares.map((a) => 
            {
                a.id = Saved.orderDetal[0].Tablewares 
                a.name = 'Приборы'
                a.categ = 'Приборы'
                a.num = Saved.orderDetal[0].Tablewares 
                a.price = 0
                a.totalprice = 0
                this.setState({orderTablewares: [...this.state.orderTablewares]}) 
                return(a)
            })   
                
            }
            
        await this.setState
        this.TotalSumFunction()
        this.TotalSumSaleFunction()
        this.SumSoySause()
        if(Saved.orderDetal[0].TotalSum !== Saved.orderDetal[0].TotalSumSale)
        {
            this.ButtonSaleColor(1)
        }

    }
    
}


export default App