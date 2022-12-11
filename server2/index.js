import express, { json } from 'express'

const app = express()
app.use(express.json())

app.get('/hello', (req, res) => {
  res.json({ message: 'Hello from server 2' })
})

app.get('/world', (req, res) => {
  res.json({ message: 'Hello world from server 2' })
})

app.listen(3001, () => {
  console.log('Server started on 3001')
})
