import {Elysia} from 'elysia'
import {productManager} from "@project-aegis/product-manager"

export const app = new Elysia()
.post('/project/init', async (req, res) => {
    try {
        const appId = await createApp();
        res.send({ projectId });
    } catch (error) {
        res.status(500).send({ error: 'Internal Server Error' });
    }
})
.use(productManager)

app.listen(3000)
