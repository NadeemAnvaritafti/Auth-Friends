import React, {useState, useEffect} from 'react';
import { axiosWithAuth } from '../utils/AxiosWithAuth';
import FriendsCard from './FriendsCard';
import AddFriendsForm from './AddFriendForm';

const Friends = () => {

    const [friendsData, setFriendsData] = useState([]);

    useEffect(() => {
        addFriend();
        // axiosWithAuth().get('/friends')
        // .then(res => {
        //     console.log(res);
        //     setFriendsData(res.data);
        // })
        // .catch(err => console.log(err));
    }, []);

    const addFriend = () => {
        axiosWithAuth().get('/friends')
        .then(res => {
            setFriendsData(res.data);
        })
        .catch(err => console.log(err));
    }

    return (
        <div>
            <AddFriendsForm addFriend={addFriend} />
            {friendsData.map(item => (
                <FriendsCard item={item} key={item.id} />
            ))}
        </div>
    )
}

export default Friends;