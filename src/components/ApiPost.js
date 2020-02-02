async function catchData(url) {
    const response = await fetch(url);
    const json = await response.json();
    return json;
  }
  export const getPost = () => catchData('http://hackatrybe.herokuapp.com/news')
    .then((response) => response);