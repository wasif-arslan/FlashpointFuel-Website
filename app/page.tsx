import Footer from "./Components/Footer";
import FuelServices from "./Components/FuelServices";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Options from "./Components/Options";
import ServiceArea from "./Components/ServiceArea";
import Services from "./Components/Services";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Services />
      <FuelServices />
      <Options />
      <ServiceArea/>
      <Footer/>
    </>
  );
}
