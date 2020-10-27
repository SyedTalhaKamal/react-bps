import React,{Component} from 'react';
class Buttons extends React.Component {
    render() {
        return (
            <>
                <a href="javascript:void(0)" className={`d-inline-block ${this.props.className}`}>{this.props.text}</a>
            </>
        )
    }
}
export default Buttons;
    