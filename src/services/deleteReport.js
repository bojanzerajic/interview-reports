import axios from "axios";

export const deleteReport = (id) => {
  let token = `Bearer ${JSON.parse(localStorage.getItem("token"))}`;

  axios({
    method: "DELETE",
    url: `https://localhost:3333/api/reports/${id}`,
    headers: { Authorization: token },
  }).then((res) => console.log(res));
};
