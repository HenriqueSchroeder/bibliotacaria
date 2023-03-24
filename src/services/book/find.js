const { prisma } = require('../../lib/db')

function find(id) {
  if (id) {
    return prisma.livros.findUnique({
      where: { id },
      select: {
        id: true,
        nome: true,
        dataCriacao: true,
        isbn: true,
        Autor: true
      }
    })
  }
  return prisma.livros.findMany({
    select: { id: true, nome: true, dataCriacao: true, isbn: true, Autor: true }
  })
}

module.exports = { find }
