const dummy = [
    {
        id: '1',
        title: "hello",
        content: "world"
    },
    {
        id: '2',
        title: "hello2",
        content: "world2"
    }
]

const allRead = (req, res) => {
    console.log("d")
    res.status(200).json({
        dummy
    })
}

const oneRead = (req,res) => {
    const {id} = req.params
    console.log("f")
    // const findArr = [{name:"lemon", age:17}, {name:"candy", age:27}];
    // findArr.find(c => c.name==="candy"); // {name:"candy", age:27}
    const something = dummy.find((element)=>{
        return element.id === id
    })
    res.status(200).json({
        something
    })
}

const create = (req,res) =>{
    dummyadd(req.body.id,req.body.title,req.body.content)
    res.status(200).json({
        dummy
    })
}

const dummyadd = (id,title,content) =>{
    dummy.push({
        id,
        title,
        content
    })
}

export {
    create,
    oneRead,
    allRead
}