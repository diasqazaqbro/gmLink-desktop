import { Outlet, ScrollRestoration } from "react-router-dom";
import sass from "./Layout.module.sass";
import Iphone from "./assets/iphone13.png";

export function Layout() {
  return (
    <div className={sass.layout}>
      <div className={sass.content}>
        <Outlet />
      </div>
      <img className={sass.img} src={Iphone} alt="iphone" />
      <ScrollRestoration />
    </div>
  );
} 
