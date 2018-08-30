import React from 'react';

export class Main extends React.Component{
    render(){
        return <div style={{color: 'green'}}>
                    <Banner />
        </div>
    }
}

class Banner extends React.Component{
    constructor(props){
        super(props);

        let pics = ['src/img/banner_internet.png', 'src/img/tv_watching.png', 'src/img/banner_phone.png'];

        this.state = {
            el: Array(3).fill({}).map((_, i) => ({id: i, isSelected: false}))
        }
    }
    render(){
        return <div>
            
                    </div>
    }
}