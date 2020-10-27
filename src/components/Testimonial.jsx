import React, { Component } from 'react';
import TestimonialImg from '../images/testimonial.png'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
class TestimonialContent extends React.Component {
    render() {
        return (
            <div>
                <h3 className="testimonialH my-5">TESTIMONIALS</h3>
                <img src={TestimonialImg} className="testimonialImg" />
                <p className="testimonialP mt-4">"BPS is a professional and tenacious recruiter and we enjoy doing business with him and the team.</p>
                <p className="testimonialP">Thank you very much for your rapid response. It’s no doubt that your company is worth admiring! I have experienced
                the fastest support ever. Thank you a thousand times!" </p>
                <h2 className="testimonialH2 mt-5 mb-2">EVA BRAUN, CLIENT</h2> 
            </div>
        )
    }
}
class Testimonial extends React.Component {
        render() {
            return (
                <div>                             
                    <section className="testimonial mt-lg-5 mt-4">
                        <OwlCarousel items={1} className="owl-theme text-center pb-md-5 pb-3" loop>  
                            <div>
                                <TestimonialContent/>
                            </div>
                            <div>
                                <TestimonialContent/>
                            </div>
                            <div>
                                <TestimonialContent/>
                            </div>
                        </OwlCarousel>  
                    </section>
                </div>
            )
        }
    }
export default Testimonial;