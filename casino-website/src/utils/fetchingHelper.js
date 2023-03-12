const fetchData = async (url, method) => {
const data = await fetch(url, {
    method: method,
  });
  const dataJSON = await data.json();
  return dataJSON;
}
export default fetchData;