import { usePageSEO } from "@/hooks/usePageSEO";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const YieldAnalysis = () => {
  usePageSEO({
    title: "Yield Prediction & Analysis | Amaravati Hub",
    description: "Graphs and comparisons for predicted yields across seasons.",
  });

  return (
    <main className="min-h-screen bg-background">
      <header className="border-b">
        <div className="container py-6 flex items-center justify-between">
          <h1 className="text-2xl font-bold">Yield Prediction & Analysis</h1>
          <Link to="/">
            <Button variant="outline">Home</Button>
          </Link>
        </div>
      </header>
      <section className="container py-12 space-y-6">
        <p className="text-muted-foreground">This page will visualize yield predictions and compare with previous seasons.</p>
        <div className="flex gap-4">
          <Link to="/recommendations/crops"><Button variant="secondary">Back to Recommendations</Button></Link>
        </div>
      </section>
    </main>
  );
};

export default YieldAnalysis;
