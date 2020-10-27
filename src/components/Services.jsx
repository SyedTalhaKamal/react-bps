import React, { Component } from 'react';
import MainHeading from './MainHeading.jsx'
import Para from './Para.jsx'
import Buttons from './Buttons.jsx'
import ServicesImg1 from '../images/service1.png'
import ServicesImg2 from '../images/service2.png'
import ServicesImg3 from '../images/service3.png'
class CardHeading extends React.Component {
    render() {
        return (
            <div>
                <h2>{this.props.text}</h2>
            </div>
        )
    }
}
class Services extends React.Component{
    render(){
        return(
            <div>
                <section className="services text-center mt-lg-5 mt-4">
                    <div className="container">
                    <MainHeading text="Services"/>
                            <div className="row mx-0">
                                <div className="col-lg-4 col-12 mt-5">
                                    <img src={ServicesImg1} alt="" className="img-fluid" />
                                    <CardHeading text="PROFESSIONAL"/>
                                    <Para className="para flight colorgrey" text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae consequuntur vel natus cumque dolorum,animi quidem ducimus, veniam vitae rerum labore vero voluptas aut. Id, voluptas nihil. Iusto, facere incidunt!"/>
                                    <Buttons className="bannerBtn" text="More Detail"/>
                                </div>
                                <div className="col-lg-4 col-12 mt-5">
                                    <img src={ServicesImg2} alt="" className="img-fluid" />
                                    <CardHeading text="EXECUTIVE"/>
                                    <Para className="para flight colorgrey" text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae consequuntur vel natus cumque dolorum,animi quidem ducimus, veniam vitae rerum labore vero voluptas aut. Id, voluptas nihil. Iusto, facereincidunt!"/>
                                    <Buttons className="bannerBtn" text="More Detail"/>
                                </div>
                                <div className="col-lg-4 col-12 mt-5">
                                    <img src={ServicesImg3} alt="" className="img-fluid" />
                                    <CardHeading text="CARRER CHANGE"/>
                                    <Para className="para flight colorgrey" text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae consequuntur vel natus cumque dolorum,animi quidem ducimus, veniam vitae rerum labore vero voluptas aut. Id, voluptas nihil. Iusto, facereincidunt!"/>
                                    <Buttons className="bannerBtn" text="More Detail"/>
                                </div>

                            </div>
                        </div>
                </section>
            </div>
        )
    }
} 
export default Services;