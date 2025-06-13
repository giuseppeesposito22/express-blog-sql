const connection = require("../data/db");
// importazione della lista dei post
// let { posts } = require("../data/host_port");

const index = (req, res) => {
  // const postTagFilter = req.query.tags;
  // let postsFiltered = posts;
  // if (postTagFilter) {
  //   postsFiltered = posts.filter((post) => post.tags.includes(postTagFilter));
  // }
  // res.json({
  //   description: "Lista dei post",
  //   data: postsFiltered,
  // });

  const sql = "SELECT * FROM posts";

  connection.query(sql, (err, results) => {
    if (err) return res.status(500).json({ error: "Database query failed" });
    console.log(results);

    res.json({
      data: results,
      status: 200,
    });
  });
};

const show = (req, res) => {
  // const id = parseInt(req.params.id);
  // const post = posts.find((post) => post.id === id);
  // if (!post) {
  //   res.status(404).json("Post not found");
  //   return;
  // }
  // res.json({
  //   description: `Post con id ${id}`,
  //   data: post,
  // });

  const id = parseInt(req.params.id);

  const sql = "SELECT * FROM posts WHERE id = ?";

  connection.query(sql, [id], (err, results) => {
    if (err) return res.status(500).json({ error: "Database query failed" });
    if (results.length === 0)
      return res.status(404).json({ error: "Post not found" });

    res.json({
      data: results,
      status: 200,
    });
  });
};

const store = (req, res) => {
  // const { title, content, image, tags } = req.body;
  // // Verifico se i dati sono corretti
  // if (!title || !content || !image || !tags) {
  //   res.status(400).json({
  //     error: "Bad request",
  //   });
  //   return;
  // }
  // // Incremento l' id del nuovo post creato
  // let maxId = 0;
  // for (const post of posts) {
  //   if (post.id > maxId) maxId = post.id;
  // }
  // const postId = maxId + 1;
  // const newPost = { id: postId, title, content, image, tags };
  // posts.push(newPost);
  // res.json(newPost).status(200);
};

const update = (req, res) => {
  // const { title, content, image, tags } = req.body;
  // const id = parseInt(req.params.id);
  // // Verifico se il post esiste
  // const originalPost = posts.find((post) => post.id === id);
  // if (!originalPost) {
  //   res.status(404).json({
  //     error: "Post not found",
  //   });
  //   return;
  // }
  // // Verifico se i dati sono corretti
  // if (!title || !content || !image || !tags) {
  //   res.status(400).json({
  //     error: "Bad request",
  //   });
  //   return;
  // }
  // // Creo un uovo oggetto con i nuovi parametri
  // const updatedPost = { id, title, content, image, tags };
  // // Trovo l' indice del post originale per poi andarlo a sostituire
  // const originalPostIndex = posts.indexOf(originalPost);
  // // Sostituisco il nuovo post con il vecchio
  // posts.splice(originalPostIndex, 1, updatedPost);
  // res.json({
  //   updatedPost,
  // });
};

const destroy = (req, res) => {
  // const id = parseInt(req.params.id);
  // const post = posts.find((post) => post.id === id);
  // if (!post) {
  //   res.status(404).json("Post not found");
  //   return;
  // }
  // posts.splice(post, 1);
  // console.log(posts);
  // res.status(204).json("No content");

  const id = parseInt(req.params.id);

  const sql = "DELETE FROM posts WHERE id = ?";

  connection.query(sql, [id], (err, results) => {
    if (err) {
      return res.status(500).json({ error: "Database query failed" });
    }

    if (results.affectedRows === 0) {
      return res.status(404).json({ error: "Post not found" });
    }

    res.sendStatus(204);
  });
};

module.exports = { index, show, store, update, destroy };
