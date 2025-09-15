import React, { useEffect, useState } from "react";
import "animate.css";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "remixicon/fonts/remixicon.css";

const API_KEY = "iJoHGTMvQ6cPMdr7v7JCgF9h4yjQKR8o1wjil2bvUY1bQOEepUGHGapS";

const App = () => {
  //step 4 state to access res data inside the div
  const [photos, setPhotos] = useState([]);

  //step 6 usestate for loading and set loading
  const [loading, setLoading] = useState(false);

  //usestate to load more page
  const [page, setPage] = useState(1);

  //usestate to handle searct
  const [query, setQuery] = useState("flower");

  //step3 create fetch image function
  const fetchImage = async () => {
    // alert("Hello");
    //install axios and react-toastify to create get request await async with try and catch error
    try {
      //make set loading true
      setLoading(true);

      //authenticate api
      const options = {
        headers: {
          Authorization: API_KEY,
        },
      };

      const res = await axios.get(
        `https://api.pexels.com/v1/search?query=${query}&page=${page}&per_page=12`,
        options
      );
      // alert(res);
      // console.log(res);
      console.log(res.data);

      //call setPhotos Function
      setPhotos([...photos, ...res.data.photos]);
    } catch (err) {
      toast.error("Failed to fetch images");
    } finally {
      setLoading(false);
    }
  };

  //function to load more
  const loadMore = () => {
    // alert("Loaded");
    setPage(page + 1);
  };

  //search function
  const search = (e) => {
    const q = e.target[0].value.trim();
    setPhotos([]);
    // alert(q);
    setQuery(q);
    e.preventDefault();
  };

  // Step 2 after ui and api key useeffect to load whenever the page opens
  useEffect(() => {
    //fetchimage function call
    fetchImage();
  }, [page, query]);

  return (
    <div
      className="bg-gray-400 min-h-screen flex flex-col gap-8
     items-center animate__animated animate__fadeIn"
    >
      <h1 className="text-4xl font-bold text-indigo-600 py-8 ">
        📸 Image Gallery - {page}
      </h1>
      <form onSubmit={search}>
        <input
          className=" p-3 bg-white rounded-l-lg w-[400px] focus:outline-indigo-500"
          placeholder="Search Image Here"
          required
        />
        <button
          className="bg-gradient-to-br from-indigo-600 via-blue-500 to-indigo-600
         text-white font-bold py-3 px-8 rounded-r-lg 
          hover:scale-105 transition-transform cursor-pointer"
        >
          Search
        </button>
      </form>
      {photos.length === 0 && (
        <h1 className="text-4xl font-bold text-center">
          Search Result Not Found
        </h1>
      )}
      <div className="grid lg:grid-cols-4 grid-cols-2 lg:gap-12 gap-8 w-9/12 ">
        {photos.map((items, index) => (
          <div key={index} className="bg-white rounded-2xl ">
            <img
              src={items.src.medium}
              alt={items.alt}
              className="rounded-t-lg h-[180px] object-cover w-full hover:scale-110 transition-transform-300 "
            />
            {/* new div for download function  */}
            <div className="p-3">
              <h1 className="text-lg font-medium text-gray-600 capitalize">
                {items.photographer}
              </h1>
              <a
                target="_blank"
                href={items.src.original}
                className="mt-3 block bg-green-400 font-bold py-2 
              rounded-lg text-center hover:scale-105 transition-transform 
              duration-300 cursor-pointer "
              >
                <i className="ri-download-line mr-1"></i>
                Download
              </a>
            </div>
          </div>
        ))}
      </div>
      <div>
        {loading && (
          <i className="ri-refresh-line text-4xl text-indigo-600 animate-spin animate-delay-200 animate-pulse inline-block"></i>
        )}
        {photos.length > 0 && (
          <button
            onClick={loadMore}
            className="bg-rose-500 py-3 px-16 rounded-lg font-medium text-white cursor-pointer hover:scale-110"
          >
            Load More
          </button>
        )}
      </div>
      <ToastContainer />
    </div>
  );
};

export default App;
