import { usePageSEO } from "@/hooks/usePageSEO";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const IrrigationPlanning = () => {
  usePageSEO({
    title: "Irrigation & Resource Optimization | Amaravati Hub",
    description: "Recommended irrigation schedules and fertilizer suggestions.",
  });

  return (
    <main className="min-h-screen bg-background">
      <header className="border-b">
        <div className="container py-6 flex items-center justify-between">
          <h1 className="text-2xl font-bold">Irrigation & Resource Optimization</h1>
          <Link to="/">
            <Button variant="outline">Home</Button>
          </Link>
        </div>
      </header>
      <section className="container py-12 space-y-6">
        <p className="text-muted-foreground">This page provides irrigation schedules, fertilizer usage, and shortage alerts.</p>
        <div className="flex gap-4">
          <Link to="/analysis/yield"><Button variant="secondary">Yield Analysis</Button></Link>
          <Link to="/recommendations/crops"><Button>Crop Recommendations</Button></Link>
        </div>
      </section>
    </main>
  );
};

export default IrrigationPlanning;
