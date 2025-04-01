const mysql = require("mysql2");

// 🔹 Create MySQL connection
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "test", // Change this to your actual DB name
});

// 🔹 Connect to MySQL
db.connect((err) => {
  if (err) {
    console.error("❌ Database connection failed:", err);
    return;
  }
  console.log("✅ Connected to MySQL database.");
});

module.exports = db;
