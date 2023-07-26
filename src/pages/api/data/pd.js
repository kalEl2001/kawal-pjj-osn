import { axiosServiceHandler } from "@/utils/api";
import { usernames } from "@/utils/constants";

const fetchPdScoreboard = async (req, res) => {
  const url = process.env.NEXT_PUBLIC_PD_URL;
  const body = {
    usernames,
  };
  const response = await axiosServiceHandler.post(url, body);
  return res.status(200).json(response.data);
};

export default fetchPdScoreboard;
