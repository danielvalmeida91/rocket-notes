const AppError = require('../utils/AppError')

class UsersController {
  /**
   * index - GET para listar vários registros
   * show - GET para exibir um registo específico
   * create - POST para criar um registro
   * update - PUT para atualizar um registro
   * delete - DELETE para remover um registro
   *
   * Se houver a necessidade de ter mais de 5 métodos é necessário avaliar sua separação em um novo controller.
   */

  create(request, response) {
    const { name, email, password } = request.body

    if (!name) {
      throw new AppError('Nome é obrigatório!')
    }

    response.status(201).json({ name, email, password })
  }
}

module.exports = UsersController
