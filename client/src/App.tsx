import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ScrollToTop } from "@/components/utils/ScrollToTop";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import AreaPage from "@/pages/areas/AreaPage";
import ServicePage from "@/pages/services/ServicePage";
import Privacy from "@/pages/legal/Privacy";
import Terms from "@/pages/legal/Terms";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/empresa" component={About} />
      <Route path="/contacto" component={Contact} />

      {/* Service Pages */}
      <Route path="/servicos/:slug" component={ServicePage} />
      
      {/* Area Pages */}
      <Route path="/areas/:slug" component={AreaPage} />
      <Route path="/areas-de-atuacao" component={AreaPage} />
      
      {/* Legal Pages */}
      <Route path="/privacidade" component={Privacy} />
      <Route path="/termos" component={Terms} />

      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <ScrollToTop />
        <WhatsAppButton />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
