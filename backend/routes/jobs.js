const express = require("express");
const router = express.Router();
const pool = require("../db");
const authMiddleware = require("../middleware/auth");

// GET all jobs
router.get("/", async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM jobs");
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET job by ID
router.get("/:id", async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM jobs WHERE id = ?", [req.params.id]);
    if (rows.length === 0) return res.status(404).json({ message: "Job not found" });
    res.json(rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST new job (protected)
router.post("/", authMiddleware, async (req, res) => {
  try {
    const { title, company, location, description, apply_link } = req.body;
    const [result] = await pool.query(
      "INSERT INTO jobs (title, company, location, description, apply_link) VALUES (?, ?, ?, ?, ?)",
      [title, company, location, description, apply_link]
    );
    res.json({ id: result.insertId, title, company, location, description, apply_link });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
