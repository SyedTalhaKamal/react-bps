import React, { Component } from 'react';
import  Buttons  from './Buttons.jsx'
import  MainHeading  from './MainHeading.jsx'
import Para from './Para.jsx'
class About extends React.Component {
    render() {
        return (
            <div>
                <div className="container text-center mt-lg-5 mt-4">
                    <MainHeading text="About US"/>
                    <Para className="para aboutP fmedium" text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                     standard dummy text ever since the 1500s."/>
                    <Para className="para aboutP flight" text="It is a long established fact that a reader will be distracted by the readable content of a page when looking
                      at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,
                      as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing
                      ackages and web page editors now use Lorem Ipsum as their default model."/>
                    <Buttons className="bannerBtn" text="Learn More"/>
                </div>
            </div>
        )
    }
}
export default About;