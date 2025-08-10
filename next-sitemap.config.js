/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://explorenationalparks.store',
  generateRobotsTxt: false,
  sitemapSize: 200,
  changefreq: 'daily',
  priority: 0.8,
  robotsTxtOptions: {
    additionalSitemaps: [
      'https://explorenationalparks.store/sitemap.xml',
    ],
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
  },
};
