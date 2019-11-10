import React from 'react';

class Student{
    constructor(name, major) {
        this.name = name;
        this.major = major;
    }
}
export default class Loop extends React.Component {
    constructor(props){
        super();
        this.student = [new Student('Bill Gates', 'Computer Science'),
            new Student('Steve Jobs', 'Computer Science'),
            new Student('Elon Musk', 'Computer Science')];
    }
    result = () => {
        const res = [];
        for(let i = 0; i < this.student.length; i++){
            res.push(<div style = {{borderColor: 'black', borderStyle: 'solid', borderWidth: '1px', height: '20px', display: 'flex', justifyContent: 'space-between'}}>
                <div>Name:{this.student[i].name}</div> <div>Major: {this.student[i].major}</div>
            </div>)
        }
        return res;
    };

    render(){
        return (
            <div>
                <h3>This is a StudentList managed by react loop</h3>
                {this.result()}
            </div>
        )
    }
}
