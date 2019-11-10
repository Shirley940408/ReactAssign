import React from 'react';
export default class ComponentExample extends React.Component{
    state = {
        ID: 10,
    };
    offLine = () => {
        let offLineContent = [];
        for(let i = 0; i < 3; i++){
            offLineContent.push(<div style = {{ marginTop: '10px'}}>Server with {this.state.ID} is offLine</div>);
        }
        console.log(offLineContent);
        return offLineContent;
    };
    render(){
        return(
            <>
                <h3>This is a Component Example</h3>
                <div>
                    {this.offLine()}
                    <hr />
                </div>
                {/*<div>Server with {this.state.ID} is offLine</div>*/}
            </>
        )
    }
}
