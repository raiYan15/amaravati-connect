import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Dashboard from "./pages/Dashboard";
import Citizen from "./pages/Citizen";
import Farmers from "./pages/Farmers";
import Landowners from "./pages/Landowners";
import AIPage from "./pages/AI";
import Login from "./pages/Login";
import FarmerDashboard from "./pages/FarmerDashboard";
import CropRecommendations from "./pages/CropRecommendations";
import YieldAnalysis from "./pages/YieldAnalysis";
import IrrigationPlanning from "./pages/IrrigationPlanning";
import PestDetection from "./pages/PestDetection";
import MarketInsights from "./pages/MarketInsights";
import AdminPanel from "./pages/AdminPanel";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/citizen" element={<Citizen />} />
          <Route path="/farmers" element={<Farmers />} />
          <Route path="/landowners" element={<Landowners />} />
          <Route path="/ai" element={<AIPage />} />

          {/* New app routes */}
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard/farmer" element={<FarmerDashboard />} />
          <Route path="/recommendations/crops" element={<CropRecommendations />} />
          <Route path="/analysis/yield" element={<YieldAnalysis />} />
          <Route path="/planning/irrigation" element={<IrrigationPlanning />} />
          <Route path="/detection/pests" element={<PestDetection />} />
          <Route path="/market-insights" element={<MarketInsights />} />
          <Route path="/admin" element={<AdminPanel />} />

          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
