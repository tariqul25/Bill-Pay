import React, { use } from 'react';
import Banner from '../Banner/Banner';
import Card from '../Card/Card';
import { PayContext } from '../../Provider/PayProvider';
import Loading from '../../Pages/Loading';
import Accordion from '../../Pages/Accordion';

const Home = () => {
    const {loading}=use(PayContext)
    if(loading){
        return <Loading></Loading>
    }
    return (
        <div>
            <Banner></Banner>
            <Card></Card>
            <Accordion></Accordion>
        </div>
    );
};

export default Home;