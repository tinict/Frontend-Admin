import '../../../assets/css/StyleAdminSite/Header.css';

const Header = () => {
    return (
        <header>
            <div className='header--container'>
                <div className='header__right'>
                    <div className='header__logo'>
                        <a href='#'>
                            <img className='logo-manager' src={require('../../../assets/image/logo-manager.png')} alt='logo-manager'/>
                        </a>
                    </div>
                    <div className='header__nameCompany'>
                        <h3 className='nameCompany'>BeeShop Admin</h3>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;