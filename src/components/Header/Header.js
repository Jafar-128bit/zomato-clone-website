import './Header.css';
import zomato_logo_black from '../../assets/zomato_logos/zomato_logo_black.webp';
import locationIcon from '../../assets/flatIcons/location_Icon.png';
import caretDownIcon from '../../assets/flatIcons/caretDown_icon.png';
import searchIcon from '../../assets/flatIcons/search_Icon.png';

const Header = () =>{
    return (
        <div className="max-width header">
            <img
                className="header__logo"
                src={zomato_logo_black}
                alt="zomatoLogo"
            />
            <div className="header__right">
                <div className="header__locationSearch">
                    <div className="header__wrapper">
                        <div className="header__iconName">
                            <img
                                className="absolute-center header__locationIcon"
                                src={locationIcon}
                                alt="locLogo"
                            />
                            <p>Mumbai</p>
                        </div>
                        <img
                            className="absolute-center header__caretDownIcon"
                            src={caretDownIcon}
                            alt="caret"
                        />
                    </div>
                    <div className="header__locationSeparator"> </div>
                    <div className="header__searchBar">
                        <img
                            className="header__searchIcon absolute-center"
                            src={searchIcon}
                            alt="searchIcon"
                        />
                        <input
                            className="header__inputTextSearch"
                            type="text"
                            placeholder="Search for restaurant, cuisine or a dish"
                        />
                    </div>
                </div>
                <div className="header__profileWrapper absolute-center">
                    {/* TODO: Add Login Functionality and Dynamics with conditional rendering */}
                    <button
                        className="header__btn header__btn__margin absolute-center"
                        type="button">Log in</button>
                    <button
                        className="header__btn absolute-center"
                        type="button">Sign up</button>
                </div>
            </div>
        </div>
    );
}

export default Header;
