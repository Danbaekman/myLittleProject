import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import Chatting from "./pages/chatting/index.tsx";
import Trade from "./pages/trade/index.tsx";
import Main from "./pages/main/index.tsx";
import ErrorBoundary from "./components/ErrorBoundary.tsx";
import MyPageLayout from "./pages/mypage/index.tsx";
import MyArea from "./pages/mypage/components/MyArea.tsx";

export default function App() {
  const queryClient = new QueryClient();

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      errorElement: <ErrorBoundary />,
    },
    {
      path: "trade",
      element: <Trade />,
      errorElement: <ErrorBoundary />,
    },
    {
      path: "mypage",
      element: <MyPageLayout />,
      children: [
        { index: true, element: <Navigate to="area" replace /> },
        {
          path: "area",
          element: <MyArea />,
        },
        {
          path: "like",
          element: null,
        },
        {
          path: "buy",
          element: null,
        },
        {
          path: "sell",
          element: null,
        },
      ],
      errorElement: <ErrorBoundary />,
    },
    {
      path: "chatting",
      element: <Chatting />,
      errorElement: <ErrorBoundary />,
    },
  ]);

  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}
