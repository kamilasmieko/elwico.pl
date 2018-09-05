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

        const mainMenu = [
            {to: '/tv', text: 'Telewizja'},
            {to: '/internet', text: 'Internet'},
            {to: '/voip', text: 'Telefon'},
            {to: '/news', text: 'Aktualności'},
            {to: '/contact', text: 'Kontakt'}];

        const subMenu = [
            {to: '/', text: 'Strona Główna'},
            {to: '/subscribersite', text: 'Strefa Klienta'},
            {to: '/email', text: 'Poczta'}
        ];

        this.state = {
            mainMenuItems: mainMenu.map((el, i) => ({
                id: i,
                isSelected: false,
                to: el.to,
                text: el.text
            })),
            subMenuItems: subMenu.map((el, i) => ({
                id: i,
                to: el.to,
                text: el.text
            }) )
        }
    }
    render(){

        return <div>
                    <div className='container'>

                        <Link to='/'><img id='logo'
                                          src="./src/img/elwico_logo.png"
                                          alt="logo"
                                          style={{}}/></Link>

                        <ul className='sub_menu'>
                            {this.state.subMenuItems.map((el,i) => (
                                <li key={i}>
                                    <Link id={el.id}
                                          to={el.to}
                                          onClick={() => this.handleSubSelection(el.id)}>
                                        {el.text}
                                    </Link>
                                    <div className='underline'></div>
                                </li>))}
                        </ul>

                        <ul className='main_menu'>
                            {this.state.mainMenuItems.map((el, i) => (
                                <li key={i}>
                                    <Link id={el.id}
                                          to={el.to}
                                          className={el.isSelected? 'active' : ''}
                                          onClick={() => this.handleMainSelection(el.id)}>
                                    {el.text}
                                    </Link>
                                </li>))}
                        </ul>
                    </div>
                    {this.props.children}
                </div>
    }
    handleMainSelection = (id) => {
        this.setState(prevState => ({mainMenuItems: prevState.mainMenuItems.map((el, _) => ({
                id: el.id,
                isSelected: el.id === id,
                to: el.to,
                text: el.text
            }))}));
    }
    handleSubSelection = (id) => {
        this.setState(prevState => ({subMenuItems: prevState.subMenuItems.map((el, _) => ({
                id: el.id,
                to: el.to,
                text: el.text
            }))}));
    }
}
