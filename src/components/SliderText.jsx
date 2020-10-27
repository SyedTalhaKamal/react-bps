import React,{Component} from 'react';
import Buttons from './Buttons.jsx'
import Para from './Para.jsx' 
class SliderText extends React.Component{
    render(){
        return(
            <div>
                <div className="container">
                <div className="row">
                <div className="col-md-8 col-12 d-flex flex-column align-items-end">
                <div className="text-left bannerMain">
                  <h1>Britton</h1>
                  <h1>Professional Services</h1>
                  <Para className="para colorwhite flight" text="Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum
                    has been the industry's"/>
                    <Buttons text="Learn More" className="bannerBtn"/>
                </div>
              </div>
              </div>
              </div>
            </div>
        )
    }
}
export default SliderText;