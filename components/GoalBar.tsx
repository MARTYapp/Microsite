"use client";
export default function GoalBar() {
  const goal = Number(process.env.NEXT_PUBLIC_SUPPORT_GOAL ?? 2500);
  const current = Number(process.env.NEXT_PUBLIC_SUPPORT_CURRENT ?? 0);
  const pct = Math.max(0, Math.min(100, Math.floor((current / goal) * 100)));
  return (
    <div className="my-6">
      <div className="flex items-baseline justify-between mb-2">
        <span className="text-sm text-gray-300">{current.toLocaleString()} / {goal.toLocaleString()}</span>
        <span className="text-sm text-gray-400">{pct}%</span>
      </div>
      <div className="h-2 w-full rounded-full bg-gray-800 overflow-hidden">
        <div className="h-full bg-emerald-500" style={{ width: pct + "%" }} />
      </div>
    </div>
  );
}
