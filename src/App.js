import logo from './logo.svg';
import './App.css';
import {PrivateRoute,VerifyRoute} from './utils/customRouter'
import { 
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import Register from './containers/Auth/Register'
import Login from './containers/Auth/Login'
import Verify from './containers/Auth/VerifyOTP'

import Home from './containers/Home/Home'
import Course from './containers/Course/Course'
import Header from './containers/Header';
import Footer from './containers/Footer';

function App() {
  return (
    <>
      <Header></Header>
      <Router>
        <Switch>
          <Route exact path='/register' >
              <Register></Register>
          </Route>
          <Route exact path='/login' >
              <Login></Login>
          </Route>
          <VerifyRoute exact path='/verify' >
              <Verify></Verify>
          </VerifyRoute>
          <Route exact path='/' >
              <Home></Home>
          </Route>
          <Route exact path='/course' >
              <Course></Course>
          </Route>
          {/* <LoginRoute path="/login" exact component={Login}></LoginRoute>
          <SRoute path="/check-out" exact component={CheckOut}></SRoute>
          <SRoute path="/cart" exact component={Cart}></SRoute>
          <SRoute path="/profile" exact component={Profile}></SRoute>
          <PublicRoute path="/not-found" component={NotFound}></PublicRoute>
          <PublicRoute path="/" exact component={Home}></PublicRoute>
          <Route path="/book-detail/:id" exact>
            <ProductDetail/>
          </Route>
          <SRoute path="/my-shop" exact component={Myshop}></SRoute>
          <SRoute path="/add-book" exact component={AddBook}></SRoute>
          <Redirect to="/not-found"></Redirect> */}
        </Switch>
      </Router>
      <Footer></Footer>
    </>
  );
}

export default App;
