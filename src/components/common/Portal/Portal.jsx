import React from 'react';
import ReactDOM from 'react-dom';

import s from './Portal.module.css';

class Portal extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {showClass: ''};
        this.root = document.createElement('div');
    };

    componentDidMount() {
        document.querySelector('#portals').appendChild(this.root);
        this.openPortal();
    };

    openPortal = () => {
        setTimeout(() => this.setState({showClass: 'active'}), 10);
        this.timeoutTimer = setInterval(() => this.closePortal(), this.props.time);
    }

    closePortal = () => {
        clearInterval(this.timeoutTimer);
        this.setState({showClass: ''});
        setTimeout(() => this.props.callback(), 500);
    };

    componentWillUnmount() {
        document.querySelector('#portals').removeChild(this.root);
    };

    render() {
        return ReactDOM.createPortal(
            <div className={`
                ${s.portal} 
                ${s[this.state.showClass]} 
                ${this.props.closeBtn ? s.spaceBetween : ''} 
                ${s[this.props.type]}
            `}>
                <p>{this.props.msg}</p>
                {
                    this.props.closeBtn && 
                        <div className={s.closeBtn} onClick={this.closePortal}>
                            <i></i>
                            <i></i>
                        </div>
                }
            </div>,
            this.root
        );
    };
}

export default Portal;