// Cloudflare Edge Pages Functions Middleware for Bot SEO & Dynamic HTMLRewriter
// High-Performance Zero-Overhead Pipelining for Googlebot, Bingbot, WhatsApp, Facebook, Twitter, etc.

const BOT_USER_AGENTS = [
  'googlebot',
  'bingbot',
  'yandexbot',
  'duckduckbot',
  'slurp',
  'baiduspider',
  'facebookexternalhit',
  'twitterbot',
  'whatsapp',
  'linkedinbot',
  'slackbot',
  'telegrambot',
  'discordbot'
];

function isBot(userAgent) {
  if (!userAgent) return false;
  const lowerUA = userAgent.toLowerCase();
  return BOT_USER_AGENTS.some(botUA => lowerUA.includes(botUA));
}

export async function onRequest(context) {
  const { request, next } = context;
  const userAgent = request.headers.get('user-agent') || '';
  const url = new URL(request.url);

  // Pass-through for static assets
  if (
    url.pathname.startsWith('/assets/') ||
    url.pathname.startsWith('/images/') ||
    url.pathname.endsWith('.png') ||
    url.pathname.endsWith('.jpg') ||
    url.pathname.endsWith('.svg') ||
    url.pathname.endsWith('.xml') ||
    url.pathname.endsWith('.txt')
  ) {
    return next();
  }

  // Fetch standard response from origin / static bucket
  const response = await next();

  // If request is from a Search Engine / Social Bot, apply Edge HTMLRewriter Injection
  if (isBot(userAgent)) {
    const jsonLdData = [
      {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Al Azhar Memorial Garden Karawang",
        "url": "https://www.makamalazhar.web.id",
        "logo": "https://www.makamalazhar.web.id/images/hero.jpg",
        "description": "Taman Pemakaman Khusus Muslim Syar'i No. 1 di Indonesia dikelola secara profesional oleh YPI Al Azhar & PT Nuansa Usaha Mandiri sejak 2011 bersertifikat ISO 9001.",
        "email": "corina.alazhar@gmail.com",
        "telephone": "+6281310091299",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Jl. Raya Peruri KM 53-54, Karawang Timur",
          "addressLocality": "Karawang",
          "addressRegion": "Jawa Barat",
          "postalCode": "41371",
          "addressCountry": "ID"
        }
      },
      {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Al Azhar Memorial Garden Karawang — Official Sales Office",
        "image": "https://www.makamalazhar.web.id/images/hero.jpg",
        "@id": "https://www.makamalazhar.web.id/#localbusiness",
        "url": "https://www.makamalazhar.web.id",
        "telephone": "+6281310091299",
        "priceRange": "Rp 54.891.540 - Rp 3.790.462.500",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Jl. Raya Peruri KM 53-54, Karawang Timur",
          "addressLocality": "Karawang",
          "addressRegion": "Jawa Barat",
          "postalCode": "41371",
          "addressCountry": "ID"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": -6.3533,
          "longitude": 107.3481
        }
      },
      {
        "@context": "https://schema.org",
        "@type": "Product",
        "name": "Kavling Makam Muslim Al Azhar Memorial Garden Karawang",
        "image": "https://www.makamalazhar.web.id/images/hero.jpg",
        "description": "Lahan pemakaman khusus Muslim 100% Syar'i bersertifikat Kiblat Kemenag, bebas biaya perawatan rumput selamanya, dan garansi layanan kedukaan 24 Jam.",
        "brand": {
          "@type": "Brand",
          "name": "Al Azhar Memorial Garden"
        },
        "offers": {
          "@type": "AggregateOffer",
          "priceCurrency": "IDR",
          "lowPrice": "54891540",
          "highPrice": "3790462500",
          "offerCount": "22",
          "priceValidUntil": "2026-12-31"
        }
      },
      {
        "@context": "https://schema.org",
        "@type": "Person",
        "@id": "https://www.makamalazhar.web.id/#author-corina",
        "name": "Ibu Corina",
        "jobTitle": "Senior Memorial Partner & Konsultan Kedukaan Syariah",
        "identifier": "AZHR-10306",
        "telephone": "+6281310091299",
        "email": "corina.alazhar@gmail.com",
        "url": "https://www.makamalazhar.web.id",
        "knowsAbout": [
          "Pemakaman Syariah Islam",
          "Sertifikasi Arah Kiblat Kemenag",
          "Pre-Need Planning Lahan Makam Muslim",
          "Relokasi Makam TPU Umum IPTM",
          "Pengurusan UPJ Kedukaan 24 Jam"
        ],
        "worksFor": {
          "@type": "Organization",
          "name": "Al Azhar Memorial Garden Karawang",
          "parentOrganization": {
            "@type": "Organization",
            "name": "Yayasan Pesantren Islam (YPI) Al Azhar"
          }
        },
        "hasCredential": [
          {
            "@type": "EducationalOccupationalCredential",
            "credentialCategory": "Official Authorized Memorial Partner",
            "recognizedBy": {
              "@type": "Organization",
              "name": "PT Nuansa Usaha Mandiri"
            }
          }
        ]
      },
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Apakah Al Azhar Memorial Garden 100% Khusus Muslim?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Ya, Al Azhar Memorial Garden seluas puluhan hektar ini 100% khusus hanya untuk umat Muslim tanpa bercampur dengan non-Muslim, dengan kedalaman liang 1.5m dan posisi jenazah presisi menghadap Kiblat."
            }
          },
          {
            "@type": "Question",
            "name": "Apakah ada biaya perawatan rumput atau iuran bulanan?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Tidak ada. Al Azhar Memorial Garden menerapkan sistem sekali bayar (One-Time Payment). Bebas biaya perawatan rumput, tanaman, dan pemeliharaan selamanya."
            }
          },
          {
            "@type": "Question",
            "name": "Bagaimana kepastian arah kiblat di lokasi?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Arah kiblat seluruh lahan makam telah diukur dan disahkan secara resmi melalui Sertifikat Kementerian Agama (Kemenag) Kabupaten Karawang."
            }
          }
        ]
      }
    ];

    const jsonLdHtml = `<script type="application/ld+json">${JSON.stringify(jsonLdData)}</script>`;

    return new HTMLRewriter()
      .on('head', {
        element(el) {
          el.append(`<meta name="cf-edge-seo" content="bot-optimized-htmlrewriter" />`, { html: true });
          el.append(jsonLdHtml, { html: true });
        }
      })
      .transform(response);
  }

  return response;
}
