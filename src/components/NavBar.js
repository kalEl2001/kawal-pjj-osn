import { useRouter } from "next/router";

import { ButtonGroup, Button, Box } from "@mui/material";

import styles from "@/styles/NavBar.module.css";

const NavBar = () => {
  const router = useRouter();

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        padding: "2rem",
      }}
      data-aos="fade-up"
      data-aos-delay="100"
      data-aos-duration="1000"
    >
      <Button
        onClick={() => router.push("/pd")}
        disabled={router.pathname === "/pd"}
        className={styles.navbutton}
      >
        Pemrograman Dasar
      </Button>
      <Button
        onClick={() => router.push("/pkd")}
        disabled={router.pathname === "/pkd"}
        className={styles.navbutton}
      >
        Pemrograman Kompetitif Dasar
      </Button>
      <Button
        onClick={() => router.push("/osn")}
        disabled={router.pathname === "/osn"}
        className={styles.navbutton}
      >
        Arsip OSN/KSN
      </Button>
    </Box>
  );
};

export default NavBar;
