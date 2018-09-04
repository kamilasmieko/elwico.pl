import React from 'react';
import { Router,
    Route,
    Link,
    IndexLink,
    IndexRoute,
    hashHistory
} from 'react-router';

export class MainTemplate extends React.Component{
    constructor(props){
        super(props);

        const menuItems = [
            {to: '/tv', text: 'Telewizja'},
            {to: '/internet', text: 'Internet'},
            {to: '/voip', text: 'Telefon'},
            {to: '/news', text: 'Aktualności'},
            {to: '/contact', text: 'Kontakt'}];


        this.state = {
            elements: menuItems.map((el, i) => ({
                id: i,
                isSelected: false,
                to: el.to,
                text: el.text
            }))
        }
    }
    render(){

        return <div>
                    <div className='container'>

                        <Link to='/'><img id='logo'
                                          src="./src/img/elwico_logo.png"
                                          alt="logo"
                                          style={{width: '13rem'}}/></Link>

                        <ul className='main_menu'>
                            {this.state.elements.map((el, i) => (
                                <li key={i}>
                                    <Link id={el.id}
                                          to={el.to}
                                          className={el.isSelected? 'active' : ''}
                                          onClick={() => this.handleSelection(el.id)}>
                                    {el.text}
                                    </Link>
                                </li>))}
                        </ul>
                    </div>
                    {this.props.children}
                </div>
    }
    handleSelection = (id) => {
        this.setState(prevState => ({elements: prevState.elements.map((el, i) => ({
                id: el.id,
                isSelected: el.id === id,
                to: el.to,
                text: el.text
            }))}));
    }
}
