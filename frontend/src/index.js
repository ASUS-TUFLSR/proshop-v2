import React from 'react';
import ReactDOM from 'react-dom/client';
// import 'bootstrap/dist/css/bootstrap.min.css';
import './assests/bootstrap.min.css'
import './assests/index.css'
import { createBrowserRouter, createRoutesFromElements, Route,RouterProvider} from 'react-router-dom'
import store from './store';
import { Provider } from 'react-redux';
import App from './App';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
       <Route index={true} path='/' element={<HomeScreen/>} ></Route>
       <Route path='/product/:id' element={<ProductScreen/>}></Route>
       <Route path='/cart' element={<CartScreen/>}></Route>
    </Route>
  )
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}/>
      </Provider>
  </React.StrictMode>
);


