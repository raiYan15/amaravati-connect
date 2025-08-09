import { usePageSEO } from "@/hooks/usePageSEO";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Map } from "lucide-react";

const Dashboard = () => {
  usePageSEO({
    title: "City Development Dashboard | Amaravati Smart Civic & Agri Hub",
    description:
      "Explore Amaravati city projects on a live dashboard: roads, bridges, housing, water works with budgets, progress and contractors.",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: "City Development Dashboard",
      description:
        "Live map of Amaravati projects including roads, bridges, housing and water works.",
    },
  });

  return (
    <main className="min-h-screen bg-background">
      <header className="border-b">
        <div className="container py-6 flex items-center justify-between">
          <h1 className="text-2xl font-bold">City Development Dashboard</h1>
          <Link to="/">
            <Button variant="outline">Home</Button>
          </Link>
        </div>
      </header>
      <section className="container py-12 space-y-6">
        <p className="text-muted-foreground max-w-3xl">
          View Amaravati development works with progress, budgets, contractors and
          milestones. Interactive mapping and project lists coming soon.
        </p>
        <div className="rounded-xl border p-8 flex items-center gap-4">
          <Map className="text-primary" />
          <div>
            <p className="font-semibold">Live Map</p>
            <p className="text-sm text-muted-foreground">
              Map integration will display project locations and details. Token-based
              setup with Mapbox/Leaflet coming next.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Dashboard;
