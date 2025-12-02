// This file helps with sitemap generation
// Install with: npm install next-sitemap

export default {
  siteUrl: process.env.SITE_URL || "https://www.salessyllabus.com",
  generateRobotsTxt: true,
  sitemapSize: 7000,
  changefreq: "weekly",
  priority: 0.7,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/admin", "/api"],
      },
    ],
  },
}
