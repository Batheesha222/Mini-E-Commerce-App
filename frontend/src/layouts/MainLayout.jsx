import { Outlet } from "react-router-dom";

import ScrollToTop from "../routes/ScrollToTop";

import MainNavbar from "@/components/shared/MainNavbar";
import Footer from "@/components/shared/Footer";
import SecondaryNavBar from "@/components/shared/SecondaryNavBar";

export default function MainLayout() {
  return (
    <>
      <ScrollToTop />
      <SecondaryNavBar />
      <MainNavbar />
      <main className="min-h-screen">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
