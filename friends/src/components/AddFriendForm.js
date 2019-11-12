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
        })
        .catch(err => console.log(err))
    };

    return (
        <div>
            <h2>Add A Friend</h2>

            <form onSubmit={handleSubmit}>

            <label>Name:
                <input
                    type="text" 
                    name="name"
                    placeholder="Name" 
                    value={addFriendData.name} 
                    onChange={handleChange} 
                    required 
                />
            </label>

            <label>Age:
                <input
                    type="number" 
                    name="age"
                    placeholder="Age" 
                    value={addFriendData.age} 
                    onChange={handleChange} 
                    required 
                />
            </label>

            <label>Email:
                <input
                    type="text" 
                    name="email"
                    placeholder="Email" 
                    value={addFriendData.email} 
                    onChange={handleChange} 
                    required 
                />
            </label>

            <div>
                <button type='submit'>Submit</button>
            </div>

        </form>
        </div>
    );
}


export default AddFriendsForm;