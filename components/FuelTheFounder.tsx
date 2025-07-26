import { Button } from "@/components/ui/button"; // adjust if you're not using shadcn/ui

export default function HeroCTA() {
  return (
    <div className="flex justify-center mt-8">
      <Button
        className="text-white bg-indigo-600 hover:bg-indigo-700 shadow-lg rounded-xl px-6 py-3 text-lg tracking-tight transition duration-200 ease-in-out"
        onClick={() =>
          document
            .getElementById("how-it-works")
            ?.scrollIntoView({ behavior: "smooth" })
        }
      >
        See How It Works
      </Button>
    </div>
  );
}
