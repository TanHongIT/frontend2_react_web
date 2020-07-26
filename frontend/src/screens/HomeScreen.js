import React, { /*useState,*/ useEffect } from 'react'
// import axios from "axios";
// import { productListReducer } from '../reducers/productReducers';
import { listProducts } from '../actions/productActions';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import Rating from '../components/Rating';
function HomeScreen() {
  // const [products, setProducts] = useState([]);
  const productList = useSelector((state) => state.productList);
  const { products, loading, error } = productList;
  const dispatch = useDispatch();
  useEffect(() => {
    // const fetchData = async () => {
    //     const { data } = await axios.get("api/products");
    //     setProducts(data);
    // }
    // //call
    // fetchData();
    dispatch(listProducts());

    return () => {

    };
  }, [])
  return (
    loading ? <div>Loading...</div> :
      error ? <div>{error}</div> : (
        <main className="ps-main">
          <div className="ps-products-wrap pt-80 pb-80">
            <div className="ps-products" data-mh="product-listing">
              <div className="ps-product-action">
                <div className="ps-product__filter">
                  <select className="ps-select selectpicker">
                    <option value={1}>Shortby</option>
                    <option value={2}>Name</option>
                    <option value={3}>Price (Low to High)</option>
                    <option value={3}>Price (High to Low)</option>
                  </select>
                </div>
                <div className="ps-pagination">
                  <ul className="pagination">
                    <li>
                      <a href="#">
                        <i className="fa fa-angle-left" />
                      </a>
                    </li>
                    <li className="active">
                      <a href="#">1</a>
                    </li>
                    <li>
                      <a href="#">2</a>
                    </li>
                    <li>
                      <a href="#">3</a>
                    </li>
                    <li>
                      <a href="#">...</a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-angle-right" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>


              <div className="ps-product__columns">
                {/* product */}
                {products.map((product) => (
                  <div className="ps-product__column">
                    <div className="ps-shoe mb-30">
                      <div className="ps-shoe__thumbnail">
                        <a className="ps-shoe__favorite" href="#">
                          <i className="ps-icon-heart" />
                        </a>
                        <Link to={'/product/' + product._id}><img src={"/images/products/" + product.image} alt='product' /></Link>
                        <a className="ps-shoe__overlay" href={'/product/' + product._id} />
                      </div>
                      <div className="ps-shoe__content">
                        <div class="ps-shoe__variants">
                          <a href={"/cart/" + product._id + "?qty=1"} className='ps-btn btn btn-primary btn-add-to-cart-home'>Add to Cart</a>
                        </div>
                        <div className="ps-shoe__detail">
                          <a className="ps-shoe__name" href={'/product/' + product._id}>
                            {product.product_name}
                          </a>
                          <p className="ps-shoe__categories">
                            Cate: <a href="#">{product.category_id}</a>, Brand: <a href="#">{product.brand}</a>.
                        </p>
                          <span style={{ paddingTop: 15 }} className="ps-shoe__price"> <Link to={'/product/' + product._id}>{product.product_price} Đ</Link></span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
                {/* end product */}
              </div>


              <div className="ps-product-action">
                <div className="ps-product__filter">
                  <select className="ps-select selectpicker">
                    <option value={1}>Shortby</option>
                    <option value={2}>Name</option>
                    <option value={3}>Price (Low to High)</option>
                    <option value={3}>Price (High to Low)</option>
                  </select>
                </div>
                <div className="ps-pagination">
                  <ul className="pagination">
                    <li>
                      <a href="#">
                        <i className="fa fa-angle-left" />
                      </a>
                    </li>
                    <li className="active">
                      <a href="#">1</a>
                    </li>
                    <li>
                      <a href="#">2</a>
                    </li>
                    <li>
                      <a href="#">3</a>
                    </li>
                    <li>
                      <a href="#">...</a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-angle-right" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="ps-sidebar" data-mh="product-listing">
              <aside className="ps-widget--sidebar ps-widget--category">
                <div className="ps-widget__header">
                  <h3>Category</h3>
                </div>
                <div className="ps-widget__content">
                  <ul className="ps-list--checked">
                    <li className="current">
                      <a href="product-listing.html">Life(521)</a>
                    </li>
                    <li>
                      <a href="product-listing.html">Running(76)</a>
                    </li>
                    <li>
                      <a href="product-listing.html">Baseball(21)</a>
                    </li>
                    <li>
                      <a href="product-listing.html">Football(105)</a>
                    </li>
                    <li>
                      <a href="product-listing.html">Soccer(108)</a>
                    </li>
                    <li>
                      <a href="product-listing.html">Trainning &amp; game(47)</a>
                    </li>
                    <li>
                      <a href="product-listing.html">More</a>
                    </li>
                  </ul>
                </div>
              </aside>
              <aside className="ps-widget--sidebar ps-widget--filter">
                <div className="ps-widget__header">
                  <h3>Category</h3>
                </div>
                <div className="ps-widget__content">
                  <div
                    className="ac-slider"
                    data-default-min={300}
                    data-default-max={2000}
                    data-max={3450}
                    data-step={50}
                    data-unit="$"
                  />
                  <p className="ac-slider__meta">
                    Price:
            <span className="ac-slider__value ac-slider__min" />-
            <span className="ac-slider__value ac-slider__max" />
                  </p>
                  <a className="ac-slider__filter ps-btn" href="#">
                    Filter
          </a>
                </div>
              </aside>
              <aside className="ps-widget--sidebar ps-widget--category">
                <div className="ps-widget__header">
                  <h3>Sky Brand</h3>
                </div>
                <div className="ps-widget__content">
                  <ul className="ps-list--checked">
                    <li className="current">
                      <a href="product-listing.html">Nike(521)</a>
                    </li>
                    <li>
                      <a href="product-listing.html">Adidas(76)</a>
                    </li>
                    <li>
                      <a href="product-listing.html">Baseball(69)</a>
                    </li>
                    <li>
                      <a href="product-listing.html">Gucci(36)</a>
                    </li>
                    <li>
                      <a href="product-listing.html">Dior(108)</a>
                    </li>
                    <li>
                      <a href="product-listing.html">B&amp;G(108)</a>
                    </li>
                    <li>
                      <a href="product-listing.html">Louis Vuiton(47)</a>
                    </li>
                  </ul>
                </div>
              </aside>
              <aside className="ps-widget--sidebar ps-widget--category">
                <div className="ps-widget__header">
                  <h3>Width</h3>
                </div>
                <div className="ps-widget__content">
                  <ul className="ps-list--checked">
                    <li className="current">
                      <a href="product-listing.html">Narrow</a>
                    </li>
                    <li>
                      <a href="product-listing.html">Regular</a>
                    </li>
                    <li>
                      <a href="product-listing.html">Wide</a>
                    </li>
                    <li>
                      <a href="product-listing.html">Extra Wide</a>
                    </li>
                  </ul>
                </div>
              </aside>
              <div className="ps-sticky desktop">
                <aside className="ps-widget--sidebar">
                  <div className="ps-widget__header">
                    <h3>Size</h3>
                  </div>
                  <div className="ps-widget__content">
                    <table className="table ps-table--size">
                      <tbody>
                        <tr>
                          <td className="active">3</td>
                          <td>5.5</td>
                          <td>8</td>
                          <td>10.5</td>
                          <td>13</td>
                        </tr>
                        <tr>
                          <td>3.5</td>
                          <td>6</td>
                          <td>8.5</td>
                          <td>11</td>
                          <td>13.5</td>
                        </tr>
                        <tr>
                          <td>4</td>
                          <td>6.5</td>
                          <td>9</td>
                          <td>11.5</td>
                          <td>14</td>
                        </tr>
                        <tr>
                          <td>4.5</td>
                          <td>7</td>
                          <td>9.5</td>
                          <td>12</td>
                          <td>14.5</td>
                        </tr>
                        <tr>
                          <td>5</td>
                          <td>7.5</td>
                          <td>10</td>
                          <td>12.5</td>
                          <td>15</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </aside>
              </div>
            </div>

          </div>
        </main >

      ));
}

export default HomeScreen;
