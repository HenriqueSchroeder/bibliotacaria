const {prisma} = require('../../lib/db');

function create(data){
  const {nome, dataNascimento} = data;
  const dataNascimentoDateTime = new Date(dataNascimento)
  return prisma.autor.create({
    data: {nome, dataNascimento: dataNascimentoDateTime},
  })
}

module.exports = {create}
