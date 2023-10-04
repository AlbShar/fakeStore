import { useParams } from "react-router-dom";
import { Grid } from "@mui/material";
import ProductDetail from "components/productDetail/productDetail";
import { useProduct } from "../../hooks/useProduct";
import Spinner from "UI/spinner";
import ErrorMessage from "UI/errorMessage/errorMessage";

const ProductDetailPage = () => {
  const { id } = useParams();
  const { data: product, isError, isLoading } = useProduct(id ? id : 1);

  if (isLoading) return <Spinner />;

  if (isError) return <ErrorMessage />;

  return (
    <Grid container justifyContent="center" alignItems="center">
      <Grid item xs={10.8}>
        {product ? <ProductDetail product={product} /> : <Spinner />}
      </Grid>
    </Grid>
  );
};

export default ProductDetailPage;
