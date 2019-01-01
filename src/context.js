import React from 'react';
import App from './App';
const Context= React.createContext ();


export class Provider extends React.Component {

    state = {
            contacts: [
                {
                    id: 1,
                    name: 'Prabu Selvan',
                    email : 'prabu.selvan@gmail.com',
                    phone: '555-555-5555'
                },
                {
                    id: 2,
                    name: 'Hari Haran',
                    email: 'prabu.selvan@gmail.com',
                    phone: '555-555-5555'
                },
                {
                    id: 3,
                    name: 'Dilip Kumar',
                    email: 'prabu.selvan@gmail.com',
                    phone: '555-555-5555'
                },
                {
                    id: 4,
                    name: 'Hentry Martin',
                    email : 'prabu.selvan@gmail.com',
                    phone: '555-555-5555'
                }
            ]
        };
    render () {
        return (
            <Context.Provider value= {this.state}>
                    {this.props.children}
                    {/* {<App/>} */}
            </Context.Provider>
            // through provider we can access the state any where
        );
    }
}

export const Consumer = Context.Consumer;