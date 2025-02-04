const express = require('express');
const router = express.Router();

// In-memory data structure to store notes
let notes = [];
let nextId = 1;

// POST /api/notes → Yeni not oluştur
router.post('/', (req, res) => {
    const { title, content } = req.body;
    if (!title || !content) {
        return res.status(400).json({ error: 'Title and content are required' });
    }
    const newNote = { id: nextId++, title, content };
    notes.push(newNote);
    res.status(201).json(newNote);
});

// GET /api/notes → Tüm notları getir
router.get('/', (req, res) => {
    res.json(notes);
});

// GET /api/notes/:id → Belirli bir notu getir
router.get('/:id', (req, res) => {
    const noteId = parseInt(req.params.id);
    const note = notes.find(n => n.id === noteId);
    if (!note) {
        return res.status(404).json({ error: 'Note not found' });
    }
    res.json(note);
});

// PUT /api/notes/:id → Notu güncelle
router.put('/:id', (req, res) => {
    const noteId = parseInt(req.params.id);
    const { title, content } = req.body;
    const noteIndex = notes.findIndex(n => n.id === noteId);
    if (noteIndex === -1) {
        return res.status(404).json({ error: 'Note not found' });
    }
    notes[noteIndex] = { ...notes[noteIndex], title, content };
    res.json(notes[noteIndex]);
});

// DELETE /api/notes/:id → Notu sil
router.delete('/:id', (req, res) => {
    const noteId = parseInt(req.params.id);
    const noteIndex = notes.findIndex(n => n.id === noteId);
    if (noteIndex === -1) {
        return res.status(404).json({ error: 'Note not found' });
    }
    notes.splice(noteIndex, 1);
    res.status(204).send();
});

module.exports = router;