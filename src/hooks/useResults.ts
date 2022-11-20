import { useState, useEffect } from "react";
import yelp from "../api/yelp";

export default (): [
  (searchTerm: string) => Promise<void>,
  string[],
  string
] => {
  const [result, setResult] = useState([]);
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
      setResult(response.data.businesses);
    } catch (error) {
      console.log(error);
      setErrors("Something went wrong when calling api");
    }
  };

  useEffect(() => {
    searchApi("pasta");
  }, []);

  return [searchApi, result, errors];
};
