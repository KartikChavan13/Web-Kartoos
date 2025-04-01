// const express = require("express");
// const fs = require("fs");
// const path = require("path");
// const cors = require("cors");

// const app = express();
// app.use(express.json());
// app.use(cors());

// const DATA_DIR = path.join(__dirname, "orginfojson");
// const DATA_FILE = path.join(DATA_DIR, "data.json");

// // Ensure the directory exists
// if (!fs.existsSync(DATA_DIR)) {
//   fs.mkdirSync(DATA_DIR, { recursive: true });
// }

// // Ensure the file exists
// if (!fs.existsSync(DATA_FILE)) {
//   fs.writeFileSync(DATA_FILE, "[]"); // Initialize as empty array
// }

// // Save form data to JSON file
// app.post("/save", (req, res) => {
//   try {
//     const newData = req.body;

//     // Read existing data
//     const existingData = fs.existsSync(DATA_FILE)
//       ? JSON.parse(fs.readFileSync(DATA_FILE, "utf8"))
//       : [];

//     // Add new entry
//     existingData.push(newData);

//     // Save back to file
//     fs.writeFileSync(DATA_FILE, JSON.stringify(existingData, null, 2));

//     res.json({ message: "Data saved successfully!" });
//   } catch (error) {
//     console.error("Error saving data:", error);
//     res.status(500).json({ message: "Error saving data", error: error.message });
//   }
// });

// // Get stored data
// app.get("/data", (req, res) => {
//   try {
//     const data = fs.readFileSync(DATA_FILE, "utf8");
//     res.json(JSON.parse(data));
//   } catch (error) {
//     console.error("Error reading data:", error);
//     res.status(500).json({ message: "Error reading data", error: error.message });
//   }
// });


