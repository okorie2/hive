import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

// const useAxios = async (method:Method, url:string, body?: Record<string, unknown>) => {
//   const resp = await axios({
//     method: method,
//     url: `${config.API_BASE_URL + url}`,
//     data: body,

//     headers: {
//       authorization: `Bearer${
//         localStorage.getItem("token") ? localStorage.getItem("token") : ""
//       }`,
//       mode: "cors",
//     },
//   });
//   console.log(resp);
//   return resp;
// };
// export default useAxios;

let data;
if (typeof window !== "undefined") {
  data = JSON.parse(localStorage.getItem("user") || "");
}
const token = data?.data?.access_token;

const useAxios = async function apiRequest<T>(
  request: AxiosRequestConfig
): Promise<AxiosResponse<T>> {
  const resp = await axios.request<T>({
    ...request,
    headers: {
      ...request.headers,
      authorization: `Bearer ${token}`,
      mode: "cors",
    },
  });
  console.log(resp, "response!");
  if (resp.status === 401) {
    console.log("clear");
    localStorage.clear();
  }
  return resp;
};
export default useAxios;
