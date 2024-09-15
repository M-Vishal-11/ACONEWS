import { useState, useEffect } from "react";
import NavBar from "./NavBar";
import SearchBar from "./SearchBar";
import Newsfeed from "./Newsfeed";

const key = '6d7c447d4c348dfd9f53c82e60e92919';

export default function App() {
  const [articles, setArticles] = useState([]);
  const [term, setTerm] = useState("example");
  const [country, setCountry] = useState('us');

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(`https://gnews.io/api/v4/search?q=${term}&lang=en&country=${country}&max=10&apikey=${key}`);
        const data = await response.json();
        setArticles(data.articles);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, [term, country]);

  const updateSearchTerm = (newTerm) => {
    setTerm(newTerm);
  };

  const updateCountry = (newCountry) => {
    setCountry(newCountry);
  };

  return (
    <div>
      <NavBar />
      <SearchBar updateSearchTerm={updateSearchTerm} updateCountry={updateCountry} />

      <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {articles.map((article, index) => (
          <Newsfeed key={index} article={article} />
        ))}
      </div>
    </div>
  );
}