const App = require('./app')

const run = async () => {
  const app = await App.server()

  app.listen(3000, () =>
    console.log('Starting server... http://localhost:3000')
  )
}

run()
