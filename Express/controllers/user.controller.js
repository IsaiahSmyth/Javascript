


module.export = {
    hello: (req, res) => {
        res.json({message: "Hello World"});
    },


    allUsers: (req, res) => {
        res.json(users)
    },


    oneUser: (req, res) => {
        res.json(users[req.params.id])
    },

    newUser: (req, res)=> {
        users.push(req.body)
        res.json(req.body)
    },

    updateUser: (req, res) => {
        const id = req.params.id
        users[id] = req.body
        res.json({msg: "ok"})
    },

    deleteUser: (req, res)=>{
        const id = req.params.id
        users.splice(id, 1)
        
    },
}