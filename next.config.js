module.exports = {
  exportTrailingSlash: true,
  exportPathMap: async function() {
    const paths = {
      '/': { page: '/' },
      '/dashboard': { page: '/dashboard' },
      '/auth': { page: '/auth' },
      '/auth/signup': { page: '/auth/signup' },
      '/auth/confirm': { page: '/auth/confirm' },
      '/auth/reset': { page: '/auth/reset' }
    }

    return paths
  }
}
