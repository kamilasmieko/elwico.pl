import React from 'react';

export class MainTemplate extends React.Component{
    render(){
        return <div style={{color: 'red'}}>Hello, hello!
                    {this.props.children}
                </div>
    }
}