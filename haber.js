const Parser = require('rss-parser');
const parser = new Parser();
const hurl = 'https://rss.haberler.com/rss.asp'
const package = require("./package.json")
const hata = `[${package.name}] Bir hata oluştu. Sorunu Discord sunucumuza (https://discord.gg/JUbHy74zkW) gelerek bildirebilirsiniz.`
const axios = require('axios');
const cheerio = require('cheerio');
const fetch = require("node-fetch");
try {
    fetch(`https://registry.npmjs.org/${package.name}/latest`).then(async(res) => {
        res.json().then(async (data) => {
            if (package.version !== data.version) {
                console.log(`[${package.name}] Eski bir sürümü kullanıyorsunuz. Modülü güncellemek için ${package.name}@latest yazabilirsiniz.`)
            }})})
} catch (err) {
    console.log(hata)}
function isoToTimestamp(isoDate) {
    return Date.parse(isoDate)
}
const haber = async function(kategori) {
    const cesit = ["ekonomi", "guncel", "dunya", "spor", "politika", "magazin", "teknoloji", "saglik", "otomobil", "kultur-sanat", "kadin"];
  
  if (!cesit.some(x => kategori === x)) {
  kategori = "";
}

if (cesit.some(x => kategori === x)) {
 
  
  kategori = kategori.replaceAll("ekonomi", "?kategori=ekonomi").replaceAll("guncel", "?kategori=guncel").replaceAll("dunya", "?kategori=dunya").replaceAll("spor", "?kategori=spor").replaceAll("politika", "?kategori=politika").replaceAll("magazin", "?kategori=magazin").replaceAll("teknoloji", "?kategori=teknoloji").replaceAll("saglik", "?kategori=saglik").replaceAll("otomobil", "?kategori=otomobil").replaceAll("kultur-sanat", "?kategori=kultur-sanat").replaceAll("kadin", "?kategori=kadin")
}
    const feed = await parser.parseURL(`${hurl}${kategori}`);
    const item = feed.items
    const rs = async function(i) {
        const response = await axios.get(item[i].link);
        const $ = cheerio.load(response.data);
        const image = $('img').map((index, element) => $(element).attr('src')).get()
        const images = image.filter(link => link.startsWith("https://foto.haberler.com"))
        return images
    }
    const news = []
    news.push({
        title: `${item[0].title}`,
        description: `${item[0].content}`,
        image: `${await rs(0)}`,
        date: `${isoToTimestamp(item[0].isoDate)}`,
        link: `${item[0].link}`
    },
        {
            title: `${item[1].title}`,
            description: `${item[1].content}`,
            image: `${await rs(1)}`,
            date: `${isoToTimestamp(item[1].isoDate)}`,
            link: `${item[1].link}`
        },
        {
            title: `${item[2].title}`,
            description: `${item[2].content}`,
            image: `${await rs(2)}`,
            date: `${isoToTimestamp(item[2].isoDate)}`,
            link: `${item[2].link}`
        },
        {
            title: `${item[3].title}`,
            description: `${item[3].content}`,
            image: `${await rs(3)}`,
            date: `${isoToTimestamp(item[3].isoDate)}`,
            link: `${item[3].link}`
        },
        {
            title: `${item[4].title}`,
            description: `${item[4].content}`,
            image: `${await rs(4)}`,
            date: `${isoToTimestamp(item[4].isoDate)}`,
            link: `${item[4].link}`
        },
        {
            title: `${item[5].title}`,
            description: `${item[5].content}`,
            image: `${await rs(5)}`,
            date: `${isoToTimestamp(item[5].isoDate)}`,
            link: `${item[5].link}`
        },
        {
            title: `${item[6].title}`,
            description: `${item[6].content}`,
            image: `${await rs(6)}`,
            date: `${isoToTimestamp(item[6].isoDate)}`,
            link: `${item[6].link}`
        },
        {
            title: `${item[7].title}`,
            description: `${item[7].content}`,
            image: `${await rs(7)}`,
            date: `${isoToTimestamp(item[7].isoDate)}`,
            link: `${item[7].link}`
        },
        {
            title: `${item[8].title}`,
            description: `${item[8].content}`,
            image: `${await rs(8)}`,
            date: `${isoToTimestamp(item[8].isoDate)}`,
            link: `${item[8].link}`
        },
        {
            title: `${item[9].title}`,
            description: `${item[9].content}`,
            image: `${await rs(9)}`,
            date: `${isoToTimestamp(item[9].isoDate)}`,
            link: `${item[9].link}`
        },
        {
            title: `${item[10].title}`,
            description: `${item[10].content}`,
            image: `${await rs(10)}`,
            date: `${isoToTimestamp(item[10].isoDate)}`,
            link: `${item[10].link}`
        },
        {
            title: `${item[11].title}`,
            description: `${item[11].content}`,
            image: `${await rs(11)}`,
            date: `${isoToTimestamp(item[11].isoDate)}`,
            link: `${item[11].link}`
        },
        {
            title: `${item[12].title}`,
            description: `${item[12].content}`,
            image: `${await rs(12)}`,
            date: `${isoToTimestamp(item[12].isoDate)}`,
            link: `${item[12].link}`
        },
        {
            title: `${item[13].title}`,
            description: `${item[13].content}`,
            image: `${await rs(13)}`,
            date: `${isoToTimestamp(item[13].isoDate)}`,
            link: `${item[13].link}`
        },
        {
            title: `${item[14].title}`,
            description: `${item[14].content}`,
            image: `${await rs(14)}`,
            date: `${isoToTimestamp(item[14].isoDate)}`,
            link: `${item[14].link}`
        },
        {
            title: `${item[15].title}`,
            description: `${item[15].content}`,
            image: `${await rs(15)}`,
            date: `${isoToTimestamp(item[15].isoDate)}`,
            link: `${item[15].link}`
        },
        {
            title: `${item[16].title}`,
            description: `${item[16].content}`,
            image: `${await rs(16)}`,
            date: `${isoToTimestamp(item[16].isoDate)}`,
            link: `${item[16].link}`
        },
        {
            title: `${item[17].title}`,
            description: `${item[17].content}`,
            image: `${await rs(17)}`,
            date: `${isoToTimestamp(item[17].isoDate)}`,
            link: `${item[17].link}`
        },
        {
            title: `${item[18].title}`,
            description: `${item[18].content}`,
            image: `${await rs(18)}`,
            date: `${isoToTimestamp(item[18].isoDate)}`,
            link: `${item[18].link}`
        },
        {
            title: `${item[19].title}`,
            description: `${item[19].content}`,
            image: `${await rs(19)}`,
            date: `${isoToTimestamp(item[19].isoDate)}`,
            link: `${item[19].link}`
        })
    return news;

}
module.exports = {
    haber
};
