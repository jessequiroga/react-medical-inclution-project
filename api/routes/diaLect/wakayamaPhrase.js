const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();
const WakayamaPhrases = require('../../models/diaLect/wakayamaPhrases');

router.get('/', async (req, res) => {
    try {
        const wakayamaPhrases = await WakayamaPhrases.find();
        res.json(wakayamaPhrases);
        //console.log(wakayamaPhrases)
    } catch (err) {
        res.json({ message: err });
    }
});

router.post('/', async (req, res) => {
    try {
        let wakayamaPhrasesData = req.body
        let wakayamaPhrases = new wakayamaPhrases(wakayamaPhrasesData)
        //res.send(dialectSentences);
        //sconsole.log(dialectSentencesData);
        wakayamaPhrases.save((error, registeredInfo) => {
            if (error) {
                console.log(error)
            } else {
                res.status(200).send(registeredInfo);
            }
        })
    } catch (error) {

    }
})

router.post('/findpage', async (req, res) => {
    try {
        //console.log(req.body);
        const wakayamaPhrases = await WakayamaPhrases.find({ letter: req.body.letter });
        res.json(wakayamaPhrases);
    } catch (error) {
       res.json({ message: err });
    }
})

//router.post('/find', async (req, res) => {
//    try {
//        //console.log(req.body);
//        const wakayamaPhrases = await WakayamaPhrases.find({ letter: req.body.letter });
//        res.json(wakayamaPhrases);
//    } catch (error) {
//        res.json({ message: err });
//    }
//})

//router.get('/find', async (req, res) => {
//    try {
//        console.log(req.query);
//        var page = Number(req.query.page) || 1
//        var limit = 4

//        var count = WakayamaPhrases.count();
//        var pages = Math.ceil(count / limit)
//        page = Math.min(page, pages)
//        page = Math.max(page, 1)
//        var skip = (page - 1) * limit;
//        const wakayamaPhrases = await WakayamaPhrases.find({ letter: req.query.letter }).limit(limit).skip(skip);
//        res.json(wakayamaPhrases);
//    } catch (error) {
//        res.json({ message: err });
//    }
//})


router.post('/find', async (req, res) => {
    try {
        console.log(req.body);
        /**
    *     分页
    *     limit(Number):限制获取的数据条数
    *     skip(Number):忽略数据的条数
    *
    *     每页显示两条数据,假设每页限制显示2条数据；
    *     第1页：1-2 skip（0）忽略0条；
    *     第2页：3-4 skip（2）忽略第一页的2条数据；
    *     第3页：3-4 skip（4）忽略前两页的4条数据；
    *     忽略数=（当前页-1）*limit 实现分页；
    */
        var page = Number(req.body.page) || 1 //当前页,前端用户通过get传递过来的页数，或没有传递时默认当前页数为1；
        var limit = 4//每页显示的条数；

        //获取总条数；
       // var count = WakayamaPhrases.count();
        //计算总页数；
        //var pages = Math.ceil(count / limit)
        //当前页不能大于总页数；
        //page = Math.min(page, pages)
        //当前页不能小于1
        page = Math.max(page, 1)
        var skip = (page - 1) * limit;//忽略数
        //从数据库中读取所有的用户数据
        //    wakayamaPhrases.find({ letter: req.body.letter}).limit(limit).skip(skip).then(function (users) {
        //    // console.log(users)
        //        res.render('admin/user_index', {
        //        userInfo: req.userInfo,
        //        users: users,
        //        page: page,
        //        count: count,
        //        pages: pages,
        //        limit: limit,
        //    })
        //})
        const wakayamaPhrases = await WakayamaPhrases.find({ letter: req.body.letter }).limit(limit).skip(skip);
        res.json(wakayamaPhrases);
    } catch (error) {
        res.json({ message: err });
    }
})

router.post('/findpage2', async (req, res) => {
    try {
        //console.log(req.body);
        var find = req.body.find;
        var _filter = {
            $or: [  // 多字段同时匹配
                { phraseOri: { $regex: find } },
                { phraseAft: { $regex: find } }
            ]
        }
        const wakayamaPhrases = await WakayamaPhrases.find(_filter);
        res.json(wakayamaPhrases);
    } catch (error) {
        res.json({ message: err });
    }
})

router.post('/findphrase', async (req, res) => {
    try {
        //console.log(req.body);
        var find = req.body.find // 获取查询的字段

        var _filter = {
            $or: [  // 多字段同时匹配
                { phraseOri: { $regex: find } },
                { phraseAft: { $regex: find } }
            ]
        }
        var page = Number(req.body.page) || 1;
        var limit = 4;
        page = Math.max(page, 1);
        var skip = (page - 1) * limit;
        const wakayamaPhrases = await WakayamaPhrases.find(_filter).limit(limit).skip(skip);
        res.json(wakayamaPhrases);
    } catch (err) {
        res.json({ message: err });
    }
})

module.exports = router;