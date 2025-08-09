import { usePageSEO } from "@/hooks/usePageSEO";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Megaphone } from "lucide-react";

const Citizen = () => {
  usePageSEO({
    title: "Citizen Grievance & Tracking | Amaravati Smart Civic & Agri Hub",
    description:
      "File geotagged complaints, get AI urgency classification, and track resolution with alerts in Amaravati.",
  });

  return (
    <main className="min-h-screen bg-background">
      <header className="border-b">
        <div className="container py-6 flex items-center justify-between">
          <h1 className="text-2xl font-bold">Citizen Grievance & Tracking</h1>
          <Link to="/">
            <Button variant="outline">Home</Button>
          </Link>
        </div>
      </header>
      <section className="container py-12 space-y-6">
        <div className="rounded-xl border p-8 flex items-center gap-4">
          <Megaphone className="text-primary" />
          <div>
            <p className="font-semibold">Coming soon</p>
            <p className="text-sm text-muted-foreground">
              Submit issues with photos and location. Track status with SMS/WhatsApp
              updates.
            </p>
          </div>
        </div>
        <div className="flex gap-4">
          <Button variant="hero">Report an Issue</Button>
          <Button variant="secondary">View My Tickets</Button>
        </div>
      </section>
    </main>
  );
};

export default Citizen;
