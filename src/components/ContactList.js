import React from 'react';
import List from '@mui/material/List';
import './ContactList.css'
import ContactCard from './ContactCard';

/** Displays the contacts as a list on the screen *
 * @todo: refactor any stylings                   *
 *                                                */

const ContactList = (props) => {
   const renderContactList = props.contacts.map((contact) => {
    return <ContactCard contact={contact}></ContactCard>;
   });

  
    return (
        <List>
            {renderContactList}
        </List>
    );
};
export default ContactList;