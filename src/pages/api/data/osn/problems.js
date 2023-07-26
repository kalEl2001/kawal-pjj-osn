import { axiosServiceHandler } from "@/utils/api";

const fetchProblemsInfo = async (req, res) => {
  const url =
    process.env.NEXT_PUBLIC_API_URL +
    "/problemsets/" +
    req.query.jid +
    "/problems";
  const response = await axiosServiceHandler.get(url);
  return res.status(200).json(response.data);
};

export default fetchProblemsInfo;
