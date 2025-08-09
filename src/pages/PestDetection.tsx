import { usePageSEO } from "@/hooks/usePageSEO";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const PestDetection = () => {
  usePageSEO({
    title: "Pest & Disease Detection | Amaravati Hub",
    description: "Upload crop images for AI-powered detection and remedies.",
  });

  return (
    <main className="min-h-screen bg-background">
      <header className="border-b">
        <div className="container py-6 flex items-center justify-between">
          <h1 className="text-2xl font-bold">Pest & Disease Detection</h1>
          <Link to="/">
            <Button variant="outline">Home</Button>
          </Link>
        </div>
      </header>
      <section className="container py-12 space-y-6">
        <p className="text-muted-foreground">You will be able to upload images from drone or phone to detect issues and get remedies.</p>
        <div className="flex gap-4">
          <Link to="/planning/irrigation"><Button variant="secondary">Irrigation Planning</Button></Link>
        </div>
      </section>
    </main>
  );
};

export default PestDetection;
