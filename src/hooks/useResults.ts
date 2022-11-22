import { useState, useEffect } from "react";
import yelp from "../api/yelp";

export default (): [
  (searchTerm: string) => Promise<void>,
  Restaurant[],
  string,
  boolean
] => {
  const [results, setResults] = useState([]);
  const [errors, setErrors] = useState("");
  const [loading, setLoading] = useState(false);

  const searchApi = async (searchTerm: string) => {
    try {
      setLoading(true);
      const response = await yelp.get("/search", {
        params: {
          limit: 50,
          term: searchTerm,
          location: "gothenburg",
        },
      });
      setResults(response.data.businesses);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setErrors("Something went wrong when calling api");
    }
  };

  useEffect(() => {
    searchApi("pasta");
  }, []);

  return [searchApi, results, errors, loading];
};
