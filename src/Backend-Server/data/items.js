const fs = require('node:fs/promises');
const path = require('node:path');

async function getStoredItems() {
  const filePath = path.join(__dirname,'items.json');
  try {
    const rawFileContent = await fs.readFile(filePath, { encoding: 'utf-8' });
    const data = JSON.parse(rawFileContent);
    return data.items ?? [];
  } catch (error) {
    console.error('Failed to load items:', error.message);
    return [];
  }
}

function storeItems(items) {
  const filePath = path.join(__dirname, 'data', 'items.json');
  return fs.writeFile(filePath, JSON.stringify({ items: items || [] }, null, 2));
}

exports.getStoredItems = getStoredItems;
exports.storeItems = storeItems;
