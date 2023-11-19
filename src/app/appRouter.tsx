// import { type ReactElement } from "react";
import { createBrowserRouter } from "react-router-dom";
// import { selectIsAuthorized } from "@/entities/session";
import { MainPage } from "../pages/Main";
// import { useAppSelector } from ".   ./shared/model";
import { BaseLayout } from "./Layouts/BaseLayout";
// import { LayoutWithNavbar } from "./Layouts/LayoutWithNavbar";
import { Loader } from "../pages/Loader";
import { Notification } from "../pages/Notification";
import { Registration } from "../pages/Registration";
import { SingEmail } from "../pages/Registration/SingEmail";
import { SingPhone } from "../pages/Registration/SingPhone";
import { SName } from "../pages/Survey/SName";
import { SGender } from "../pages/Survey/SGender";
import { SInterests } from "../pages/Survey/SInterests";
import { SDob } from "../pages/Survey/SDob";
import { SFillingOutProfile } from "../pages/Survey/SFillingOutProfile";
import { MGamepad } from "../pages/Menu/MGamepad";
import { MHome } from "../pages/Menu/MHome";
import { MProfile } from "../pages/Menu/MProfile";
import { MChat } from "../pages/Menu/MChat";
import { MInsideChat } from "../pages/Menu/MChat/MInsideChat";

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
        {
          path: "/loader",
          element: <Loader/>
        },
        {
          path: "/main",
          element: <MainPage/>
        },
        {
          path: "/registration",
          element: <Registration/>
        },
        {
          path: "/registration/sing-email",
          element: <SingEmail/>
        },
        {
          path: "/registration/sign-phone",
          element: <SingPhone/>
        },
        {
          path: "/survey/name",
          element: <SName/>
        },
        {
          path: "/survey/gender",
          element: <SGender/>
        },
        {
          path: "/survey/interests",
          element: <SInterests/>
        },
        {
          path: "/survey/dob",
          element: <SDob/>
        },
        {
          path: "/survey/filling-out-profile",
          element: <SFillingOutProfile/>
        },
        {
          path: "/Menu/MGamepad",
          element: <MGamepad/>
        },
        {
          path: "/menu/mhome",
          element: <MHome/>
        },
        {
          path: "/menu/mprofile",
          element: <MProfile/>
        },
        {
          path: '/menu/mchat',
          element: <MChat/>
        },
        {
          path: "/menu/mchating",
          element: <MInsideChat/>
        },
        {
          path: "/",
          element: <Notification/>,
        },
        
      ],
    },
    // {
    //   element: BaseLayout,
    //   errorElement: <div>error</div>,
    //   children: [
        
    //   ],
    // },
  ]);
