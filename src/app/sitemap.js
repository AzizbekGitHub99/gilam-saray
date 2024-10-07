import { getAllProducts } from "@/request"

export default async function sitemap() {
  const products = await getAllProducts()

  const sitemapArr = [
    {
      url: 'https://gilamsaray.uz',
      lastModified: new Date(),
      priority: 1,
    },
    {
      url: 'https://gilamsaray.uz/product',
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: 'https://gilamsaray.uz/contact',
      lastModified: new Date(),
      priority: 0.5,
    },
  ]

  if(products?.data?.length > 0){
    products.data.forEach(carpet => {
      sitemapArr.push({
        url: `https://gilamsaray.uz/product/${carpet.id}`,
        lastModified: new Date(),
        priority: 1,
      })
    })
  }
  
  return sitemapArr
}
