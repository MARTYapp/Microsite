export default function ContactBlock() {
  return (
    <div className="text-center space-y-3">
      <a
        href="mailto:eric@themarty.app"
        className="text-xl font-semibold hover:underline"
      >
        eric@themarty.app
      </a>
      <div className="flex gap-3 justify-center text-sm">
        <a
          className="underline opacity-80 hover:opacity-100"
          href="https://buymeacoffee.com/ericadler"
          target="_blank"
          rel="noopener noreferrer"
        >
          ☕ Fuel the Founder
        </a>
        <a
          className="underline opacity-80 hover:opacity-100"
          href="https://cal.com/your-handle/marty"
          target="_blank"
          rel="noopener noreferrer"
        >
          📅 Book a Chat
        </a>
      </div>
    </div>
  );
}
