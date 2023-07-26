const express=require('express')
const router = express.Router();
const joi = require('joi')

const books = [
    {
        id:1,
        title:"balck Swan",
        author:"nasim taleb",
        description:"about black swan",
        price: 10,
        cover: " soft cover "
    },
    {
        id:2,
        title : " rich dad poor dad " ,
        author : " robert kaysjaoijd",
        description:"about black rich dada poor dad ",
        price :12,
        cover: "soft blade cover "
        
    }
  
]
/* 
* @DESC Get all the books 
    @route /api/books
    @method GET
    @access public


*/
router.get('/',(req,res)=>{
    res.status(200).json(books)
    // res.sendFile(__dirname,"./index.html")
})

/* 
* @DESC GET book by id
    @route /api/books/:id
    @method GET
    @access public
    

*/

router.get('/:id', (req, res) => {
    
    const book = books.find(b => b.id === parseInt(req.params.id));
    if (book) {
        res.status(200).json(book);
    } else {
        res.status(404).json({ message: "book not found" });
    }
});

/* 
* @DESC Create new object of book
    @route /api/books
    @method POST
    @access public
    

*/
router.post('/',(req,res)=>{
    
    const { error } = validateCreateBook(req.body);
    console.log({error})
    if (error) {
        return res.status(400).json({ message: error.details[0].message });
    }
    const book = {
        id:books.length+1,
        title:req.body.title,
        author:req.body.author,
        description:req.body.description,
        price:req.body.price,
        cover:req.body.cover
    }
    books.push(book);
    res.status(201).json(book)
    // 201 status => created sucssesfuly
console.log(books)

})
// Valiidate post book
function validateCreateBook (obj){
    const schema = joi.object(
        {
            title: joi.string().trim().min(3).max(200).required(),
            author: joi.string().trim().min(3).max(500).required(),
            description: joi.string().min(3).max(500).required(),
            price: joi.number().min(0).required(),
            cover: joi.string().trim().required(),
        }
    );
    return schema.validate(obj)
}
// Valiidate Update book
function validateUpdateBook (obj){
    const schema = joi.object(
        {
            title: joi.string().trim().min(3).max(200),
            author: joi.string().trim().min(3).max(500),
            description: joi.string().min(3).max(500),
            price: joi.number().min(0),
            cover: joi.string().trim(),
        }
    );
    return schema.validate(obj)
}
/* 
@desc Update A book
@route /api/books/:id
@method PUT 
@accsess Public
*/
router.put('/:id',(req,res)=>{
const {error }= validateUpdateBook(req.body)

if(error)
{
    return res.status(400).json({message:error.details[0].message})
}
const book = books.find(b=>b.id === parseInt(req.params.id))
if(book){
    res.status(200).json({message:"book has been updated"})

}
else{
    res.status(404).json({message:"book not found"})
}
})





/* 
@desc Update A book
@route /api/books/:id
@method PUT 
@accsess Public
*/
router.delete('/:id',(req,res)=>{

    const book = books.find(b=>b.id === parseInt(req.params.id))
    if(book){
        res.status(200).json({message:"book has been deleted"})
    
    }
    else{
        res.status(404).json({message:"book not found"})
    }
    })

module.exports = router