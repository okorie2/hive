import React from "react";
import config from "../config";
import axios from "axios";
const useAxios = async (method, url, body) => {
  const resp = await axios({
    method: method,
    url: `${config.API_BASE_URL + url}`,
    data: body,

    headers: {
      authorization: `Bearer${
        localStorage.getItem("token") ? localStorage.getItem("token") : ""
      }`,
      mode: "cors",
    },
  });
  console.log(resp);
  return resp;
};
export default useAxios;
