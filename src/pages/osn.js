import { useState, useEffect } from "react";

import { axiosClientHandler } from "@/utils/api";
import { usernames, psetSlugs, usernameToUserDataMap } from "@/utils/constants";
import { calcColor } from "@/utils/calcColor";

const {
  Box,
  CircularProgress,
  Paper,
  TableContainer,
  Table,
  TableCell,
  TableHead,
  TableRow,
  TableBody,
  TablePagination,
  TableSortLabel,
} = require("@mui/material");

function descendingComparator(a, b, orderBy) {
  if (typeof a[orderBy] === "object") {
    if (b[orderBy]["value"] < a[orderBy]["value"]) {
      return -1;
    }
    if (b[orderBy]["value"] > a[orderBy]["value"]) {
      return 1;
    }
    if (b[orderBy]["value"] === a[orderBy]["value"]) {
      if (b["name"] < a["name"]) {
        return 1;
      }
      if (b["name"] > a["name"]) {
        return -1;
      }
    }
    return 0;
  }
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  if (b[orderBy] === a[orderBy]) {
    if (b["name"] < a["name"]) {
      return 1;
    }
    if (b["name"] > a["name"]) {
      return -1;
    }
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

const OSN = () => {
  const [problemList, setProblemList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [userProgressesData, setUserProgressesData] = useState([]);

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const [order, setOrder] = useState("desc");
  const [orderBy, setOrderBy] = useState("totalScore");

  const createSortHandler = (newOrderBy) => (event) => {
    onRequestSort(event, newOrderBy);
  };

  const onRequestSort = (event, newOrderBy) => {
    const isAsc = orderBy === newOrderBy && order === "asc";
    const toggledOrder = isAsc ? "desc" : "asc";
    setOrder(toggledOrder);
    setOrderBy(newOrderBy);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const fetchData = async () => {
    setLoading(true);
    let jids = [];
    for (const slug of psetSlugs) {
      const params = {
        slug: slug,
      };

      const response = await axiosClientHandler.get(
        "/api/data/osn/problemset",
        { params }
      );
      jids.push({ slug: slug, jid: response.data.jid });
    }

    let problemList = {};

    let totalProblemCount = 0;

    for (const jid of jids) {
      const params = {
        jid: jid.jid,
      };

      const response = await axiosClientHandler.get("/api/data/osn/problems", {
        params,
      });
      const problems = response.data.data;
      let aliases = [];
      for (const problem of problems) {
        aliases.push(problem.alias);
        totalProblemCount++;
      }
      problemList[jid.slug] = aliases;
    }
    setProblemList(problemList);

    const userProgressesMapResponse = await axiosClientHandler.get(
      "/api/data/osn/scoreboard"
    );

    const userProgressesMap = userProgressesMapResponse.data.userProgressesMap;

    let userData = [];

    for (const username of usernames) {
      const currUserProgresses = userProgressesMap[username];
      if (currUserProgresses) {
        let currUserData = {};
        currUserData["name"] = usernameToUserDataMap[username].name;
        currUserData["province"] = usernameToUserDataMap[username].province;
        currUserData["totalScore"] = {};
        currUserData["totalScore"]["value"] = 0;
        for (const slug of psetSlugs) {
          const currPsetProgresses = currUserProgresses[slug];
          const currPsetInfo = problemList[slug];
          for (let i = 0; i < currPsetInfo.length; i++) {
            const currProblem = currPsetInfo[i];
            const currProblemSlug = slug + "-" + currProblem;
            currUserData[currProblemSlug] = {};
            if (currPsetProgresses[currProblem]) {
              currUserData[currProblemSlug]["value"] =
                currPsetProgresses[currProblem].score;
              currUserData[currProblemSlug]["color"] = calcColor(
                currPsetProgresses[currProblem].score,
                100
              );
              currUserData["totalScore"]["value"] +=
                currPsetProgresses[currProblem].score;
            } else {
              currUserData[currProblemSlug]["value"] = null;
              currUserData[currProblemSlug]["color"] = "#eee";
            }
          }
        }

        currUserData["totalScore"]["color"] = calcColor(
          currUserData["totalScore"]["value"],
          totalProblemCount * 100
        );
        userData.push(currUserData);
      }
    }

    setUserProgressesData(stableSort(userData, getComparator(order, orderBy)));

    setLoading(false);
  };

  useEffect(() => {
    document.title = "Arsip OSN/KSN";
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setUserProgressesData(
      stableSort(userProgressesData, getComparator(order, orderBy))
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [order, orderBy]);

  return (
    <>
      {loading ? (
        <>
          <Box
            sx={{
              width: "100%",
              justifyContent: "center",
              display: "flex",
              p: 10,
            }}
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-duration="1000"
          >
            <CircularProgress color="inherit" />
          </Box>
        </>
      ) : (
        <>
          <Paper
            sx={{
              mb: 2,
              p: 2,
              ml: "auto",
              mr: "auto",
              width: "90%",
              textAlign: "center",
              justifyContent: "center",
              overflow: "scroll",
            }}
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-duration="1000"
          >
            <TableContainer
              sx={{
                maxHeight: 440,
              }}
            >
              <Table stickyHeader aria-label="sticky table">
                <TableHead>
                  <TableRow>
                    <TableCell align="center" colSpan={3}>
                      Data Peserta
                    </TableCell>
                    {psetSlugs.map((slug) => (
                      <TableCell
                        align="center"
                        colSpan={problemList[slug].length}
                        key={slug}
                      >
                        {slug.toUpperCase()}
                      </TableCell>
                    ))}
                  </TableRow>
                  <TableRow>
                    <TableCell align="center">
                      <TableSortLabel
                        active={orderBy === "name"}
                        direction={orderBy === "name" ? order : "asc"}
                        onClick={createSortHandler("name")}
                      >
                        Nama
                      </TableSortLabel>
                    </TableCell>
                    <TableCell align="center">
                      <TableSortLabel
                        active={orderBy === "province"}
                        direction={orderBy === "province" ? order : "asc"}
                        onClick={createSortHandler("province")}
                      >
                        Provinsi
                      </TableSortLabel>
                    </TableCell>
                    <TableCell align="center">
                      <TableSortLabel
                        active={orderBy === "totalScore"}
                        direction={orderBy === "totalScore" ? order : "asc"}
                        onClick={createSortHandler("totalScore")}
                      >
                        Total Skor
                      </TableSortLabel>
                    </TableCell>
                    {psetSlugs.map((slug) =>
                      problemList[slug].map((problem) => (
                        <TableCell
                          align="center"
                          key={problem}
                          style={{ minWidth: 80 }}
                        >
                          <TableSortLabel
                            active={orderBy === slug + "-" + problem}
                            direction={
                              orderBy === slug + "-" + problem ? order : "asc"
                            }
                            onClick={createSortHandler(slug + "-" + problem)}
                          >
                            {problem}
                          </TableSortLabel>
                        </TableCell>
                      ))
                    )}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {userProgressesData
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((userProgress) => (
                      <TableRow
                        hover
                        role="checkbox"
                        tabIndex={-1}
                        key={userProgress.name}
                        sx={{
                          height: 70,
                        }}
                      >
                        <TableCell align="left" style={{ minWidth: 350 }}>
                          {userProgress.name}
                        </TableCell>
                        <TableCell align="left" style={{ minWidth: 200 }}>
                          {userProgress.province}
                        </TableCell>
                        <TableCell
                          align="center"
                          style={{
                            backgroundColor: userProgress.totalScore.color,
                            minWidth: 80,
                          }}
                        >
                          {userProgress.totalScore.value}
                        </TableCell>
                        {psetSlugs.map((slug) =>
                          problemList[slug].map((problem) => (
                            <TableCell
                              align="center"
                              key={problem}
                              style={{
                                backgroundColor:
                                  userProgress[slug + "-" + problem].color,
                              }}
                            >
                              {userProgress[slug + "-" + problem].value}
                            </TableCell>
                          ))
                        )}
                      </TableRow>
                    ))}
                </TableBody>
              </Table>
            </TableContainer>
            <TablePagination
              rowsPerPageOptions={[10, 25, 100]}
              component="div"
              count={userProgressesData.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </Paper>
        </>
      )}
    </>
  );
};

export default OSN;
