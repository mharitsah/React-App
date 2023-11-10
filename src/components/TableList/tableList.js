import React, { useState } from 'react';
import './tableList.css';

const TableList = () => {
    const initialProducts = [
      { id: 1, name: 'Product 1', category: 'Category 1', price: 100, quantity: 10 },
      { id: 2, name: 'Product 2', category: 'Category 2', price: 150, quantity: 8 },
      { id: 3, name: 'Product 3', category: 'Category 1', price: 120, quantity: 12 },
      { id: 4, name: 'Product 4', category: 'Category 3', price: 200, quantity: 15 },
      { id: 5, name: 'Product 5', category: 'Category 2', price: 180, quantity: 9 },
    ];
  
    const [showTable, setShowTable] = useState(true);
    const [products, setProducts] = useState(initialProducts);
    const [newProduct, setNewProduct] = useState({
      name: '',
      category: '',
      price: '',
      quantity: '',
    });
  
    const toggleTable = () => {
      setShowTable(!showTable);
    };
  
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setNewProduct({
        ...newProduct,
        [name]: value,
      });
    };
  
    const addProduct = () => {
      setProducts([...products, { ...newProduct, id: products.length + 1 }]);
      setNewProduct({
        name: '',
        category: '',
        price: '',
        quantity: '',
      });
    };
  
    const deleteProduct = (productName) => {
      const updatedProducts = products.filter((product) => product.name !== productName);
      setProducts(updatedProducts);
    };
  
    return (
      <div>
        <button onClick={toggleTable}>{showTable ? 'Hide Table' : 'Show Table'}</button>
        {showTable && (
          <div>
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Category</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {products.map((product) => (
                  <tr key={product.id}>
                    <td>{product.id}</td>
                    <td>{product.name}</td>
                    <td>{product.category}</td>
                    <td>{product.price}</td>
                    <td>{product.quantity}</td>
                    <td>
                      <button onClick={() => deleteProduct(product.name)}>Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div>
              <h2>Add New Product</h2>
              <form>
                <label>Name:</label>
                <input type="text" name="name" value={newProduct.name} onChange={handleInputChange} />
  
                <label>Category:</label>
                <input type="text" name="category" value={newProduct.category} onChange={handleInputChange} />
  
                <label>Price:</label>
                <input type="text" name="price" value={newProduct.price} onChange={handleInputChange} />
  
                <label>Quantity:</label>
                <input type="text" name="quantity" value={newProduct.quantity} onChange={handleInputChange} />
  
                <button type="button" onClick={addProduct}>
                  Add Product
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    );
  };

export default TableList;
