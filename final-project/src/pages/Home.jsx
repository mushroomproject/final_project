import React, { useState, useEffect } from 'react';
import vegetable from '../assets/vegetable.jpg';
import vegetable1 from '../assets/vegetable1.jpg';
import vegetable2 from '../assets/vegetable2.jpg';
import vegetable3 from '../assets/vegetable3.jpg';
import vegetable4 from '../assets/vegetable4.jpg';
import vegetable5 from '../assets/vegetable5.jpg';
import { Link } from 'react-router-dom';


const YourComponent = () => {
  const [currentImage, setCurrentImage] = useState(vegetable1);
  const imageList = [vegetable,vegetable1, vegetable2,vegetable3,vegetable4,vegetable5]; // Add more images as needed
  const intervalTime = 5000; // Change image every 5 seconds (adjust as needed)

  useEffect(() => {
    const interval = setInterval(() => {
      const nextImageIndex = (imageList.indexOf(currentImage) + 1) % imageList.length;
      setCurrentImage(imageList[nextImageIndex]);
    }, intervalTime);

    // Clear the interval when the component unmounts
    return () => clearInterval(interval);
  }, [currentImage, imageList]);

  return (
    <section className="relative h-full md:h-screen min-h-screen text-bold">
      <div className=" grid h-full flex-row place-content-center place-items-center text-white grid-col-2 md:grid-cols-2">
        <div className='h-screen md:h-full flex  flex-col items-center justify-center'>
        <h2 className="text-xl mx-4  mb-4 bg-opacity-20 backdrop-blur">Join our farmer community and experience the collective power of support, knowledge, and resources. Together, we cultivate success and empower farmers on our dedicated platform.</h2>
              <button className="bg-blue-500 text-white py-2 px-4 rounded">
                <Link to="/register">Register here</Link>
              </button> 
        </div>
        <div className='h-screen md:h-full flex  flex-col items-center justify-center '>
        <h3 className="text-2xl font-semibold  mb-4">Our Youtube Channel</h3>
              <div className="max-w-md">
                <iframe
                  title="YouTube Video"
                  width="100%"
                  height="315"
                  src="https://www.youtube.com/embed/your-video-id"
                  allowFullScreen
                ></iframe>
              </div>
        </div>
        <div className='h-screen md:h-full flex  flex-col items-center justify-center'>
        <h2 className="text-xl mx-4  mb-4 bg-opacity-20 backdrop-blur ">Engage with specialized experts and consult with 
        our knowledgeable professionals for assistance and timely update on crop diseases or seek
         expert guidance for innovative farming practices. Your journey to successful and informed farming starts with our dedicated experts.</h2>
              <button className="bg-green-500  text-white py-2 px-4 rounded hover:bg-green-700">
                <Link to="/register"> Book an appointment today</Link>
              </button> 
        </div>
      </div>
      {/* <div className="relative z-10">
        
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8">
          <div className="flex justify-between flex-row">
            <div className="flex flex-col">
              <h2 className="text-2xl   font-bold mb-4">Download Our Free Guide</h2>
              <button className="bg-blue-500 text-white py-2 px-4 rounded">
                Download Book
              </button>
            </div>
            <div className="flex flex-col">
              <h3 className="text-2xl font-semibold  mb-4">Our Youtube Channel</h3>
              <div className="max-w-md">
                <iframe
                  title="YouTube Video"
                  width="100%"
                  height="315"
                  src="https://www.youtube.com/embed/your-video-id"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <a
              href="#"
              className="inline-block rounded bg-pink-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-pink-700 focus:outline-none focus:ring focus:ring-yellow-400"
            >
              Get Started Today
            </a>
          </div>
        </div>
      </div> 
      */}

     
      <img
        src={currentImage}
        className='app-logo absolute brightness-50 -z-10 inset-0 w-full h-full object-cover'
        alt='loading'
      />
    </section>
  );
};

export default YourComponent;

