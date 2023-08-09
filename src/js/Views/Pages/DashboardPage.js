import Header from "../components/Header";
import NavigationBar from "../../Views/components/NavigationBar";
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';
import { AiOutlineAreaChart } from 'react-icons/ai';
import { BsFillCartFill } from 'react-icons/bs'
import { MdAttachMoney } from 'react-icons/md'
import { BiRefresh } from 'react-icons/bi';
import '../../../assets/css/StyleAdminSite/Dashboard.css';

const Dashboard = () => {

    return (
        <div className="container">
            <Header/>
            <div className="content">
                <div className="content--colRight">
                    <NavigationBar />
                </div>
                <div className="content--colLeft">
                    <div className="dashboard--header">
                      <AiOutlineAreaChart className="dashboard--icon"/>
                      <h1 className="dashboard--title">Dashboard</h1>
                    </div>
                    <div className="container--boxInfo">
                      <div className="dashboard__pendingOrders">
                        <div className="overview__icon">
                          <BsFillCartFill/>
                        </div>
                        <div className="overview__number">
                          <h3 className="title" name='title'>0</h3>
                          <label htmlFor="title">Pending Orders</label>
                        </div>
                      </div>
                      <div className="dashboard__pendingOrders">
                        <div className="overview__icon">
                          <MdAttachMoney/>
                        </div>
                        <div className="overview__number">
                          <h3 className="title" name='title'>0</h3>
                          <label htmlFor="title">Income</label>
                        </div>
                      </div>
                    </div>
                    <div className="dashboard__chart">
                      <div className="header__overview">
                        <div className="header__overview--colLeft">
                          <h3>Sytem Overview</h3>
                        </div>
                        <div className="header__overview--colRight">
                          <BiRefresh className="icon"/>
                        </div>
                      </div>
                      <div className="overview__filter">
                        <div className="Chart__ButtonGroup">
                          <button className="itemButton">Today</button>
                          <button className="itemButton">Last 30 Days</button>
                          <button className="itemButton">Last 1 Year</button>
                        </div>
                      </div>
                      <Line
                        datasetIdKey='id'
                        data={{
                          labels: ['Jun', 'Jul', 'Aug'],
                          datasets: [
                            {
                              id: 1,
                              label: '',
                              data: [5, 6, 7],
                            },
                            {
                              id: 2,
                              label: '',
                              data: [3, 2, 1],
                            },
                          ],
                        }}
                      />    
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Dashboard; 