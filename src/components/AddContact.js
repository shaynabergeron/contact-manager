import React from 'react';

class AddContact extends React.Component{
    render(){
        return(
            <div>
                <h2> Add Contact</h2>
                <form>
                    <div>
                        <label>Name</label>
                        <input type="text" name="Name" placeholder="Name"/>
                    </div>
                    <div>
                        <label>Email</label>
                        <input type="text" email="Email" placeholder="Email"/>
                    </div>
                </form>
            </div>
        );
    }
}

export default AddContact;