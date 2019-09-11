import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Component } from 'react';
import { connect } from 'react-redux';
import ReactScroller from 'react-custom-scrollbars';

import { SET_MENU_SCROLLED, RESET_MENU } from '../../../redux/actions/actions';

class Scroller extends Component {
    constructor(props) {
        super(props);

        this.state = {
            thumbGrab: false,
            //
        };
    }
    onThumbMouseUp = () => {
        console.log('mouse up');
        this.setState({ thumbGrab: false });
    };
    onThumbMouseDown = () => {
        console.log('mouse up');
        this.setState({ thumbGrab: true });
    };
    handleScroll = (e) => {
        const { scrollTop } = e.target;
        if (scrollTop === 0) this.props.dispatch(RESET_MENU());
        if (scrollTop === 0) this.props.dispatch(RESET_MENU());
        else this.props.dispatch(SET_MENU_SCROLLED());
    };
    render() {
        const { thumbGrab } = this.state;
        return (
            <ReactScroller
                className='Scroller'
                onScroll={ this.handleScroll }
                renderThumbVertical={ props => (
                    <div
                        role='presentation'
                        className={ classnames('thumb', { 'grab': thumbGrab }) }
                        onMouseDown={ this.onThumbMouseDown }
                        onMouseUp={ this.onThumbMouseUp }
                        { ...props }
                    />
                ) }
                renderTrackVertical={ props => <div { ...props } className='track' /> }
            /* heightRelativeToParent='100%' */
            >
                {this.props.children}
            </ReactScroller>
        );
    }
}

Scroller.propTypes = {
    children: PropTypes.any,
    dispatch: PropTypes.func.isRequired,
    //
};

Scroller.defaultProps = {
    children: [],
    //
};

function select(store) {
    return {
        // lang: store.viewReducer.lang,
        dict: store.viewReducer.dict,
    };
}

export default connect(select)(Scroller);