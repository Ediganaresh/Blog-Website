import React from 'react';
import Search from "../components/Search"
import { Link } from 'react-router-dom';
import Image from "../components/image";
import PostMenuAction from '../components/POstMenuAction';
import Comments from '../components/Comments';

const SinglePostPage = () => {
  return (
    <div className='flex flex-col gap-8'>
      {/* Detail */}
      <div className='flex gap-8'>
        <div className='lg:w-3/5 flex flex-col gap-8'>
          <h1 className='text-xl md:text-3xl xl:text-4xl 2xl:text-5xl font-semibold'>Lorem ipsum dolor sit amet.</h1>
          <div className='flex items-center gap-2 text-gray-400 text-sm'>
            <span>Written By</span>
            <Link className='text-blue-800'>Naresh</Link>
            <span>On</span>
            <Link className='text-blue-800'>Web Design</Link>
            <span>2 Days ago</span>
          </div>
          <p className='text-gray-500 font-medium'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia nobis maxime iure! Ea deserunt eum
            reprehenderit accusantium ipsa, voluptates minus!
          </p>
        </div>

        <div className='hidden lg:block w-2/5'>
          <Image src="postImg.jpeg" w="600" className="rounded-2xl" />
        </div>
      </div>

      {/* Content */}
      <div className='flex flex-col gap-8'>
        {/* Main Content and Author Section */}
        <div className='flex flex-col md:flex-row gap-8'>
          {/* Text Section */}
          <div className='lg:text-lg flex-1 flex flex-col gap-6 text-justify'>
            <p className='text-sm text-gray-700'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore deserunt blanditiis nobis deleniti in labore enim quam. Magnam veritatis quaerat et officia at animi earum sequi nobis in, fuga accusantium cumque blanditiis facere vero est voluptate quibusdam voluptatum deleniti, itaque obcaecati doloribus. Esse perspiciatis ipsam eos repellat reprehenderit odit doloremque.
            </p>
            <p className='text-sm text-gray-700'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore deserunt blanditiis nobis deleniti in labore enim quam. Magnam veritatis quaerat et officia at animi earum sequi nobis in, fuga accusantium cumque blanditiis facere vero est voluptate quibusdam voluptatum deleniti, itaque obcaecati doloribus. Esse perspiciatis ipsam eos repellat reprehenderit odit doloremque.
            </p>
            <p className='text-sm text-gray-700'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore deserunt blanditiis nobis deleniti in labore enim quam. Magnam veritatis quaerat et officia at animi earum sequi nobis in, fuga accusantium cumque blanditiis facere vero est voluptate quibusdam voluptatum deleniti, itaque obcaecati doloribus. Esse perspiciatis ipsam eos repellat reprehenderit odit doloremque.
            </p>
            <p className='text-sm text-gray-700'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore deserunt blanditiis nobis deleniti in labore enim quam. Magnam veritatis quaerat et officia at animi earum sequi nobis in, fuga accusantium cumque blanditiis facere vero est voluptate quibusdam voluptatum deleniti, itaque obcaecati doloribus. Esse perspiciatis ipsam eos repellat reprehenderit odit doloremque.
            </p >
            <p className='text-sm text-gray-700'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos eligendi voluptatum dolores odit nam debitis nihil velit necessitatibus, sint, rerum fuga dolor! Quod iste cumque quasi accusamus doloribus quibusdam! Aperiam dicta obcaecati similique, ex id sed debitis enim laudantium odit soluta nihil quis tempore veritatis quidem porro voluptas, tempora modi consequuntur doloremque. Nisi repellat, maiores accusantium commodi hic quae quod nulla ullam! Minima sint praesentium eum vero corrupti rem autem quam dolorum? Exercitationem, odio ab, laudantium maxime enim commodi facere nostrum accusantium tempora sequi consequuntur quidem in architecto a nulla optio iure ducimus, atque temporibus dicta nam soluta iste porro.</p>
           
           
          </div>

          {/* Author Section */}
          <div className='flex flex-col gap-4 w-full md:w-1/3 lg:w-1/4'>
            <h1 className='mb-4 text-sm font-medium'>Author</h1>
            <div className='flex items-center gap-4'>
              <Image
                src="userImg.jpeg"
                className="w-12 h-12 rounded object-cover"
                w="48"
                h="48"
              />
              <div>
                <Link className="font-semibold text-lg">John Doe</Link>
                <p className="text-gray-500 text-sm">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, numquam?
                </p>
                <div className='flex gap-2 mt-2'>
                  <Link><Image src="facebook.svg" /></Link>
                  <Link><Image src="instagram.svg" /></Link>
                </div>
              </div>
            </div>

            {/* Post Menu Actions */}
            <PostMenuAction />

            {/* Categories */}
            <h1 className='mt-8 mb-4 text-sm font-medium'>Categories</h1>
            <div className='flex flex-col gap-2 text-sm'>
              <Link className='underline'>All</Link>
              <Link className='underline' to="/">Web Design</Link>
              <Link className='underline' to="/">Development</Link>
              <Link className='underline' to="/">DataBase</Link>
              <Link className='underline' to="/">Search Engines</Link>
              <Link className='underline' to="/">Marketing</Link>
            </div>
            <h1 className='mt-8 mb-4 text-sm font-medium'>Search</h1>
            <Search/>
          </div>
        </div>
      </div>
      <Comments/>
    </div>
  );
};

export default SinglePostPage;
