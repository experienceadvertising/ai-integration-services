import { Check, Minus } from "lucide-react";

interface Row {
  feature: string;
  oneHr: boolean | string;
  fourHr: boolean | string;
}

const rows: Row[] = [
  { feature: "Live screen-share session with Evan", oneHr: "1 hour", fourHr: "4 hours" },
  { feature: "Best for", oneHr: "Solo or small team (1–4)", fourHr: "Full team (up to 8)" },
  { feature: "Workflows built live", oneHr: "2–3 workflows", fourHr: "6–8 workflows" },
  { feature: "Claude Cowork setup walkthrough", oneHr: true, fourHr: true },
  { feature: "Personalized written playbook", oneHr: true, fourHr: true },
  { feature: "Custom MCP integrations to your tools", oneHr: false, fourHr: true },
  { feature: "Multi-department coverage", oneHr: false, fourHr: true },
  { feature: "Session recording you can share with the team", oneHr: false, fourHr: true },
  { feature: "Follow-up email Q&A (7 days)", oneHr: false, fourHr: true },
];

function Cell({ value, label }: { value: boolean | string; label: string }) {
  if (typeof value === "string") {
    return <span className="text-sm font-medium text-foreground">{value}</span>;
  }
  if (value) {
    return (
      <>
        <Check className="w-5 h-5 text-primary mx-auto" aria-hidden="true" />
        <span className="sr-only">Included in {label}</span>
      </>
    );
  }
  return (
    <>
      <Minus className="w-4 h-4 text-muted-foreground/50 mx-auto" aria-hidden="true" />
      <span className="sr-only">Not included in {label}</span>
    </>
  );
}

export default function ComparisonTable() {
  return (
    <div className="max-w-4xl mx-auto mt-12 md:mt-16">
      <div className="text-center mb-6 md:mb-8">
        <h3 className="text-xl md:text-2xl font-bold tracking-tight mb-2">Which session is right for you?</h3>
        <p className="text-sm text-muted-foreground">A side-by-side look at what's included.</p>
      </div>

      <div className="overflow-hidden rounded-2xl border border-border bg-background shadow-sm">
        <table className="w-full text-sm border-collapse">
          <caption className="sr-only">Comparison of 1-hour and 4-hour Claude Cowork training session contents</caption>
          <thead>
            <tr>
              <th scope="col" className="px-4 md:px-6 py-4 bg-secondary/40 border-b border-border text-left font-semibold">
                <span className="sr-only">Feature</span>
              </th>
              <th scope="col" className="px-3 md:px-6 py-4 text-center bg-secondary/40 border-b border-l border-border min-w-[110px]">
                <div className="text-xs text-muted-foreground uppercase tracking-wider mb-1 font-semibold">1-Hour</div>
                <div className="text-lg md:text-xl font-bold">$300</div>
              </th>
              <th scope="col" className="px-3 md:px-6 py-4 text-center bg-primary/10 border-b border-l border-border min-w-[110px]">
                <div className="text-xs text-primary uppercase tracking-wider mb-1 font-semibold">4-Hour Deep Dive</div>
                <div className="text-lg md:text-xl font-bold">$1,000</div>
              </th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr key={i}>
                <th
                  scope="row"
                  className={`px-4 md:px-6 py-3.5 text-left font-medium border-t border-border ${i % 2 === 1 ? "bg-secondary/20" : ""}`}
                >
                  {row.feature}
                </th>
                <td className={`px-3 md:px-6 py-3.5 text-center border-t border-l border-border ${i % 2 === 1 ? "bg-secondary/20" : ""}`}>
                  <Cell value={row.oneHr} label="1-Hour Session" />
                </td>
                <td className={`px-3 md:px-6 py-3.5 text-center border-t border-l border-border ${i % 2 === 0 ? "bg-primary/[0.03]" : "bg-primary/5"}`}>
                  <Cell value={row.fourHr} label="4-Hour Deep Dive" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
