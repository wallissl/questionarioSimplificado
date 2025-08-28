
const UsuariosServices = require('./usuarios.services');

const usuarioService = new UsuariosServices();

/* var usuarios = [
    {
        id: 1,
        nome: "João",
    },
    {
        id: 2,
        nome: "Maria",
    }
] 
 */
class UsuariosControllers {

    index(request, response) {
        const listaUsuarios = usuarioService.list();
        return response.json(listaUsuarios);
    }

    create(request, response) {
        const { body } = request;

        const usuario = usuarioService.createUser(body);

        return response.status(201).json({ usuario})
    }

    delete(request, response) {
        const { id } = request.params;

        const apagou = usuarioService.delete(id);

        if(!apagou){
            return response.status(400).json({ message: "Usuário não encontrado"});
        }

        return response.status(204).end();
    }
}

module.exports = UsuariosControllers;