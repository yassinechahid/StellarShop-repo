import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import emptycart from '../assets/images/emptycart.jpg'
import { FaTrashAlt } from 'react-icons/fa'
import ChangeAdress from '../components/ChangeAdress'
import Modal from '../components/Modal'
import '../Cart.css'
import { decreaseQuantity, increaseQuantity, removeFromCart } from '../redux/cartSlice'
import {useNavigate } from 'react-router-dom'

const Cart = () => {
    const cart = useSelector(state => state.cart);
    const [address, setAddress] = useState("main street, 0012")
    const [isModelOpen, setIsModelOpen] = useState(false)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    return (
        <div className='container py-5'>
            {cart.products.length > 0 ? 
                <div>
                    <h3 className='h4 font-weight-semibold mb-4'>SHOPPING CART</h3>
                    <div className='row'>
                        <div className='col-md-8'>
                            <div >
                                <div className="table-container">
                                    <table >
                                        <thead>
                                            <tr>
                                                <th className='text-left'>PRODUCT IMAGE</th>
                                                <th className='text-left'>PRODUCT NAME</th>
                                                <th className='text-left'>PRICE</th>
                                                <th className='text-left'>QUANTITY</th>
                                                <th className='text-left'>SUBTOTAL</th>
                                                <th className='text-left'>REMOVE</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {cart.products.map((product) => (
                                                <tr key={product.id}>
                                                    <td>
                                                        <div className='d-flex align-items-center'>
                                                            <img src={product.image} alt={product.name} style={{width:100}} />
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <h5>{product.name}</h5>
                                                    </td>
                                                    <td>${product.price}</td>
                                                    <td>
                                                        <div className='d-flex justify-content-between align-items-center '>
                                                            <button
                                                                className='btn btn-outline-secondary btn-sm'
                                                                onClick={() => dispatch(decreaseQuantity(product.id))}
                                                            >
                                                                -
                                                            </button>
                                                            <p>{product.quantity}</p>
                                                            <button
                                                                className='btn btn-outline-secondary btn-sm'
                                                                onClick={() => dispatch(increaseQuantity(product.id))}
                                                            >
                                                                +
                                                            </button>
                                                        </div>
                                                    </td>
                                                    <td>${(product.quantity * product.price).toFixed(2)}</td>
                                                    <td>
                                                        <button
                                                            className='btn btn-danger'
                                                            onClick={() => {
                                                                dispatch(removeFromCart(product.id));
                                                                alert(`${product.name} has been removed from the cart`);
                                                              }}
                                                        >
                                                            <FaTrashAlt />
                                                        </button>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>

                        <div className='col-md-4 bg-white p-4 rounded shadow'>
                            <h5 className='font-weight-semibold mb-4'>CART TOTAL:</h5>
                            <div className='d-flex justify-content-between mb-3 border-bottom pb-2'>
                                <span>Total Items:</span>
                                <span>{cart.totalQuantity}</span>
                            </div>
                            <div className='mb-3 border-bottom pb-2'>
                                <p>Shipping to:</p>
                                <p>
                                    <span className='font-weight-bold'>{address}</span>
                                </p>
                                <button
                                    className='btn btn-link p-0'
                                    onClick={() => setIsModelOpen(true)}
                                >
                                    Change address
                                </button>
                            </div>
                            <div className='d-flex justify-content-between mb-4'>
                                <span>Total Price:</span>
                                <span>${cart.totalPrice.toFixed(2)}</span>
                            </div>
                            <button
                                className='btn btn-danger w-100'
                                onClick={() => navigate('/checkout')}
                            >
                                Proceed to checkout
                            </button>
                        </div>
                    </div>
                    <Modal
                        isModelOpen={isModelOpen}
                        setIsModelOpen={setIsModelOpen}
                    >
                        <ChangeAdress setAddress={setAddress} setIsModelOpen={setIsModelOpen} />
                    </Modal>
                </div>
                : 
                <div className='d-flex justify-content-center'>
                    <img src={emptycart} alt="Empty Cart" />
                </div>
            }
        </div>
    )
}

export default Cart;
