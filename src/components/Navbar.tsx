import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { LogOut, User } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Navbar = () => {
  const [user, setUser] = useState<any>(null);
  const location = useLocation();
  const { toast } = useToast();

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    toast({
      title: "Logged out",
      description: "Successfully disconnected from the network",
    });
  };

  const navLinks = [
    { to: "/", label: "HOME" },
    { to: "/agents", label: "AGENTS" },
    { to: "/community", label: "COMMUNITY" },
    { to: "/blogs", label: "BLOGS" },
    { to: "/loadouts", label: "LOADOUTS" },
    { to: "/network", label: "NETWORK" },
  ];

  return (
    <nav className="glass-hologram border-b border-primary/20 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="font-euronism text-2xl font-bold text-primary-glow tracking-wider">
            AURAKAI
          </Link>

          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`font-euronism text-sm tracking-wider transition-colors ${
                  location.pathname === link.to
                    ? "text-primary-glow"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-4">
            {user ? (
              <>
                <Button variant="ghost" size="sm" className="gap-2">
                  <User className="w-4 h-4" />
                  <span className="font-euronism text-xs">PROFILE</span>
                </Button>
                <Button variant="ghost" size="sm" onClick={handleLogout} className="gap-2">
                  <LogOut className="w-4 h-4" />
                  <span className="font-euronism text-xs">LOGOUT</span>
                </Button>
              </>
            ) : (
              <Link to="/auth">
                <Button className="bg-primary hover:bg-primary/80 font-euronism text-xs">
                  LOGIN / SIGNUP
                </Button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;