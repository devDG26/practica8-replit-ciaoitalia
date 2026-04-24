import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster as Sonner } from "sonner";
import NotFound from "@/pages/not-found";

// Components
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Featured } from "@/components/Featured";
import { Menu } from "@/components/Menu";
import { Gallery } from "@/components/Gallery";
import { ReservationForm } from "@/components/ReservationForm";
import { Location } from "@/components/Location";
import { Footer } from "@/components/Footer";

const queryClient = new QueryClient();

function Home() {
  return (
    <div className="w-full flex flex-col bg-background min-h-[100dvh] font-sans">
      <Navbar />
      <Hero />
      <About />
      <Featured />
      <Menu />
      <Gallery />
      <ReservationForm />
      <Location />
      <Footer />
    </div>
  );
}

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <Router />
        </WouterRouter>
        <Toaster />
        <Sonner position="bottom-right" theme="light" />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
