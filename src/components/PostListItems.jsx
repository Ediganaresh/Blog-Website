import React from "react";
import { Link } from "react-router-dom";
import Image from "./image";

const PostListItems = () => {
  return (
    <div className="flex flex-col gap-8">
      {/* First Post Item */}
      <div className="flex flex-col xl:flex-row gap-8">
        {/* image */}
        <div className="md:hidden xl:block xl:w-1/3">
          <Image src="postImg.jpeg" className="rounded-2xl object-cover" w="735" />
        </div>
        {/* details */}
        <div className="">
          <Link to="/test" className="text-4xl font-semibold">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam
            modi eum aut.
          </Link>

          <div className="flex items-center gap-2 text-gray-400 text-sm">
            <span>Written by</span>

            <Link className="text-blue-800">John Doe</Link>

            <span>on</span>

            <Link className="text-blue-800">Web Design</Link>

            <span>2 days ago</span>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
            reprehenderit hic consequatur ad rem, accusamus doloribus
            aspernatur dolorem facilis ut quam minus ex illo accusantium
            laudantium dolorum, quisquam sequi at.
          </p>

          <Link to="/test" className="underline text-blue-800 text-sm">
            Read More
          </Link>
        </div>
      </div>

      {/* Second Post Item */}
      <div className="flex flex-col xl:flex-row gap-8">
        {/* image */}
        <div className="md:hidden xl:block">
          <Image src="postImg.jpeg" className="rounded-2xl object-cover" w="735" />
        </div>
        {/* details */}
        <div className="">
          <Link to="/test" className="text-4xl font-semibold">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam
            modi eum aut.
          </Link>

          <div className="flex items-center gap-2 text-gray-400 text-sm">
            <span>Written by</span>

            <Link className="text-blue-800">John Doe</Link>

            <span>on</span>

            <Link className="text-blue-800">Web Design</Link>

            <span>2 days ago</span>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
            reprehenderit hic consequatur ad rem, accusamus doloribus
            aspernatur dolorem facilis ut quam minus ex illo accusantium
            laudantium dolorum, quisquam sequi at.
          </p>

          <Link to="/test" className="underline text-blue-800 text-sm">
            Read More
          </Link>
        </div>
      </div>

      {/* Third Post Item */}
      <div className="flex flex-col xl:flex-row gap-8">
        {/* image */}
        <div className="md:hidden xl:block">
          <Image src="postImg.jpeg" className="rounded-2xl object-cover" w="735" />
        </div>
        {/* details */}
        <div className="">
          <Link to="/test" className="text-4xl font-semibold">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam
            modi eum aut.
          </Link>

          <div className="flex items-center gap-2 text-gray-400 text-sm">
            <span>Written by</span>

            <Link className="text-blue-800">John Doe</Link>

            <span>on</span>

            <Link className="text-blue-800">Web Design</Link>

            <span>2 days ago</span>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
            reprehenderit hic consequatur ad rem, accusamus doloribus
            aspernatur dolorem facilis ut quam minus ex illo accusantium
            laudantium dolorum, quisquam sequi at.
          </p>

          <Link to="/test" className="underline text-blue-800 text-sm">
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PostListItems;
