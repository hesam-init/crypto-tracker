import { MantineProvider } from "@mantine/core";
import { QueryClient, QueryClientProvider } from "react-query";
import { RouterProvider } from "react-router-dom";

import { routes } from "./page/routes";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false
    }
  }
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <MantineProvider theme={{ colorScheme: "dark" }}>
        <RouterProvider router={routes} />
      </MantineProvider>
    </QueryClientProvider>
  );
}

export default App;
