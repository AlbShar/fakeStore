import { MouseEvent } from "react";
import { Link } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";
import { useDeleteProduct } from "hooks/useDeleteProduct";
import { usePostProduct } from "hooks/usePostProduct";
import {
  StyledArticle,
  StyledImg,
  StyledDivWrapper,
  StyledSpan,
} from "./productBrief.Styled";
import { TProduct } from "../../types";

type TProductItemBrief = {
  product: TProduct;
};

export const ProductBrief = ({ product }: TProductItemBrief) => {
  const { id, image, title, price } = product;
  const { mutate: deleteProductBriefFromCatalog } =
    useDeleteProduct("catalogProducts");
  const { mutate: addProductDetailInCache } = usePostProduct("productDetail");
  const onClickDeleteProduct = (e: MouseEvent<HTMLSpanElement>) => {
    const id = +e.currentTarget.id ? +e.currentTarget.id : e.currentTarget.id;
    deleteProductBriefFromCatalog(id);
  };

  return (
    <StyledArticle>
      <StyledSpan id={`${id}`} onClick={onClickDeleteProduct}>
        <CloseIcon />
      </StyledSpan>
      <StyledDivWrapper>
        <StyledImg src={image} alt={title} />
      </StyledDivWrapper>
      <div>
        <h2>{title.length > 20 ? `${title.slice(0, 20)}...` : title}</h2>
        <h3>Price: {price} $</h3>
        <Link
          to={`/product/${id}`}
          onClick={() => {
            addProductDetailInCache(product);
          }}
        >
          Открыть страницу товара
        </Link>
      </div>
    </StyledArticle>
  );
};
