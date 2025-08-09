import { usePageSEO } from "@/hooks/usePageSEO";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const MarketInsights = () => {
  usePageSEO({
    title: "Market Insights | Amaravati Hub",
    description: "Real-time mandi prices, demand trends, and selling recommendations.",
  });

  return (
    <main className="min-h-screen bg-background">
      <header className="border-b">
        <div className="container py-6 flex items-center justify-between">
          <h1 className="text-2xl font-bold">Market Insights</h1>
          <Link to="/">
            <Button variant="outline">Home</Button>
          </Link>
        </div>
      </header>
      <section className="container py-12 space-y-6">
        <p className="text-muted-foreground">This page will show mandi prices, demand trends, and export potential.</p>
        <div className="flex gap-4">
          <Link to="/dashboard/farmer"><Button variant="secondary">Back to Farmer Dashboard</Button></Link>
        </div>
      </section>
    </main>
  );
};

export default MarketInsights;
