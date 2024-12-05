import React from 'react';
import { SEO } from '../components/SEO';
import { Footer } from '../components/Footer';

export default function TermsOfService() {
  return (
    <>
      <SEO 
        title="Términos de Uso - Tu Historia en Números"
        description="Términos y condiciones de uso de Tu Historia en Números"
      />
      <main className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
        <div className="container mx-auto px-4 py-12 max-w-3xl">
          <h1 className="text-4xl font-display font-bold text-gray-900 mb-8">
            Términos de Uso
          </h1>
          <div className="prose prose-lg">
            <p>
              Al utilizar Tu Historia en Números, aceptas los siguientes términos y condiciones
              que rigen el uso de nuestro servicio.
            </p>
            {/* Add more terms of service content here */}
          </div>
        </div>
        <Footer />
      </main>
    </>
  );
}