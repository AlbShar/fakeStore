import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

export const withQuery = (Component: () => JSX.Element) => () => {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Component />
        <ReactQueryDevtools />
      </QueryClientProvider>
    </>
  );
};
