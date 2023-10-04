import { Grid } from "@mui/material";

import { ProductBrief } from "components/productBrief/productBrief";
import { useProducts } from "hooks/useProducts";
import Spinner from "UI/spinner";
import ErrorMessage from "UI/errorMessage/errorMessage";

import type { TProduct } from "types";

const CatalogProducts = () => {
  const { isLoading, isError, data: products, isSuccess } = useProducts();

  if (isLoading) return <Spinner />;

  if (isError) return <ErrorMessage />;

  return (
    <Grid container rowSpacing={{ xs: 4 }} columnSpacing={{ sm: 2 }}>
      {isSuccess &&
        products.map((product: TProduct, index: number) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
            <ProductBrief product={product} />
          </Grid>
        ))}
    </Grid>
  );
};

export default CatalogProducts;
