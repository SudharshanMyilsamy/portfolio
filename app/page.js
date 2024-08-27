import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-8">
      <h1 className="text-4xl font-bold mb-4">Hi, I'm Sudharshan Myilsamy</h1>
      <p className="mb-8 text-center">
        A BCA student with a passion for coding and learning new technologies.
      </p>
      <div className="space-x-4">
        <Link href="/about" className="bg-blue-500 text-white px-4 py-2 rounded">About Me</Link>
        <Link href="/projects" className="bg-green-500 text-white px-4 py-2 rounded">Projects</Link>
        <Link href="/contact" className="bg-yellow-500 text-white px-4 py-2 rounded">Contact</Link>
      </div>
    </div>
  );
}
