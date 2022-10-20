// import E from "express";
// import H from "http";
// import P from "path";
// const APP = E();

// "use strict";
// APP.use(E.urlencoded({ extended: false }));
// APP.use(E.json());

// const SERV_PORT = process.env.PORT || 5000;
// const DIR = __dirname;
// APP.use(E.static(P.join(__dirname, 'public')));

// APP.get("/", (req, res) => { res.sendFile(P.join(DIR, "/public/main.html")); })

// APP.listen(SERV_PORT, (req, res) => {
//     console.log(`Listening to PORT ${SERV_PORT} . . . .`);
// });

import E from "express";
import P from "path";

const app = E();
const port = process.env.PORT || 3000;
const __dirname = P.resolve();
"use strict";
app.use(E.urlencoded({ extended: false }));
app.use(E.json());
app.use(E.static(P.join(__dirname, "/public")));

app.get("/", (req, res) => { res.sendFile(P.join(__dirname, "/public/main.html")); })


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
