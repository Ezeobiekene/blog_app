import mysql from "mysql2";
import cors from "cors";


export const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Qsefthukoz1!",
  database: "",
});