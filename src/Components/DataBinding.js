import React from 'react';
import Button from './Button';
export default class DataBinding extends React.Component{
    state = {
        inputValue: '',
        switch: false,
    };
    trigger = (e) => {
        console.log(e.target.value);
        this.setState({inputValue:e.target.value});
    };
    show = () => {
        if(this.state.inputValue){
            this.setState(prevState => ({switch: !prevState.switch}));
        }
    };
    reset = () => {
        this.setState({switch: false, inputValue: ''});
    };
    render(){
        return(
            <>
                <h3>This is a input Box with Data Binding</h3>
                <div>User Name: <input type="text" style = {{height: '20px'}} onChange = {this.trigger}/></div>
                <div>Password: <input type="text" style = {{height: '20px'}} /> </div>
                {this.state.switch ? <div style = {{borderStyle: 'solid', borderWidth:'1px', borderColor: 'blue'}}>{this.state.inputValue}</div> :null}
                <Button styles = {{backgroundColor:'transparent', color: 'black'}} click = {this.show}>Login</Button>
                <Button styles = {{backgroundColor:'transparent', color: 'black'}} click = {this.reset}>Sign Out</Button>
                <hr/>
            </>
        )
    }
}
