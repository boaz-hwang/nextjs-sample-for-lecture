// app/products/[id]/page.js
module.exports = async (req, res) => {
  const { id } = req.params;
  return `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Product ${id}</title>
      </head>
      <body>
        <h1>Product ${id}</h1>
        <p>This is the page for product ${id}.</p>
        <a href="/">Back to Home</a>
      </body>
      </html>
    `;
};
