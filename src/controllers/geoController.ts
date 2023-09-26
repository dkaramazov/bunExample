import Database from "bun:sqlite";

export default (db: Database) => {
  return {
    getGeoList: ({ set }) => {
      const query = db.query(`SELECT * FROM MESSAGES;`);
      const result = query.all();
      set.status = 200;

      return new Response(JSON.stringify({ messages: result }), {
        headers: { "Content-Type": "application/json" },
      });
    },
    getGeoById: ({ params: { id }, set }) => {
      const query = db.query(`SELECT * FROM MESSAGES WHERE id = $id;`);
      const result = query.get({ $id: id });
      set.status = 200;

      return new Response(JSON.stringify({ message: result }), {
        headers: { "Content-Type": "application/json" },
      });
    },
    createGeo: ({ body, set }) => {
      const query = db
        .prepare(`INSERT INTO MESSAGES (message) VALUES ($message);`);

        query.run({ $message: body.message });

      set.status = 200;

      return new Response(JSON.stringify({ message: body.message }), {
        headers: { "Content-Type": "application/json" },
      });
    },
    updateGeo: ({ params: { id }, body, set }) => {
        let query = db.query(`UPDATE MESSAGES SET MESSAGE = $message WHERE id = $id`);
        let result = query.run({ $message: body.message, $id: id });
        set.status = 200;
  
        return new Response(JSON.stringify({ message: body.message }), {
          headers: { "Content-Type": "application/json" },
        });
    },
  };
};
