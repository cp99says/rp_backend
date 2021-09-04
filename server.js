const express = require("express");
const app = express();
app.use(express.json());
const cors = require("cors");
const mongoose = require("mongoose");
mongoose.connect(
  ""
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: true,
  },
  () => {
    console.log(`connected to mongoDB atlas`);
  }
);
app.use(cors());
const api = require("./routes/routes.js");
app.get("/", (req, res) => {
  res.send("ok");
});
app.use("/api", api);
const PORT = 3000;

app.listen(PORT, () => {
  console.log(`server started at port : ${PORT}`);
});
