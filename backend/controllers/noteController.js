const Note = require('../models/Note');

exports.getNotes = async (req, res) => {
  const { search = '', category = '' } = req.query;
  const notes = await Note.find({
    userId: req.user._id,
    ...(search && {
      $or: [
        { title: new RegExp(search, 'i') },
        { content: new RegExp(search, 'i') },
      ],
    }),
    ...(category && { category }),
  });
  res.json(notes);
};

exports.createNote = async (req, res) => {
  const { title, content, category } = req.body;
  const note = new Note({ userId: req.user._id, title, content, category });
  await note.save();
  res.status(201).json(note);
};

exports.updateNote = async (req, res) => {
  const note = await Note.findOne({ _id: req.params.id, userId: req.user._id });
  if (!note) return res.status(404).json({ message: 'Note not found' });

  const { title, content, category } = req.body;
  note.title = title || note.title;
  note.content = content || note.content;
  note.category = category || note.category;
  await note.save();
  res.json(note);
};

exports.deleteNote = async (req, res) => {
  const note = await Note.findOneAndDelete({ _id: req.params.id, userId: req.user._id });
  if (!note) return res.status(404).json({ message: 'Note not found' });
  res.json({ message: 'Note deleted' });
};
