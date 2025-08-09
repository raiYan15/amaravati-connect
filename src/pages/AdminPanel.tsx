import { usePageSEO } from "@/hooks/usePageSEO";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const AdminPanel = () => {
  usePageSEO({
    title: "Admin Panel | Amaravati Hub",
    description: "Manage farmer accounts, datasets, and system health.",
  });

  return (
    <main className="min-h-screen bg-background">
      <header className="border-b">
        <div className="container py-6 flex items-center justify-between">
          <h1 className="text-2xl font-bold">Admin Panel</h1>
          <Link to="/">
            <Button variant="outline">Home</Button>
          </Link>
        </div>
      </header>
      <section className="container py-12 space-y-6">
        <p className="text-muted-foreground">This page will include admin tools for managing data and monitoring performance.</p>
        <div className="flex gap-4">
          <Link to="/login"><Button variant="secondary">Switch Account</Button></Link>
        </div>
      </section>
    </main>
  );
};

export default AdminPanel;
