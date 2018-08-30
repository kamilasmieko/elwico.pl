import React from 'react';

export class MainTemplate extends React.Component{
    render(){
        return <div style={{color: 'red'}}>Main Template Component

                    <ul>
                        <li>Telewizja</li>
                        <li>Internet</li>
                        <li>Telefon</li>
                        <li>Aktualności</li>
                        <li>Kontakt</li>
                        <li>Strefa Abonenta</li>
                    </ul>

                    {this.props.children}
                </div>
    }
}