const express = require("express");

const router = express.Router();

const sayWelcome = (req, res) => {
  res.send("Welcome to Wild Series !");
};

router.get("/", sayWelcome);

/* ************************************************************************* */
// Import And Use Routers Here
/* ************************************************************************* */

const categoriesRouter = require("./categories");

router.use("/categories", categoriesRouter);

const programsRouter = require("./programs/router");

router.use("/programs", programsRouter);

const itemsRouter = require("./items/router");

router.use("/items", itemsRouter);

/* ************************************************************************* */

module.exports = router;

