"use client";

import DashboardDrawer from "@/components/dashboard/dashboardDrawer/DashboardDrawer";

// import React, { useEffect, useState } from "react";
// import { useRouter } from "next/navigation";
// import { isUserLoggedIn } from "@/services/auth.services";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
//   const router = useRouter();
//   const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);

//   useEffect(() => {
//     const checkAuth = async () => {
//       const loggedIn = await isUserLoggedIn(); // if async, otherwise remove `await`
//       if (!loggedIn) {
//         router.push("/login");
//       } else {
//         setIsAuthenticated(true);
//       }
//     };

//     checkAuth();
//   }, [router]);

//   if (isAuthenticated === null) {
//     return null; // Or show a spinner
//   }

  return <DashboardDrawer>{children}</DashboardDrawer>;
};

export default DashboardLayout;
