import React, { useState } from 'react'
import { FaAngleDown, FaAngleUp } from 'react-icons/fa'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const Checkout = ({setOrder}) => {
    const [billingToggle, setBillingToggle] = useState(false)
    const [shippingTogle, setShippingTogle]=useState(false)
    const [paymentToggle, setPaymentToggle]=useState(false)
    const [paymentMethod, setPaymentMethod]=useState("cod")
    const cart=useSelector(state=>state.cart)
    const navigate=useNavigate()
    const [shipingInfo, setShipingInfo]=useState({
        address:"",
        city:"",
        zip:""
    })

    const handleOrder=()=>{
        const newOrder={
            products:cart.products,
            orderNumber: "12121",
            shipingInformation:shipingInfo,
            totalPrice:cart.totalPrice
        }
        setOrder(newOrder)
        navigate("/order-confirmation")
    }

    return (
        <div className='container  py-8 min-vh-100 px-4'>
            <h3 className='h3 mb-4'>CHECKOUT</h3>
            
            <div className='d-flex flex-column flex-md-row gap-4 mt-8'>
                {/* Left Section */}
                <div className='col-12 col-md-8'>
                    <div className='border p-4 mb-6 rounded shadow'>
                        <div className='d-flex justify-content-between cursor-pointer'
                             onClick={() => setBillingToggle(!billingToggle)}
                        >
                            <h3 className='h5 mb-2'>Billing Information</h3>
                            {billingToggle ? <FaAngleUp /> : <FaAngleDown />}
                        </div>
                        <div className={`mt-4 ${billingToggle ? "" : "d-none"}`}>
                            <div>
                                <label className='form-label' htmlFor="name">Name</label>
                                <input
                                    className='form-control'
                                    type="text"
                                    id="name"
                                    placeholder='Enter your name'
                                />
                            </div>
                            <div>
                                <label className='form-label' htmlFor="email">Email</label>
                                <input
                                    className='form-control'
                                    type="email"
                                    id="email"
                                    placeholder='Enter your email'
                                />
                            </div>
                            <div>
                                <label className='form-label' htmlFor="phone">Phone</label>
                                <input
                                    className='form-control'
                                    type="text"
                                    id="phone"
                                    placeholder='Enter your phone'
                                />
                            </div>
                        </div>
                    </div>
                    
                    <div className='border p-4 mb-6 rounded shadow'>
                        <div className='d-flex justify-content-between cursor-pointer'
                             onClick={() => setShippingTogle(!shippingTogle)}
                        >
                            <h3 className='h5 mb-2'>Shipping Information</h3>
                            {shippingTogle ? <FaAngleUp /> : <FaAngleDown />}
                        </div>
                        <div className={`mt-4 ${shippingTogle ? "" : "d-none"}`}>
                            <div>
                                <label className='form-label' htmlFor="address">Address</label>
                                <input
                                    className='form-control'
                                    type="text"
                                    id="address"
                                    placeholder='Enter your address'
                                    onChange={(e)=>setShipingInfo({...shipingInfo, address:e.target.value})}
                                />
                            </div>
                            <div>
                                <label className='form-label' htmlFor="city">City</label>
                                <input
                                    className='form-control'
                                    type="text"
                                    id="city"
                                    placeholder='Enter your city name'
                                    onChange={(e)=>setShipingInfo({...shipingInfo, city:e.target.value})}
                                />
                            </div>
                            <div>
                                <label className='form-label' htmlFor="zipcode">Zip Code</label>
                                <input
                                    className='form-control'
                                    type="text"
                                    id="zipcode"
                                    placeholder='Enter Zip Code'
                                    onChange={(e)=>setShipingInfo({...shipingInfo, zip:e.target.value})}
                                />
                            </div>
                        </div>
                    </div>
                    {/* Payment method */}
                    <div className='border p-4 mb-6 rounded shadow'>
                        <div className='d-flex justify-content-between cursor-pointer'
                             onClick={() => setPaymentToggle(!paymentToggle)}
                        >
                            <h3 className='h5 mb-2'>Payment Method</h3>
                            {paymentToggle ? <FaAngleUp /> : <FaAngleDown />}
                        </div>
                        <div className={`mt-4 ${paymentToggle ? "" : "d-none"}`}>
                            <div className='d-flex align-items-center mb-2'>
                                <input
                                    type="radio"
                                    id="payment"
                                    checked={paymentMethod==="cod"}
                                    onChange={()=>setPaymentMethod("cod")}
                                />
                                <label className='ms-2'>Cash on delivery</label>
                            </div>
                            <div className='d-flex align-items-center mb-2'>
                                <input
                                    type="radio"
                                    id="payment"
                                    checked={paymentMethod==="dc"}
                                    onChange={()=>setPaymentMethod("dc")}
                                />
                                <label className='ms-2'>Debit card</label>
                            </div>
                            {paymentMethod ==="dc" && (
                                <div className='bg-light p-4 rounded mb-4'>
                                    <h3 className='h5 mb-4'>Debit Card Information</h3>
                                    <div className='mb-4'>
                                        <label htmlFor="" className='form-label mb-2'>
                                            Card Number
                                        </label>
                                        <input
                                         type="text" 
                                         placeholder='Enter card number'
                                         className='form-control' />
                                    </div>
                                    <div className='mb-4'>
                                        <label htmlFor="" className='form-label mb-2'>Card Holder Name</label>
                                        <input 
                                        type="text" 
                                        placeholder='Enter holder card name'
                                        className='form-control'  />
                                    </div>
                                    <div className='d-flex justify-content-between mb-4'>
                                        <div className='w-50 pe-2'>
                                            <label htmlFor="" className='form-label mb-2'>Expire Date</label>
                                            <input 
                                            type="text" 
                                            placeholder='MM/YY'
                                            className='form-control' 
                                            required/>
                                        </div>
                                        <div className='w-50 ps-2'>
                                            <label htmlFor="" className='form-label mb-2'>CVV</label>
                                            <input 
                                            type="text"
                                            placeholder='CVV'
                                            className='form-control'
                                            required
                                             />
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
                
                {/* Right Section (Summary) */}
                <div className="col-12 col-md-4 bg-white p-4 rounded shadow-lg border">
                    <h3 className="h5 border-bottom pb-3 mb-4">Order Summary</h3>
                    <div>
                        {cart.products.map((product, index) => (
                            <div key={index} className="d-flex align-items-center border-bottom pb-3">
                                <img src={product.image} alt={product.name} className="w-25 h-25 object-cover rounded me-3" />
                                <div className="flex-grow-1">
                                    <h3 className="h6">{product.name}</h3>
                                    <p>${product.price} x {product.quantity}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="mt-4 d-flex justify-content-between align-items-center border-top pt-3">
                        <span className="h5">Total Price:</span>
                        <span className="h4 text-primary">${cart.totalPrice.toFixed(2)}</span>
                    </div>
                    <button 
                    onClick={handleOrder}
                    className="btn btn-primary w-100 py-3 mt-4 text-lg font-semibold">
                        Place Order
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Checkout
