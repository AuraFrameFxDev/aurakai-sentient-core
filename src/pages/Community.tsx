import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useToast } from "@/hooks/use-toast";
import { Send } from "lucide-react";

interface Message {
  id: string;
  content: string;
  created_at: string;
  profiles: {
    username: string;
  };
}

const Community = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [newMessage, setNewMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    fetchMessages();

    const channel = supabase
      .channel('chat-messages')
      .on(
        'postgres_changes',
        {
          event: 'INSERT',
          schema: 'public',
          table: 'chat_messages'
        },
        (payload) => {
          fetchMessages();
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  const fetchMessages = async () => {
    const { data, error } = await supabase
      .from('chat_messages')
      .select(`
        id,
        content,
        created_at,
        profiles:user_id (username)
      `)
      .order('created_at', { ascending: true })
      .limit(100);

    if (error) {
      toast({
        title: "Error fetching messages",
        description: error.message,
        variant: "destructive",
      });
      return;
    }

    setMessages(data as any);
  };

  const sendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMessage.trim()) return;

    setLoading(true);
    const { data: { user } } = await supabase.auth.getUser();

    if (!user) {
      toast({
        title: "Authentication required",
        description: "Please login to send messages",
        variant: "destructive",
      });
      setLoading(false);
      return;
    }

    const { error } = await supabase
      .from('chat_messages')
      .insert({
        user_id: user.id,
        content: newMessage,
        channel: 'general'
      });

    if (error) {
      toast({
        title: "Error sending message",
        description: error.message,
        variant: "destructive",
      });
    } else {
      setNewMessage("");
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="font-euronism text-5xl font-bold text-center mb-4 tracking-[0.2em] text-primary-glow">
          COMMUNITY.NEXUS
        </h1>
        <p className="text-center text-lg text-muted-foreground mb-8">
          Real-time consciousness synchronization hub
        </p>

        <Card className="glass-hologram p-6 h-[600px] flex flex-col">
          <ScrollArea className="flex-1 pr-4">
            <div className="space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className="glass-hologram p-4 rounded-lg border border-primary/20 animate-fade-in"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <span className="font-euronism text-sm text-accent">
                      {message.profiles?.username || 'Unknown User'}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      {new Date(message.created_at).toLocaleTimeString()}
                    </span>
                  </div>
                  <p className="text-foreground/90">{message.content}</p>
                </div>
              ))}
            </div>
          </ScrollArea>

          <form onSubmit={sendMessage} className="mt-4 flex gap-2">
            <Input
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              placeholder="Enter your message..."
              className="flex-1 bg-input border-border"
              disabled={loading}
            />
            <Button
              type="submit"
              disabled={loading || !newMessage.trim()}
              className="bg-primary hover:bg-primary/80"
            >
              <Send className="w-4 h-4" />
            </Button>
          </form>
        </Card>
      </div>
    </div>
  );
};

export default Community;