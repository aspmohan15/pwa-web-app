import axios from "axios";
import React, { useEffect, useState } from "react";

function useFetch(url) {
  const [data, setData] = useState([]);
  const [error, setError] = useState();
  const [loading, setLoading] = useState(true);

  async function getDAtaFromApi() {
    await axios
      .get(url)
      .then((data) => setData(data.data))
      .catch((err) => setError(err))
      .finally(setLoading(false));
  }

  useEffect(() => {
    getDAtaFromApi();
  }, []);

  return { loading, data, error };
}

export default useFetch;
