<div align="center">
  <h1>Haberler • Gelişmiş Kullanımı Ücretsiz Türkçe Haberler Modülü</h1>
</div>
 <p align="center"><a href="https://nodei.co/npm/haberler/"><img src="https://nodei.co/npm/haberler.png"></a>


  ### ❔ [Destek](https://discord.gg/jhT5hRf89u)

### 📂 [Npm Modül](https://npmjs.com/package/haberler)

### 📇 [Github](https://github.com/hcgu32/haberler)


## İndirme
```console
npm i haberler
```

## Örnek:
```javascript
const {haber} = require("haberler");
(async()=>{
  const x = await haber()
  console.log(x[0])
})()
```

### » Kategori belirterek belirtilen kategorinin haberlerini alabilirsiniz. Boş bırakarak veya "" koyarak tüm haberleri alabilirsiniz. Kategoriler: "ekonomi", "guncel", "dunya", "spor", "politika", "magazin", "teknoloji", "saglik", "otomobil", "kultur-sanat", "kadin"  
## Örnek:
```javascript 
const {haber} = require("haberler");
(async()=>{
  const x = await haber("spor")
  console.log(x[0])
})()
```

### » Sayı belirterek istediğiniz sayıda haber alabilirsiniz. (Belirtilen sayı 1'den küçük 20'den büyük olmamalıdır.)
## Örnek:
```javascript 
const {haber} = require("haberler");
(async()=>{
  const x = await haber("",10)
  console.log(x[0])
})()
```




## Herhangi bir sorunda [Discord Sunucumuzdan](https://discord.gg/jhT5hRf89u) bize ulaşabilirsiniz.
> Discord Sunucumuz:
> https://discord.gg/jhT5hRf89u

<br> </br>
[![Discord](https://api.weblutions.com/discord/invite/jhT5hRf89u/)](https://discord.gg/jhT5hRf89u)
<br> </br>