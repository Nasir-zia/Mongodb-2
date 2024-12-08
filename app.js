// const express = require("express")
// const app = express()
// const PORT = process.env.PORT || 3000

// const product_routes = require("./routes/route")

// app.get("/" , (req , res) =>{
//     res.send("Hello World")

// }
// )

// app.use("/api.produt" ,  product_routes)




// const Start = async () =>{
//     try{
//         app.listen(PORT , () => {
//             console.log(`${PORT} is connected`);
            
//         } )
//     }catch(error)
//     {
//         console.log(error);
        
//     }
// }



// Start()

// const express = require("express")
// const app = express()

// const PORT = process.env.PORT || 3000


// app.get("/" , (req , res) =>{
//     res.send("HEllo Nasir")
// })


// const Start =async () =>{
//     try {
//         app.listen(PORT , () => {
//                 console.log(`${PORT} is connected`);
                
//         })
        
//     } catch (error) {
//         console.log(error);
        
        
//     }
// }




// Start()



const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;
const product_routes = require("./routes/route")

app.get("/", (req, res) => {
    res.send({
        name: "Nasir Zia",
        rollNumber: 27,
        city: "Lakki Marwat",
    });
});

app.use("/api/routes", product_routes )

const Start = async () => {
    try {
        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        });
    } catch (error) {
        console.error("Error starting the server:", error);
    }
};

Start();
