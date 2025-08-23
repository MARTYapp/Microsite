export default function ContactBlock() {
  return (
    <div className="text-center space-y-3">
      <a href="mailto:eric@themarty.app" className="text-xl underline">eric@themarty.app</a>
      <div className="flex gap-3 justify-center text-sm">
        <a className="underline opacity-80 hover:opacity-100" href="/support">Support MARTY</a>
        <a className="underline opacity-80 hover:opacity-100" href="https://cal.com/your-handle/marty">Book a chat</a>
      </div>
    </div>
  );
}
