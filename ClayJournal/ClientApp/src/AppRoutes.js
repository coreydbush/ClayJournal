import Upload from "./components/Upload";
import Profile from "./components/Profile";
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
    path: '/profile',
    element: <Profile />
    },
    {
        path: '/logout',
        element: <Logout />
    }
];

export default AppRoutes;
