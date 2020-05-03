import { useEffect, useState } from "react";

// used params as objects to avoid order issues
const useRequest = ({ url, method }) => {
  const [jsonResult, setJsonResult] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchResults = async () => {
    const response = await fetch(url, method);
    if (response) {
      const result = await response.json();
      setJsonResult(result);
      setLoading(false);
    }
  };

  useEffect(() => {
    setLoading(true);
    fetchResults();
  }, []);

  return [jsonResult, loading];
};

export default useRequest;
