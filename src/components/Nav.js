import { FaSearch, FaChevronDown } from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6';
import { Link } from 'react-router-dom';


function Nav() {
    return (
        <>
            <div className="nav">
                <div className="container">
                    <div className="topBar">
                        <div className="topBar-side">
                            <span className="color">Free Call</span>
                            <span>+1 234 456 78910</span>
                        </div>
                        <div className="topBar-side">
                            <p className="con">
                                <a href="#">Facebook</a>
                                <a href="#">Twitter</a>
                                <a href="#">Dribbble</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="menuBar">
                <div className="container">
                    <div className="menuBar-box">
                        <Link to='/home' className="brand" >
                            <span className="flag"></span>
                            <span>
                                Directone
                                <small>Directory and Listing</small>
                            </span>
                        </Link>
                        <ul className="menu">
                            <li className="menu-links">
                                <Link to='/home' className="link" >Home</Link>
                                <Link to='/about' className="link" >About</Link>
                                <Link to='/listing' className="link" >Listing</Link>
                                <Link to='/blog' className="link" >Blog</Link>
                                <Link to='/contact' className="link" >Contact</Link>
                            </li>
                        </ul>
                        <p className="listing-btn">
                            <a href="#" className="btn">
                                <span>+ Add Listing</span>
                            </a>
                        </p>
                    </div>
                </div>
            </div>
            <div className="header">
                <div className="container">
                    <div className="header-slider">
                        <div className="header-col">
                            <h1>Let's Explore Your Awesome City</h1>
                            <p>Find great places to stay, eat, shop, or visit from local experts.</p>
                        </div>
                        <form className="form-group">
                            <div className="form-row">
                                <div className="form-field">
                                    <div className="icon">
                                        <FaSearch />
                                    </div>
                                    <input type="text" className="form-control" placeholder="What are you looking for?" />
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-field">
                                    <div className="icon">
                                        <FaLocationDot />
                                    </div>
                                    <input type="text" className="form-control" placeholder="Search Location" />
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-field ">
                                    <div className="icon">
                                        <FaChevronDown />
                                    </div>
                                    <select className="form-categories" >
                                        <option className="form-categories__selection">All Categories</option>
                                        <option className="form-categories__selection">Food & Drinks</option>
                                        <option className="form-categories__selection">Hotel</option>
                                        <option className="form-categories__selection">Shopping</option>
                                        <option className="form-categories__selection">Beauty</option>
                                        <option className="form-categories__selection">Fitness</option>
                                        <option className="form-categories__selection">Bar & Club</option>
                                        <option className="form-categories__selection">Games</option>
                                        <option className="form-categories__selection">Places</option>
                                        <option className="form-categories__selection">Circus</option>
                                        <option className="form-categories__selection">Theater</option>
                                        <option className="form-categories__selection">Sports</option>
                                        <option className="form-categories__selection">Health</option>
                                    </select>
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-field button">
                                    <a href="#" className="search-btn">
                                        <span>
                                            <FaSearch />
                                            Search
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>





        </>
    );
}

export default Nav;