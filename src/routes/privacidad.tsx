import React from 'react';
import { SEO } from '../components/SEO';
import { Footer } from '../components/Footer';

export default function PrivacyPolicy() {
  return (
    <>
      <SEO 
        title="Política de Privacidad - Tu Historia en Números"
        description="Política de privacidad y protección de datos de Tu Historia en Números"
      />
      <main className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
        <div className="container mx-auto px-4 py-12 max-w-3xl">
          <h1 className="text-4xl font-display font-bold text-gray-900 mb-8">
            Política de Privacidad
          </h1>
          <div className="prose prose-lg">
            <p>
              En Tu Historia en Números, nos tomamos muy en serio la privacidad de nuestros usuarios.
              Esta política describe cómo recopilamos, usamos y protegemos tu información.
            </p>
            {/* Add more privacy policy content here */}
          </div>
        </div>
        <Footer />
      </main>
    </>
  );
}