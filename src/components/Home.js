import React, { useEffect, useState } from "react";
import Card from "./Card";

const Home = () => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(0);

 

  const handlePageClick = (pageNumber) => {
    setPage(pageNumber);
  };

  useEffect(() => {
    getData();
  }, [page]);

  const getData = () => {
    setLoading(true);
    fetch(`https://internship-service.onrender.com/videos?page=${page}`)
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        setVideos(data.data.posts);
      });
  };

  const pageNumbers = [...Array(10).keys()]; // Generate an array of page numbers 0 to 9

  return (
    <>
      {loading ? (
        <div className="w-[100%] h-[100vh] flex justify-center items-center">
          Loading...
        </div>
      ) : (
        <div className="w-[100%]">
          <div className="flex flex-col w-[70%] h-[100%] mx-auto">
            {videos.map((video, index) => (
              <Card key={index} videoData={video} />
            ))}
          </div>
          <div className="flex  justify-evenly items-center mb-16 mt-16 w-[40%] mx-auto">
            {pageNumbers.map((pageNumber) => (
              <button
                key={pageNumber}
                className={`w-14 text-xl ${
                  pageNumber === page
                    ? "bg-blue-500 text-white"
                    : "bg-white text-blue-500 hover:bg-blue-100"
                } focus:outline-none focus:ring-2 focus:ring-blue-300 font-semibold py-2 px-4 rounded-md`}
                onClick={() => handlePageClick(pageNumber)}
              >
                {pageNumber}
              </button>
            ))}
            <div>
          
         
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Home;
