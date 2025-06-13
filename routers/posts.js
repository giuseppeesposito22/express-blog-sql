//configurazione del router
const express = require("express");
const router = express.Router();

const postController = require("../controllers/postController");

//CRUD

// INDEX per visualizzare tutti gli elementi
router.get("/", postController.index);

//SHOW per visualizzare un elemento specifico tramite id
router.get("/:id", postController.show);

//STORE per creare un nuovo elemento
router.post("/", postController.store);

//UPDATE per modificare un delemento specifico tramite id
router.put("/:id", postController.update);

//DESTROY per eliminare un elemento specifico tramite id
router.delete("/:id", postController.destroy);

module.exports = router;
