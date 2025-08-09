import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-amaravati.jpg";
import { Link } from "react-router-dom";
import { Map, Megaphone, Sprout, Landmark, Brain } from "lucide-react";
import { useEffect, useRef } from "react";
import { usePageSEO } from "@/hooks/usePageSEO";

const Index = () => {
  usePageSEO({
    title: "Amaravati Smart Civic & Agri Hub | One Platform for All",
    description:
      "From city roads to farmland roots — one platform for citizens, farmers, landowners and government in Amaravati.",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "Amaravati Smart Civic & Agri Hub",
      url: "https://lovable.dev/projects/ffa14cf2-eae1-45db-8017-84e5f43444cc",
      slogan: "From City Roads to Farmland Roots — One Platform for All.",
    },
  });

  const ambientRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const el = ambientRef.current;
    if (!el) return;
    function onMove(e: MouseEvent) {
      const rect = el.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      el.style.setProperty("--x", `${x}%`);
      el.style.setProperty("--y", `${y}%`);
    }
    el.addEventListener("mousemove", onMove);
    return () => el.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <main className="min-h-screen bg-background">
      <header className="border-b">
        <div className="container py-5 flex items-center justify-between">
          <a href="/" className="font-extrabold text-lg tracking-tight">
            Amaravati Hub
          </a>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <Link to="/dashboard" className="hover:underline">Dashboard</Link>
            <Link to="/citizen" className="hover:underline">Citizen</Link>
            <Link to="/farmers" className="hover:underline">Farmers</Link>
            <Link to="/landowners" className="hover:underline">Landowners</Link>
            <Link to="/ai" className="hover:underline">AI</Link>
          </nav>
          <Link to="/citizen" className="md:block hidden">
            <Button variant="hero" size="sm">Report Issue</Button>
          </Link>
        </div>
      </header>

      <section ref={ambientRef} className="ambient">
        <div className="container py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
              Amaravati Smart Civic & Agri Hub
            </h1>
            <p className="text-lg text-muted-foreground max-w-prose">
              From City Roads to Farmland Roots — one platform where citizens report
              issues, farmers get real-time guidance, landowners find transparency,
              and government manages growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/dashboard">
                <Button variant="hero" size="lg">Explore City Dashboard</Button>
              </Link>
              <Link to="/citizen">
                <Button variant="secondary" size="lg">Report an Issue</Button>
              </Link>
            </div>
          </div>
          <div className="relative">
            <img
              src={heroImage}
              alt="Amaravati city development and farmland irrigation combined scene"
              loading="lazy"
              className="w-full rounded-xl border shadow-elevated animate-float"
            />
          </div>
        </div>
      </section>

      <section className="container py-12 md:py-16">
        <div className="grid md:grid-cols-3 gap-6">
          <article className="rounded-xl border p-6 hover:shadow-elevated transition-shadow">
            <div className="flex items-center gap-3 mb-3">
              <Map className="text-primary" />
              <h2 className="text-xl font-semibold">City Development Dashboard</h2>
            </div>
            <p className="text-muted-foreground mb-4">
              Live map of projects—roads, bridges, housing, water works—with budget,
              contractors, and progress.
            </p>
            <Link to="/dashboard">
              <Button variant="link">Open Dashboard</Button>
            </Link>
          </article>

          <article className="rounded-xl border p-6 hover:shadow-elevated transition-shadow">
            <div className="flex items-center gap-3 mb-3">
              <Megaphone className="text-primary" />
              <h2 className="text-xl font-semibold">Citizen Grievance & Tracking</h2>
            </div>
            <p className="text-muted-foreground mb-4">
              Geotagged complaints, AI urgency classification, and status updates via
              SMS/WhatsApp.
            </p>
            <Link to="/citizen">
              <Button variant="link">Submit Grievance</Button>
            </Link>
          </article>

          <article className="rounded-xl border p-6 hover:shadow-elevated transition-shadow">
            <div className="flex items-center gap-3 mb-3">
              <Sprout className="text-primary" />
              <h2 className="text-xl font-semibold">Farmer Assistance Hub</h2>
            </div>
            <p className="text-muted-foreground mb-4">
              Weather, crop alerts, irrigation scheduling, and mandi prices tailored
              to Amaravati.
            </p>
            <Link to="/farmers">
              <Button variant="link">View Assistance</Button>
            </Link>
          </article>

          <article className="rounded-xl border p-6 hover:shadow-elevated transition-shadow">
            <div className="flex items-center gap-3 mb-3">
              <Landmark className="text-primary" />
              <h2 className="text-xl font-semibold">Landowner Transparency</h2>
            </div>
            <p className="text-muted-foreground mb-4">
              Acquisition status, compensation timelines, and nearby infrastructure
              insights.
            </p>
            <Link to="/landowners">
              <Button variant="link">Check Transparency</Button>
            </Link>
          </article>

          <article className="rounded-xl border p-6 hover:shadow-elevated transition-shadow md:col-span-2">
            <div className="flex items-center gap-3 mb-3">
              <Brain className="text-primary" />
              <h2 className="text-xl font-semibold">AI Resource & Risk Prediction</h2>
            </div>
            <p className="text-muted-foreground mb-4">
              Predict water shortages, recommend best crops, and detect project risks
              before they escalate.
            </p>
            <Link to="/ai">
              <Button variant="link">See Predictions</Button>
            </Link>
          </article>
        </div>
      </section>

      <footer className="border-t">
        <div className="container py-8 text-sm text-muted-foreground">
          © {new Date().getFullYear()} Amaravati Smart Civic & Agri Hub • All rights reserved
        </div>
      </footer>
    </main>
  );
};

export default Index;
