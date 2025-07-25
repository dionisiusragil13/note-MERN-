import Note from "../models/Note.js";

export async function getAllNotes(_, res) {
  try {
    const notes = await Note.find().sort({createdAt:-1});
    res.status(200).json(notes);
  } catch (error) {
    console.error("error in getAllNotes", error);
    res.status(500).json({ message: "internal server error" });
  }
}
export async function getOneNotes(req,res){
    try {
        const note = await Note.findById(req.params.id);
    if (!note)
      return res.status(404).json({ message: "note not found" });
    res.status(200).json(note);
    } catch (error) {
        console.error("error in getOneNote",error)
        res.status(500).json({message:"internal server error"})
    }
}

export async function createNote(req, res) {
  try {
    const { title, content } = req.body;
    const note = new Note({ title, content });
    const savedNote = await note.save();
    res.status(201).json({ savedNote });
  } catch (error) {
    console.error("error in createNote", error);
    res.status(500).json({ messafe: "internal server error" });
  }
}
export async function updateNote(req, res) {
  try {
    const { title, content } = req.body;
    const updatedNote = await Note.findByIdAndUpdate(
      req.params.id,
      { title, content },
      { new: true }
    );
    if (!updatedNote)
      return res.status(404).json({ message: "note not found" });

    res.status(200).json({ updatedNote });
  } catch (error) {
    console.error("error in updateNote", error);
    res.status(500).json({ message: "internal server error" });
  }
}
export async function deleteNote(req, res) {
  try {
    const deletedNote = await Note.findByIdAndDelete(req.params.id);
    if (!deletedNote)
      return res.status(404).json({ message: "note not found" });
    res.status(200).json({ deletedNote });
  } catch (error) {
    console.error("error in deleteNote", error);
    res.status(500).json({ message: "internal server error" });
  }
}
