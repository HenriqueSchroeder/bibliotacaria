const autorCreate = require('./services/autor/create')
const autorFind = require('./services/autor/find')
const livroCreate = require('./services/book/create')
const livroFind = require('./services/book/find')
const deleteBook = require('./services/book/delete')
const deleteAuthor = require('./services/autor/delete')
const updateAuthor = require('./services/autor/update')
const updateBook = require('./services/book/update')


const express = require('express')

const server = () => {
  const app = express()
  app.use(express.json()) // for parsing application/json

  app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

  app.post('/author', async (req, res) => {
    console.log(req.body)
    const data = req.body
    const create = await autorCreate.create(data)
    res.status(200)
    res.json(create)
    return res.end()
  })

  app.get('/author', async (req, res) => {
    const found = await autorFind.find()
    res.status(200)
    res.json(found)
  })

  app.get('/author/:id', async (req, res) => {
    console.log(req.params)
    const {id} = req.params
    const found = await autorFind.find(+id)
    res.status(200)
    res.json(found)
  })

  app.put('/author/:id', async (req, res) => {
    const {id} = req.params
    const {nome, dataNascimento} = req.body
    const update = await updateAuthor.update(+id, nome, new Date(dataNascimento))
    res.status(200)
    res.json(update)
  })

  app.delete('/author/:id', async (req, res) => {
    console.log(req.params)
    const {id} = req.params
    await deleteAuthor.deleteFromId(+id)
    res.status(200)
    res.send("Autor deletado com sucesso")
  })
  

  app.post('/livro', async (req, res) => {
    console.log(req.body)
    const data = req.body
    const create = await livroCreate.create(data)
    res.status(200)
    res.json(create)
  })

  app.get('/livro', async (req, res) => {
    const found = await livroFind.find()
    res.status(200)
    res.json(found)
  })

  app.get('/livro/:id', async (req, res) => {
    console.log(req.params)
    const {id} = req.params
    const found = await livroFind.find(+id)
    res.status(200)
    res.json(found)
  })

  app.delete('/livro/:id', async (req, res) => {
    console.log(req.params)
    const {id} = req.params
    await deleteBook.deleteFromId(+id)
    res.status(200)
    res.send("Livro excluido com sucesso")
  })

  app.put('/livro/:id', async (req, res) => {
    const {id} = req.params
    const {nome,dataCriacao, isbn, autorId } = req.body
    const save = await updateBook.update(+id, nome, new Date(dataCriacao), isbn, autorId)
    res.status(200)
    res.json(save)
  })



  return app
}

module.exports = { server }
