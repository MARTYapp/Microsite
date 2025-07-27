export default function Footer() {
  return (
    <footer className="w-full px-4 py-6 text-center text-xs text-gray-500 border-t border-gray-800 bg-black/80 backdrop-blur-sm">
      <p className="mb-1">
        &copy; {new Date().getFullYear()} The MARTY App. All rights reserved.
      </p>
      <a
        href="https://coff.ee/ericadler"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block text-amber-400 hover:text-amber-500 transition font-semibold tracking-wide"
      >
        $END ME $
      </a>
    </footer>
  )
}