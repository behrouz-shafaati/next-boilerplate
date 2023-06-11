"use client";
import * as Yup from "yup";

import { useRegisterMutation } from "@/src/redux/api/authApiSlice";

import { Button, LoadingButton } from "@/app/components/mui";
import FormProvider from "@/app/components/hook-form/FormProvider";
import RHFTextField from "@/app/components/hook-form/RHFTextField";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useSnackbar } from "notistack";
import { useEffect } from "react";
import useAuth from "@/src/hooks/useAuth";
import MuiLink from "@/app/components/mui/MuiLink";
import { PATH_PAGE } from "@/src/routes/paths";

export default function RegisterShopForm() {
  const { enqueueSnackbar } = useSnackbar();
  const { isAuthenticated } = useAuth();
  const [register, { isLoading, isError, isSuccess, error }] =
    useRegisterMutation();
  const schema = Yup.object().shape({
    title: Yup.string().required("Title is required"),
    shopId: Yup.string().required("Shop id is required"),
    about: Yup.string(),
    address: Yup.string().required("Address id is required"),
  });

  const defaultValues = {
    title: "",
    shopId: "",
    about: "",
    address: "",
  };

  const methods = useForm({
    resolver: yupResolver(schema),
    defaultValues,
  });

  const {
    reset,
    setError,
    handleSubmit,
    formState: { errors },
  } = methods;

  const onSubmit = (data: any) => {
    console.log("data:", data);
    // register(data);
  };

  useEffect(() => {
    if (isError && error) {
      if ("status" in error) {
        // you can access all properties of `FetchBaseQueryError` here
        const errMsg =
          "data" in error ? (error as any).data.msg : "Error in operation #2";
        enqueueSnackbar(errMsg, { variant: "error" });
      }
    }
  }, [isLoading]);
  if (isAuthenticated)
    return (
      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
        <section className="flex flex-col gap-3">
          <RHFTextField name="title" label="Title" />
          <RHFTextField name="shopId" label="Shop ID" />
          <RHFTextField name="about" label="About Shop" />
          <RHFTextField name="address" label="Shop Address" />
          <LoadingButton
            fullWidth
            size="large"
            type="submit"
            variant="contained"
            loading={isLoading}
          >
            Submit
          </LoadingButton>
        </section>
      </FormProvider>
    );

  return (
    <p>
      To register the store and create a menu, please log in first.{" "}
      <MuiLink
        href={`${PATH_PAGE.user.login}?redirect=${PATH_PAGE.shop.register}`}
      >
        Go to login.
      </MuiLink>
    </p>
  );
}
