const express=require('express')
const router = express.Router();
const joi = require('joi')

const authors = [
    {
        id:1,
        Firstname:"balck Swan",
        Lastname:"nasim taleb",
        description:"about black swan",
        price: 10,
        cover: " soft cover "
    },
    {
        id:2,
        Firstname:"mohammad Swan",
        Lastname:"ahmadmamdamdm taleb",
        description:"about black rich dada poor dad ",
        price :12,
        cover: "soft blade cover "
        
    }
  
]
/* 
* @DESC Get all the authors 
    @route /api/authors
    @method GET
    @access public


*/
router.get('/',(req,res)=>{
    res.status(200).json(authors)
    // res.sendFile(__dirname,"./index.html")
})

/* 
* @DESC GET authors by id
    @route /api/authors/:id
    @method GET
    @access public
    

*/

router.get('/:id', (req, res) => {
    
    const  author= authors.find(b => b.id === parseInt(req.params.id));
    if (author) {
        res.status(200).json(author);
    } else {
        res.status(404).json({ message: "authors not found" });
    }
});

/* 
* @DESC Create new object of authors
    @route /api/authors
    @method POST
    @access public
    

*/
router.post('/',(req,res)=>{
    
    const { error } = validateCreateAuthor(req.body);
    if (error) {
        return res.status(400).json({ message: error.details[0].message });
    }
    const author = {
        id:authors.length+1,
        Firstname:req.body.title,
        Lastname:req.body.author,
        description:req.body.description,
        price:req.body.price,
        cover:req.body.cover
    }
    authors.push(author);
    res.status(201).json(author)
    // 201 status => created sucssesfuly
console.log(authors)

})
// Valiidate post authors
function validateCreateAuthor (obj){
    const schema = joi.object(
        {
            Firstname: joi.string().trim().min(3).max(200).required(),
            Lastname: joi.string().trim().min(3).max(500).required(),
            description: joi.string().min(3).max(500).required(),
            price: joi.number().min(0).required(),
            cover: joi.string().trim().required(),
        }
    );
    return schema.validate(obj)
}
// Valiidate Update authors
function validateUpdateAuthor (obj){
    const schema = joi.object(
        {
            Firstname: joi.string().trim().min(3).max(200),
            Lastname: joi.string().trim().min(3).max(500),
            description: joi.string().min(3).max(500),
            price: joi.number().min(0),
            cover: joi.string().trim(),
        }
    );
    return schema.validate(obj)
}
/* 
@desc Update A authors
@route /api/authors/:id
@method PUT 
@accsess Public
*/
router.put('/:id',(req,res)=>{
const {error }= validateUpdateAuthor(req.body)

if(error)
{
    return res.status(400).json({message:error.details[0].message})
}
const author= authors.find(b=>b.id === parseInt(req.params.id))
if(author){
    res.status(200).json({message:"author has been updated"})

}
else{
    res.status(404).json({message:"author not found"})
}
})





/* 
@desc Update A author
@route /api/authors/:id
@method PUT 
@accsess Public
*/
router.delete('/:id',(req,res)=>{

    const author = authors.find(b=>b.id === parseInt(req.params.id))
    if(author){
        res.status(200).json({message:"authors has been deleted"})
    
    }
    else{
        res.status(404).json({message:"authors not found"})
    }
    })

module.exports = router