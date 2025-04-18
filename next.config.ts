// next.config.js

// /** @type {import('next').NextConfig} */
const nextConfig = {
  

  images: {
    remotePatterns: [
      {
        protocol: 'https', // O protocolo da URL (http ou https)
        hostname: 'via.placeholder.com', // O domínio que você quer permitir
        port: '', // Deixe vazio se não houver porta específica (padrão 80/443)
        pathname: '/**', // Permite qualquer caminho dentro desse domínio (ex: /400x200/...)
      },
      // Você pode adicionar outros domínios aqui se precisar
      // Exemplo:
      // {
      //   protocol: 'https',
      //   hostname: 'images.unsplash.com',
      //   port: '',
      //   pathname: '/**',
      // },
    ],
    // Você também pode usar a propriedade 'domains' (mais antiga, mas ainda funciona):
    // domains: ['via.placeholder.com', 'outro.dominio.com'],
    // 'remotePatterns' é o método mais moderno e recomendado.
  },
};

module.exports = nextConfig; // Se for .js
// export default nextConfig; // Se for .mjs