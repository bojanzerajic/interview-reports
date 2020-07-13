import axios from "axios";

export const postReport = ({
  candidateId,
  candidateName,
  companyId,
  companyName,
  interviewDate,
  phase,
  status,
  note,
}) => {
  let token = `Bearer ${JSON.parse(localStorage.getItem("token"))}`;
  let reportData = {
    candidateId: candidateId,
    candidateName: candidateName,
    companyId: companyId,
    companyName: companyName,
    interviewDate: interviewDate,
    phase: phase,
    status: status,
    note: note,
  };
  console.log(reportData);
  console.log(token);

  return axios({
    method: "POST",
    url: "https://localhost:3333/api/reports",
    data: reportData,
    headers: {
      Authorization: token,
    },
  });
};
