import { db } from "./dbConnect.js";

export function addNewMovie(req, res) {
  const newMovie = req.body;

  db.collection("movies")
    .add(newMovie)
    .then((doc) => res.status(201).send(`SUCCESS,Movie added: ${doc.id} `))
    .catch((err) => res.status(500).send(err));
}

export async function getAllMovies(req, res) {
  const collection = await db.collection("movies")
    .get()
    .catch((err) => res.status(500).send(err));

  const movieCatalog = collection.docs.map((movie) => movie.data())

  res.status(201).send(movieCatalog)
}


