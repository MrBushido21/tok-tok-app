import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import './App.css';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Header } from './components/header/Header';
import { AppRoutes } from './Routes/AppRoutes';


const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      refetchOnMount: false,
      refetchOnReconnect: false,
      refetchOnWindowFocus: false
    }
  }
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <Header />
        <div className='container'>
          <AppRoutes />
        </div>
      </div>
      <ReactQueryDevtools />
    </QueryClientProvider>

  );
}

export default App;
