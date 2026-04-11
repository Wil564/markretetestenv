import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import { useEffect } from "react";
import { useLocation } from "wouter";
import Home from "./pages/Home";
import WhyMarkrete from "./pages/WhyMarkrete";
import HowItWorks from "./pages/HowItWorks";
import SystemSpecs from "./pages/SystemSpecs";
import Benefits from "./pages/Benefits";
import Projects from "./pages/Projects";
import Engineering from "./pages/Engineering";
import Contact from "./pages/Contact";

function ScrollToTop() {
  const [location] = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return null;
}

function Router() {
  return (
    <>
      <ScrollToTop />
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/why-markrete" component={WhyMarkrete} />
        <Route path="/how-it-works" component={HowItWorks} />
        <Route path="/system-specs" component={SystemSpecs} />
        <Route path="/benefits" component={Benefits} />
        <Route path="/projects" component={Projects} />
        <Route path="/engineering" component={Engineering} />
        <Route path="/contact" component={Contact} />
        <Route path="/404" component={NotFound} />
        <Route component={NotFound} />
      </Switch>
    </>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
