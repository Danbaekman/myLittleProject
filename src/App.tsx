import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Chatting from "./pages/chatting/index.tsx";
import Trade from "./pages/trade/index.tsx";
import Mypage from "./pages/mypage/index.tsx";
import Main from "./pages/main/index.tsx";
import ErrorBoundary from "./components/ErrorBoundary.tsx";

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
      element: <Mypage />,
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
