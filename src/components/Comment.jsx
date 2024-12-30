import React from 'react';

const CommentCard = () => {
  return (
    <div className="p-4 bg-slate-50 rounded-xl mb-8">
      <div className="flex items-center gap-4">
        {/* Replace Image with a native <img> tag if Image is undefined */}
        <img
          src="userImg.jpeg" // Replace with the actual image path
          alt="User"
          className="w-10 h-10 rounded-full object-cover"
        />
        <div>
          <span className="font-medium block">John Doe</span>
          <span className="text-sm text-gray-500">2 days ago</span>
        </div>
      </div>
      <div className="mt-4">
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium
          iste natus expedita aliquid dicta quam sint accusamus magnam
          doloremque nisi?
        </p>
      </div>
    </div>
  );
};

export default CommentCard;
