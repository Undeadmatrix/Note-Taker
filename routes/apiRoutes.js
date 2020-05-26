const noteData = require("../db/db.json");

module.exports = function (app) {
  app.get("/api/notes", (req, res) => {
    res.json(noteData);
  });

  app.post("/api/notes", (req, res) => {
    noteData.push(req.body);
    res.json(noteData);
  });

  app.delete("/api/notes/:id", (req, res) => {
    let noteId = req.params.id;
    let removeIndex;

    for (let i = 0; i < noteData.length; i++) {
      if (noteData[i].id === noteId) {
        removeIndex = i;
      }
    }

    noteData.splice(removeIndex, 1);

    res.json(noteData);
  });
};