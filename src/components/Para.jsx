import React, { Component } from 'react';
class Para extends React.Component {
        render() {
            return (
                <div>
                    <p className={`${this.props.className}`}>{this.props.text}</p>
                </div>
            )
        }
    }
    export default Para;