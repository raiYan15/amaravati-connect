import { usePageSEO } from "@/hooks/usePageSEO";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Sprout } from "lucide-react";

const Farmers = () => {
  usePageSEO({
    title: "Farmer Assistance Hub | Amaravati Smart Civic & Agri Hub",
    description:
      "Real-time weather, crop disease alerts, irrigation scheduling, and mandi prices for Amaravati farmers.",
  });

  return (
    <main className="min-h-screen bg-background">
      <header className="border-b">
        <div className="container py-6 flex items-center justify-between">
          <h1 className="text-2xl font-bold">Farmer Assistance Hub</h1>
          <Link to="/">
            <Button variant="outline">Home</Button>
          </Link>
        </div>
      </header>
      <section className="container py-12 space-y-6">
        <div className="rounded-xl border p-8 flex items-center gap-4">
          <Sprout className="text-primary" />
          <div>
            <p className="font-semibold">Live insights</p>
            <p className="text-sm text-muted-foreground">
              Weather and irrigation scheduling integrations with OpenWeather and Agro
              APIs will appear here.
            </p>
          </div>
        </div>
        <div className="flex gap-4">
          <Button variant="hero">Check Weather</Button>
          <Button variant="secondary">View Market Prices</Button>
        </div>
      </section>
    </main>
  );
};

export default Farmers;
