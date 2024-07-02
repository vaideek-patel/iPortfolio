import React, { useEffect } from 'react';
import sal from 'sal.js';
import 'sal.js/dist/sal.css';
import servicesImage from "../Images/services.jpg";
import { Link } from 'react-router-dom';
import { scrollToTop } from '../utils/functions';

const ServiceDetails = () => {
  useEffect(() => {
    sal({
      threshold: 0.1,
      once: true,
    });
    scrollToTop();
  }, []);

  return (
    <div>
      <div className="p-3 mb-15 bg-gray-900 flex flex-col lg:flex-row justify-between items-start lg:items-center">
        <h2 className="text-2xl mt-2 mb-3 font-ralewayBold"><strong className='text-white'>Service Details</strong></h2>
        <nav className="breadcrumb text-sm text-gray-600 lg:ml-4">
          <Link to="/" className="text-gray-500 mr-3">Home</Link> / <span className='ml-2 text-white'>Service Details</span>
        </nav>
      </div>

      <div className="container mx-auto my-8 p-3">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full lg:w-1/3 px-4 mb-8 lg:mb-0" data-sal="slide-up" data-sal-delay="800" data-sal-duration="1000">
            <div className="bg-white p-6 rounded-lg border">
              <ul className="mb-4">
                <li className="my-5 font-roboto border-l-[3px] px-4 h-8 border-sky-500 cursor-pointer content-center"><strong>Web Design</strong></li>
                <li className="my-5 font-roboto border-l-[3px] px-4 h-8 border-gray-400 hover:border-sky-500 cursor-pointer content-center">Software Development</li>
                <li className="my-5 font-roboto border-l-[3px] px-4 h-8 border-gray-400 hover:border-sky-500 cursor-pointer content-center">Product Management</li>
                <li className="my-5 font-roboto border-l-[3px] px-4 h-8 border-gray-400 hover:border-sky-500 cursor-pointer content-center">Graphic Design</li>
                <li className="my-5 font-roboto border-l-[3px] px-4 h-8 border-gray-400 hover:border-sky-500 cursor-pointer content-center">Marketing</li>
              </ul>
            </div>
            <div className='mt-10' data-sal="slide-up">
              <h2 className="text-xl font-bold mb-1 font-ralewayBold">Enim qui eos rerum in delectus</h2>
              <p className='font-roboto'>
                Nam voluptatem quasi numquam quas fugiat ex temporibus quo est. Quia aut quam quod facere ut non occaecati ut aut. Nesciunt mollitia illum tempore corrupti sed eum reiciendis. Maxime modi rerum.
              </p>
            </div>
          </div>
          <div className="w-full lg:w-2/3 px-4" data-sal="slide-up" data-sal-delay="800" data-sal-duration="1000">
            <img
              src={servicesImage}
              alt="Service"
              className="w-full h-auto rounded mb-5"
            />
            <div className='bg-white rounded-lg '>
              <h2 className="text-[26px] font-bold mb-4 font-ralewayBold">Temporibus et in vero dicta aut eius lidero plastis trand lined voluptas dolorem ut voluptas</h2>
              <p className="mb-4 font-roboto">
                Blanditiis voluptate odit ex error ea sed officiis deserunt. Cupiditate non consequatur et doloremque consequuntur. Accusantium labore reprehenderit error temporibus saepe perferendis fuga doloribus vero. Qui omnis quo sit. Dolorem architecto eum et quos deleniti officia qui.
              </p>
              <ul className="mb-4">
                <li className="flex items-center mb-2">
                  <i className="bi bi-check-circle text-sky-500 mr-2 font-roboto"></i> Aut eum totam accusantium voluptatem.
                </li>
                <li className="flex items-center mb-2">
                  <i className="bi bi-check-circle text-sky-500 mr-2 font-roboto"></i> Assumenda et porro nisi nihil nesciunt voluptatibus.
                </li>
                <li className="flex items-center mb-2">
                  <i className="bi bi-check-circle text-sky-500 mr-2 font-roboto"></i> Ullamco laboris nisi ut aliquip ex ea
                </li>
              </ul>
              <p className="mb-4 font-roboto">
                Est reprehenderit voluptatem necessitatibus asperiores neque sed ea illo. Deleniti quam sequi optio iste veniam repellat odit. Aut pariatur itaque nesciunt fuga.
              </p>
              <p className='font-roboto'>
                Sunt rem odit accusantium omnis perspiciatis officia. Laboriosam aut consequuntur recusandae mollitia doloremque est architecto cupiditate ullam. Quia est ut occaecati fuga. Distinctio ex repellendus eveniet velit sint quia sapiente cumque. Et ipsa perferendis ut nihil. Laboriosam vel voluptates tenetur nostrum. Eaque iusto cupiditate et totam et quia dolorum in. Sunt molestiae ipsum at consequatur vero. Architecto ut pariatur autem ad non cumque nesciunt qui maxime. Sunt eum quia impedit dolore alias explicabo ea.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServiceDetails;  