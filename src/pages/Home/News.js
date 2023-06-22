import React from 'react';
import { FiChevronsRight } from 'react-icons/fi';
import line from '../../assets/line.svg';
import img1 from '../../assets/news/newsImg1.png';
import img2 from '../../assets/news/newsImg2.png';
import img3 from '../../assets/news/newsImg3.png';
import { Link } from 'react-router-dom';


const News = () => {
    return (
        <div style={{ maxWidth: '1200px' }} className='mx-auto px-4 py-20'>
            <div>
                <div className='text-center pb-20'>
                    <h1 className='font-sans font-bold text-neutral-900 text-4xl uppercase mb-8'>LATEST NEWS</h1>
                    <p className='text-lg italic mb-8 tracking-widest font-mono'>Travel restrictions easing, popular destinations reopening with safety measures in place.</p>
                    <img className='mx-auto text-yellow-500' src={line} alt="" />
                </div>
                <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
                    <div className="bg-base-200">
                        <figure><img src={img3} alt="Shoes" /></figure>
                        <div className="p-5 text-start">
                            <h2 className="card-title mt-2.5 mb-4">Sweet Love On The Beach</h2>
                            <p className='text-xs mb-4 text-gray-400'>June 06,2023 | By Angelina Mark</p>
                            <p className='text-gray-600'>Sweet Love On The Beach is a mesmerizing tale of love's enchanting dance amidst the rhythmic symphony of crashing waves and soft sand beneath their feet. As the sun sets on the horizon,</p>
                            <div className='flex items-center my-4'>
                                <Link to='#'>Read More</Link>
                                <span className='text-yellow-500'><FiChevronsRight/></span>
                            </div>
                        </div>
                    </div>
                    <div className="bg-base-200">
                        <div className="p-5 text-start">
                            <h2 className="card-title mt-2.5 mb-4">Cool place visit Full house</h2>
                            <p className='text-xs mb-4 text-gray-400'>June 06,2023 | By Victor Masaryk</p>
                            <p className='text-gray-600'>Full House is a cool place to visit that takes you on a nostalgic journey into the world of beloved sitcoms. Located in the heart of the city, it recreates the iconic set of the popular TV show, offering a delightful blend of entertainment and nostalgia.</p>
                            <div className='flex items-center my-4'>
                                <Link to='#'>Read More</Link>
                                <span className='text-yellow-500'><FiChevronsRight/></span>
                            </div>
                        </div>
                        <figure><img src={img2} alt="Shoes" /></figure>
                    </div>
                    <div className="bg-base-200">
                        <figure><img src={img1} alt="Shoes" /></figure>
                        <div className="p-5 text-start">
                            <h2 className="card-title mt-2.5 mb-4">Color Aloft Balloon Festival</h2>
                            <p className='text-xs mb-4 text-gray-400'>June 06,2023 | By Morley Safer</p>
                            <p className='text-gray-600'>The Color Aloft Balloon Festival is a vibrant spectacle that paints the sky with a kaleidoscope of colors. As hot air balloons gracefully ascend, their brilliant hues create a mesmerizing display against the backdrop of a clear blue sky.</p>
                            <div className='flex items-center my-4'>
                                <Link to='#'>Read More</Link>
                                <span className='text-yellow-500'><FiChevronsRight/></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default News;