export default function Footer() {
  return (
    <footer className="w-full text-center text-gray-500 text-xs py-6">
      &copy; {new Date().getFullYear()} The MARTY App. All rights reserved.{' '}
      <a
        href="https://coff.ee/ericadler"
        target="_blank"
        rel="noopener noreferrer"
        className="text-amber-500 hover:text-amber-600 transition"
      >
        $END ME $
      </a>
    </footer>
  )
}