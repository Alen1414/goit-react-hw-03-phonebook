import React from 'react';
import 'components/Form.css';

const ContactsList = ({contacts,onDeleteContact,}) => (
 <ul >
        {contacts.map(({ id,  name, number })=>(
          <li className='contacts' key={id}>
            <p>{name}, {number}</p>
            
          <button className='contacts_name' onClick={() => onDeleteContact(id)} >Delete</button> 

            </li>
        ))}
        
    </ul>
);
export default ContactsList;

