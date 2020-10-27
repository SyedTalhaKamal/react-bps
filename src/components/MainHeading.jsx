import React, { Component } from 'react';
class MainHeading extends React.Component {
        render() {
            return (
                <div>
                    <h1 className="mainheading">{this.props.text}</h1>
                </div>
            )
        }
    }
    export default MainHeading;