import HomePage from "./pages/HomePage";
const routes = [
  {
    type: "collapse",
    name: "Dashboards",
    key: "dashboards",

    collapse: [
      {
        name: "Default",
        key: "default",
        route: "/dashboards/default",
        component: <HomePage />,
      },
     ]
  }
];

export default routes;
