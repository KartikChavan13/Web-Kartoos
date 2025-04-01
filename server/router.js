const express = require("express");
const multer = require("multer");
const path = require("path");
const fs = require("fs");
const db = require("./db");

const router = express.Router();

// Ensure "uploads" folder exists
if (!fs.existsSync("uploads")) {
  fs.mkdirSync("uploads");
}

// Multer Storage Setup
const storage = multer.diskStorage({
  destination: "uploads/",
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // Unique filename
  },
});
const upload = multer({ storage });

// USER REGISTRATION (Without Password Hashing)

router.post("/signup", async (req, res) => {
  try {
    const { name, lastname, age, gender, email, password, contact, bloodgroup } = req.body;

    if (!name || !lastname || !age || !gender || !email || !password || !contact || !bloodgroup) {
      return res.status(400).json({ error: "All fields are required" });
    }

    // Check if user already exists
    const existingUser = await new Promise((resolve, reject) => {
      db.query("SELECT * FROM bcare WHERE email = ?", [email], (err, result) => {
        if (err) reject(err);
        resolve(result);
      });
    });

    if (existingUser.length > 0) {
      return res.status(400).json({ error: "User already exists" });
    }

    // Insert new user into database
    await new Promise((resolve, reject) => {
      const sql = `INSERT INTO bcare (email, password, name, lastname, age, gender, contact, bloodgroup) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`;
      db.query(sql, [email, password, name, lastname, age, gender, contact, bloodgroup], (err, result) => {
        if (err) reject(err);
        resolve(result);
      });
    });

    res.status(201).json({ message: "User registered successfully!" });

  } catch (error) {
    console.error("Signup Error:", error);
    res.status(500).json({ error: "Server error" });
  }
});


// USER LOGIN
router.post("/login", (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) return res.status(400).json({ message: "Email and password are required" });

  db.query("SELECT * FROM bcare WHERE email = ? AND password = ?", [email, password], (err, result) => {
    if (err) return res.status(500).json({ message: "Server error" });

    if (result.length === 0) return res.status(404).json({ message: "Invalid email or password" });

    res.json({ success: true, user: result[0] });
  });
});

// ORGANIZATION REGISTRATION (With Image Upload)
router.post("/signinorgn", upload.single("orgImage"), (req, res) => {
  try {
    const { organization_name, address, area, zip, road, emailid, orgpassword, requiredBloodGroup } = req.body;
    const orgImage = req.file ? `/uploads/${req.file.filename}` : null;

    if (!organization_name || !address || !area || !zip || !road || !emailid || !orgpassword) {
      return res.status(400).json({ error: "All fields are required!" });
    }

    db.query("SELECT * FROM orgn WHERE emailid = ?", [emailid], (err, result) => {
      if (err) return res.status(500).json({ error: "Database error" });

      if (result.length > 0) return res.status(400).json({ error: "Organization already exists!" });

      const sql =
        "INSERT INTO orgn (organization_name, address, area, zip, road, emailid, orgpassword, requiredBloodGroup, orgImage) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)";

      db.query(sql, [organization_name, address, area, zip, road, emailid, orgpassword, JSON.stringify(requiredBloodGroup || []), orgImage], (err) => {
        if (err) return res.status(500).json({ error: "Database error" });
        res.status(201).json({ message: "Organization registered successfully!" });
      });
    });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

// GET ALL ORGANIZATIONS
router.get("/organizations", (req, res) => {
  db.query("SELECT * FROM orgn", (err, results) => {
    if (err) return res.status(500).json({ error: "Database error" });
    res.json(results);
  });
});
// Get Organization Details
router.get("/organization", (req, res) => {
  const orgId = req.query.id;
  if (!orgId) return res.status(400).json({ message: "Organization ID is required" });

  const sql = "SELECT * FROM orgn WHERE id = ?";
  db.query(sql, [orgId], (err, result) => {
    if (err) return res.status(500).json({ message: "Database error", error: err });
    if (result.length > 0) {
      res.json(result[0]);
    } else {
      res.status(404).json({ message: "Organization not found" });
    }
  });
});

router.post("/orglogin", (req, res) => {
  const { emailid, orgpassword } = req.body;
  if (!emailid || !orgpassword) return res.status(400).json({ message: "Email and password are required" });

  db.query("SELECT * FROM orgn WHERE emailid = ? AND orgpassword = ?", [emailid, orgpassword], (err, result) => {
    if (err) return res.status(500).json({ message: "Server error" });

    if (result.length === 0) return res.status(404).json({ message: "Invalid email or password" });

    res.json({ success: true, user: result[0] });
  });
});

router.get("/user", (req, res) => {
  // const { id } = req.body; // Get id from request query
     const {id} =req.query
  // if (!id) {
  //   return res.status(400).json({ success: false, message: "User ID is required" });
  // }

  db.query("SELECT * FROM bcare WHERE id = ? ", [id], (err, results) => {
    if (err) {
      console.error("Database error:", err);
      return res.status(500).json({ success: false, message: "Server error" });
    }

    if (results.length === 0) {
      return res.status(404).json({ success: false, message: "User not found" });
    }

    res.json(results[0]); // Send the first matched user
  });
});



module.exports = router;