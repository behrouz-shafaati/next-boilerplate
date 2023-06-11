import { ReactNode } from "react";

type ControllerRender = {
  field: ControllerRenderProps<FieldValues, string>;
  fieldState: ControllerFieldState;
};

type PalleteType = {
  name: string;
  lighter: string;
  light: string;
  main: string;
  dark: string;
  darker: string;
  contrastText: string;
};

type NavItem = {
  title: string;
  path: string;
  icon: string;
  info: ReactNode;
  children: { title: string; path: string }[];
};

type NavGroupType = {
  subheader?: string;
  items: NavItem[];
};
