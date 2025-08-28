const express = require('express');
const UsuariosControllers = require('./dominios/usuarios/usuarios.controllers');

const app = express();
app.use(express.json()); // Para habilitar o req.body no express - Middleware

// Posso utilizar o app.use para fazer algumas tratativas globais
/* app.use((request, response, next) => {
    console.log(request.url)
    if(request.url !== '/usuarios'){
        return response.status(500).json({ message: "Error"})
    }
    next(); // Se não chamar o next, a requisição fica pendente (sem resposta) - trava aqui
}) */

const usuariosControllers = new UsuariosControllers();

// Listar usuários
/* app.get('/usuarios', (request, response) =>{
    return usuariosControllers.index(request, response);
}); */
// Neste arquivo, neste exemplo, estamos utilizando o arquivo server.js para definir a rota
// e o controller apenas para lidar com a lógica de negócio

app.get('/usuarios', usuariosControllers.index);
app.post('/usuarios', usuariosControllers.create);
app.delete('/usuarios/:id', usuariosControllers.delete);

app.listen(3000, () =>{
    console.log("Servidor rodando na porta 3000");
})