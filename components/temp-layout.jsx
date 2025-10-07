"use client";

import React from "react";
import { MainNav } from "@/components/main-nav";

export function AppLayout({ children }) {
  return (
    <div className="min-h-screen bg-background">
      <MainNav />
      <main>{children}</main>
    </div>
  );
}