import React, { useEffect, useState } from "react";

const Home = () => {
  const [myNews, setNews] = useState([]);

  const fetchData = async () => {
    try {
      let response = await fetch(
        "https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=6e80ebe7745540b986faf0f4117f84f4"
      );
      let data = await response.json();
      setNews(data.articles);
      console.log(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []); // Pass an empty dependency array to run the effect only once

  return (
    <div>

      <div className="bg-white grid grid-cols-1 mx-[100px] sm:grid-cols-2  md:grid-cols-3 gap-2">
        {myNews.map((ele) => (
          <div key={ele.title} className="max-w-sm rounded overflow-hidden shadow-lg">
            <img className="w-full mt-4" src={ele.urlToImage} alt="Sunset in the mountains" />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">{ele.title}</div>
              <p className="text-gray-700 text-base"></p>
            </div>
            <div className="px-6 pt-4 pb-2">
              <a href={ele.url} target="_blank" rel="noopener noreferrer" className="inline-block rounded-full px-3 py-1 text-sm font-semibold text-white bg-green-700 mr-2 mb-2">Read More</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
