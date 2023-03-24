const {prisma} = require('../../lib/db');

function update(id, nome, dataNascimento){
  return prisma.autor.update({
    data: {nome, dataNascimento},
    where: { id }
  })
}

module.exports = {update}
