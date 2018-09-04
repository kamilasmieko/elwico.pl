import React from 'react';
import { Router,
    Route,
    Link,
    IndexLink,
    IndexRoute,
    hashHistory
} from 'react-router';

export class MainTemplate extends React.Component{
    render(){

        const menuItems = [
            {to: '/tv', text: 'Telewizja'},
            {to: '/internet', text: 'Internet'},
            {to: '/voip', text: 'Telefon'},
            {to: '/news', text: 'Aktualności'},
            {to: '/contact', text: 'Kontakt'}];

        return <div>
                    <div className='container'>
                        <Link to='/'><img id='logo' src="./src/img/elwico_logo.png" alt="logo" style={{width: '20rem'}}/></Link>
                        <ul className='main_menu'>
                            {menuItems.map((el, i) => (<MenuItem key={i} to={el.to} text={el.text}/>))}
                        </ul>
                    </div>
                    {this.props.children}
                </div>
    }
}

class MenuItem extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            isSelected: false
        }
    }
    render(){

        return <li><Link className={this.state.isSelected? 'active' : ''}
                         to={this.props.to} onClick={this.handleSelection}>
            {this.props.text}
            </Link></li>
    }
    handleSelection = () => {
        this.setState(prevState => ({isSelected: !prevState.isSelected}));
    }
}