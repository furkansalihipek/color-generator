# Color Generator

```js
const btn = document.getElementById("btn");
```

HTML dosyasındaki `btn` id'sine sahip elementi JavaScripte tanıtıyoruz

```js
function createHex() {
    const hex = "0123456789ABCDEF";
    let hexColor = "#";
    for (let index = 0; index < 6; index++) {
        hexColor += hex[Math.floor(Math.random() * hex.length)];
    }
    console.log(hexColor)
    document.body.style.backgroundColor = hexColor;
}
```
Fonksiyonu açıklamak gerekirse ilk olarak `hex` adında bir değişken tanımladık. Bu karakterler renk kodu oluşturulurken kullanılacak olan karakterler.

HEX kodları 0-9 ve A-F karakterleri kullanılarak oluşturulur

```js
let hexColor = "#";
```

HEX kodlar **#** ile başlar. Bunun için hexColor değişkenini **#** ile başlattık

Renk kodunu oluşturmak için `for` döngüsünden yararlandık

```js
for (let index = 0; index < 6; index++) {
    hexColor += hex[Math.floor(Math.random() * hex.length)];
}
```
Bu döngü 6 kez çalışacak ve her seferin de bir karakter ekleyerek sonucunda bize 6 karakterlik HEX kodunu vericek

```js
hexColor += hex[Math.floor(Math.random() * hex.length)];
```
Burada ise `Math.random()` kullanarak 0 ile hex dizisinin karakter uzunluğu arasında rastgele sayı oluşturur ve `Math.floor` kullanarak aşağıya yuvarlama işlemi yaparız. Böylece tam sayılar elde etmiş oluruz. Son olarak `hexColor +=` ifadesi döngünün her adımında oluşan karakteri **hexColor** değişkenine ekler.

```js
document.body.style.backgroundColor = hexColor;
```
Sitemizin arka planı oluşan HEX koduna karşılık gelen renk olarak değişir. Örneğin `f1f1f1` kodu oluştu diyelim sitemizin arka palnı **beyaz** olur.

```js
btn.addEventListener("click", createHex);
```

Buton **click** olduğunda yani butona tıklandığında `createHex` fonksiyonu çalışır.