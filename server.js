// server.js

// Add your code here
import app from "./app.js";
const port = process.env.port || 3000;


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});