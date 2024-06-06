import Home from "@/pages/HomePage";

export interface RoutePage {
  path: string;
  element: JSX.Element;
}

export const APPROUTES = {
  posts: "/posts",
  comments: "/comments",
  users: "/users",
  not_found: "*",
};

export const SUB_ROUTE_PAGES: RoutePage[] = [
  {
    path: APPROUTES.posts,
    element: <Home />,
  },
  {
    path: APPROUTES.comments,
    element: <>Comments</>,
  },
  {
    path: APPROUTES.users,
    element: <>users</>,
  },
  {
    path: APPROUTES.not_found,
    element: <h1>No page found</h1>,
  },
];
