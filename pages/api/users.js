import prisma from "../../lib/prisma";

export default async function assetHandler(req, res) {
    const { method } = req;

    switch (method) {
        case "GET":
            try {   
                const posts = await prisma.user.findMany();
                res.status(200).json(posts);
            } catch(e) {
                console.error("Request error", e);
                res.status(500).json({ error: "Error fetching Users" });
            }
            break;
        default:
            res.setHeader("Allow", ["GET"]);
            res.status(405).end(`Method ${method} Not Allowed`);
            break;
    }
}