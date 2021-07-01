import Navbar from "./component/navbar";
import Home from "./component/home";
import Login from "./component/login";
import SignUp from "./component/signup"
import {Route} from 'react-router-dom';
import './App.css';
// import Signup from './component/signup'
const App = () => {
  return (
    <>
        <Navbar/>
        <Route path="/">
        <Home />
        </Route>

        <Route path="/login">
        <Login/>
        </Route>

        <Route path="/signup">
        <SignUp />
        </Route>
    
        {/* <Signup /> */}
     
</>
  );
}

export default App;
