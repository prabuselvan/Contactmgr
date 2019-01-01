import React from 'react';
import  Contact from './Contact';
import {Consumer} from '../context';
class Contacts extends React.Component {

    // we dont need a constructor onlt to intialize the state
    // class component 
      

        deleteContact=(id)=> {

            const {contacts}= this.state;

            const newContacts =contacts.filter(contact => {
               return  contact.id!== id
            })
                console.log(id);

                this.setState({
                        contacts: newContacts
                });
        }

    render  () {

        return (
            <Consumer> 
                {value=> {
                const {contacts} = value;
                return ( <React.Fragment>
                        {contacts.map( contact=> ( 
                                 <Contact 
                                               key={contact.id} 
                                               contact={contact}
                                               deleteClickHandler={this.deleteContact.bind(this, contact.id)}/>
                                            //    name= {contact.name}
                                            //     email={contact.email}
                                            //     phone={contact.email}/>
                    ))}
    
                </React.Fragment> )
            }} </Consumer>
        );
        // const {contacts} = this.state;
        // return (
        //     <React.Fragment>
        //             {contacts.map( contact=> {
        //                       return   <Contact 
        //                                        key={contact.id} 
        //                                        contact={contact}
        //                                        deleteClickHandler={this.deleteContact.bind(this, contact.id)}/>
        //                                     //    name= {contact.name}
        //                                     //     email={contact.email}
        //                                     //     phone={contact.email}/>
        //             })}
        //     </React.Fragment>
        // )
    }

}   



export default Contacts;