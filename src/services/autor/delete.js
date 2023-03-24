const { prisma } = require('../../lib/db')

function deleteFromId(id) {
    return prisma.autor.delete({
      where: { id },
    })
}

module.exports = { deleteFromId }
