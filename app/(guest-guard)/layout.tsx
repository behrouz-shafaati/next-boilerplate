"use client";
import useAuth from "@/src/hooks/useAuth";
import { PATH_PAGE } from "@/src/routes/paths";
import { redirect } from "next/navigation";
import { ReactNode } from "react";

type PropsType = {
  children: ReactNode;
};

function layout({ children }: PropsType) {
  const { isAuthenticated } = useAuth();
  if (isAuthenticated) redirect(PATH_PAGE.home);
  return <>{children}</>;
}

export default layout;
