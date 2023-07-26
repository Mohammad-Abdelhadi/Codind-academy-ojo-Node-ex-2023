const express = require("express")
const booksPath = require("./routes/books")
const authorsPath = require('./routes/authors')
const mongoose = require('mongoose');
//method connect -> connect betwen express framework and mongo db

// connection to database 

mongoose
  .connect('mongodb://localhost:27017/booksStoreDB')
  .then(() => console.log('Connected to MongoDB'))
  .catch((error) => console.log('Connection failed to MongoDB', error));

// هذا الاكسبريشن يرجع بروميس 
// برجعلي شغلتي lowsucsess , lowerror
// monogodb local host - > لانه على جهازي 
// mongodb -> اسم الداتا بيز
// bookstoredb -> مكان تخزين البيانات
// حيشوف الداتا اذا موجودة بخزن البيانات في بوكستور
// اذا مش موجودة بعملها كريات
//  apply middleWares
// البيانات الي بتيجي من الكلاينت بتكون جيسون 
// الاكسبرس ما بعرف شو الجيسون الاشي ف بالتالي لازم نحولها لjson
const app = express();
app.use(express.json())
app.use("/api/books",booksPath)
app.use("/api/authors",authorsPath)
const PORT = 8000;
app.listen(PORT,()=>{console.log("welcome to our website")})