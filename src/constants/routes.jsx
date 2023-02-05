import AddEvent from "../features/Event/page/AddEvent";
import Home from "../features/Home";

const routes = [
  {
    path: "/",
    component: <Home />,
  },
  {
    path: "/add",
    component: <AddEvent />,
  },
];
export default routes;
