import { axiosServiceHandler } from "@/utils/api";
import { usernames, psetSlugs } from "@/utils/constants";

const fetchProblemsetInfo = async (req, res) => {
  const url = process.env.NEXT_PUBLIC_OSN_URL;
  const body = {
    usernames,
    problemSetSlugs: psetSlugs,
  };
  const response = await axiosServiceHandler.post(url, body);
  return res.status(200).json(response.data);
};

export default fetchProblemsetInfo;
