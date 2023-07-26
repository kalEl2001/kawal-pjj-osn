import { useEffect, useState, useCallback } from "react";

import { axiosClientHandler } from "@/utils/api";
import { usernameToUserDataMap } from "@/utils/constants";

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

const PKD = () => {
  const [userProgressesData, setUserProgressesData] = useState([]);
  const [totalProblemsList, setTotalProblemsList] = useState([]);

  const [columns, setColumns] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const [order, setOrder] = useState("desc");
  const [orderBy, setOrderBy] = useState("totalSolved");

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

  const fetchPkdScoreboard = async () => {
    setLoading(true);
    const response = await axiosClientHandler.get("/api/data/pkd");
    const userProgressesMap = response.data.userProgressesMap;
    const totalProblemsList = response.data.totalProblemsList;

    let userProgresses = [];

    let newColumns = [];
    for (let i = 0; i < totalProblemsList.length; i++) {
      newColumns.push({
        id: i + 1,
        label: `${i + 1} (${totalProblemsList[i]})`,
        align: "center",
        minWidth: 60,
      });
    }

    setColumns([
      {
        id: "name",
        label: "Nama",
        align: "left",
        minWidth: 350,
      },
      {
        id: "province",
        label: "Provinsi",
        align: "left",
        minWidth: 200,
      },
      {
        id: "totalSolved",
        label: "Total Skor",
        align: "center",
        minWidth: 100,
      },
      ...newColumns,
    ]);

    const totalProblem = totalProblemsList.reduce(
      (total, item) => total + item
    );

    for (const [username, userProgress] of Object.entries(userProgressesMap)) {
      const totalSolved = userProgress.reduce((total, item) => total + item);
      let userProgressData = {};

      userProgressData["username"] = username;
      userProgressData["name"] = usernameToUserDataMap[username].name;
      userProgressData["province"] = usernameToUserDataMap[username].province;
      userProgressData["totalSolved"] = {};
      userProgressData["totalSolved"]["value"] = totalSolved;
      userProgressData["totalSolved"]["color"] = calcColor(
        totalSolved,
        totalProblem
      );

      for (let i = 0; i < totalProblemsList.length; i++) {
        userProgressData[i + 1] = {};
        userProgressData[i + 1]["value"] = userProgress[i];
        userProgressData[i + 1]["color"] = calcColor(
          userProgress[i],
          totalProblemsList[i]
        );
      }

      userProgresses.push(userProgressData);
    }
    setUserProgressesData(
      stableSort(userProgresses, getComparator(order, orderBy))
    );
    setTotalProblemsList(totalProblemsList);
    setLoading(false);
  };

  useEffect(() => {
    document.title = "Pemrograman Kompetitif Dasar";
    fetchPkdScoreboard();
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
                    <TableCell
                      align="center"
                      colSpan={totalProblemsList.length}
                    >
                      Bab
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    {columns.map((column) => (
                      <TableCell
                        key={column.id}
                        align="center"
                        style={{ minWidth: column.minWidth }}
                      >
                        <TableSortLabel
                          active={orderBy === column.id}
                          direction={orderBy === column.id ? order : "asc"}
                          onClick={createSortHandler(column.id)}
                        >
                          {column.label}
                        </TableSortLabel>
                      </TableCell>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {userProgressesData
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((row) => {
                      return (
                        <TableRow
                          hover
                          role="checkbox"
                          tabIndex={-1}
                          key={row.username}
                          sx={{
                            height: 70,
                          }}
                        >
                          {columns.map((column) => {
                            const value = row[column.id];
                            return (
                              <TableCell
                                key={column.id}
                                align={column.align ? column.align : "center"}
                                sx={{
                                  backgroundColor:
                                    typeof value === "object"
                                      ? value.color
                                      : "white",
                                }}
                              >
                                {column.format && typeof value === "number"
                                  ? column.format(value)
                                  : typeof value === "object"
                                  ? value.value
                                  : value}
                              </TableCell>
                            );
                          })}
                        </TableRow>
                      );
                    })}
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

export default PKD;
