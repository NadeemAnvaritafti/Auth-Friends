import React, {useState} from 'react';
import {axiosWithAuth} from '../utils/AxiosWithAuth';

const AddFriendsForm = props => {
  
    const [addFriendData, setAddFriendData] = useState({
        name: '',
        age: '',
        email: ''
    });

    const handleChange = e => {
        setAddFriendData({
            ...addFriendData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = e => {
        e.preventDefault();
        axiosWithAuth().post('/friends', addFriendData)
        .then(res => {
            console.log(res);
            props.addFriend();
            setAddFriendData({
                name: '',
                age: '',
                email: ''
            });
        })
        .catch(err => console.log(err))
    };

    return (
        <div className='formDiv'>
            <h2>Add A Friend</h2>

            <form onSubmit={handleSubmit}>

            <div className='labelinput'>
            <label htmlFor='name'>Name:</label>
                <input
                    type="text" 
                    name="name"
                    id="name"
                    placeholder="Name" 
                    value={addFriendData.name} 
                    onChange={handleChange} 
                    required 
                />
            </div>

            <div className='labelinput'>
            <label htmlFor='age'>Age:</label>
                <input
                    type="number" 
                    name="age"
                    id="age"
                    placeholder="Age" 
                    value={addFriendData.age} 
                    onChange={handleChange} 
                    required 
                />
            </div>

            <div className='labelinput labelinputlast'>
            <label htmlFor='email'>Email:</label>
                <input
                    type="text" 
                    name="email"
                    id="email"
                    placeholder="Email" 
                    value={addFriendData.email} 
                    onChange={handleChange} 
                    required 
                />
            </div>
            
                <button type='submit'>Submit</button>

        </form>
        </div>
    );
}


export default AddFriendsForm;