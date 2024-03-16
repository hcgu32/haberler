const Parser = require('rss-parser');
const parser = new Parser();
const hurl = `https://rss.haberler.com/rss.asp`
const package = require("./package.json")
const ad=`[${package.name}]`
const hata = `${ad} Bir hata oluştu. Sorunu Discord sunucumuza (https://discord.gg/JUbHy74zkW) gelerek bildirebilirsiniz.`
const axios = require('axios');
const cheerio = require('cheerio');
const fetch = require("node-fetch");
const version=`${package.version}`
try {
    fetch(`https://registry.npmjs.org/${package.name}/latest`).then(async(res) => {
        res.json().then(async (data) => {
            if (package.version !== data.version) {
                console.log(`${ad} Eski bir sürümü kullanıyorsunuz. Modülü güncellemek için ${package.name}@latest yazabilirsiniz.`)
            }})})
} catch (err) {
    console.log(hata)}
function isoToTimestamp(isoDate) {
    return Date.parse(isoDate)
}
const haber = async function (kategori,sayi) {
    if(kategori == undefined || kategori == null || kategori == "" || typeof kategori !== "string") {
      kategori = ""
    }
  
  if(isNaN(sayi) || sayi== undefined || sayi == null || sayi == ""||parseInt(sayi)<1) {
    sayi = 20
  }
  if(parseInt(sayi)>20) {
    throw new Error(`${ad} 20'den büyük sayı giremezsiniz.`)
  }
  
 let kategoris= kategori?.toLocaleLowerCase("tr-TR");
    
    const cesit = [`ekonomi`, `guncel`, `dunya`, `spor`, `politika`, `magazin`, `teknoloji`, `saglik`, `otomobil`,  `kultur-sanat`, `kadin`];
  if (!cesit.some(x => kategoris== x)) {
  kategoris = ` `;
}
if (cesit.some(x => kategoris == x)) { 
  kategoris= kategoris.replaceAll(`ekonomi`, `?kategori=ekonomi`).replaceAll(`guncel`, `?kategori=guncel`).replaceAll(`dunya`, `?kategori=dunya`).replaceAll(`spor`, `?kategori=spor`).replaceAll(`politika`, `?kategori=politika`).replaceAll(`magazin`, `?kategori=magazin`).replaceAll(`teknoloji`, `?kategori=teknoloji`).replaceAll(`saglik`, `?kategori=saglik`).replaceAll(`otomobil`, `?kategori=otomobil`).replaceAll(`kultur-sanat`, `?kategori=kultur-sanat`).replaceAll(`kadin`, `?kategori=kadin`)

}
    const feed = await parser.parseURL(`${hurl}${kategoris}`);
    const item = feed.items
    const rs = async function(i) {
        const response = await axios.get(item[i].link);
        const $ = cheerio.load(response.data);
        const image = $('img').map((index, element) => $(element).attr('src')).get()
        const images = image.filter(link => link.startsWith("https://foto.haberler.com"))
        return images
    }
    const news = []
  
  
  for(let i=0;i<=parseInt(sayi)-1;i++){
   news.push({
        title: `${item[i].title}`,
        description: `${item[i].content}`,
        image: `${await rs(i)}`,
        date: `${isoToTimestamp(item[i].isoDate)}`,
        link: `${item[i].link}`
    })
  
  }                    
    return news;
}
module.exports = {haber,version};
