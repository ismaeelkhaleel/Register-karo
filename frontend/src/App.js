import React from "react";
import Header from "./components/header/Header.js";
import Homepage from "./components/Homepage/HomePage.js";
import TrustedBy from "./components/TrustedBy/TrustedBy.js";
import Services from './components/services/services.js';
import About from "./components/About/About.js";
import WhyChooseUs from "./components/WhyChooseUs/WhyChooseUs.js";
import VideoSection from "./components/VideoSection/VideoSection.js";
import HappyClients from "./components/HappyClient/HappyClient.js";
import Register from "./components/Register/Register.js";
import Blog from "./components/Blog/Blog.js";
import Testimonials from "./components/Testimonial/Testimonial.js";
import FAQ from "./components/FAQ/FAQ.js";
import AppDownload from "./components/AppDownload/AppDownload.js";
import Statistics from "./components/Statistics/Statistics.js";
import Hero from "./components/Hero/Hero.js";
import Partner from "./components/Partner/Partner.js";
import Footer from "./components/Footer/Footer.js";

function App() {
  return (
     <div className="App">
      <Header />
      <Homepage />
      <TrustedBy/>
      <Services/>
      <About/>
      <WhyChooseUs/>
      <VideoSection/>
      <HappyClients/>
      <Register/>
      <Blog/>
      <Testimonials/>
      <FAQ/>
      <AppDownload/>
      <Statistics/>
      <Hero/>
      <Partner/>
      <Footer/>
     </div>
  );
}

export default App;
