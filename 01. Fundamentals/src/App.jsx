import EventDemo from "./Components/EventDemo";
import Footer from "./Components/Footer";
import Greet from "./Components/Greet";
import Greeting from "./Components/Greeting";
import Header from "./Components/Header";
import IconComponent from "./Components/IconComponent";
import JSXRules from "./Components/JSXRules";
import MainText from "./Components/MainText";
import Morning from "./Components/Morning";
import Person from "./Components/Person";
import Person1 from "./Components/Person1";
import Product from "./Components/Product";
import Product1 from "./Components/Product1";
import ProductInfo from "./Components/ProductInfo";
import ProductList from "./Components/ProductList";
import ProfileCard from "./Components/ProfileCard";
import UserList from "./Components/UserList";
import UserStatus from "./Components/UserStatus";
import Weather from "./Components/Weather";
import Welcome from "./Components/Welcome";

function App() {
  return (
    <>
      <Greet />
      <Welcome />
      <JSXRules />

      <Header />
      <MainText />
      <Footer />

      <Greeting />
      <ProductInfo />
      <UserList />
      <ProductList />
      <Person name="Lahiru" age={25} />
      <Product name="Laptop" price={100} />

      <Person1 name="Lahiru" age={25} />
      <Product1 name="Laptop" price={100} />

      <Weather />
      <UserStatus loggedIn={true} isAdmin={false} />
      <Morning timeDay="GoodMorning" />

      <IconComponent/>
      <ProfileCard/>
      <EventDemo/>
    </>
  );
}

export default App;
