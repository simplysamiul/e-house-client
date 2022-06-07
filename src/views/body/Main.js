import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import PriceCart from '../components/PriceCart/PriceCart';
import PreLoader from '../custom/PreLoader';


const Home = React.lazy(()=> import('../pages/Home'));
const NewProduct = React.lazy(()=> import('../pages/NewProduct'));
const BestSalesPage = React.lazy(()=> import('../components/bestSales/BestSalesPage'));
const ProductDetails= React.lazy(()=> import('../components/ProductDetails/ProductDetails'));
const CategoryProducts = React.lazy(()=> import('../components/CategoryProduct/CategoryProducts'));
const ShopPage = React.lazy(()=> import('../components/shop/ShopPage'));
const Faq = React.lazy(()=> import('../components/Faq'));
const Condition = React.lazy(()=> import('../components/Condition'));
const ContactUs = React.lazy(()=> import('../components/ContactUs'));

const Main = () => {
    return (
        <Suspense fallback={<PreLoader />}>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/newproducts" element={<NewProduct />} />
                <Route path="/bestsales" element={<BestSalesPage />} />
                <Route path="/shop" element={<ShopPage />} />
                <Route path="/product_details_:id" element={<ProductDetails />} />
                <Route path="/catagory/:category" element={<CategoryProducts />} />
                <Route path="/cart" element={<PriceCart />} />
                <Route path="/faq" element={<Faq />} />
                <Route path="/conditions" element={<Condition />} />
                <Route path="/policy" element={<Condition />} />
                <Route path="/contactus" element={<ContactUs />} />
            </Routes>
        </Suspense>
    );
};

export default Main;