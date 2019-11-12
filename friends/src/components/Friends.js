import React, {useState, useEffect} from 'react';
import { axiosWithAuth } from '../utils/AxiosWithAuth';
import FriendsCard from './FriendsCard';

const Friends = () => {

    const [friendsData, setFriendsData] = useState([]);

    useEffect(() => {
        axiosWithAuth().get('/friends')
        .then(res => {
            console.log(res);
            setFriendsData(res.data);
        })
        .catch(err => console.log(err));
    }, []);


    return (
        <div>
            {friendsData.map(item => (
                <FriendsCard item={item} key={item.id} />
            ))}
        </div>
    )
}

export default Friends;