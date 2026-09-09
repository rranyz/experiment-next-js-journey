import { Outlet } from "react-router";
import MainHeader from "../components/postcomponents/MainHeader";

function RootLayout() {
  return (
    <>
      <MainHeader />
      <Outlet />
    </>
  );
}

export default RootLayout;
