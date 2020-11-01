import axios from "axios";

const fetch2 = ({setData2}) => {
  axios
    .get("https://www.breakingbadapi.com/api/characters?limit=10&offset=20")
    .then((res) => {
      // console.log(res);
      setData2(res.data);
    })
    .catch((err) => {
      console.log(err.msg);
    });
};

export { fetch2 };
