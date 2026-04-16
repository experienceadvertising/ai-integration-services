import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import SEO from "@/components/seo";

export default function Cancel() {
  return (
    <div className="min-h-[100dvh] flex flex-col items-center justify-center bg-background p-6">
      <SEO
        title="Checkout Cancelled"
        description="Your checkout was cancelled. No charge was made. Return to learncowork.net to book a Claude Cowork training session."
        noindex={true}
      />
      <div className="max-w-md w-full text-center space-y-6">
        <h1 className="text-4xl font-bold tracking-tight">Checkout cancelled.</h1>
        <p className="text-muted-foreground text-lg">
          No worries. You haven't been charged.
        </p>
        <div className="pt-8">
          <Link href="/">
            <Button variant="default" className="w-full">Return Home</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
