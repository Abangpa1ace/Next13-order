import { createServer, Model } from "miragejs";
import { payhereCategories, payhereCoupons, payhereProducts } from './data';


export function makeServer({ environment = "dev" } = {}) {
  let server = createServer({
    environment,

    models: {
      category: Model,
      product: Model,
      coupon: Model,
    },

    seeds(server) {
      server.loadFixtures();
    },

    fixtures: {
      categories: payhereCategories,
      products: payhereProducts,
      coupons: payhereCoupons,
    },

    routes() {
      this.namespace = "api"

      this.get("/categories", (schema) => {
        return {
          message: 'SUCCESS',
          data: schema.categories.all("categories").models,
        }
      })

      this.get("/products", (schema, request) => {
        const { category } = request.queryParams;

        return {
          message: 'SUCCESS',
          data: schema.products.all("products").models.filter(product => product.categoryId === category),
        }
      })

      this.get("/coupons", (schema) => {
        return {
          message: 'SUCCESS',
          data: schema.coupons.all("coupons").models,
        }
      })
    },
  })

  return server
}
