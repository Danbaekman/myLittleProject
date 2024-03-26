import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./components/navbar/index"; // Navbar import 추가
import Chatting from "./pages/chatting/index.tsx";
import Trade from "./pages/trade/index.tsx";
import TradeItemDetail from "./pages/trade/tradeItem/TradeItemDetail.tsx"; 
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
      path: "/trade",
      element: <Trade />,
      errorElement: <ErrorBoundary />,
    },
    {
      path: "/tradeItem/*",  // * : 와일드 카드
      element: <TradeItemDetail />,
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
      <RouterProvider router={router}>
        <Navbar /> 
      </RouterProvider>
    </QueryClientProvider>
  );
}
