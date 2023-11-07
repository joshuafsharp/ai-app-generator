import {Elysia} from 'elysia'
import {productManager} from "@project-aegis/product-manager"

export const app = new Elysia().use(productManager)