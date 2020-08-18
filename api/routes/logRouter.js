const router = require("express").Router();
const auth = require("../middleware/auth");
const Logfile = require("../models/LogModel");

router.post("/insert", auth, async(req, res) => {
   try{
        let { inteviewName, userName, language, contentSentence} = req.body;

        //validation

       /* if(!inteviewName || !userName || !language || !contentSentence || !date)
            return res.status(400).json({msg: "Not all fields have been entered"});
*/
console.log(res.user);
        const newLogfile = new Logfile({
            inteviewName,
            userName,
            language,
            contentSentence,
            date: new Date(),
           userId: res.user,
            //userId,
        });
        const savedLogfile = await newLogfile.save();
        res.json(savedLogfile); 
    } catch(err) {
        res.status(500).json({ error: err.message });
    }
});

router.get("/all", auth, async (req, res) => {
    const logList = await Logfile.find({userId: req.user});
    res.json(logList)
});

router.delete("/:id", auth, async (req, res) => {
    const logdelete = await Logfile.findOne({userId: req.user, _id: req.params.id});
    if (!logdelete)
        return
         res.status(400)
         .json({
             msg: "No log on this current user"
         });
    const deletedlog = await Logfile.findByIdAndDelete(req.params.id);
    res.json(deletedlog);
})
module.exports = router;