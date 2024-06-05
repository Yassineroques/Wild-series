const express = require("express");

const programRouter = require("./programs/router");


const router = express.Router();

router.use('/programs', programRouter);



const { sayWelcome } = require("../../controllers/SayWelcome")
  
  router.get("/", sayWelcome);

/* ************************************************************************* */
// Import And Use Routers Here
/* ************************************************************************* */

const itemsRouter = require("./items/router");

router.use("/items", itemsRouter);

/* ************************************************************************* */

module.exports = router;

