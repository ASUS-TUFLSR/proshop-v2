import React from 'react';
import ReactDOM from 'react-dom/client';
// import 'bootstrap/dist/css/bootstrap.min.css';
import './assests/bootstrap.min.css'
import './assests/index.css'
import { createBrowserRouter, createRoutesFromElements, Route,RouterProvider} from 'react-router-dom'
import App from './App';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
       <Route index={true} path='/' element={<HomeScreen/>} ></Route>
       <Route path='/product/:id' element={<ProductScreen/>}></Route>
    </Route>
  )
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);


