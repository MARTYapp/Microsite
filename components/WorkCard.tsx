import Link from "next/link";
export default function WorkCard({ title, subtitle, href }:{ title:string; subtitle:string; href:string; }) {
  return (
    <Link href={href} className="group block border border-gray-800 rounded-2xl p-5 bg-black hover:bg-gray-950 transition">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-bold">{title}</h3>
        <span className="opacity-60 group-hover:opacity-100">→</span>
      </div>
      <p className="text-sm text-gray-400 mt-2">{subtitle}</p>
    </Link>
  );
}
