const express = require('express');
const audioStuff = require('../controllers/audioStuff')

var router = express.Router();


router.get('/audioStuff', audioStuff.selectAllAudioStuff);
router.post('/audioStuff', audioStuff.insertAudioStuff);
router.get('/audioStuff/:id', audioStuff.selectAudioStuffById);
router.delete('/audioStuff/:id', audioStuff.deleteAudioStuff);
router.put('/audioStuff/:id', audioStuff.updateAudioStuff);



module.exports = router;
