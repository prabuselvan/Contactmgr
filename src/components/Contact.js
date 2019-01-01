import React from 'react';
import propTypes from 'prop-types';
import './contact.css'
class Contact extends React.Component {

constructor(props) {
    super(props);
    this.state ={
        showContactInfo: false
    }

    // this.onShowClick= this.onShowClick.bind(this);
}


// onShowClick =(e)=> console.log(e.target);

  onShowClick = (e)=> {
        this.setState ( {
            showContactInfo: !this.state.showContactInfo
        }) 
  }
    

  onDeleteClick = ()=> {
    //   console.log('clicked');
    this.props.deleteClickHandler();
      
  }

    render () {
        const {name, email, phone} = this.props.contact;
        const {showContactInfo} = this.state;
        return (
            <div className="card card-body mb-3">
                <h4>  {name} 
                             <i className="fa fa-sort-desc"
                                style= {{cursor: 'pointer'}}
                                onClick={this.onShowClick.bind(this)}/>
                            <i className='fa fa-times-circle'
                                style={{cursor: 'pointer',
                                        float: 'right',
                                         color:'red'}}
                                onClick={this.onDeleteClick}/></h4 >
                    {showContactInfo ? (
                         <ul className='list-group'> 
                    <li className='list-group-item'> Email : {email} </li>
                    <li className='list-group-item'> Phone : {phone}</li>
                </ul>
                    ) : null }
               
            </div>
        )
    }
}

Contact.defaultProps = {
    name: '',
    email: '',
    phone: '',
    deleteClickHandler: ()=> {},
    onDeleteClick: ()=> {}
}

Contact.propTypes = {
    name: propTypes.string.isRequired,
    email: propTypes.string.isRequired,
    phone: propTypes.string.isRequired,
    deleteClickHandler : propTypes.func,
    onDeleteClick: propTypes.func
}

export default Contact;