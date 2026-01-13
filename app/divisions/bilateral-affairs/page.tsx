import Link from 'next/link';

const subDivisions = [
  { name: 'Africa Affairs', path: '/divisions/bilateral-affairs/africa-affairs' },
  { name: 'East Asia and Oceania', path: '#' },
  { name: 'Europe and North America', path: '#' },
  { name: 'Latin America and Caribbean Division', path: '#' },
  { name: 'Middle East', path: '#' },
  { name: 'South Asia and SAARC', path: '#' },
  { name: 'Southeast Asia and Central Asia', path: '#' },
];

export default function DivisionPage() {
  return (
    <main className="flex-grow p-8 container mx-auto">
      <nav className="mb-6 text-sm">
        <Link href="/" className="text-gray-500 hover:underline">Home</Link>
        <span className="mx-2">/</span>
        <Link href="/divisions" className="text-gray-500 hover:underline">Divisions</Link>
        <span className="mx-2">/</span>
        <span className="text-gray-500">Bilateral Affairs</span>
      </nav>
      <div className="flex">
        <aside className="w-1/4 pr-8">
          <h2 className="text-2xl font-bold text-navy mb-4">Bilateral Affairs</h2>
          <ul>
            {subDivisions.map((division) => (
              <li key={division.name} className="mb-2">
                <Link href={division.path} className="text-gray-700 hover:underline">
                  {division.name}
                </Link>
              </li>
            ))}
          </ul>
        </aside>
        <section className="w-3/4">
          <div className="bg-white p-10 rounded shadow-md border border-gray-100">
            <h2 className="text-2xl font-bold text-navy mb-4">About the Division</h2>
            <p className="text-gray-700">Detailed information for this division will be updated soon.</p>
          </div>
        </section>
      </div>
    </main>
  );
}
