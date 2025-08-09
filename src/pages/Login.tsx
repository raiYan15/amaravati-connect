import { usePageSEO } from "@/hooks/usePageSEO";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Login = () => {
  usePageSEO({
    title: "Login / Signup | Amaravati Hub",
    description: "Email/phone OTP login for Farmer, Admin, and Researcher roles.",
  });

  return (
    <main className="min-h-screen bg-background">
      <header className="border-b">
        <div className="container py-6 flex items-center justify-between">
          <h1 className="text-2xl font-bold">Login / Signup</h1>
          <Link to="/">
            <Button variant="outline">Home</Button>
          </Link>
        </div>
      </header>
      <section className="container py-12 space-y-6">
        <p className="text-muted-foreground">Choose your role to continue. Authentication setup will be added with Supabase OTP.</p>
        <div className="flex flex-wrap gap-4">
          <Link to="/dashboard/farmer"><Button>Continue as Farmer</Button></Link>
          <Link to="/admin"><Button variant="secondary">Admin Panel</Button></Link>
          <Link to="/dashboard"><Button variant="outline">City Dashboard</Button></Link>
        </div>
      </section>
    </main>
  );
};

export default Login;
