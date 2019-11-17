module.exports = {
  //assetPrefix: process.env.NODE_ENV === 'production' ? '/molotov' : '',
  exportPathMap: function() {
    return {
      '/': { page: '/' },
      '/auth': { page: '/auth' },
      '/auth/signup': { page: '/auth/signup' },
      '/auth/reset': { page: '/auth/reset' },
      '/auth/confirm': { page: '/auth/confirm' }
    }
  }
}
