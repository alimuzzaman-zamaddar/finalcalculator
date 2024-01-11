import "./Header.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
const Header = () => {
  return (
    <header className="header-wrap">
      <div className="wpt-nav-wrap">
        <div className="wpt-logo">
          <div className="wpt-container">
            <div className="wpt-logo-img">
              <img
                src="https://visionarysports.ca/wp-content/uploads/2022/07/image-1.png"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="wpt-menu-wrap">
          <div className="wpt-container">
            <ul className="wpt-main-menu">
              <li className="menu-item">
                <a href="https://visionarysports.ca/" className="menu-item-link">
                  Home
                </a>
              </li>
              <li className="menu-item dropdown-container">
                <a href="https://visionarysports.ca/about-us/" className="menu-item-link wpt-dropdown modification-button">
                  About Us  <FontAwesomeIcon className="ms-2" icon={faCaretDown} />
                </a>
                    <div className="dropdown-list">
                        <div className="listinner">
                            <ul className="">
                                <li><a href="https://visionarysports.ca/meet-the-team/">Meet The Team</a></li>
                                <li><a href="https://visionarysports.ca/social-impact/">Social Impact</a></li>
                                <li><a href="https://visionarysports.ca/services/">Services</a></li>
                                <li><a href="https://visionarysports.ca/about-us/testimonials/">Testimonials</a></li>
                                <li><a href="https://visionarysports.ca/corporate-partnerships/">Corporate Partners</a></li>
                            </ul>
                        </div>
                    </div>
              </li>
              <li className="menu-item dropdown-container-visionary">
                <a href="https://visionarysports.ca/visionaryathletes/" className="menu-item-link modification-button-visionary">
                  Visionary Athletes <FontAwesomeIcon className="ms-2" icon={faCaretDown} />
                </a>
                <div className="dropdown-list-visionary">
                        <div className="listinner-visionary">
                            <ul className="">
                                <li><a href="https://visionarysports.ca/visionaryathletes/">Visionary Athletes</a></li>
                                <li><a href="https://visionarysports.ca/vs-committed-athletes/">VS Committed Athletes</a></li>
                                <li><a href="https://visionarysports.ca/resilience-the-kaleigh-quennec-story/">"Resilience" — The Kaleigh Quennec Story</a></li>
                            </ul>
                        </div>
                    </div>
              </li>
              <li className="menu-item dropdown-container-ncca">
                <a href="https://visionarysports.ca/ncaa-hockey-portal/" className="menu-item-link  modification-button-ncca">
                  NCAA Hockey Portal <FontAwesomeIcon className="ms-2" icon={faCaretDown} />
                </a>
                <div className="dropdown-list-ncca">
                        <div className="listinner-ncca">
                            <ul className="">
                                <li><a href="https://visionarysports.ca/ncaaportal/">Men's NCAA Hockey Portal</a></li>
                                <li><a href="https://visionarysports.ca/ncaaportal/">Women's NCAA Hockey Portal</a></li>
                            </ul>
                        </div>
                    </div>
              </li>
              <li className="menu-item">
                <a href="#" className="menu-item-link">
                  VS Store
                </a>
              </li>
              <li className="menu-item dropdown-container-contact">
                <a href="https://visionarysports.ca/contact-us/" className="menu-item-link modification-button-contact">
                  Contact Us <FontAwesomeIcon className="ms-2" icon={faCaretDown} />
                </a>
                <div className="dropdown-list-contact">
                        <div className="listinner-contact">
                            <ul className="">
                                <li><a href="https://visionarysports.ca/career-opportunities/">Career Opportunities</a></li>
                                <li><a href="https://visionarysports.ca/services-contact-page/">Send us a message</a></li>
                            </ul>
                        </div>
                    </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
