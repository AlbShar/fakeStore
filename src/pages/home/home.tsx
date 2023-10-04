import { Grid } from "@mui/material";
import CatalogProducts from "../../components/catalogProducts/catalogProducts";

const HomePage = () => {
  return (
    <section style={{ padding: "20px 0", width: "90%", margin: "0 auto" }}>
      <Grid container>
        <Grid item xs={12}>
          <CatalogProducts />
        </Grid>
      </Grid>
    </section>
  );
};

export default HomePage;
