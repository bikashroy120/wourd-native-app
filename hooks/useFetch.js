import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";

const baseUrl = "https://api-75r3.onrender.com/api/";

const useFetch = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    setIsLoading(true);

    try {
      const response = await axios.get(
        "https://api-75r3.onrender.com/api/product"
      );
      setData(response.data);
      setIsLoading(false);
    } catch (error) {
      setError(error);
      setIsLoading(false);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(()=>{
    fetchData()
  },[])

  const refetch = ()=>{
    setIsLoading(true)
    fetchData()
  }

  return {data,isLoading,error};
};

export default useFetch;
