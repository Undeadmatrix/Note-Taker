const noteDB = require("../db/db.json");

module.exports = function (app) 
{

  app.get("/api/notes", (req, res) => 
  {
    res.json(noteDB);
  });

  app.post("/api/notes", (req, res) => 
  {
    noteDB.push(req.body);
    res.json(noteDB);
  });

  app.delete("/api/notes/:id", (req, res) => 
  {

    let noteId = req.params.id;
    let toRemove;

    for (let i = 0; i < noteDB.length; i++) 
    {
      if(noteDB[i].id === noteId) {
        toRemove = i;
      }
    }

    noteDB.splice(toRemove, 1);

    res.json(noteDB);
  });
};