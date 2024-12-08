// const express = require("express")

// const router = express.Router()

// const {getAllProducts , getAlltesting} = require("../controllers/Controlers")
 
// router.route("/").get(getAllProducts);
// router.route("/testing").get(getAlltesting);


// module.exports = router;


const express = require("express")
const router = express.Router()
const {getAllProducts, getAlltesting} = require("../controllers/Controlers")
router.route("/").get(getAllProducts)
router.route("/testing").get(getAlltesting);

module.exports = router
