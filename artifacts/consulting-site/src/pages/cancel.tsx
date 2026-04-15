import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function Cancel() {
  return (
    <div className="min-h-[100dvh] flex flex-col items-center justify-center bg-background p-6">
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
