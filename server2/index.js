import express from 'express'

const app = express()

app.get('/hello', (req, res) => {
  res.json({ message: 'Hello from server 2' })
})

app.listen(3001, () => {
  console.log("Server started on 3001")
})
