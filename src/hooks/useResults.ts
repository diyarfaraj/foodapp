import { useState, useEffect } from "react";
import yelp from "../api/yelp";

export default (): [
  (searchTerm: string) => Promise<void>,
  Restaurant[],
  string
] => {
  const [results, setResults] = useState([]);
  const [errors, setErrors] = useState("");

  const searchApi = async (searchTerm: string) => {
    try {
      const response = await yelp.get("/search", {
        params: {
          limit: 50,
          term: searchTerm,
          location: "gothenburg",
        },
      });
      setResults(response.data.businesses);
    } catch (error) {
      console.log(error);
      setErrors("Something went wrong when calling api");
    }
  };

  useEffect(() => {
    searchApi("pasta");
  }, []);

  return [searchApi, results, errors];
};
