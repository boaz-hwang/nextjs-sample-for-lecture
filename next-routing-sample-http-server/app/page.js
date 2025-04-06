// app/page.js
module.exports = async (req, res) => {
  return `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Home Page</title>
      </head>
      <body>
        <h1>Welcome to the Home Page</h1>
        <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/dashboard">Dashboard</a></li>
            <li><a href="/products/1">Product 1</a></li>
          </ul>
        </nav>
      </body>
      </html>
    `;
};
