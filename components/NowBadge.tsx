export default function NowBadge() {
  return (
    <span className="inline-flex items-center gap-2 text-xs px-3 py-1 rounded-full border border-gray-700 bg-black/40">
      <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
      Now shipping v0.x
    </span>
  );
}
