import React from 'react'
import { Link } from 'react-router-dom'
import Image from "../components/image"
import PostMenuAction from '../components/POstMenuAction'

const SinglePostPage = () => {
  return (
    <div className='flex flex-col gap-8'>
      {/* detail */}
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
        <p className='text-gray-500 font-medium'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia nobis maxime iure! Ea deserunt eum
           reprehenderit accusantium ipsa, voluptates minus!</p>
        </div>

        <div className='hidden lg:block w-2/5'>
          <Image  src="postImg.jpeg" w="600" className="rounded-2xl"/>
        </div>
      </div>
      {/* Content */}
      <div className='felx flex-col md:flex-row gap-8'>
        {/* text */}
        <div className='lg:text-lg flex flex-col gap-6 text-justify'>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore deserunt blanditiis nobis deleniti in labore enim quam. Magnam veritatis quaerat et officia at animi earum sequi nobis in, fuga accusantium cumque blanditiis facere vero est voluptate quibusdam v
            oluptatum deleniti, itaque obcaecati doloribus. Esse perspiciatis ipsam 
            eos repellat reprehenderit odit doloremque. </p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat quod omnis quas accusamus ut. Aspernatur debitis consectetur voluptates repellat distinctio velit dolorum labore voluptate molestiae, soluta, asperiores porro maxime. Illum, impedit? Beatae in illo saepe fugit enim natus.
               Eius similique dignissimos eum tenetur dolor aspernatur quisquam iste! Esse, ullam veritatis?</p>
        </div>
        {/* MENU */}
        <div className='px-4 h-max sticky top-8'>
          <h1>Author</h1>
          <div className="">
            <Image src="userImg.jpeg"
            className="w-12 h-12 rounded object-cover"
            w="48"
            h="48"
            />
            <Link>John Doe</Link>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, numquam?</p>
            <div className='flex gap-2'>
              <Link><Image src="facebook.svg"/></Link>
              <Link><Image src="instagram.svg"/></Link>
            </div>
          </div>
          <PostMenuAction/>
           <h1>Categories</h1>
          <div className='flex flex-col gap-2 text-sm'>
          <Link className='underline'>All</Link>
          <Link className='underline' to="/">Web Design</Link>
          <Link className='underline' to="/">Development</Link>
          <Link className='underline' to="/">DataBase</Link>
          <Link className='underline' to="/">Search Engines</Link>
          <Link className='underline' to="/">Marketing</Link>            
        </div>
      </div>
    </div>
    </div>
  )
}


export default SinglePostPage
