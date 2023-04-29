/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'links.papareact.com',
      'jsonkeeper.com',
      'a0.muscache.com'
    ],
  },
  env: {
    mapbox_key: 'pk.eyJ1IjoieWVtYXJpbSIsImEiOiJjbGd6ZnNiODEwNHR3M3BvZTJ6cWZwaWZkIn0.D825qWA5nDDQswIHvdEcLg'
  }
}

module.exports = nextConfig
