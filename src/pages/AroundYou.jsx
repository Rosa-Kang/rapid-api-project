import { useState, useEffect } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';

import { Error, Loader, SongCard } from '../components';

const AroundYou = () => {
    const [first, setFirst] = useState('');
    const [Loading, setLoading] = useState(true);
    const [activeSong, isPlaying] = useSelector((state) => state.player);

    useEffect(() => {
        axios.get(`https://geo.ipify.org/api/v2/country?apiKey=at_FsgCiaxfzkiM2W12I3bHs0NOkVyh2`)
            .then((res) => setCountry(res?.data?.location?.country))
            .catch((err) => console.log(err))
            .finally(() => setLoading(false));
    }, [country])
    
    return (
        <div></div>
    )
}

export default AroundYou;