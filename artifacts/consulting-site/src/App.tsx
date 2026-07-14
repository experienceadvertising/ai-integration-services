import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HelmetProvider, type HelmetServerState } from "react-helmet-async";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import ScrollToTop from "@/components/scroll-to-top";
import StickyMobileCta from "@/components/sticky-mobile-cta";
import ExitIntentPopup from "@/components/exit-intent-popup";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import Success from "@/pages/success";
import Cancel from "@/pages/cancel";
import ClaudeCoworkTraining from "@/pages/claude-cowork-training";
import AiCodingTraining from "@/pages/ai-coding-training";
import AeoGeoTraining from "@/pages/aeo-geo-training";
import ChatGptWorkTraining from "@/pages/chatgpt-work-training";
import About from "@/pages/about";
import IndustryPage from "@/pages/industry";
import AiReport from "@/pages/ai-report";
import RolePage from "@/pages/role";
import JobDescriptionAnalyzer from "@/pages/job-description-analyzer";
import AiTimeSavingsCalculator from "@/pages/ai-time-savings-calculator";
import AiReadinessQuiz from "@/pages/ai-readiness-quiz";
import ReportPage from "@/pages/report";
import Blog from "@/pages/blog";
import ArticlePage from "@/pages/article";
import Glossary from "@/pages/glossary";
import GlossaryTermPage from "@/pages/glossary-term";

const queryClient = new QueryClient();

function Routes() {
  return (
    <>
      <ScrollToTop />
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/claude-cowork-training" component={ClaudeCoworkTraining} />
        <Route path="/ai-coding-training" component={AiCodingTraining} />
        <Route path="/aeo-geo-training" component={AeoGeoTraining} />
        <Route path="/chatgpt-work-training" component={ChatGptWorkTraining} />
        <Route path="/about" component={About} />
        <Route path="/ai-report" component={AiReport} />
        <Route path="/job-description-analyzer" component={JobDescriptionAnalyzer} />
        <Route path="/ai-time-savings-calculator" component={AiTimeSavingsCalculator} />
        <Route path="/ai-readiness-quiz" component={AiReadinessQuiz} />
        <Route path="/blog" component={Blog} />
        <Route path="/blog/:slug" component={ArticlePage} />
        <Route path="/glossary" component={Glossary} />
        <Route path="/glossary/:slug" component={GlossaryTermPage} />
        <Route path="/industries/:slug" component={IndustryPage} />
        <Route path="/roles/:slug" component={RolePage} />
        <Route path="/report/:id" component={ReportPage} />
        <Route path="/success" component={Success} />
        <Route path="/cancel" component={Cancel} />
        <Route component={NotFound} />
      </Switch>
      <StickyMobileCta />
      <ExitIntentPopup />
    </>
  );
}

export interface AppProps {
  ssrPath?: string;
  helmetContext?: { helmet?: HelmetServerState };
}

export default function App({ ssrPath, helmetContext }: AppProps = {}) {
  const baseUrl = import.meta.env.BASE_URL.replace(/\/$/, "");
  // wouter v3 supports `ssrPath` on Router; the public type doesn't include
  // it yet, so we widen via spread.
  const routerProps = { base: baseUrl, ...(ssrPath ? { ssrPath } : {}) };

  return (
    <HelmetProvider context={helmetContext}>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <WouterRouter {...routerProps}>
            <Routes />
          </WouterRouter>
          <Toaster />
        </TooltipProvider>
      </QueryClientProvider>
    </HelmetProvider>
  );
}
