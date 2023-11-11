// import { type ReactElement } from "react";
import { createBrowserRouter } from "react-router-dom";
// import { selectIsAuthorized } from "@/entities/session";
// import { CartPage } from "@/pages/cart";
// import { CategoryPage } from "@/pages/category";
// import { LoginPage } from "@/pages/login";
import { MainPage } from "../pages/Main";
// import { ProductPage } from "@/pages/product";
// import { WishlistPage } from "@/pages/wishlist";
// import { useAppSelector } from "../shared/model";
import { BaseLayout } from "./Layouts/BaseLayout";
import { LayoutWithNavbar } from "./Layouts/LayoutWithNavbar";

// type GuestGuardProps = {
//   children: ReactElement;
// };

// function GuestGuard({ children }: GuestGuardProps) {
//   const isAuthorized = useAppSelector(selectIsAuthorized);

//   if (!isAuthorized) return <Navigate to="/login" />;

//   return children;
// }

// type AuthGuardProps = {
//   children: ReactElement;
// };

// function AuthGuard({ children }: AuthGuardProps) {
//   const isAuthorized = useAppSelector(selectIsAuthorized);

//   if (isAuthorized) return <Navigate to="/" />;

//   return children;
// }

export const appRouter = () =>
  createBrowserRouter([
    {
      element: BaseLayout,
      errorElement: <div>error</div>,
      children: [
        // {
        //   path: "/login",
        //   element: (
        //     <AuthGuard>
        //       <LoginPage />
        //     </AuthGuard>
        //   ),
        // },
        // {
        //   path: "/user/wishlist",
        //   element: (
        //     <GuestGuard>
        //       <WishlistPage />
        //     </GuestGuard>
        //   ),
        // },
        // {
        //   path: "/user/cart",
        //   element: (
        //     <GuestGuard>
        //       <CartPage />
        //     </GuestGuard>
        //   ),
        // },
        // {
        //   path: "/category/:categoryId",
        //   element: <CategoryPage />,
        // },
        // {
        //   path: "/product/:productId",
        //   element: <ProductPage />,
        // },
      ],
    },
    {
      element: LayoutWithNavbar,
      errorElement: <div>error</div>,
      children: [
        {
          path: "/",
          element: <MainPage />,
        },
      ],
    },
  ]);
