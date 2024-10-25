const express = require('express');
const app = express();

app.use(express.json()); 


app.post('/api/total-value', (req, res) => {
  const products = req.body;

  const totalValue = products.reduce((total, product) => {
    return total + (product.price * product.quantity);
  }, 0);

  res.json({ totalValue });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
