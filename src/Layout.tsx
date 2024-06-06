import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav className="fixed top-1 left-1">
        <img src="/images/app_logo.png" alt="logo" width={200} />
      </nav>
      <div className="mt-28 mx-28">
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
