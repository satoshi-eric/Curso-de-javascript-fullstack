export default function handler(req, res) {

    if (req.method === "GET") {
        handleGet(req, res);
    } else {
        res.status(405).send();
    }

}

function handleGet(dreq, res) {
    res.status(200).json({
      id: 3,
      nome: "Maria",
        email: "maria@xcfmail.com"
    })
}