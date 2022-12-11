import express from 'express'

const app = express()

app.get('/hello', (req, res) => {
  res.json({ message: 'Hello from server 1' })
})

app.listen(3000, () => {
  console.log('Server startes on 3000')
})
