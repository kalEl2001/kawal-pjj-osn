import { axiosServiceHandler } from "@/utils/api";

const fetchProblemsetInfo = async (req, res) => {
  const url = process.env.NEXT_PUBLIC_PSET_INFO_URL + "/" + req.query.slug;
  const response = await axiosServiceHandler.get(url);
  return res.status(200).json(response.data);
};

export default fetchProblemsetInfo;
