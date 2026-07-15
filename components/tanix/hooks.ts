"use client";

import { useContext } from "react";
import { TanixContext } from "./TanixProvider";

export function useTanix() {
  const context = useContext(TanixContext);

  if (!context) {
    throw new Error(
      "useTanix must be used inside TanixProvider"
    );
  }

  return context;
}