import React from 'react';
import { connect } from 'react-redux';
import {counterAction} from "../redux/actions/counterAction";
import Button from './Button';
class Counter extends React.Component{
    state = {
        count: 0,
    };
    counterFunc = () => {
        this.setState(prevState =>
            ({count: prevState.count + 1})
        )
    };
    resetFunc = () => {
        this.setState({count: 0})
    };
    render(){
        return(
            <>
                <h3>This is a counter</h3>
                <h5>This is React state counter</h5>
                <div style = {{margin: '5px'}}>{this.state.count}</div>
                <Button click = {this.counterFunc} >Add One</Button>
                <Button click = {this.resetFunc} >Reset Counter</Button>
                <h5>This is Redux counter</h5>
                {/*<div style = {{margin: '5px'}}>{this.props.simpleReducer.reduxCounter}</div>*/}
                {/*<Button click = {this.props.counterAction} >Add One</Button>*/}
                {/*<Button click = {this.resetFunc} >Reset Counter</Button>*/}
                <hr />
            </>
        );
    }
}
const mapStateToProps = state => (state);
const mapDispatchToProps = dispatch => ({
    simpleCounter: () => dispatch(counterAction())
});
export default connect (mapStateToProps, mapDispatchToProps)(Counter);
