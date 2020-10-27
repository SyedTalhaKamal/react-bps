import React,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App.css';
import Header from './components/Header.jsx';
import Slider from './components/Slider.jsx';
import HireCard from './components/HireCard.jsx';
import About from './components/About.jsx';
import Approch from './components/Approch.jsx';
import Services from './components/Services.jsx';
import Testimonial from './components/Testimonial.jsx';
import Signup from './components/Signup.jsx';
import {Footer,FooterCopy} from './components/Footer.jsx';



class MainComponent extends React.Component {
  render() {
    return(
      <div>
      <Header numer="123-456-789" />
      <Slider/>
      <HireCard/>
      <About/>
      <Approch/>
      <Services/>
      <Testimonial/>
      <Signup/>
      <Footer/>
      <FooterCopy/>
      </div>
    ) 
    
  }
}

export default MainComponent;
