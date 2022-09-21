const express = require('express')
const PORT = process.env.PORT || 3001;
const app = express();
app.use(express.urlencoded({ extended:false}));
app.use(express.json)

app.get('/', (req, res) => {
    res.json({
        message: 'Hello PenisBoy!'
    })
})


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
});