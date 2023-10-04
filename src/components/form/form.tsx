import { useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import CloseIcon from "@mui/icons-material/Close";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { v4 as uuidv4 } from "uuid";

import Button from "UI/button/button";
import { useCategories } from "hooks/useCategiroes";
import { usePostProduct } from "hooks/usePostProduct";
import Input from "UI/input/input";
import Select from "UI/select/select";
import { usePutProduct } from "hooks/usePutProduct";
import {
  StyledForm,
  StyledH2,
  StyleDivWrapper,
  StyledSpan,
} from "./form.Styled";

import type { TProductWithoutId, TInput } from "types";

const schema = yup.object().shape({
  title: yup.string().required("Заполните поле"),
  price: yup.number().required("Заполните поле"),
  description: yup
    .string()
    .min(5, "Мин количество символов - 5")
    .max(32, "Мин количество символов - 32")
    .required(),
  category: yup.string().required("Заполните поле"),
  image: yup
    .string()
    .matches(/^https/, 'Значение должно начинаться с "https"')
    .required("Заполните поле"),
  rating: yup.object().shape({
    rate: yup
      .number()
      .min(1, "Минимальный рейтинг - 1")
      .max(5, "Максимальный рейтинг - 5")
      .required("Заполните поле"),
    count: yup
      .number()
      .min(1, "Минимальное количество - 1")
      .max(100, "Максимальное количество - 100")
      .required("Заполните поле"),
  }),
});

type TFormProps = {
  pathname: string;
  closeForm?: () => void;
};

const Form = ({ pathname, closeForm }: TFormProps) => {
  const { data: categories } = useCategories();
  const [isProductAdded, setProductAdded] = useState(false);
  const isHomePage = !pathname.includes("product") ? true : false;

  useEffect(() => {
    if (isProductAdded) {
      const timerId = setTimeout(() => {
        setProductAdded(false);
      }, 5000);

      return () => {
        clearTimeout(timerId);
      };
    }
  }, [isProductAdded]);

  const { mutate: addProductBriefToCatalog } =
    usePostProduct("catalogProducts");
  const { mutate: updateProductDetail } = usePutProduct();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<TProductWithoutId> = async (
    data: TProductWithoutId,
  ) => {
    if (isHomePage) {
      addProductBriefToCatalog({ id: uuidv4(), ...data });
    } else {
      const id = pathname[pathname.length - 1];
      const productId = +id ? +id : id;
      updateProductDetail({ id: productId, updateProduct: data });
    }

    reset();
    setProductAdded(true);
    closeForm && closeForm();
  };

  const infoInputs: TInput[] = [
    {
      textError: errors.title?.message,
      name: "title",
      placeholder: "Название товара",
      type: "text",
      register: register("title"),
    },
    {
      textError: errors.price?.message,
      name: "price",
      placeholder: "Цена",
      type: "number",
      register: register("price"),
    },
    {
      textError: errors.rating?.rate?.message,
      name: "rate",
      placeholder: "Рейтинг",
      type: "number",
      register: register("rating.rate"),
    },
    {
      textError: errors.rating?.count?.message,
      name: "count",
      placeholder: "Количество",
      type: "number",
      register: register("rating.count"),
    },
    {
      textError: errors.image?.message,
      name: "image",
      placeholder: "Ссылка на картинку",
      type: "text",
      register: register("image"),
    },
    {
      textError: errors.description?.message,
      name: "description",
      placeholder: "Описание товара",
      type: "text",
      register: register("description"),
    },
  ];

  return (
    <StyleDivWrapper>
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <StyledSpan onClick={closeForm}>
          <CloseIcon />
        </StyledSpan>
        <StyledH2>{isHomePage ? "Добавьте товар" : "Измените товар"}</StyledH2>
        {infoInputs.map((input, index) => (
          <Input key={index} {...input} />
        ))}
        <Select
          textError={errors.category?.message}
          name="category"
          categories={categories}
          register={register("category")}
        />
        <Button disabled={isSubmitting}>
          {isHomePage ? "Добавить товар" : "Изменить товар"}
        </Button>
        {isProductAdded ? (
          <p style={{ color: "green" }}>
            {isHomePage ? "Товар добавлен в список!" : "Товар изменен"}
          </p>
        ) : (
          false
        )}
      </StyledForm>
    </StyleDivWrapper>
  );
};

export default Form;
