import { Box } from "@mui/material";
import styles from "@/styles/Title.module.css";

const Title = ({ children, ...props }) => {
  return (
    <Box
      className={styles.titleContainer}
      sx={{
        textAlign: "center",
        textTransform: "uppercase",
        mt: 16,
        fontFamily: "Roboto",
      }}
    >
      <h1 className={styles.title} data-aos="fade-up" data-aos-duration="700">
        Kawal PJJ
      </h1>
      <h2
        className={styles.subtitle}
        data-aos="fade-up"
        data-aos-delay="50"
        data-aos-duration="800"
      >
        {process.env.NEXT_PUBLIC_EVENT_NAME}
      </h2>
    </Box>
  );
};

export default Title;
