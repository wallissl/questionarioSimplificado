const { v4: uuid } = require('uuid');
var usuarios = [
    {
        id: 1,
        nome: "João",
    },
    {
        id: 2,
        nome: "Maria",
    }
]

// DATA TRANSFER OBJECT = DTO
// Um DTO é um objeto simples que não deve conter nenhuma lógica de negócio e que serve para transferir dados entre processos, por exemplo, entre a camada de controle e a camada de serviço.

class UsuariosServices {
    list(){
        return usuarios;
    }

    createUser(usuarioDTO){

        const usuarioExiste = usuarios.find(usuario => usuario.email === usuarioDTO.email);

        if(usuarioExiste){
            throw new Error("Erro no servidor");
            return null
        }

        const novoUsuario = {
            id: uuid(),
            nome: usuarioDTO.nome,
            sobrenome: usuarioDTO.sobrenome,
            email: usuarioDTO.email,
            createdAt: new Date().toLocaleDateString(),
        }
        
        usuarios.push(novoUsuario);
        return novoUsuario;

    }

    update(){}

    delete(id){
        const usuarioExiste = usuarios.find(usuario => usuario.id === id);

        if(!usuarioExiste){
            return false;
        }

        return true;
    }

}

module.exports = UsuariosServices;