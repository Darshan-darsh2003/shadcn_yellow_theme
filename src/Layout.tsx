import { Outlet } from "react-router-dom";
import { ButtonGhost, ButtonOutline } from "./components/ButtonVariants";
import { Button } from "./components/ui/button";

const Layout = () => {
  return (
    <>
      <nav className="fixed top-4 left-8">Logo</nav>
      <div className="mt-28 mx-28">
        <Outlet />
      </div>
      <footer className="fixed bottom-0 left-0 right-0 z-10 border-t h-16 flex justify-between items-center px-10">
        <ButtonOutline text="Back" className="rounded-3xl" />
        <div className="flex gap-14 px-4 py-2">
          <ButtonGhost className="text-neutral-500" text="Skip for Now" />
          <Button className="rounded-3xl">Next, Add work experience</Button>
        </div>
      </footer>
    </>
  );
};

export default Layout;
