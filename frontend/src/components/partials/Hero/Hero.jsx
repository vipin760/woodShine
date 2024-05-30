import React from "react";

const imageList = [
  {
    id: 1,
    img: "https://cdn.pixabay.com/photo/2020/08/22/17/51/boat-5509027_640.jpg",
    description:
      " it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and ",
  },
  {
    id: 2,
    img: "https://cdn.pixabay.com/photo/2020/08/22/17/51/boat-5509027_640.jpg",
    description:
      " it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and ",
  },
  {
    id: 3,
    img: "https://cdn.pixabay.com/photo/2020/08/22/17/51/boat-5509027_640.jpg",
    description:
      " it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and ",
  },
  {
    id: 4,
    img: "https://cdn.pixabay.com/photo/2020/08/22/17/51/boat-5509027_640.jpg",
    description:
      " it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and ",
  },
];

const Hero = () => {
  return (
    <div className="relative overflow-hidden min-h-[650px] sm:min-h-[650px] bg-gray-100 flex items-center justify-center">
      {/* background */}
      <div className="h-[700px] w-[700px] bg-primary/40 absolute -top-1/2 rotate-45 dark:bg-gray-950 dark:text-white duration-200">{/* background */}</div> 
      {/* hero section */}
      <div className="container pb-8 sm:pb-0">
        <div>
            <div className="grid grid-cols-1 sm:grid-cols-2">
                    {/* text content section */}
                    <div>
                        <h1 className="text-1xl sm:text-6xl lg:text-7xl font-bold"> Lorem ipsam color</h1>
                        <p>very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32</p>
                        <div>
                        <button className="bg-gradient-to-r hover:scale-105 from-primary to-secondary text-white py-2 px-4 rounded-full">order now</button>
                        </div>
                    </div>
                   
            </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
