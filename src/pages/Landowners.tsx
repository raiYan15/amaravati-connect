import { usePageSEO } from "@/hooks/usePageSEO";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Landmark } from "lucide-react";

const Landowners = () => {
  usePageSEO({
    title: "Landowner Transparency | Amaravati Smart Civic & Agri Hub",
    description:
      "Track land acquisition status, compensation timelines, and nearby infrastructure projects in Amaravati.",
  });

  return (
    <main className="min-h-screen bg-background">
      <header className="border-b">
        <div className="container py-6 flex items-center justify-between">
          <h1 className="text-2xl font-bold">Landowner Transparency</h1>
          <Link to="/">
            <Button variant="outline">Home</Button>
          </Link>
        </div>
      </header>
      <section className="container py-12 space-y-6">
        <div className="rounded-xl border p-8 flex items-center gap-4">
          <Landmark className="text-primary" />
          <div>
            <p className="font-semibold">Transparent information</p>
            <p className="text-sm text-muted-foreground">
              See development plans around your land, compensation milestones and
              forecasted value changes.
            </p>
          </div>
        </div>
        <div className="flex gap-4">
          <Button variant="hero">Check My Land Status</Button>
          <Button variant="secondary">Nearby Projects</Button>
        </div>
      </section>
    </main>
  );
};

export default Landowners;
