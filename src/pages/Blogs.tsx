import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";
import { Eye, Plus } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface BlogPost {
  id: string;
  title: string;
  content: string;
  category: string;
  views: number;
  created_at: string;
  profiles: {
    username: string;
  };
}

const Blogs = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    const { data, error } = await supabase
      .from('blog_posts')
      .select(`
        id,
        title,
        content,
        category,
        views,
        created_at,
        profiles:user_id (username)
      `)
      .order('created_at', { ascending: false });

    if (error) {
      toast({
        title: "Error fetching posts",
        description: error.message,
        variant: "destructive",
      });
    } else {
      setPosts(data as any);
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="font-euronism text-5xl font-bold tracking-[0.2em] text-primary-glow">
              KNOWLEDGE.BASE
            </h1>
            <p className="text-lg text-muted-foreground mt-2">
              Share ideas, tutorials, and discoveries
            </p>
          </div>
          <Button className="bg-primary hover:bg-primary/80" onClick={() => navigate("/auth")}>
            <Plus className="w-4 h-4 mr-2" />
            NEW POST
          </Button>
        </div>

        {loading ? (
          <div className="text-center text-muted-foreground">Loading posts...</div>
        ) : posts.length === 0 ? (
          <Card className="glass-hologram p-12 text-center">
            <p className="text-muted-foreground">No posts yet. Be the first to share!</p>
          </Card>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {posts.map((post) => (
              <Card key={post.id} className="glass-hologram p-6 hover:border-primary/40 transition-all cursor-pointer">
                <div className="space-y-4">
                  <div>
                    <Badge className="mb-2">{post.category}</Badge>
                    <h3 className="font-euronism text-xl font-bold text-primary-glow mb-2">
                      {post.title}
                    </h3>
                    <p className="text-sm text-muted-foreground line-clamp-3">
                      {post.content}
                    </p>
                  </div>

                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span className="font-euronism">
                      BY {post.profiles?.username || 'Unknown'}
                    </span>
                    <div className="flex items-center gap-4">
                      <span className="flex items-center gap-1">
                        <Eye className="w-3 h-3" />
                        {post.views}
                      </span>
                      <span>
                        {new Date(post.created_at).toLocaleDateString()}
                      </span>
                    </div>
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

export default Blogs;