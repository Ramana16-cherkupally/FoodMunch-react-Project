const express = require("express");
const bodyParser = require("body-parser");
require("dotenv").config(); // For environment variables

const { getStoredItems, storeItems } = require("./data/items");

const app = express();
const PORT = process.env.PORT || 9002;
const FRONTEND_URL = process.env.FRONTEND_URL || "http://localhost:3000";

// ✅ Middleware setup
app.use(bodyParser.json());

// ✅ CORS setup — only allow your frontend
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", FRONTEND_URL);
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  next();
});

// ✅ Fetch all items route
app.get("/items", async (req, res) => {
  try {
    const storedItems = await getStoredItems();
    if (process.env.NODE_ENV === "development") {
      await new Promise((resolve) => setTimeout(resolve, 2000)); // Delay only in dev
    }
    res.json({ items: storedItems });
  } catch (error) {
    console.error("Error fetching items:", error);
    res.status(500).json({ error: "Failed to fetch items" });
  }
});

// ✅ Fetch a single item by ID route
app.get("/items/:id", async (req, res) => {
  try {
    const storedItems = await getStoredItems();
    const item = storedItems.find((item) => item.id === req.params.id);

    if (!item) {
      return res.status(404).json({ error: "Item not found" });
    }

    res.json({ item });
  } catch (error) {
    console.error("Error fetching item:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// ✅ Post a new item route
app.post("/items", async (req, res) => {
  try {
    const existingItems = await getStoredItems();
    const itemData = req.body;

    const newItem = {
      ...itemData,
      id: Math.random().toString(),
    };

    const updatedItems = [newItem, ...existingItems];
    await storeItems(updatedItems);

    res.status(201).json({ message: "Stored new item.", item: newItem });
  } catch (error) {
    console.error("Error storing item:", error);
    res.status(500).json({ error: "Failed to store item" });
  }
});

// ✅ Catch-all route for undefined routes
app.use((req, res) => {
  res.status(404).json({ error: "Route not found" });
});

// ✅ Server startup
app.listen(PORT, () => {
  console.log(`🚀 Server live at http://localhost:${PORT} or on Render!`);
});
