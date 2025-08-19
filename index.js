const http = require("http");

const server = http.createServer((request, response) => {

    const { method, url } = request;

    if(method == 'GET' && url == '/usuarios'){
        return response.end("Listagem de usuários");
    }

    if(method == 'POST' && url == '/usuarios'){
        response.statusCode = 201;
        return response.end("Usuario criado com sucesso");
    }
    return response.end("Salve");
})

const port = 3000;
const host = "localhost";

server.listen(port, host, () => {
    console.log(`Servidr está rodando na porta ${port}: http://${host}:${port}`);
})

