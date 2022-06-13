import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import PreLoader from '../custom/PreLoader';
import ErrorPage from '../pages/ErrorPage';
import PrivateOutlet from '../PrivateRoute/PrivateOutlet';


const Home = React.lazy(()=> import('../pages/Home'));
const NewProduct = React.lazy(()=> import('../pages/NewProduct'));
const BestSales = React.lazy(()=> import('../pages/BestSales'));
const ProductDetails= React.lazy(()=> import('../components/ProductDetails/ProductDetails'));
const CategoryProducts = React.lazy(()=> import('../components/CategoryProduct/CategoryProducts'));
const PriceCart = React.lazy(()=> import('../components/PriceCart/PriceCart'));
const Shipping = React.lazy(()=> import('../components/Shipping/Shipping'));
const Shop = React.lazy(()=> import('../pages/Shop'));
const Faq = React.lazy(()=> import('../components/Faq'));
const Condition = React.lazy(()=> import('../components/Condition'));
const ContactUsPage = React.lazy(()=> import('../pages/ContactUsPage'));
const LoginPage = React.lazy(() => import('../pages/LoginPage'));
const RegisterPage = React.lazy(() => import('../pages/RegisterPage'));
const ProceedOrder = React.lazy(() => import('../components/ProceedOrder/ProceedOrder'));
const Payment = React.lazy(() => import('../components/Payment/Payment'));

const Main = () => {
    return (
        <Suspense fallback={<PreLoader />}>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/newproducts" element={<NewProduct />} />
                <Route path="/bestsales" element={<BestSales />} />
                <Route path="/shop" element={<Shop />} />
                <Route path="/product_details_:id" element={<ProductDetails />} />
                <Route path="/catagory/:category" element={<CategoryProducts />} />
                <Route path="/cart" element={ <PriceCart />} />
                <Route path="/faq" element={<Faq />} />
                <Route path="/conditions" element={<Condition />} />
                <Route path="/policy" element={<Condition />} />
                <Route path="/contactus" element={<ContactUsPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/*" element={<ErrorPage />} />
                {/* Private route manage  */}
                <Route path="/*" element={<PrivateOutlet />}>
                    <Route path="shipping" element={<Shipping />} />
                    <Route path="proceed_order" element = {<ProceedOrder />} />
                    <Route path="payment" element = {<Payment />} />
                </Route>
            </Routes>
        </Suspense>
    );
};

export default Main;