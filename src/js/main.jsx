import React from 'react';

export class Main extends React.Component{
    render(){
        return <div style={{color: 'green'}}>
                    <Banner />
                    <MainSection />
                    <SideNews />
        </div>
    }
}

class Banner extends React.Component{
    constructor(props){
        super(props);

        let pics = ['src/img/banner_internet.png', 'src/img/tv_watching.png', 'src/img/banner_phone.png'];

        this.state = {
            elements: Array(3).fill({}).map((_, i) => ({
                id: i,
                isSelected: false,
                banner: pics[i]
            })),
            start: 0
        }
    }
    render(){
        return <div>
                    <div id='banner'
                         className="slideshow-container">

                    {this.state.elements.map((el, i) => <div className="mySlides fade"
                                                             key={i}
                                                             style={el.isSelected?
                                                                 {display: 'block'} :
                                                                 {display: 'none'}}>
                        <div className="carousel_pic"
                             style={{backgroundImage: `url(${el.banner})`,
                                 backgroundRepeat: 'no-repeat',
                                 backgroundPosition: 'center',
                                 backgroundSize: 'cover'}} />
                    </div> )}

                    <a className="prev" onClick={() => this.plusSlides(-1)}>&#10094;</a>
                    <a className="next" onClick={() => this.plusSlides(1)}>&#10095;</a>
                </div>

                <div style={{textAlign: 'center'}}>
                    {this.state.elements.map((el,i) => <span key={i}
                                                            className={el.isSelected? 'dot active' : 'dot'}
                                                            onClick={() => this.currentSlide(i)} />)}
                </div>
        </div>
    }
    componentDidMount(){
        this.showSlides(this.state.start);

        this.timerId = setInterval(() =>{
            this.setState({start: this.state.start + 1}, () => this.showSlides(this.state.start));
        }, 6000);
    }
    showSlides(n){

        n > this.state.elements.length-1 && this.setState({start: 0},
            ()=> this.showSlides(0));
        n < 0 && this.setState({start: this.state.elements.length},
            () => this.showSlides(this.state.elements.length -1));

        this.setState(prevState => ({
            elements: prevState.elements.map(el => ({
                id: el.id,
                isSelected: el.id === n,
                banner: el.banner
            }))
        }));
    }
    plusSlides = (val) =>{
        this.setState(prevState => ({start: prevState.start + val}),
            this.showSlides(this.state.start + val));
    }
    currentSlide = (val) =>{
        this.setState({start: val},
            this.showSlides(val));
    }
    componentWillUnmount(){
        clearInterval(this.timerId);
    }
}

class MainSection extends React.Component{
    render(){
        return <div className='container'>Main Section</div>
    }
}

class SideNews extends React.Component{
    render(){
        return <div className='container'>Side News</div>
    }
}