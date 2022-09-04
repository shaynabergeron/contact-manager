import React from 'react';
import Box from '@mui/material/Box';
import './ContactList.css'
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';

const ContactCard = (props) => {
    const {id, name, email} = props.contact;
    return(
        <Box  sx={{ p: 1, border: 0.5, borderColor: 'primary', borderRadius: '10px'}}>
            <div className='icon_relative'><AccountCircleOutlinedIcon/></div>
            <div className='contact-position'>
                <div className='contact-font-name'>{name}</div>
                <div className='contact-font-email'>{email}</div>
            </div>
            <div className='div_relative'>
            <DeleteForeverOutlinedIcon />
            </div>
        </Box>
    );
};
export default ContactCard;