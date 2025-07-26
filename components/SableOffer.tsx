'use client'

import Link from 'next/link'

export default function SableOffer() {
  return (
    <section className="bg-[#111] text-white py-16 px-6 text-center">
      <h2 className="text-4xl font-bold mb-6">📄 Your Official Offer</h2>

      <div className="max-w-xl mx-auto space-y-4 text-lg leading-relaxed">
        <p>
          <strong>• Role:</strong> Social & Grant Ops Lead
        </p>
        <p>
          <strong>• Status:</strong> Core Team – Co-founder Track
        </p>
        <p>
          <strong>• Focus:</strong> Content & community growth, grant pipeline,
          and social execution
        </p>
        <p>
          <strong>• Growth:</strong> Build your own team as we scale
        </p>
      </div>

      <p className="mt-6 text-sm italic text-gray-400">
        (We already talked about the grant role — this just makes it official.)
      </p>

      {/* Download PDF */}
      <a
        href="/assets/Sable-Adler-Offer-MARTY.pdf"
        download
        className="inline-block mt-10 bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-xl text-sm font-semibold shadow-md transition"
      >
        ⬇️ Download Offer as PDF
      </a>

      {/* Optional acceptance */}
      <Link
        href="mailto:ericadlerbiz@gmail.com?subject=I'm%20In%20—%20Sable%20Adler&body=Hey%20Eric%2C%20I'm%20confirming%20I%27m%20in%20for%20the%20Social%20%26%20Grant%20Ops%20Lead%20role.%20Let%27s%20go."
        className="inline-block mt-4 ml-4 bg-white text-black px-6 py-3 rounded-xl text-sm font-semibold shadow-md transition hover:bg-gray-100"
      >
        ✅ Accept Offer
      </Link>
    </section>
  )
}