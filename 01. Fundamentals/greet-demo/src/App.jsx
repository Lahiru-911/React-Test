import Footer from "./Components/Footer"
import Greet from "./Components/Greet"
import Greeting from "./Components/Greeting"
import Header from "./Components/Header"
import JSXRules from "./Components/JSXRules"
import MainText from "./Components/MainText"
import Person from "./Components/Person"
import Person1 from "./Components/Person1"
import Product from "./Components/Product"
import Product1 from "./Components/Product1"
import ProductInfo from "./Components/ProductInfo"
import ProductList from "./Components/ProductList"
import UserList from "./Components/UserList"
import Welcome from "./Components/Welcome"


function App() {


  return (
    <>
      <Greet/>
      <Welcome/>
      <JSXRules/>

      <Header/>
      <MainText/>
      <Footer/>

      <Greeting/>
      <ProductInfo/>
      <UserList/>
      <ProductList/>
      <Person name="Lahiru" age={25}/>
      <Product name="Laptop" price={100}/>

      <Person1 name="Lahiru" age={25}/>
      <Product1 name="Laptop" price={100}/>
    </>
  )
}

export default App
