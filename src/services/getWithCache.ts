import cacheData from "memory-cache";
import fetch from "node-fetch";

const getWithCache = async (url: string) => {
  const value = cacheData.get(url);
  if (value) {
    return value;
  } else {
    const hours = 24;
    const res = await fetch(url);
    const data = await res.json();
    if (res.status >= 300) return { error: true };
    cacheData.put(url, data, hours * 1000 * 60 * 60);
    return data;
  }
};

export default getWithCache;
