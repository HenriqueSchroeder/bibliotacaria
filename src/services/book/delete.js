const { prisma } = require('../../lib/db')

function deleteFromId(id) {
    return prisma.livros.delete({
      where: { id },
    })
}

module.exports = { deleteFromId }
