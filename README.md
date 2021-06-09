1. Callback cehennemi nedir, bundan kurtulmak için kullanmayı tercihe ettiğin 
yöntemi kısaca anlatır mısın?
- Callback cehennemi, asekron fonksiyonlar içerisinde tekrar tekrar asekron yapıların çağırılmasıyla oluşan karmaşık yapıya verilen isimdir.
Bunu yerine Promise'ler kullanılabilir ama bunlarda zamanla Promise Hell'lere neden olduğu için Async-Await yapısı kullanılabilir.
Ben çoğunlukla Async-Await yapısını kulanıyorum.

2. NodeJs ile yazılmış bir sunucu, single thread çalıştığına göre sisteme aynı anda 
yoğun istek gelen durumlarla nasıl başa çıkıyor?
- Çünkü Nodejs eşzamanlı istekler için Single Threaded Event Loop Model mimarisini kullanıyor.
ayrıntılar: https://www.journaldev.com/7462/node-js-architecture-single-threaded-event-loop

3. NodeJs ve Express framework kullanılırken global değişken kullanmamız 
gerektiğinde nasıl ilerlenir? 
- Global değişkenler genellikle node.js'de hoş karşılanmaz. Bunun yerine değişkenlerin modül olarak dışa aktrılması daha uygundur.
Ama kullanılmak istenirse örneğin "a" değişkeni "global.a = 1" olarak ulaşılabilir hale getirilir.

4. Aşağıdaki kod şu anda çalışmıyor, nasıl çalışır hale getirebiliriz?

#!/usr/lib/node/v8/bin/node
let parent = {
    func2: function () {
        return new Promise(function (resolve, reject) {
            return resolve(1);
        });
    },
    func1: function () {
        return new Promise(function (resolve, reject) {
            this.func2().then((count) => {
                console.log(count + 1);
            });
        });
    }
}
parent.func1();


################################33

Aşağıdaki şekilde çalıştırılabilr:
let parent = {
    func2: function () {
        return new Promise(function (resolve, reject) {
            return resolve(1);
        });
    },
    func1: function () {
        const func2 = this.func2()
        func2.then(count => {
            return new Promise(function (resolve, reject) {
                console.log(count + 1)
            });
        })
    }
}

parent.func1()

5 - Proje:
- Proje'de Nodejs, ExpressJs, Mysql ve Reactjs kullanıldı. ORM için asekron olduğundan dolayı "Sequlize" kullanıldı.
Veritabanında oluşturulan datalar için sadece "GET" methodları ile verilerin Reactjs tarafında görselleştirilmesi sağlandı, herhangi bir 
create, delete işlemi yapılmadı.
Server "npm run dev" komutu ile 3001. port üzerinden çalışır. Client tarafı ise "fronend" dizini içerisinde "npm start" ile 3000. port'tan çalışır.
Frontend için yazılmış Reactjs kodları App.js içerisindedir, hem "Subscriptions" hem de "Orders" verileri isteğe göre filtrelenebilir.