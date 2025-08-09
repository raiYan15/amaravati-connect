import { usePageSEO } from "@/hooks/usePageSEO";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const FarmerDashboard = () => {
  usePageSEO({
    title: "Farmer Dashboard | Amaravati Hub",
    description: "Personalized weather, soil status, and crop insights for farmers.",
  });

  return (
    <main className="min-h-screen bg-background">
      <header className="border-b">
        <div className="container py-6 flex items-center justify-between">
          <h1 className="text-2xl font-bold">Farmer Dashboard</h1>
          <Link to="/">
            <Button variant="outline">Home</Button>
          </Link>
        </div>
      </header>
      <section className="container py-12 space-y-6">
        <p className="text-muted-foreground">This page will show your yield forecast, weather summary, soil status, and recommended crops.</p>
        <div className="flex flex-wrap gap-4">
          <Link to="/recommendations/crops"><Button variant="secondary">Crop Recommendations</Button></Link>
          <Link to="/analysis/yield"><Button>Yield Prediction & Analysis</Button></Link>
          <Link to="/planning/irrigation"><Button variant="outline">Irrigation Planning</Button></Link>
          <Link to="/detection/pests"><Button variant="outline">Pest Detection</Button></Link>
          <Link to="/market-insights"><Button variant="secondary">Market Insights</Button></Link>
        </div>
      </section>
    </main>
  );
};

export default FarmerDashboard;
