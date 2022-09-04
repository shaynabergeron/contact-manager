import React from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import './AddContact.css';

/** Add Contact component with text field
 * @todo: Fixed "Add Contact styling"
  */

class AddContact extends React.Component{
    render(){
        return(
            <div className='add-contact-font'>
                <h2> Add Contact</h2>
                <Box
                    component="form"
                    sx={{'& > :not(style)': { m: 1, width: '30ch' },}}
                    noValidate
                    autoComplete="off"
                >
                    <TextField
                        type="name"
                        label="Name"
                        placeholder="Name"
                    />
                   <TextField
                        type="email"
                        label="Email"
                        placeholder="Email"
                    />
                </Box>
            </div>
        );
    }
}

export default AddContact;