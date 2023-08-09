import { BsDatabaseFillAdd } from 'react-icons/bs'; 
import { AiFillDashboard } from 'react-icons/ai';
import { FaClipboardList } from 'react-icons/fa';
import '../../../assets/css/StyleAdminSite/NavigationBar.css';
import { Link } from "react-router-dom";

const NavigationBar = () => {
    return (
        <nav className="navigationBar">
            <div className='navigationBar--container'>
                <div className="navigationBar__item">
                    <Link to='/dashboard' className='navigationBar__link'>
                        <div className="navigationBar__icon">
                            <AiFillDashboard />
                        </div>
                        <div className="navigationBar__title">
                            Dashboard
                        </div>
                    </Link>
                </div>
                <div className="navigationBar__item">
                    <Link to='/orders' className='navigationBar__link'>
                        <div className="navigationBar__icon">
                            <FaClipboardList />
                        </div>
                        <div className="navigationBar__title">
                            Orders
                        </div>
                    </Link>
                </div>
                <div className="navigationBar__item">
                    <Link to='/posts' className='navigationBar__link'>
                        <div className="navigationBar__icon">
                            <BsDatabaseFillAdd />
                        </div>
                        <div className="navigationBar__title">
                            Products
                        </div>
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default NavigationBar;