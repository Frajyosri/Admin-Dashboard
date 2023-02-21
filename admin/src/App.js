import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './App.css';
import Home from './componants/Home/home';
import User from './pages/Users/user.jsx';
import Commande from './pages/commande/commande.jsx';
import Objective from './pages/objective/objective.jsx';
import Product from './pages/product/product.jsx';
import Location from './pages/location/location.jsx';
import Sidbar from './componants/sidbar/sidbar';
import Error from "./componants/CosError/Error.jsx";
import Login from "./pages/login/login";
import Password from "./pages/Forgetpasword/password.jsx";
import Rapport from "./pages/Rapport/Rapport";
const router = createBrowserRouter([
    
      {
        path: "/",
        element: 
        <div className='container'>    
        <Sidbar/>
        <div className="other">
          <Home/>
        </div>
        </div> ,
        errorElement:<Error/>
      },
      {
        path: "/user",
        element:
          <div className='container'>    
          <Sidbar/>
          <div className="other">
            <User/>
          </div>
          </div> ,
          errorElement:<Error/>
        },
      {
        path: "/commande",
        element: 
       <div className='container'>    
        <Sidbar/>
        <div className="other">
          <Commande/>
        </div>
        </div> ,
        errorElement:<Error/>
      },
      {
        path: "/objective",
        element:
        <div className='container'>    
        <Sidbar/>
        <div className="other">
          <Objective/>
        </div>
        </div> ,
        errorElement:<Error/>
      },
      {
        path: "/product",
        element:
       <div className='container'>    
        <Sidbar/>
        <div className="other">
          <Product/>
        </div>
        </div>  ,
        errorElement:<Error/>
      },
      {
        path: "/location",
        element:
       <div className='container'>    
        <Sidbar/>
        <div className="other">
          <Location/>
        </div>
        </div>  ,
        errorElement:<Error/>
      },
      {
        path: "/rapport",
        element:
       <div className='container'>    
        <Sidbar/>
        <div className="other">
          <Rapport/>
        </div>
        </div>  ,
        errorElement:<Error/>
      },
  {
    path: "/login",
    element:<Login/> ,
    errorElement:<Error/>
  },
  {
    path: "newpassword",
    element:<Password/> ,
    
  },


]);
function App() {
  return (
    <div className="App">
        <RouterProvider router={router} />
      </div>
  );
}

export default App;
