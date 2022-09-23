import React from "react";

export type RouteItem = {
  id?: string;
  path: string;
  element?: React.ReactNode | null;
  childrensRoute?: RouteItem[];
  layouts?: React.ReactNode | null;
};
