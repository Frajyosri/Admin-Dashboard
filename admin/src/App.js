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
import Historique from "./pages/historique/historique.jsx";
import Edite from "./pages/editeProduct/editeProduct.jsx";
import Search from "./pages/SearchProduct/SearchProduct.jsx";
import SearchComercant from "./pages/searchComercant/search.jsx";
import Livreur from "./pages/livreur/livreur";
import SearchLivreur from "./pages/searchLivreur/SearchLivreur";
import Detail from "./pages/detailCommande/detail";
import Statistique from "./pages/Statistique/Statistique";
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
          path: "/livreur",
          element:
            <div className='container'>    
            <Sidbar/>
            <div className="other">
              <Livreur/>
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
  {
    path: "/historique/:id",
    element:
   <div className='container'>    
    <Sidbar/>
    <div className="other">
      <Historique/>
    </div>
    </div>  ,
    errorElement:<Error/>
  },
  {
    path: "/edite/:id",
    element:
   <div className='container'>    
    <Sidbar/>
    <div className="other">
      <Edite/>
    </div>
    </div>  ,
    errorElement:<Error/>
  },
  {
    path:"/search",
    element:
    <div className='container'>    
    <Sidbar/>
    <div className="other">
      <Search/>
    </div>
    </div> 
  },
  {
    path:"/searchlivreur",
    element:
    <div className='container'>    
    <Sidbar/>
    <div className="other">
      <SearchLivreur/>
    </div>
    </div> 
  },
  {
    path:"/searchComercant",
    element:
    <div className='container'>    
    <Sidbar/>
    <div className="other">
      <SearchComercant/>
    </div>
    </div> 
  },
  {
    path:"/detail/:id",
    element:
    <div className='container'>    
    <Sidbar/>
    <div className="other">
      <Detail/>
    </div>
    </div> 
  },{
    path:"/statistique",
    element:
    <div className='container'>    
    <Sidbar/>
    <div className="other">
      <Statistique/>
    </div>
    </div> 
  }



]);
function App() {
  return (
    <div className="App">
        <RouterProvider router={router} />
      </div>
  );
}

export default App;
