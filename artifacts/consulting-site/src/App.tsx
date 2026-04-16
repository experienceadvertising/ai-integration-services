import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HelmetProvider } from "react-helmet-async";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import Success from "@/pages/success";
import Cancel from "@/pages/cancel";
import ClaudeCoworkTraining from "@/pages/claude-cowork-training";
import AiCodingTraining from "@/pages/ai-coding-training";
import About from "@/pages/about";
import IndustryPage from "@/pages/industry";

const queryClient = new QueryClient();

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/claude-cowork-training" component={ClaudeCoworkTraining} />
      <Route path="/ai-coding-training" component={AiCodingTraining} />
      <Route path="/about" component={About} />
      <Route path="/industries/:slug" component={IndustryPage} />
      <Route path="/success" component={Success} />
      <Route path="/cancel" component={Cancel} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
            <Router />
          </WouterRouter>
          <Toaster />
        </TooltipProvider>
      </QueryClientProvider>
    </HelmetProvider>
  );
}

export default App;
