import express from 'express'
import { supabase } from './supabaseClient.js'

const app = express()
app.use(express.json())

app.get('/users', async (req, res) => {
  const { data, error } = await supabase
    .from('users')
    .select('*')

  if (error) return res.status(400).json(error)

  res.json(data)
})

app.listen(3000, () => {
  console.log('Server running on port 3000')
})