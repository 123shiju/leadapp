const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const connectDB = require("./Config/db");
const leadRoutes = require("./Routes/leadRoutes");

const app = express();

connectDB();

app.use(cors());
app.use(bodyParser.json());

app.use("/api", leadRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
