import { useLoaderData } from 'react-router-dom';
import line from '../../assets/line.svg';
import DestinationCard from '../Home/DestinationCard';

const AllDestinations = () => {
    const destinationsData = useLoaderData();
    console.log(destinationsData)

    return (
        <div style={{ maxWidth: '1200px' }} className='mx-auto px-4 py-28'>
            <div className='text-center pb-20'>
                <h1 className='font-sans font-bold text-neutral-900 text-4xl uppercase mb-8'>ALL DESTINATIONS</h1>
                <img className='mx-auto text-yellow-500' src={line} alt="" />
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
                {
                    destinationsData.map(destination => <DestinationCard
                        key={destination._id}
                        destination={destination}
                    ></DestinationCard>)
                }
            </div>
        </div >
    );
};

export default AllDestinations;