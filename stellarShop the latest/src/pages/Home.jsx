import React, { useEffect } from 'react'
import { Categories, mockData } from '../assets/mockData'
import heroimage from '../assets/images/heroimage.jpg'
import InfoSection from '../components/InfoSection'
import CategorySection from '../components/CategorySection'
import { setProducts } from '../redux/productSlice'
import { useDispatch, useSelector } from 'react-redux'
import ProductCard from '../components/ProductCard'
import Shop from './Shop'
import { Link } from 'react-router-dom'
import '../Categorycss1.css'

const Home = () => {
    const dispatch = useDispatch()
    const products = useSelector(state => state.product)

    useEffect(() => {
        // setProducts in the redux store
        dispatch(setProducts(mockData))
    }, [dispatch])

    return (
        <div>
            <div className='bg-white mt-2 px-4 px-md-16 px-lg-24'>
                <div className='container py-4 d-flex flex-column flex-md-row'>
                    <div className='col-12 col-md-3 px-4'>
                        <div className='bg-danger text-white text-xs font-weight-bold px-2 py-2.5'>
                            Shop By Categories
                        </div>
                        <ul className=' bg-light p-3 border'>

                            {
                                Categories.map((category, index) => (
                                    
                                    <li id='categorycss'  key={index} className="d-flex align-items-center text-sm font-weight-medium">
                                      <div  className="w-2 mx-2 "></div>
                                      <Link id='categorycss' className="nav-link" to={`/category/${category}`}>{category}</Link>
                                    </li>
                                  
                                ))
                            }
                        </ul>
                    </div>
                    <div className='col-12 col-md-9 mt-4 mt-md-0 position-relative' style={{height: '400px'}}>
                        <img src={heroimage} alt="Hero" className='h-100 w-100 object-cover'/>
                        <div className='position-absolute top-0 left-0 p-4'>
                            <p className='text-info mb-4'>Code with Yassine</p>
                            <h2 className='text-light font-weight-bold' style={{fontSize: '2.5rem'}}>Welcome To StellarShop</h2>
                            <p className='text-xl mt-2.5 font-weight-bold text-warning' style={{fontSize: '1.5rem'}}>MILLIONS + PRODUCTS</p>
                            <Link to="/shop">
                                <button className='btn btn-danger px-4 py-2 mt-4  shop-now-btn'>
                                    SHOP NOW 
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
                <InfoSection />
                <CategorySection />
                <div className='container py-12'>
                    <h2 className='h2 font-weight-bold mb-6 d-flex justify-content-center'>Top Products</h2>
                    <div className='row g-4'>
                        {products.products.slice(33, 41).map((product) => (
                            <div className='col-12 col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center' key={product.id}>
                               <div className="product-card-wrapper">
                                <ProductCard product={product} />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Shop />
        </div>
    )
}

export default Home
