import React, { Component } from 'react';
import Para from './Para.jsx'
import { FaFacebookSquare, FaTwitterSquare, FaLinkedin } from 'react-icons/fa';

class FooterHeading extends React.Component {
    render() {
        return (
            <>
                <h1>{this.props.text}</h1>
            </>
        )
    }
}

// class FooterUl extends React.Component {
//     render() {
//         return (
//             <>
//                 <ul className="mt-3">{this.props.text}</ul>
//             </>
//         )
//     }
// }
class FooterLia extends React.Component {
    render() {
        return (
            <>
                <li><a href="javascript:void(0)" className={`d-inline-block ${this.props.className}`}>{this.props.text}</a></li>
            </>
        )
    }
}
class FooterLi extends React.Component {
    render() {
        return (
            <>
                <li className={`${this.props.className}`}>{this.props.text}</li>
            </>
        )
    }
}
class Footer extends React.Component {
    render() {
        return (
            <div className="footer pt-4 pb-5">
                <div className="container">
                    <div className="row mx-0">
                        <div className="col-lg-3 col-md-6 col-12 mt-lg-0 mt-4">
                            <FooterHeading text="QUICK LINKS" />
                            <ul className="mt-3">
                            <FooterLia text="Home"/>
                            <FooterLia text="About" className="mt-2"/>
                            <FooterLia text="Services" className="mt-2"/>
                            </ul>    
                        </div>
                        <div className="col-lg-3 col-md-6 col-12 mt-lg-0 mt-4">
                            <FooterHeading text="CATEGORRIES" />
                            <ul className="mt-3">
                                <FooterLia text="Job Seekers" />
                                <FooterLia text="Employees" className="mt-2" />
                            </ul>
                        </div>
                        <div className="col-lg-3 col-md-6 col-12 mt-lg-0 mt-4">
                            <FooterHeading text="ADDRESS" />
                            <ul className="mt-3">
                                <FooterLi text="MP-01, North," />
                                <FooterLi text="Downy Street," />
                                <FooterLi text="Texas 5012" />
                            </ul>
                        </div>
                        <div className="col-lg-3 col-md-6 col-12 mt-lg-0 mt-4">
                            <FooterHeading text="PHONE" />
                            <ul className="mt-3">
                                <FooterLi text="(999)-999-5555" />
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
class SocialIcons extends React.Component {
    render() {
        return (
            <>
                <li><a href="javascript:void(0)" className="socialIcons">{this.props.text}</a></li>
            </>
        )
    }
}
class FooterCopy extends React.Component {
    render() {
        return (
            <section className="footerCopy">
                <div className="container py-3">
                    <div className="row">
                        <div className="col-lg-6 col-12 text-lg-left text-center">
                            <Para className="para flight colorgrey" text="© 2017 BPS. All Rights Reserved" />
                        </div>
                        <div className="col-lg-6 col-12 text-lg-right text-center mt-lg-0 mt-3">
                            <ul className="footer-ul">
                                <SocialIcons text={<FaFacebookSquare />} />
                                <SocialIcons text={<FaTwitterSquare />} />
                                <SocialIcons text={<FaLinkedin />} />
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
export {
    Footer,
    FooterCopy
}
