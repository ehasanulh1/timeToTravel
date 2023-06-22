import React from 'react';
import line from '../../assets/line.svg';
import image1 from '../../assets/partners/image1.png';
import image2 from '../../assets/partners/image2.png';
import image3 from '../../assets/partners/image3.png';
import image4 from '../../assets/partners/image4.png';
import image5 from '../../assets/partners/image5.png';
import image6 from '../../assets/partners/image6.png';

const Partners = () => {
    return (
        <div style={{ maxWidth: '1200px' }} className='mx-auto px-4 py-28'>
            <div>
                <div className='text-center pb-20'>
                    <h1 className='font-sans font-bold text-neutral-900 text-4xl uppercase mb-8'>OUR PARTNERS</h1>
                    <p className='text-lg italic mb-8 tracking-widest font-mono'>A trusted ally, shared success, collaboration, growth, synergy, trust, reliability, communication, support, and mutual goals.</p>
                    <img className='mx-auto text-yellow-500' src={line} alt="" />
                </div>
                <div className='grid grid-cols-1 lg:grid-cols-6 gap-8'>
                    <div className='border border-yellow-500'>
                        <img src={image1} alt="" />
                    </div>
                    <div className='border  border-yellow-500'>
                        <img src={image2} alt="" />
                    </div>
                    <div className='border  border-yellow-500'>
                        <img src={image3} alt="" />
                    </div>
                    <div className='border border-yellow-500'>
                        <img src={image4} alt="" />
                    </div>
                    <div className='border border-yellow-500'>
                        <img src={image5} alt="" />
                    </div>
                    <div className='border border-yellow-500'>
                        <img src={image6} alt="" />
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default Partners;