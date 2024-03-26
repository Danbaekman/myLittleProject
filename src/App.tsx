import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./components/navbar/index";
import Trade from "./pages/trade/index.tsx";
import TradeItemDetail from "./pages/trade/tradeItem/TradeItemDetail.tsx"; 
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
      path: "/tradeItem/*",
      element: <TradeItemDetail />,
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
