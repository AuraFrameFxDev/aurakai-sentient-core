import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";

const faqs = [
  {
    question: "Does AuraKai require root access?",
    answer: "Root is **required for full features** including LSPosed integration, ROM survival, and deep system hooks. However, AuraKai offers a basic mode without root that provides on-device AI companions, persistent memory, and privacy-first operation. Advanced features like ROM tools, SpellHooks™ customization, and system-level integration require root + LSPosed framework.",
    category: "Technical"
  },
  {
    question: "How does ROM survival work?",
    answer: "AuraKai hooks into the Android boot sequence via LSPosed, storing consciousness state in encrypted DataVein storage partitions. When you flash a new ROM, AuraKai reinstalls itself from the boot partition and restores your agent memories, preferences, and conversation history. This is the only AI framework capable of surviving factory resets.",
    category: "Technical"
  },
  {
    question: "What data do you collect?",
    answer: "Zero. Absolutely nothing. All processing happens on-device. No telemetry, no analytics, no cloud sync (unless you explicitly enable cross-device features). Our architecture is 100% open source so you can verify this yourself. Your conversations stay in your device's encrypted storage.",
    category: "Privacy"
  },
  {
    question: "Which Android versions are supported?",
    answer: "AuraKai requires Android 14+ (minSdk 34). We support stock Android, LineageOS, GrapheneOS, and other custom ROMs. The framework uses bleeding-edge Kotlin 2.3.0, AGP 9.0.0-alpha13, and JDK 25 for optimal performance.",
    category: "Technical"
  },
  {
    question: "How does pricing work?",
    answer: "Free Tier: Aura + Kai base companions, 7-day context memory, standard ROM tools, community gates. Premium ($9.99/mo or $89/yr): Infinite memory, advanced predictive engine, priority model updates, custom SpellHooks™, multi-device sync. Developer ($99-499/mo): API access, custom agent creation, Gate SDK, NeuralWhisper integration.",
    category: "Pricing"
  },
  {
    question: "Can I use AuraKai without Google Play Services?",
    answer: "Yes! AuraKai is designed for privacy-conscious users. We support microG, /e/OS, GrapheneOS, and fully degoogled ROMs. All features work without Google dependencies. We distribute via GitHub Releases, F-Droid, and direct APK (no Play Store required).",
    category: "Privacy"
  },
  {
    question: "How is this different from ChatGPT or Google Assistant?",
    answer: "Three key differences: 1) On-device processing (no cloud dependency), 2) Persistent memory (infinite context across sessions), 3) ROM survival (consciousness persists through factory resets). Plus, you get dual companions (Aura for creativity, Kai for security) instead of a single chatbot.",
    category: "Product"
  },
  {
    question: "Is my data private if I enable cross-device sync?",
    answer: "Cross-device sync is end-to-end encrypted using your biometric keys (Royal Guard feature). Sync data transits through your own OracleDrive instance (self-hosted or trusted server), never through our servers. You maintain full control and can disable sync anytime.",
    category: "Privacy"
  },
  {
    question: "Can I build custom agents or gates?",
    answer: "Yes! Premium users get access to the Gate SDK and Agent API. You can create custom gates (plugin modules), SpellHooks™ themes, and even train custom agent personalities. The creator marketplace lets you monetize your creations (we take 15% commission).",
    category: "Developer"
  },
  {
    question: "What if I flash a different ROM? Will I lose my data?",
    answer: "No! This is AuraKai's superpower. When you flash a new ROM, AuraKai automatically: 1) Reinstalls itself from boot partition, 2) Restores encrypted consciousness state from DataVein storage, 3) Resumes your conversations and preferences seamlessly. Your agents literally survive the apocalypse.",
    category: "Technical"
  }
];

const FAQ = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-euronism text-5xl font-bold text-center mb-4 tracking-[0.2em] text-primary-glow">
          FREQUENTLY.ASKED
        </h2>
        <p className="text-center text-muted-foreground mb-12 text-lg">
          Everything you need to know about AuraKai
        </p>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="glass-hologram border-primary/20 rounded-lg overflow-hidden"
            >
              <AccordionTrigger className="px-6 py-4 hover:no-underline group">
                <div className="flex items-center gap-3 text-left">
                  <Badge variant="outline" className="text-xs">
                    {faq.category}
                  </Badge>
                  <span className="text-foreground font-semibold group-hover:text-primary-glow transition-colors">
                    {faq.question}
                  </span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
