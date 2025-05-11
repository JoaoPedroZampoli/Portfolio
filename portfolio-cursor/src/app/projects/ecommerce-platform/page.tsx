import Image from 'next/image';
import Link from 'next/link';

export default function EcommercePlatformPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 py-16">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="mb-8">
          <Image
            src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1920&q=80"
            alt="E-commerce Platform"
            width={900}
            height={400}
            className="rounded-xl object-cover w-full h-64 mb-6"
            priority
          />
          <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-emerald-500 text-transparent bg-clip-text">E-commerce Platform</h1>
          <p className="text-gray-300 mb-4">
            Uma plataforma de e-commerce completa com carrinho de compras, pagamentos integrados e painel administrativo.
          </p>
          <div className="flex flex-wrap gap-2 mb-6">
            <span className="px-3 py-1 bg-gray-800 text-gray-200 rounded-full text-sm">React</span>
            <span className="px-3 py-1 bg-gray-800 text-gray-200 rounded-full text-sm">Node.js</span>
            <span className="px-3 py-1 bg-gray-800 text-gray-200 rounded-full text-sm">MongoDB</span>
          </div>
          <div className="flex gap-4 mb-8">
            <Link href="#" className="px-6 py-2 bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-600 transition">Ver Projeto</Link>
            <Link href="#" className="px-6 py-2 border-2 border-blue-500 text-blue-500 rounded-lg font-semibold hover:bg-blue-500 hover:text-white transition">GitHub</Link>
          </div>
          <Link href="/projects" className="text-blue-400 hover:underline">← Voltar para projetos</Link>
        </div>
      </div>
    </main>
  );
} 