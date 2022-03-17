const express =require('express');
const router = express.Router();
const Controller=require('../controllers/file');

router.post('/upload',Controller.upload);
router.get('/getallfiles',Controller.getallfiles);
router.get('/download/:id',Controller.download);
router.put('/update/:id',Controller.update);
router.delete('/delete/:id',Controller.delete);

module.exports = router;