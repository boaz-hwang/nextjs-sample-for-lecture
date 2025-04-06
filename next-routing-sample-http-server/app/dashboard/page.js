// app/dashboard/page.js
module.exports = async (req, res) => {
  return `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Dashboard</title>
      </head>
      <body>
        <h1>Dashboard</h1>
        <p>Welcome to your dashboard!</p>
        <a href="/">Back to Home</a>
      </body>
      </html>
    `;
};
