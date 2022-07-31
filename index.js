

const http = require("http")
const fs = require("fs");
const server = http.createServer((req, res) => {
     console.log(req.url)
    
     if(req.url === "/public"){
const obj =[
          
    {
    "userId": 1,
    "id": 1,
    "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
    },
    {
    "userId": 1,
    "id": 2,
    "title": "qui est esse",
    "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
    },
    {
    "userId": 1,
    "id": 3,
    "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
    "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
    },
    {
    "userId": 1,
    "id": 4,
    "title": "eum et est occaecati",
    "body": "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit"
    }

    ]
        res.end(JSON.stringify(obj))
     }
   
    else if(req.url === "/public/other"){
        fs.readFile("./data.txt", {encoding : "utf-8"}, (err, data) => {
            if(err){
                return res.end("something went wrong")
            }
            return res.end(data)
        })

      
     }

    else if(req.url === "/src"){
        console.log(req.headers)
        res.setHeader("content-type", "text/html")
        res.end("<h1>here are your comments</h1>")
    }
    else if(req.url === "/data"){
        const obj = {
            no_of_refrels : 1000,
            sucess_refrels : 800,
            percentage : "80%"
        }
        res.end(JSON.stringify(obj))
    }
    else{
        res.end("welcome to home page")
    }

})
server.listen(5000, () => {
    console.log("Listening on port localhost:5000")
})