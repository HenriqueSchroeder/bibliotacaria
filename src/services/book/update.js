const {prisma} = require('../../lib/db');

function update(id, nome, dataCriacao, isbn, autorId){
  return prisma.livros.update({
    data: {nome,dataCriacao, isbn,autorId},
    where: { id }
  })
}

module.exports = {update}
