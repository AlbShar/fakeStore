import { Link } from "react-router-dom";
import {
  StyledDivWrapper,
  StyledArticle,
  StyledImg,
} from "./productDetail.Styled";
import { useDeleteProduct } from "hooks/useDeleteProduct";
import "./link.css";

import type { TProduct } from "types";

type TProductItemDetail = {
  product: TProduct;
};

const ProductDetail = ({ product }: TProductItemDetail) => {
  const { id, image, title, price, category, rating, description } = product;
  const { mutate: clearCacheProductDetail } = useDeleteProduct("productDetail");

  return (
    <StyledArticle>
      <StyledDivWrapper>
        <StyledImg src={image} alt={title} />
      </StyledDivWrapper>
      <div>
        <h2>{title}</h2>
        <h3>Description: {description}</h3>
        <h4>Category: {category}</h4>
        <h5>Price: {price} $</h5>
        <h5>Rate: {rating?.rate}</h5>
        <h5>Count: {rating?.count}</h5>
      </div>
      <Link
        className="link"
        to="/"
        onClick={() => {
          clearCacheProductDetail(id);
        }}
      >
        Назад
      </Link>
    </StyledArticle>
  );
};

export default ProductDetail;
