import cacheData from "memory-cache";

const getWithCache = async (url: string) => {
  const value = cacheData.get(url);
  if (value) {
    return value;
  } else {
    const mins = 10;
    const res = await fetch(url);
    const data = await res.json();
    cacheData.put(url, data, mins * 1000 * 60);
    return data;
  }
};

export default getWithCache;
