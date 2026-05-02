import { useEffect, useState } from "react";
import { TrendingUp } from "lucide-react";

const BASE_URL = import.meta.env.BASE_URL.replace(/\/$/, "");

interface Stats {
  count: number;
  days: number;
}

export default function RecentBookingsBadge() {
  const [stats, setStats] = useState<Stats | null>(null);

  useEffect(() => {
    let cancelled = false;
    fetch(`${BASE_URL}/api/stats/recent-bookings`)
      .then((r) => (r.ok ? r.json() : null))
      .then((data: Stats | null) => {
        if (cancelled || !data) return;
        if (data.count >= 3) setStats(data);
      })
      .catch(() => {});
    return () => {
      cancelled = true;
    };
  }, []);

  if (!stats) return null;

  return (
    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold border border-primary/20">
      <span className="relative flex w-2 h-2">
        <span className="absolute inline-flex w-full h-full rounded-full bg-primary opacity-75 animate-ping" />
        <span className="relative inline-flex w-2 h-2 rounded-full bg-primary" />
      </span>
      <TrendingUp className="w-3.5 h-3.5" />
      {stats.count} sessions booked in the last {stats.days} days
    </div>
  );
}
