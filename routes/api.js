__path = process.cwd()
let express = require('express');
let db = require(__path + '/database/db');
try {
let zahirr = db.get("zahirr");
} catch (e) {
	console.log('')  
}
let creator = "xfar"
let axios = require('axios')
let fs = require('fs')
let fetch = require('node-fetch');
let router  = express.Router();
let hxz = require('hxz-api')
let nhentai = require('nhentai-js');
let NanaAPI = require('nana-api')
let ch = require('canvas-hikki')
let kc = require('knights-canvas')
let nana = new NanaAPI()
let { tiktok, pinterest, mediafireDl, doujindesu, pinterestdl } = require('../lib/index') 
let options = require(__path + '/lib/options.js');
let { color, bgcolor } = require(__path + '/lib/color.js');
let { getBuffer, fetchJson } = require(__path + '/lib/fetcher.js');

async function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

loghandler = {
    noturl: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'Masukan URL'
    },
    notquery: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'Masukkan query'
    },
    error: {
        status: 404,
        creator: `${creator}`,
        message: 'An internal error occurred. Please report via WhatsApp wa.me/62895619083555'
    }
}
router.get('/welcome', async (req, res) => {
            pp = req.query.pp,
            nama = req.query.nama,
            bg = req.query.bg,    
	    namagc = req.query.namagc,
            member = req.query.member
    if (!pp) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter pp"})
    if (!nama) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter nama"})
    if (!bg) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter bg"})
    if (!namagc) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter namagc"})
    if (!member) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter member"})
    
    
let Welcome = await new ch.Welcome2()
.setAvatar(pp)
.setUsername(nama)
.setBg(bg)
.setGroupname(namagc)
.setMember(member)
.toAttachment()
    
 data = Welcome.toBuffer();
  await fs.writeFileSync(__path +'/database/welcome.png', data)
  res.sendFile(__path+'/database/welcome.png')
  .catch(e => {
         	res.json(loghandler.error)
})
})
router.get('/goodbye', async (req, res) => {
            pp = req.query.pp,
            nama = req.query.nama,
            bg = req.query.bg,    
            member = req.query.member
    if (!pp) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter pp"})
    if (!nama) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter nama"})
    if (!bg) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter bg"})
    if (!member) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter member"})
    
let Goodbye = await new ch.Goodbye2()
.setAvatar(pp)
.setUsername(nama)
.setBg(bg)
.setMember(member)
.toAttachment()
    
 data = Goodbye.toBuffer();
  await fs.writeFileSync(__path +'/database/goodbye.png', data)
  res.sendFile(__path+'/database/goodbye.png')
  .catch(e => {
         	res.json(loghandler.error)
})
})
router.get('/promote', async (req, res) => {
            pp = req.query.pp,
            nama = req.query.nama,
	    namagc = req.query.namagc,
	    ppgc = req.query.ppgc,
            bg = req.query.bg,
            member = req.query.member
    if (!pp) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter pp"})
    if (!nama) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter nama"})
    if (!namagc) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter namagc"})
    if (!ppgc) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter ppgc"})
    if (!bg) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter bg"})
    if (!member) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter member"})
const Promote = await new kc.Promote()
    .setAvatar(pp)
    .setUsername(nama)
    .setGuildName(namagc)
    .setGuildIcon(ppgc)
    .setBackground(bg)
    .setMemberCount(member)
    .toAttachment();
    
 data = Promote.toBuffer();
  await fs.writeFileSync(__path +'/database/promote.png', data)
  res.sendFile(__path+'/database/promote.png')
  .catch(e => {
         	res.json(loghandler.error)
})
})
router.get('/demote', async (req, res) => {
            pp = req.query.pp,
            nama = req.query.nama,
	    namagc = req.query.namagc,
	    ppgc = req.query.ppgc,
            bg = req.query.bg,
            member = req.query.member
    if (!pp) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter pp"})
    if (!nama) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter nama"})
    if (!namagc) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter namagc"})
    if (!ppgc) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter ppgc"})
    if (!bg) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter bg"})
    if (!member) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter member"})
const Demote = await new kc.Demote()
    .setAvatar(pp)
    .setUsername(nama)
    .setGuildName(namagc)
    .setGuildIcon(ppgc)
    .setBackground(bg)
    .setMemberCount(member)
    .toAttachment();
    
 data = Demote.toBuffer();
  await fs.writeFileSync(__path +'/database/demote.png', data)
  res.sendFile(__path+'/database/demote.png')
  .catch(e => {
         	res.json(loghandler.error)
})
})
router.get('/level', async (req, res) => {
            pp = req.query.pp,
            nama = req.query.nama,
            bg = req.query.bg,
            needxp = req.query.needxp,
            currxp = req.query.currxp,
            level = req.query.level,
            logorank = req.query.logorank   
    if (!pp) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter pp"})
    if (!nama) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter nama"})
    if (!bg) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter bg"})
    if (!needxp) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter needxp"})
    if (!currxp) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter currxp"})
    if (!level) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter level"})
    if (!logorank) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter logorank"})
    
var level = await new ch.Rank()
    .setAvatar(`${pp}`) 
    .setUsername(`${nama}`) 
    .setBg(`${bg}`)
    .setNeedxp(`${needxp}`) 
    .setCurrxp(`${currxp}`) 
    .setLevel(`${level}`) 
    .setRank(`${logorank}`) 
    .toAttachment();
  data = level.toBuffer();
  await fs.writeFileSync(__path +'/database/rank.png', data)
  res.sendFile(__path +'/database/rank.png')
  .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/levelup', async (req, res, next) => {
            pp = req.query.pp
    if (!pp) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter pp"})       
var levelup = await new ch.Up()
    .setAvatar(`${pp}`)
    .toAttachment();
  data = levelup.toBuffer();
  await fs.writeFileSync(__path +'/database/sup.png', data)
  res.sendFile(__path +'/database/sup.png')
  .catch(e => {
         	res.json(loghandler.error)
})
})
router.get('/gura', async (req, res) => {
            teks = req.query.teks
    if (!teks) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter teks"})
var gura = await new ch.Gura()
    .setName(teks) 
    .toAttachment();
  data = gura.toBuffer();
  await fs.writeFileSync(__path +'/database/Gura.png', data)
  res.sendFile(__path +'/database/Gura.png')
  .catch(e => {
         	res.json(loghandler.error)
})
})
router.get('/spongebob', async (req, res) => {
        image = req.query.image
    if (!image) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter image"})
    
var burn = await new ch.Burn()
    .setAvatar(image)
    .toAttachment();
  
  data = burn.toBuffer();
  await fs.writeFileSync(__path +'/database/spongebob.png', data)
  res.sendFile(__path +'/database/spongebob.png')
  .catch(e => {
         	res.json(loghandler.error)
})
})

router.get('/patrick', async (req, res) => {
           image = req.query.image
    if (!image) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter image"})
    
var patrick = await new ch.Patrick()
    .setAvatar(image)
    .toAttachment();
  
  data = patrick.toBuffer();
  await fs.writeFileSync(__path +'/database/patrick.png', data)
  res.sendFile(__path +'/database/patrick.png')
  .catch(e => {
         	res.json(loghandler.error)
})
})
     // Downloader
    router.get('/tiktok', async(req, res) => {
	      let url = req.query.url
	      if (!url) return res.json(loghandler.noturl)
	      let result = await tiktok(url)
	      try {
		  res.json({
			  status: 200,
			  creator: `${creator}`,
              result
          })
	   } catch(err) {
		    console.log(err)
		    res.json(loghandler.error)
	     }
    })
    router.get('/igdl', async(req, res) => {
	     let url = req.query.url
	     if (!url) return res.json(loghandler.noturl)
	     let result = await hxz.igdl(url)
	     try {
	     res.json({
			  status: 200,
			  creator: `${creator}`,
              result
          })
	    } catch(err) {
		      console.log(err)
		      res.json(loghandler.error)
	       }
      })
     router.get('/mediafire', async(req, res) => {
	     let url = req.query.url
	     if (!url) return res.json(loghandler.noturl)
	     let result = await mediafireDl(url)
	     try {
	     res.json({
			  status: 200,
			  creator: `${creator}`,
              result
          })
	    } catch(err) {
		      console.log(err)
		      res.json(loghandler.error)
	       }
      })
     router.get('/youtube', async(req, res) => {
	     let url = req.query.url
	     if (!url) return res.json(loghandler.noturl)
	     let result = await hxz.youtube(url)
	     try {
	     res.json({
			  status: 200,
			  creator: `${creator}`,
              result
          })
	    } catch(err) {
		      console.log(err)
		      res.json(loghandler.error)
	       }
     })
     router.get('/twitter', async(req, res) => {
	     let url = req.query.url
	     if (!url) return res.json(loghandler.noturl)
	     let result = await hxz.twitter(url)
	     try {
	     res.json({
			  status: 200,
			  creator: `${creator}`,
              result
          })
	    } catch(err) {
		      console.log(err)
		      res.json(loghandler.error)
	       }
     })
     router.get('/pindl', async(req, res) => {
	     let url = req.query.url
	     if (!url) return res.json(loghandler.noturl)
	     let result = await pinterestdl(url)
	     try {
	     res.json({
			  status: 200,
			  creator: `${creator}`,
              result
          })
	    } catch(err) {
		      console.log(err)
		      res.json(loghandler.error)
	       }
      })
      
      // Searching
      router.get('/pinterest', async(req, res) => {
	      let query = req.query.query
	      if (!query) return res.json(loghandler.notquery)
	      let result = await pinterest(query)
	      res.json({ 
		       status: 200,
		       creator: `${creator}`,
               result 
           })
      })
      router.get('/google', async (req, res, next) => {
	      let query = req.query.query
	      if (!query) return res.json(loghandler.notquery)
	      let google = require('google-it')
	      let result = google({'query': query}).then(result => {
	      res.json({ 
		       status: 200,
		       creator: `${creator}`,
               result 
           })
        .catch(e => {
         	 res.json(loghandler.error)
           })
       })
   })
         // Animanga
         router.get('/nhentai', async (req, res, next) => {
             code = req.query.code
             if(!code) return res.json({ message: 'masukan parameter Code' })
             result = await nhentai.getDoujin(code)
             res.json({
                  status: 200,
                  creator: `${creator}`,
                  result
             })
            .catch(e => {
            	res.json(loghandler.error)
           })
      })
      router.get('/nHentaiSearch', async (req, res) => {
            let query = req.query.query
            let hasil = await nana.search(query)
            let result = hasil.results
		    res.json({
                 status: 200,
                 creator: `${creator}`,
                 result
            })
       })
       router.get('/doujindesuSearch', async (req, res) => {
             let query = req.query.query
             let result = await doujindesu(query)
             res.json({
                  status: 200,
                  creator: `${creator}`,
                  result
              })
         })
         
         // Random Image
          router.get('/randomimage/waifu', async (req, res, next) => {
              fetch(encodeURI(`https://waifu.pics/api/sfw/waifu`))
             .then(response => response.json())
             .then(async data => {
                  let result = data;
                  let buffer = await fetch(data.url)
                  res.type('png')
                  res.send(await buffer.buffer())
              })
           .catch(e => {
            	res.json(loghandler.error)
            })
        })
        router.get('/randomimage/neko', async (req, res, next) => {
            fetch(encodeURI(`https://waifu.pics/api/sfw/neko`))
           .then(response => response.json())
           .then(async data => {
                let result = data;
                let buffer = await fetch(data.url)
                res.type('png')
                res.send(await buffer.buffer())
            })
           .catch(e => {
           	res.json(loghandler.error)
            })
        })
        router.get('/randomimage/husbu', async (req, res, next) => {
	        let waif = (await axios.get(`https://raw.githubusercontent.com/Arya-was/endak-tau/main/husbu.json`)).data
	        let result = waif[Math.floor(Math.random() * (waif.length))]
	        let data = await getBuffer(result)
            await fs.writeFileSync(__path +'/database/waifu.png', data)
            await res.sendFile(__path +'/database/waifu.png')
            await sleep(3000)
            await fs.unlinkSync(__path + '/database/waifu.png')
        })
        router.get('/randomimage/loli', async (req, res, next) => {
	        let waif = (await axios.get(`https://raw.githubusercontent.com/Arya-was/endak-tau/main/loli.json`)).data
	        let result = waif[Math.floor(Math.random() * (waif.length))]
	        let data = await getBuffer(result)
            await fs.writeFileSync(__path +'/database/waifu.png', data)
            await res.sendFile(__path +'/database/waifu.png')
            await sleep(3000)
            await fs.unlinkSync(__path + '/database/waifu.png')
        })
        router.get('/randomimage/milf', async (req, res, next) => {
	        let waif = (await axios.get(`https://raw.githubusercontent.com/Arya-was/endak-tau/main/milf.json`)).data
	        let result = waif[Math.floor(Math.random() * (waif.length))]
	        let data = await getBuffer(result)
            await fs.writeFileSync(__path +'/database/waifu.png', data)
            await res.sendFile(__path +'/database/waifu.png')
            await sleep(3000)
            await fs.unlinkSync(__path + '/database/waifu.png')
        })
        router.get('/randomimage/cosplay', async (req, res, next) => {
	        let waif = (await axios.get(`https://raw.githubusercontent.com/Arya-was/endak-tau/main/cosplay.json`)).data
            let result = waif[Math.floor(Math.random() * (waif.length))]
	        let data = await getBuffer(result)
            await fs.writeFileSync(__path +'/database/waifu.png', data)
            await res.sendFile(__path +'/database/waifu.png')
            await sleep(3000)
            await fs.unlinkSync(__path + '/database/waifu.png')
        })
     
 router.use(function (req, res) {
     res.status(404)
    .set("Content-Type", "text/html")
    .sendFile(__path + '/views/404.html');
});

module.exports = router
