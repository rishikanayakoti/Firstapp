require('dotenv').config()

const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => {
  res.send('<h1>Hey World!</h1>' )
})

app.get('/inspire',(req,res)=>{
  res.send('<h1>In the kaleidoscope of life, each moment is a brushstroke on the canvas of your journey. Embrace the vibrant hues of possibility, let the setbacks be mere shadows in the brilliance of your resilience. Every challenge is a chance to discover the strength within, and every step forward is a dance with the rhythm of progress. Navigate through the symphony of opportunities with a heart full of curiosity and optimism. Your potential is an endless horizon, and with each sunrise, you have the chance to paint a masterpiece of positivity, kindness, and unwavering determination. So, let your spirit soar, for in this boundless tapestry of existence, your story is an enchanting melody that resonates with the universe.</h1>')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})