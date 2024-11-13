import React from 'react';
import ReactDOM from 'react-dom/client';
// import 'bootstrap/dist/css/bootstrap.min.css';
import './assests/bootstrap.min.css'
import './assests/index.css'
import { createBrowserRouter, createRoutesFromElements, Route,RouterProvider} from 'react-router-dom'
import { PayPalScriptProvider } from '@paypal/react-paypal-js'
import store from './store';
import { Provider } from 'react-redux';
import App from './App';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import ShippingScreen from './screens/ShippingScreen';
import PrivateRoute from './components/PrivateRoute';
import AdminRoute from './components/AdminRoute';
import PaymentScreen from './screens/PaymentScreen';
import PlaceOrderScreen from './screens/PlaceOrderScreen';
import OrderScreen from './screens/OrderScreen';
import ProfileScreen from './screens/ProfileScreen';
import OrderListScreen from './screens/OrderListScreen';
import ProductListScreen from './screens/ProductListScreen'
import ProductEditScreen from './screens/ProductEditScreen';
import UserListScreen from './screens/UserListScreen';
import UserEditScreen from './screens/UserEditScreen';



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
       <Route index={true} path='/' element={<HomeScreen/>} ></Route>
       <Route  path='/search/:keyword' element={<HomeScreen/>} ></Route>
       <Route  path='/search/:keyword/page/:pageNumber' element={<HomeScreen/>} ></Route>
       <Route  path='/page/:pageNumber' element={<HomeScreen/>} ></Route>
       <Route path='/product/:id' element={<ProductScreen/>}></Route>
       <Route path='/cart' element={<CartScreen/>}></Route>
       <Route path='/login' element={<LoginScreen/>}></Route>
       <Route path='/register' element={<RegisterScreen/>}></Route>
       

       <Route path='' element={<PrivateRoute/>}>
       <Route path='/shipping' element={<ShippingScreen/>}></Route>
       <Route path='/payment' element={<PaymentScreen/>}></Route>
       <Route path='/placeorder' element={<PlaceOrderScreen/>}></Route>
       <Route path='/order/:id' element={<OrderScreen/>}/>
       <Route path='/profile' element={<ProfileScreen/>}/>
        </Route>

        <Route path='' element={<AdminRoute/>}>

       <Route path='/admin/orderlist' element={<OrderListScreen/>}></Route>
       <Route path='/admin/productlist' element={<ProductListScreen/>}></Route>
       <Route path='/admin/productlist/:pageNumber' element={<ProductListScreen/>}></Route>
       <Route path='/admin/product/:id/edit' element={<ProductEditScreen/>}></Route>
       <Route path='/admin/userlist' element={<UserListScreen/>}></Route>
       <Route path='/admin/user/:id/edit' element={<UserEditScreen/>}></Route>
        </Route>
    </Route>
  )
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
     <PayPalScriptProvider deferLoading={true} >
      <RouterProvider router={router}/>
     </PayPalScriptProvider>
    </Provider>
  </React.StrictMode>
);


