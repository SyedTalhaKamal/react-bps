import React, {Component} from 'react';
import Buttons from './Buttons.jsx';
class Signup extends React.Component {
    render() {
        return (
            <div className="signup py-5">
        <div className="container">
          <div className="row mx-0">
            <div className="col-md-6 col-12">
              <h1>Signup to Get fresh News</h1>
              <h2 className="mt-2">SUBSCRIBE TO OUR MAILING LIST</h2>
            </div>
            <div className="col-md-6 col-12 mt-lg-0 mt-3">
              <input type="text" className="emailText" placeholder="Enter Email Address" />
              <Buttons className="bannerBtn ml-3 subscribe" text="Subscribe"/>
            </div>
          </div>
        </div>
        </div>
        )
    }
}
export default Signup;
    