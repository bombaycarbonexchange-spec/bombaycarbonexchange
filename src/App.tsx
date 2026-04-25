import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import IndustryPage from "./pages/IndustryPage.tsx";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/textile" element={<IndustryPage />} />
          <Route path="/steel" element={<IndustryPage />} />
          <Route path="/cement" element={<IndustryPage />} />
          <Route path="/chlor-alkali" element={<IndustryPage />} />
          <Route path="/aluminium" element={<IndustryPage />} />
          <Route path="/petroleum" element={<IndustryPage />} />
          <Route path="/paper" element={<IndustryPage />} />
          <Route path="/fertilizer" element={<IndustryPage />} />
          <Route path="/pharma" element={<IndustryPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
