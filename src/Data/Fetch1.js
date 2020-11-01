import axios from "axios";

const fetch1 = ({setData1}) => {
  axios
    .get("https://www.breakingbadapi.com/api/characters?limit=10&offset=10")
    .then((res) => {
      // console.log(res);
      setData1(res.data);
    })
    .catch((err) => {
      console.log(err.msg);
    });
};

export { fetch1 };
