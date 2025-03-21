import express from 'express'
import { getNote,getNotes,deleteNote, createNote } from './database.js'

const app = express()
app.use(express.json());


app.get("/notes",async(req,res)=>{
    const notes = await getNotes()
    res.send(notes)
})

app.get("/notes/:id",async(req,res)=>{
    const id =  req.params.id;
    const notes = await getNote(id)
    res.send(notes)
})
app.post("/notes",async(req,res)=>{
    const title =  await  req.body.title;
    const content = await req.body.content;
  
    const notes = await createNote(title,content)
    res.send(notes)
})
app.post("/notes/:id",async(req,res)=>{
    const id =   req.params.id;
  
    const note = await deleteNote(id)
    res.send(note)
})



app.listen(8080,()=>{
    console.log("server is running on port 8080")
})