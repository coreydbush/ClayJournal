import Upload from "./components/Upload";
import MyPots from "./components/MyPots";
import IndividualPot from "./components/IndividualPot";
import Browse from "./components/Browse";
import { Logout } from "./components/Logout";
import { Home } from "./components/Home";

const AppRoutes = [
  {
    index: true,
    element: <Home />
  },
  {
    path: '/upload',
    element: <Upload />
  },
  {
    path: '/browse',
    element: <Browse />
  },
  {
    path: '/viewpots/*',
    element: <IndividualPot />
  },
  {
    path: '/mypots',
    element: <MyPots />
  },
];

export default AppRoutes;
