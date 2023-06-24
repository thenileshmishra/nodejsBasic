const mongoose = require("mongoose");

const url = process.env.DATABASE;

const connectionParams = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};
mongoose
  .connect(url, connectionParams)
  .then(() => {
    console.log(`Connection succesfully`);
  })
  .catch((err) => console.log(`no connection ${err}`));
