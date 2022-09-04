import React from 'react';
import List from '@mui/material/List';
import Box from '@mui/material/Box';
import './ContactList.css'
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';

/** Displays the contacts as a list on the screen *
 * @todo: refactor any stylings                   *
 *                                                */

const ContactList = (props) => {
   const renderContactList = props.contacts.map((contact) => {
    return (
        <Box  sx={{ p: 2, border: 0.5, borderColor: 'primary', borderRadius: '10px'}}>
            <div>
                <div className='contact-font-name'>{contact.name}</div>
                <div className='contact-font-email'>{contact.email}</div>
            </div>
            <div className='div_relative'>
            <DeleteForeverOutlinedIcon />
            </div>
        </Box>
    );
   });

  
    return (
        <List>
            {renderContactList}
        </List>
    );
};
export default ContactList;