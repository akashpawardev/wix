import Header from "./components/Header";
import Hero from "./components/Hero";
import Doctor from "./components/Doctor";
import Treatments from "./components/Treatments";
import Footer from "./components/Footer";
import Banner from "./components/Banner";
import Form from "./components/Form";
import Nav from "./components/Nav";

function App() {
  return (
    <div className="App">
      {/* <Header /> */}
      <Nav />
      <Hero />
      <Banner />
      <Doctor />
      <Treatments />
      <Form />
      <Footer />
    </div>
  )
}

export default App
