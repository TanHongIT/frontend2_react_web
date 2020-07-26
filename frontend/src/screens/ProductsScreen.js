import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import {
  saveProduct,
  listProducts,
  deleteProduct,
} from '../actions/productActions';

function ProductsScreen(props) {
  const [modalVisible, setModalVisible] = useState(false);
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState('');
  const [brand, setBrand] = useState('');
  const [category, setCategory] = useState('');
  const [countInStock, setCountInStock] = useState('');
  const [description, setDescription] = useState('');
  const [uploading, setUploading] = useState(false);
  const productList = useSelector((state) => state.productList);
  const { loading, products, error } = productList;

  const productSave = useSelector((state) => state.productSave);
  const {
    loading: loadingSave,
    success: successSave,
    error: errorSave,
  } = productSave;

  const productDelete = useSelector((state) => state.productDelete);
  const {
    loading: loadingDelete,
    success: successDelete,
    error: errorDelete,
  } = productDelete;
  const dispatch = useDispatch();

  useEffect(() => {
    if (successSave) {
      setModalVisible(false);
    }
    dispatch(listProducts());
    return () => {
      //
    };
  }, [successSave, successDelete]);

  const openModal = (product) => {
    setModalVisible(true);
    setId(product._id);
    setName(product.product_name);
    setPrice(product.product_price);
    setDescription(product.product_description);
    setImage(product.image);
    setBrand(product.brand);
    setCategory(product.category_id);
    setCountInStock(product.countInStock);
  };
  const submitHandler = (e) => {
    (e).preventDefault();
    dispatch(saveProduct({ _id: id, name, price, image, brand, category, countInStock, description }));
  }

  const deleteHandler = (product) => {

    dispatch(deleteProduct(product._id));
  };
  const uploadFileHandler = (e) => {
    const file = e.target.files[0];
    const bodyFormData = new FormData();
    bodyFormData.append('image', file);
    setUploading(true);
    axios
      .post('/api/uploads/s3', bodyFormData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then((response) => {
        setImage(response.data);
        setUploading(false);
      })
      .catch((err) => {
        console.log(err);
        setUploading(false);
      });
  };
  return (
    <div className="content content-margined">
      <div className="product-header">
        <h3>Products Manager</h3>
        <br /><br />
        <button className="btn btn-success" onClick={() => openModal({})}>
          Create Product
        </button>
      </div>
      {modalVisible && (
        <div className="ps-contact ps-contact--2 ps-section pt-80 pb-80">
          <div className="ps-container">
            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 ">
                <div className="ps-section__header pt-50">
                  <h2 className="ps-section__title" data-mask="CHIKOIQUAN">
                    - Create Product
          </h2>
                  <form className="ps-contact__form" onSubmit={submitHandler} method="post">
                    <div className="form-group">
                      <label>
                        Name <sub>*</sub>
                      </label>
                      <input value={name} required name="name" id="name" className="form-control" onChange={(e) => setName(e.target.value)} type="text" placeholder />
                    </div>
                    <div className="form-group">
                      <label>
                        price <sub>*</sub>
                      </label>
                      <input value={price} required name="price" id="price" className="form-control" onChange={(e) => setPrice(e.target.value)} type="text" placeholder />
                    </div>
                    <div className="form-group mb-25">
                      <label>
                        image <sub>*</sub>
                      </label>
                      <input value={image} required name="image" id="image" className="form-control" onChange={(e) => setImage(e.target.value)} type="text" placeholder />
                    </div>
                    <div className="form-group mb-25">
                      <label>
                        brand <sub>*</sub>
                      </label>
                      <input value={brand} required name="brand" id="brand" className="form-control" onChange={(e) => setBrand(e.target.value)} type="text" placeholder />
                    </div>
                    <div className="form-group mb-25">
                      <label>
                        countInStock <sub>*</sub>
                      </label>
                      <input value={countInStock} required name="countInStock" id="countInStock" className="form-control" onChange={(e) => setCountInStock(e.target.value)} type="text" placeholder />
                    </div>
                    <div className="form-group mb-25">
                      <label>
                        category <sub>*</sub>
                      </label>
                      <input value={category} required name="category" id="category" className="form-control" onChange={(e) => setCategory(e.target.value)} type="text" placeholder />
                    </div>
                    <div className="form-group mb-25">
                      <label>
                        description <sub>*</sub>
                      </label>
                      <input value={description} required name="description" id="description" className="form-control" onChange={(e) => setDescription(e.target.value)} type="text" placeholder />
                    </div>
                    <div className="form-group">
                      <button type="submit" className="btn btn-success">
                        {id ? 'Update' : 'Create'} <i className="ps-icon-next" />
                      </button>
                    </div>
                    <button
                      type="button"
                      onClick={() => setModalVisible(false)}
                      className="btn btn-info"
                    >
                      Back
                </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
      }

      <div className="product-list">
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Price</th>
              <th>Category</th>
              <th>Brand</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product._id}>
                <td>{product._id}</td>
                <td>{product.product_name}</td>
                <td>{product.product_price}</td>
                <td>{product.category_id}</td>
                <td>{product.brand}</td>
                <td>
                  <button
                    className="btn btn btn-primary" onClick={() => openModal(product)}
                  >
                    Edit
                  </button>{' '}
                  <button
                    className="btn btn btn-danger"
                    onClick={() => deleteHandler(product)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default ProductsScreen;
