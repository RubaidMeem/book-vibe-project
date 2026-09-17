import { useLoaderData } from 'react-router';
import Banner from '../../components/Banner/Banner';
import Books from '../Books/Books';

const Home = () => {

    //useLoaderData hooks for getting the loaded data
    const data = useLoaderData();
    console.log(data)
    return (
        <div>
            <Banner></Banner>
            <Books data={data}></Books>
        </div>
    );
};

export default Home;