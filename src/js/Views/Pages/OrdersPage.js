import Header from "../components/Header";
import NavigationBar from "../components/NavigationBar";
import TableProduct from "../components/TableProduct";
import { FaClipboardList } from 'react-icons/fa';
import Config from "../../Core/Config";
import '../../../assets/css/StyleAdminSite/Orders.css';
import { AiOutlineSearch } from 'react-icons/ai';
import getOrderData from "../../Data/getOrder.js";
import { useState, useEffect } from "react";
import searchOrder from "../../Data/searchOrder.js";

const OrdersPage = () => {
    const titleOrder = Config.TableOrder.TitleColumn;
    
    const getValue = (data) => {
        return Object.values(data).map((value) => {
            return `${value}`;
        });
    };
    
    let [data, setData] = useState([]);
    
    
    useEffect(() => {
        getOrderData()
        .then(results => {
            let temp = [];
            results.forEach((value) => {
                temp.push(Object.values(value));
            });
            setData(temp);
        })
        .catch(() => {
            console.log('Disconnect DataBase');
        })
    }, []);
    
    const handleSearch = (searchValue) => {
        console.log(searchValue);
        const url = `http://127.0.1:8080/orders/search?value=${searchValue}`;
        searchOrder(url)
            .then((results) => {
                let temp = [];
                results.forEach((value) => {
                    temp.push(Object.values(value));
                });
                console.log(results);
                setData(temp);
            })
    }
    
    return (
        <div className="container">
            <Header/>
            <div className="content">
                <div className="content--colRight">
                    <NavigationBar />
                </div>
                <div className="content--colLeft">
                    <div className="content--header">
                        <div className="header--left">
                            <FaClipboardList className="content--iconHeader"/>
                            <h3 className="content--title">
                                ORDERS
                            </h3>
                        </div>
                    </div>
                    <div className="order__container">
                        <div className="order--search">
                            <AiOutlineSearch className="icon__search" onClick={() => {handleSearch(document.querySelector('.searchOrder').value)}} />
                            <input type="text" placeholder="Search ..." className="searchOrder"/>
                        </div>
                        <TableProduct tileColumn={titleOrder} rowData={data} displayGroupBTN={false} displaySwitch={false} />
                    </div>
                </div>
            </div>
        </div>
    )
};

export default OrdersPage; 