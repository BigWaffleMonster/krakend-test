import express, { json } from 'express'

const app = express()
app.use(express.json())

app.get('/hello', (req, res) => {
  res.json({ message: 'Hello from server 1' })
})

app.get('/world', (req, res) => {
  res.json({ message: 'Hello world from server 1' })
})

app.listen(3000, () => {
  console.log('Server startes on 3000')
})
