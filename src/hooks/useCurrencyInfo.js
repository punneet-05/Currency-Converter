import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});

  useEffect(() => {
    if (!currency) return;

    fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
      .then((res) => res.json())
      .then((res) => {
        setData(res[currency] || {});
        console.log("Fetched data:", res[currency]); // Better place to log
      })
      .catch((err) => console.error("Error fetching currency data:", err));
  }, [currency]);

  // Optional: log every time `data` changes
  useEffect(() => {
    console.log("Updated currency data:", data);
  }, [data]);

  return data;
}

export default useCurrencyInfo;
