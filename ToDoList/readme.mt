ب 2009 شخص اخترع الnode js
وكتبها بلغة سي بلس
واحتاج الى مترجم
الي هو الكومبايلر 
لان الماشين ما بتفهم لغة الجافا سكربت .
يترجم الجافا سكربت الى لغة الباينري الي بفتفهمها الماشين
كتب البروجرم بسي بلس وكانت عنده مشكلة التغير كود الجافا سكربت الى باينري كود

اجا اخذ من الجوجل كريم فيها انجن v8
محرك 8
هو وظيفته في جوجل كروم يترجم الجافا سكربت الي باينري
node js (c++ , V8)
حتى نكتب جافا سكربت خارج المتصفح
مميزات اnode js
asyncrhronouns
synchronouns

node js 
ما فيها get document by element
ما فيها local storage
ما فيها window
its back end language!
thats why we dont get get document by element

كل file بالجافا سكربت يعتبر module
عنا اشي اسمه core module
زي http - fs - os - path 
ولكن في اشي اسمها custom module 
زي الفايلات 
كل فايل عبارة عن custom module .

third party module 
الي بنجيبها من ال npm
زي مثلاً عملت داونلود لـexpress
بالباك اند ما عندي npm packege manger
كيف في لكل شخص هوية تعبر عنه !
الnpm: هوية المشروع بكون فيه كل التفاصيل .
كل البكجات الي بنزلها من الnpm
تحفظ في الـnode modules
وبرضو عشان اجيب النبم الي نزلتها بعملها ريكوير حتى استخدمها.
`` هاي الاشارة اسمها باكتيك عشان نكتب كود هتمل مع جافا مثلاً
ف بالتالي انا محتاج اعملها 
كيف بعملها ؟
npm init -y(defualt )
npm int ( انا بصير اعدل عالمحتويات الي فيها حسب ما بدي )
---------
create server nodemon
npm i nodemon
go to package json 
scripts > create "dev" : nodemon (filename)
when you want to run it in terminal 
write : npm run dev

مثلاً اذا كان عندي array of objects
const books = [
    {
    id:1,
    name:"history"
    },

{
id:2 ,
name:"it"   
}
]
تمام ؟ تمام 
اذا بدي اجيبها لازم احولها لـstringyfy 
beacuse thats a json file!
if(req.url==="/books")
    {
        res.write(JSON.stringify(books))
        res.end()
    }

http -> hyper text transefer protocol
the way to commuincate betwen the server and the web browser
الاتصالات بين الفرونت اند والباك اند
client postman
servver node js
http -> فيها شغلتين
request - response
السيرفر بوخذ الريكوست من الكلاينت
الريسبونس هو الجواب من السيرفر.
وفي بعض الاحيان الريكوست فيها بيانات
والسيرفر بقدر يحفظ البيانات بالسيرفر.
http request http response 
فيها headers - body
headers object فيها تفاصيل عن الريكوست
body -> فيها تفاصيل عن البيانات
request :
عبارة عن json file 
فيها header + body
response :
بترجعلي status



------------------------------
methods -> post 
الـبوست بدنا نبعت اوبجكت على الاوبجكت الرئيسي .
new object and stored in the database(main object)
فَ بالتالي انا لما ارسل
new object- > new book - > data -> request -> 
request includes body object that contains all the data 
 -> body includes data of the request
  ( we recevied that from the client)
(req,res) -> its called routed handler
req -> includes body -> body obj

installedd npm i joi -> for validtion of the inputs
