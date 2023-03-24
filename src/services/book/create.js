const { prisma } = require('../../lib/db')

function create(data) {
  const {nome, autorId, dataCriacao, isbn} = data;
  const dataCriacaDateCriation = new Date(dataCriacao)
  return prisma.livros.create({
    data: { nome, autorId, dataCriacao: dataCriacaDateCriation, isbn: +isbn }
  })
}

module.exports = { create }
