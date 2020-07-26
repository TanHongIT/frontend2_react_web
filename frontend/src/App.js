import React from 'react';
import './App.css';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';
import SigninScreen from './screens/SigninScreen';
import RegisterScreen from './screens/RegisterScreen';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProductsScreen from './screens/ProductsScreen';

function App() {
  const userSignin = useSelector(state => state.userSignin);
  const { userInfo } = userSignin;
  return (
    <BrowserRouter>

      <div>
        <div className="header--sidebar" />
        <header className="header">
          <div className="header__top">
            <div className="container-fluid">
              <div className="row">
                <div className="col-lg-6 col-md-8 col-sm-6 col-xs-12 ">
                  <p>
                    460 West 34th Street, 15th floor, New York - Hotline: 804-377-3580
                    - 804-399-3580
            </p>
                </div>
                <div className="col-lg-6 col-md-4 col-sm-6 col-xs-12 ">
                  <div className="header__actions">
                    <a href="#">Login &amp; Regiser</a>
                    <div className="btn-group ps-dropdown">
                      <a
                        className="dropdown-toggle"
                        href="#"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        USD
                  <i className="fa fa-angle-down" />
                      </a>
                      <ul className="dropdown-menu">
                        <li>
                          <a href="#">
                            <img src="images/flag/usa.svg" alt /> USD
                    </a>
                        </li>
                        <li>
                          <a href="#">
                            <img src="images/flag/singapore.svg" alt /> SGD
                    </a>
                        </li>
                        <li>
                          <a href="#">
                            <img src="images/flag/japan.svg" alt /> JPN
                    </a>
                        </li>
                      </ul>
                    </div>
                    <div className="btn-group ps-dropdown">
                      <a
                        className="dropdown-toggle"
                        href="#"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        Language
                  <i className="fa fa-angle-down" />
                      </a>
                      <ul className="dropdown-menu">
                        <li>
                          <a href="#">English</a>
                        </li>
                        <li>
                          <a href="#">Japanese</a>
                        </li>
                        <li>
                          <a href="#">Chinese</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <nav className="navigation">
            <div className="container-fluid">
              <div className="navigation__column left">
                <div className="header__logo">
                  <a className="ps-logo" href="index.html">
                    <img src="images/logo.png" alt />
                  </a>
                </div>
              </div>
              <div className="navigation__column center">
                <ul className="main-menu menu">
                  <li className="menu-item menu-item-has-children dropdown">
                    <a href="index.html">Home</a>
                    <ul className="sub-menu">
                      <li className="menu-item">
                        <a href="index.html">Homepage #1</a>
                      </li>
                      <li className="menu-item">
                        <a href="#">Homepage #2</a>
                      </li>
                      <li className="menu-item">
                        <a href="#">Homepage #3</a>
                      </li>
                    </ul>
                  </li>
                  <li className="menu-item menu-item-has-children has-mega-menu">
                    <a href="#">Men</a>
                    <div className="mega-menu">
                      <div className="mega-wrap">
                        <div className="mega-column">
                          <ul className="mega-item mega-features">
                            <li>
                              <a href="product-listing.html">NEW RELEASES</a>
                            </li>
                            <li>
                              <a href="product-listing.html">FEATURES SHOES</a>
                            </li>
                            <li>
                              <a href="product-listing.html">BEST SELLERS</a>
                            </li>
                            <li>
                              <a href="product-listing.html">NOW TRENDING</a>
                            </li>
                            <li>
                              <a href="product-listing.html">SUMMER ESSENTIALS</a>
                            </li>
                            <li>
                              <a href="product-listing.html">
                                MOTHER'S DAY COLLECTION
                        </a>
                            </li>
                            <li>
                              <a href="product-listing.html">FAN GEAR</a>
                            </li>
                          </ul>
                        </div>
                        <div className="mega-column">
                          <h4 className="mega-heading">Shoes</h4>
                          <ul className="mega-item">
                            <li>
                              <a href="product-listing.html">All Shoes</a>
                            </li>
                            <li>
                              <a href="product-listing.html">Running</a>
                            </li>
                            <li>
                              <a href="product-listing.html">Training &amp; Gym</a>
                            </li>
                            <li>
                              <a href="product-listing.html">Basketball</a>
                            </li>
                            <li>
                              <a href="product-listing.html">Football</a>
                            </li>
                            <li>
                              <a href="product-listing.html">Soccer</a>
                            </li>
                            <li>
                              <a href="product-listing.html">Baseball</a>
                            </li>
                          </ul>
                        </div>
                        <div className="mega-column">
                          <h4 className="mega-heading">CLOTHING</h4>
                          <ul className="mega-item">
                            <li>
                              <a href="product-listing.html">
                                Compression &amp; Nike Pro
                        </a>
                            </li>
                            <li>
                              <a href="product-listing.html">Tops &amp; T-Shirts</a>
                            </li>
                            <li>
                              <a href="product-listing.html">Polos</a>
                            </li>
                            <li>
                              <a href="product-listing.html">
                                Hoodies &amp; Sweatshirts
                        </a>
                            </li>
                            <li>
                              <a href="product-listing.html">Jackets &amp; Vests</a>
                            </li>
                            <li>
                              <a href="product-listing.html">Pants &amp; Tights</a>
                            </li>
                            <li>
                              <a href="product-listing.html">Shorts</a>
                            </li>
                          </ul>
                        </div>
                        <div className="mega-column">
                          <h4 className="mega-heading">Accessories</h4>
                          <ul className="mega-item">
                            <li>
                              <a href="product-listing.html">
                                Compression &amp; Nike Pro
                        </a>
                            </li>
                            <li>
                              <a href="product-listing.html">Tops &amp; T-Shirts</a>
                            </li>
                            <li>
                              <a href="product-listing.html">Polos</a>
                            </li>
                            <li>
                              <a href="product-listing.html">
                                Hoodies &amp; Sweatshirts
                        </a>
                            </li>
                            <li>
                              <a href="product-listing.html">Jackets &amp; Vests</a>
                            </li>
                            <li>
                              <a href="product-listing.html">Pants &amp; Tights</a>
                            </li>
                            <li>
                              <a href="product-listing.html">Shorts</a>
                            </li>
                          </ul>
                        </div>
                        <div className="mega-column">
                          <h4 className="mega-heading">BRAND</h4>
                          <ul className="mega-item">
                            <li>
                              <a href="product-listing.html">NIKE</a>
                            </li>
                            <li>
                              <a href="product-listing.html">Adidas</a>
                            </li>
                            <li>
                              <a href="product-listing.html">Dior</a>
                            </li>
                            <li>
                              <a href="product-listing.html">B&amp;G</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="menu-item">
                    <a href="#">Women</a>
                  </li>
                  <li className="menu-item">
                    <a href="#">Kids</a>
                  </li>
                  <li className="menu-item menu-item-has-children dropdown">
                    <a href="#">News</a>
                    <ul className="sub-menu">
                      <li className="menu-item menu-item-has-children dropdown">
                        <a href="blog-grid.html">Blog-grid</a>
                        <ul className="sub-menu">
                          <li className="menu-item">
                            <a href="blog-grid.html">Blog Grid 1</a>
                          </li>
                          <li className="menu-item">
                            <a href="blog-grid-2.html">Blog Grid 2</a>
                          </li>
                        </ul>
                      </li>
                      <li className="menu-item">
                        <a href="blog-list.html">Blog List</a>
                      </li>
                    </ul>
                  </li>
                  <li className="menu-item menu-item-has-children dropdown">
                    <a href="#">Contact</a>
                    <ul className="sub-menu">
                      <li className="menu-item">
                        <a href="contact-us.html">Contact Us #1</a>
                      </li>
                      <li className="menu-item">
                        <a href="contact-us.html">Contact Us #2</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
              <div className="navigation__column right">
                <form className="ps-search--header" action="do_action" method="post">
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Search Product…"
                  />
                  <button>
                    <i className="ps-icon-search" />
                  </button>
                </form>
                <div className="ps-cart">
                  <a className="ps-cart__toggle" href="#">
                    <span>
                      <i>20</i>
                    </span>
                    <i className="ps-icon-shopping-cart" />
                  </a>
                  <div className="ps-cart__listing">
                    <div className="ps-cart__content">
                      <div className="ps-cart-item">
                        <a className="ps-cart-item__close" href="#" />
                        <div className="ps-cart-item__thumbnail">
                          <a href="product-detail.html" />
                          <img src="images/cart-preview/1.jpg" alt />
                        </div>
                        <div className="ps-cart-item__content">
                          <a
                            className="ps-cart-item__title"
                            href="product-detail.html"
                          >
                            Amazin’ Glazin’
                    </a>
                          <p>
                            <span>
                              Quantity:<i>12</i>
                            </span>
                            <span>
                              Total:<i>£176</i>
                            </span>
                          </p>
                        </div>
                      </div>
                      <div className="ps-cart-item">
                        <a className="ps-cart-item__close" href="#" />
                        <div className="ps-cart-item__thumbnail">
                          <a href="product-detail.html" />
                          <img src="images/cart-preview/2.jpg" alt />
                        </div>
                        <div className="ps-cart-item__content">
                          <a
                            className="ps-cart-item__title"
                            href="product-detail.html"
                          >
                            The Crusty Croissant
                    </a>
                          <p>
                            <span>
                              Quantity:<i>12</i>
                            </span>
                            <span>
                              Total:<i>£176</i>
                            </span>
                          </p>
                        </div>
                      </div>
                      <div className="ps-cart-item">
                        <a className="ps-cart-item__close" href="#" />
                        <div className="ps-cart-item__thumbnail">
                          <a href="product-detail.html" />
                          <img src="images/cart-preview/3.jpg" alt />
                        </div>
                        <div className="ps-cart-item__content">
                          <a
                            className="ps-cart-item__title"
                            href="product-detail.html"
                          >
                            The Rolling Pin
                    </a>
                          <p>
                            <span>
                              Quantity:<i>12</i>
                            </span>
                            <span>
                              Total:<i>£176</i>
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="ps-cart__total">
                      <p>
                        Number of items:<span>36</span>
                      </p>
                      <p>
                        Item Total:<span>£528.00</span>
                      </p>
                    </div>
                    <div className="ps-cart__footer">
                      <a className="ps-btn" href="cart.html">
                        Check out
                  <i className="ps-icon-arrow-left" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="menu-toggle">
                  <span />
                </div>
              </div>
            </div>
          </nav>
        </header>
        <div className="header-services">
          <div
            className="ps-services owl-slider"
            data-owl-auto="true"
            data-owl-loop="true"
            data-owl-speed={7000}
            data-owl-gap={0}
            data-owl-nav="true"
            data-owl-dots="false"
            data-owl-item={1}
            data-owl-item-xs={1}
            data-owl-item-sm={1}
            data-owl-item-md={1}
            data-owl-item-lg={1}
            data-owl-duration={1000}
            data-owl-mousedrag="on"
          >
            <p className="ps-service">
              <i className="ps-icon-delivery" />
              <strong>Free delivery</strong>: Get free standard delivery on every
        order with Sky Store
      </p>
            <p className="ps-service">
              <i className="ps-icon-delivery" />
              <strong>Free delivery</strong>: Get free standard delivery on every
        order with Sky Store
      </p>
            <p className="ps-service">
              <i className="ps-icon-delivery" />
              <strong>Free delivery</strong>: Get free standard delivery on every
        order with Sky Store
      </p>
          </div>
        </div>
      </div>


      <Route path='/' exact={true} component={HomeScreen} />
      <Route path='/product/:id' component={ProductScreen} />
      <Route path='/cart/:id?' component={CartScreen} />
      <Route path='/signin' component={SigninScreen} />
      <Route path='/register' component={RegisterScreen} />
      <Route path='/products' component={ProductsScreen} />

      <div>
        <div className="ps-subscribe">
          <div className="ps-container">
            <div className="row">
              <div className="col-lg-3 col-md-12 col-sm-12 col-xs-12 ">
                <h3>
                  <i className="fa fa-envelope" />
            Sign up to Newsletter
          </h3>
              </div>
              <div className="col-lg-5 col-md-7 col-sm-12 col-xs-12 ">
                <form className="ps-subscribe__form" action="do_action" method="post">
                  <input className="form-control" type="text" placeholder />
                  <button>Sign up now</button>
                </form>
              </div>
              <div className="col-lg-4 col-md-5 col-sm-12 col-xs-12 ">
                <p>
                  ...and receive <span>$20</span> coupon for first shopping.
          </p>
              </div>
            </div>
          </div>
        </div>
        <div
          className="ps-footer bg--cover"
          data-background="images/background/parallax.jpg"
        >
          <div className="ps-footer__content">
            <div className="ps-container">
              <div className="row">
                <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12 ">
                  <aside className="ps-widget--footer ps-widget--info">
                    <header>
                      <a className="ps-logo" href="index.html">
                        <img src="images/logo-white.png" alt />
                      </a>
                      <h3 className="ps-widget__title">Address Office 1</h3>
                    </header>
                    <footer>
                      <p>
                        <strong>460 West 34th Street, 15th floor, New York</strong>
                      </p>
                      <p>
                        Email:{" "}
                        <a href="mailto:support@store.com">support@store.com</a>
                      </p>
                      <p>Phone: +323 32434 5334</p>
                      <p>Fax: ++323 32434 5333</p>
                    </footer>
                  </aside>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12 ">
                  <aside className="ps-widget--footer ps-widget--info second">
                    <header>
                      <h3 className="ps-widget__title">Address Office 2</h3>
                    </header>
                    <footer>
                      <p>
                        <strong>PO Box 16122 Collins Victoria 3000 Australia</strong>
                      </p>
                      <p>
                        Email:{" "}
                        <a href="mailto:support@store.com">support@store.com</a>
                      </p>
                      <p>Phone: +323 32434 5334</p>
                      <p>Fax: ++323 32434 5333</p>
                    </footer>
                  </aside>
                </div>
                <div className="col-lg-2 col-md-2 col-sm-4 col-xs-12 ">
                  <aside className="ps-widget--footer ps-widget--link">
                    <header>
                      <h3 className="ps-widget__title">Find Our store</h3>
                    </header>
                    <footer>
                      <ul className="ps-list--link">
                        <li>
                          <a href="#">Coupon Code</a>
                        </li>
                        <li>
                          <a href="#">SignUp For Email</a>
                        </li>
                        <li>
                          <a href="#">Site Feedback</a>
                        </li>
                        <li>
                          <a href="#">Careers</a>
                        </li>
                      </ul>
                    </footer>
                  </aside>
                </div>
                <div className="col-lg-2 col-md-2 col-sm-4 col-xs-12 ">
                  <aside className="ps-widget--footer ps-widget--link">
                    <header>
                      <h3 className="ps-widget__title">Get Help</h3>
                    </header>
                    <footer>
                      <ul className="ps-list--line">
                        <li>
                          <a href="#">Order Status</a>
                        </li>
                        <li>
                          <a href="#">Shipping and Delivery</a>
                        </li>
                        <li>
                          <a href="#">Returns</a>
                        </li>
                        <li>
                          <a href="#">Payment Options</a>
                        </li>
                        <li>
                          <a href="#">Contact Us</a>
                        </li>
                      </ul>
                    </footer>
                  </aside>
                </div>
                <div className="col-lg-2 col-md-2 col-sm-4 col-xs-12 ">
                  <aside className="ps-widget--footer ps-widget--link">
                    <header>
                      <h3 className="ps-widget__title">Products</h3>
                    </header>
                    <footer>
                      <ul className="ps-list--line">
                        <li>
                          <a href="#">Shoes</a>
                        </li>
                        <li>
                          <a href="#">Clothing</a>
                        </li>
                        <li>
                          <a href="#">Accessries</a>
                        </li>
                        <li>
                          <a href="#">Football Boots</a>
                        </li>
                      </ul>
                    </footer>
                  </aside>
                </div>
              </div>
            </div>
          </div>
          <div className="ps-footer__copyright">
            <div className="ps-container">
              <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 ">
                  <p>
                    © <a href="#">SKYTHEMES</a>, Inc. All rights Resevered. Design by{" "}
                    <a href="#"> Alena Studio</a>
                  </p>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 ">
                  <ul className="ps-social">
                    <li>
                      <a href="#">
                        <i className="fa fa-facebook" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-google-plus" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-twitter" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-instagram" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>;

    </BrowserRouter>
  );
}

export default App;
