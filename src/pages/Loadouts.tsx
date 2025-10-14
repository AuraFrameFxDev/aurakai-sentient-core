import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";
import { Heart, Plus } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface Loadout {
  id: string;
  agent_name: string;
  loadout_name: string;
  description: string;
  likes: number;
  created_at: string;
  profiles: {
    username: string;
  };
}

const Loadouts = () => {
  const [loadouts, setLoadouts] = useState<Loadout[]>([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    fetchLoadouts();
  }, []);

  const fetchLoadouts = async () => {
    const { data, error } = await supabase
      .from('agent_loadouts')
      .select(`
        id,
        agent_name,
        loadout_name,
        description,
        likes,
        created_at,
        profiles:user_id (username)
      `)
      .eq('is_public', true)
      .order('likes', { ascending: false });

    if (error) {
      toast({
        title: "Error fetching loadouts",
        description: error.message,
        variant: "destructive",
      });
    } else {
      setLoadouts(data as any);
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="font-euronism text-5xl font-bold tracking-[0.2em] text-primary-glow">
              AGENT.LOADOUTS
            </h1>
            <p className="text-lg text-muted-foreground mt-2">
              Discover and share custom agent configurations
            </p>
          </div>
          <Button className="bg-primary hover:bg-primary/80" onClick={() => navigate("/auth")}>
            <Plus className="w-4 h-4 mr-2" />
            CREATE LOADOUT
          </Button>
        </div>

        {loading ? (
          <div className="text-center text-muted-foreground">Loading loadouts...</div>
        ) : loadouts.length === 0 ? (
          <Card className="glass-hologram p-12 text-center">
            <p className="text-muted-foreground">No loadouts yet. Create the first one!</p>
          </Card>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {loadouts.map((loadout) => (
              <Card key={loadout.id} className="glass-hologram p-6 hover:border-primary/40 transition-all">
                <div className="space-y-4">
                  <div>
                    <Badge className="mb-2">{loadout.agent_name}</Badge>
                    <h3 className="font-euronism text-xl font-bold text-primary-glow mb-2">
                      {loadout.loadout_name}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {loadout.description}
                    </p>
                  </div>

                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span className="font-euronism">
                      BY {loadout.profiles?.username || 'Unknown'}
                    </span>
                    <span className="flex items-center gap-1 text-accent">
                      <Heart className="w-3 h-3" />
                      {loadout.likes}
                    </span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Loadouts;