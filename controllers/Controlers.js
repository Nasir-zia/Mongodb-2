// const getAllProducts = async (req ,res) =>{
//     res.status(200).json({masg : "Get all the Produts"})

// }

// const getAlltesting = async (req ,res) =>{
//     res.status(200).json({masg : "Get all the testing"})
    
// }


// module.exports = {getAllProducts , getAlltesting}


const getAllProducts = async(req , res) =>{
    res.status(200).json({Msg :"App is connectd"})
}


const getAlltesting = async(req , res) =>{
    res.status(200).json({Msg :"App is connectd"})
}

module.exports =  {getAllProducts , getAlltesting}


