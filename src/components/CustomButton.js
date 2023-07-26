import { useRouter } from "next/router";

import { Button } from "@mui/material";

import styles from "@/styles/CustomButton.module.css";

const CustomButton = (props) => {
  const router = useRouter();

  return (
    <Button
      variant="contained"
      data-aos={props.animation}
      data-aos-delay="100"
      data-aos-duration="900"
      size="large"
      className={styles.landingbutton}
      sx={{
        width: "100%",
        height: "100%",
      }}
      onClick={() => router.push(props.href || "/")}
    >
      {props.text}
    </Button>
  );
};

export default CustomButton;
