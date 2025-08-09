import { usePageSEO } from "@/hooks/usePageSEO";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CropRecommendations = () => {
  usePageSEO({
    title: "Crop Recommendations | Amaravati Hub",
    description: "Seasonal crop suggestions with water use and profitability estimates.",
  });

  return (
    <main className="min-h-screen bg-background">
      <header className="border-b">
        <div className="container py-6 flex items-center justify-between">
          <h1 className="text-2xl font-bold">Crop Recommendation</h1>
          <Link to="/">
            <Button variant="outline">Home</Button>
          </Link>
        </div>
      </header>
      <section className="container py-12 space-y-6">
        <p className="text-muted-foreground">Here you'll see detailed crop suggestions for the season, water usage, and profit projections.</p>
        <div className="flex gap-4">
          <Link to="/analysis/yield"><Button>Go to Yield Analysis</Button></Link>
        </div>
      </section>
    </main>
  );
};

export default CropRecommendations;
