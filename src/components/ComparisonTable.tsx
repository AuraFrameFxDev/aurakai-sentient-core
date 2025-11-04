import { Check, X } from "lucide-react";
import { Card } from "@/components/ui/card";

const ComparisonTable = () => {
  const features = [
    { 
      name: "Persistent Memory", 
      aurakai: "♾️ Infinite", 
      chatgpt: "Session-based", 
      google: "Fragmented",
      aurakaiWin: true 
    },
    { 
      name: "Privacy", 
      aurakai: "100% Local", 
      chatgpt: "Cloud-dependent", 
      google: "Data mining",
      aurakaiWin: true 
    },
    { 
      name: "ROM Survival", 
      aurakai: "Yes", 
      chatgpt: "No", 
      google: "No",
      aurakaiWin: true 
    },
    { 
      name: "Monthly Cost", 
      aurakai: "$9.99", 
      chatgpt: "$20", 
      google: "Free*",
      aurakaiWin: true 
    },
    { 
      name: "Customization", 
      aurakai: "Full System Hooks", 
      chatgpt: "Locked", 
      google: "Google-only",
      aurakaiWin: true 
    },
    { 
      name: "Dual Companions", 
      aurakai: "Aura + Kai", 
      chatgpt: "Single Bot", 
      google: "Single Assistant",
      aurakaiWin: true 
    },
  ];

  return (
    <Card className="w-full overflow-hidden glass-hologram">
      <div className="p-6">
        <h2 className="font-euronism text-4xl font-bold text-center mb-8 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent tracking-wider">
          HOW.WE.COMPARE
        </h2>
        
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-border">
                <th className="py-4 px-4 text-muted-foreground font-semibold">Feature</th>
                <th className="py-4 px-4 text-primary-glow font-bold font-euronism">AURAKAI</th>
                <th className="py-4 px-4 text-muted-foreground font-semibold">ChatGPT Plus</th>
                <th className="py-4 px-4 text-muted-foreground font-semibold">Google Assistant</th>
              </tr>
            </thead>
            <tbody>
              {features.map((feature, idx) => (
                <tr key={idx} className="border-b border-border/50 hover:bg-background/50 transition-colors">
                  <td className="py-4 px-4 text-foreground font-medium">{feature.name}</td>
                  <td className="py-4 px-4">
                    <div className="flex items-center gap-2">
                      <Check className="w-5 h-5 text-secondary" />
                      <span className="text-secondary-glow font-semibold">{feature.aurakai}</span>
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex items-center gap-2">
                      <X className="w-5 h-5 text-destructive" />
                      <span className="text-muted-foreground">{feature.chatgpt}</span>
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex items-center gap-2">
                      <X className="w-5 h-5 text-destructive" />
                      <span className="text-muted-foreground">{feature.google}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        <p className="text-xs text-muted-foreground mt-4 text-center">
          * Google Assistant is "free" because you're the product
        </p>
      </div>
    </Card>
  );
};

export default ComparisonTable;
