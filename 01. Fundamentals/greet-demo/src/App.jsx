import Footer from "./Components/Footer"
import Greet from "./Components/Greet"
import Greeting from "./Components/Greeting"
import Header from "./Components/Header"
import JSXRules from "./Components/JSXRules"
import MainText from "./Components/MainText"
import Person from "./Components/Person"
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
    </>
  )
}

export default App
