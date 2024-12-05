import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
}

export function SEO({ 
  title = 'Tu Historia en Números',
  description = 'Descubre los números que han dado forma a tu viaje por la vida. Calcula los días, horas, minutos y segundos desde tu nacimiento.',
  image = 'https://images.unsplash.com/photo-1509475826633-fed577a2c71b?auto=format&fit=crop&w=1200&h=630'
}: SEOProps) {
  const siteUrl = window.location.origin;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={siteUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={siteUrl} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Additional SEO tags */}
      <meta name="robots" content="index, follow" />
      <meta name="language" content="Spanish" />
      <link rel="canonical" href={siteUrl} />

      {/* Schema.org markup */}
      <script type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'WebApplication',
          name: title,
          description: description,
          image: image,
          url: siteUrl,
          applicationCategory: 'UtilityApplication',
          operatingSystem: 'Web',
        })}
      </script>
    </Helmet>
  );
}