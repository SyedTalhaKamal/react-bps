import React, { Component } from 'react';
import Buttons from './Buttons.jsx'
import MainHeading from './MainHeading.jsx'

// const Heading = (props) => {
//     return <h1>{props.text}</h1>;
// };
class HireCard extends React.Component {
    render() {
        return (
            <div>
                <div className="container-fluid ">
                    <div className="row text-center">
                        <div className="col-md-6 col-12 hireSection">
                            <MainHeading text={"Need To Hire?"} />
                            <Buttons text="Learn More" className="hireBtn"/>
                        </div>
                        <div className="col-md-6 col-12 jobsection">
                            <MainHeading text={"Looking For A Job?"} />
                            <Buttons text="Learn More" className="hireBtn"/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default HireCard;