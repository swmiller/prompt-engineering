const express = require('express');
const helloRoute = require('./routes/helloRoute');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/hello', helloRoute);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});