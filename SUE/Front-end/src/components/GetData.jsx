import React, { useEffect, useState } from 'react';
import axios from 'axios';

const GetData = ({ url }) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url);
        setData(response.data);
      } catch (err) {
        console.log(err = "Error ao tentar extrair");
      }
    }
    fetchData();
  }, [url]);
  
  return (
    <div>
      <div>{JSON.stringify(data)}</div>
    </div>
  );
};

export default GetData;
