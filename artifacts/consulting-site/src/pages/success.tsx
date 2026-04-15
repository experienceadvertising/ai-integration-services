import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function Success() {
  return (
    <div className="min-h-[100dvh] flex flex-col items-center justify-center bg-background p-6">
      <div className="max-w-md w-full text-center space-y-6">
        <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-8">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square" strokeLinejoin="miter"><polyline points="20 6 9 17 4 12"></polyline></svg>
        </div>
        <h1 className="text-4xl font-bold tracking-tight">You're booked.</h1>
        <p className="text-muted-foreground text-lg">
          Payment confirmed. Check your email for the calendar invite and next steps. 
          I'm looking forward to diving in.
        </p>
        <div className="pt-8">
          <Link href="/">
            <Button variant="outline" className="w-full">Return Home</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
