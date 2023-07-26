import { Box, Grid, Typography } from "@mui/material";
import CustomButton from "@/components/CustomButton";

const ButtonArray = (props) => {
  return (
    <>
      <Box
        sx={{
          maxWidth: "lg",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          padding: "5rem",
        }}
      >
        <Typography
          variant="h6"
          sx={{
            mb: 4,
            textTransform: "uppercase",
            fontWeight: "500",
          }}
          data-aos="fade-up"
          data-aos-delay="100"
          data-aos-duration="800"
        >
          Papan skor mana yang ingin Anda lihat?
        </Typography>
        <Grid
          container
          spacing={2}
          sx={{
            maxwidth: 200,
          }}
        >
          <Grid item xs={12} sm={4}>
            <CustomButton
              text="Pemrograman Dasar"
              animation="fade-up-right"
              href="/pd"
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <CustomButton
              text="Pemrograman Kompetitif Dasar"
              animation="fade-up"
              href="/pkd"
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <CustomButton
              text="Arsip OSN/KSN"
              animation="fade-up-left"
              href="osn"
            />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default ButtonArray;
