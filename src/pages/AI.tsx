import { usePageSEO } from "@/hooks/usePageSEO";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Brain } from "lucide-react";

const AIPage = () => {
  usePageSEO({
    title: "AI Resource & Risk Prediction | Amaravati Smart Civic & Agri Hub",
    description:
      "AI predicts water shortages, crop recommendations, and project risks for proactive action in Amaravati.",
  });

  return (
    <main className="min-h-screen bg-background">
      <header className="border-b">
        <div className="container py-6 flex items-center justify-between">
          <h1 className="text-2xl font-bold">AI Resource & Risk Prediction</h1>
          <Link to="/">
            <Button variant="outline">Home</Button>
          </Link>
        </div>
      </header>
      <section className="container py-12 space-y-6">
        <div className="rounded-xl border p-8 flex items-center gap-4">
          <Brain className="text-primary" />
          <div>
            <p className="font-semibold">Proactive decisions</p>
            <p className="text-sm text-muted-foreground">
              TensorFlow.js models and data pipelines will power early warnings and
              recommendations here.
            </p>
          </div>
        </div>
        <div className="flex gap-4">
          <Button variant="hero">View Predictions</Button>
          <Button variant="secondary">Subscribe to Alerts</Button>
        </div>
      </section>
    </main>
  );
};

export default AIPage;
