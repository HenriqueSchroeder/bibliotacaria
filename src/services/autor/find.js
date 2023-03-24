const {prisma} = require('../../lib/db');

function find(id){
  if (id) {
    return prisma.autor.findUnique({
      where: { id },
      include: {
        livros: true
      }
    })
  }
  return prisma.autor.findMany({
    include: {
      livros: true
    }
  })
}

module.exports = {find}
