import { promises as fs } from 'fs';
import { resolve, join } from 'path';

async function extractStaticRoutes(dir, baseDir = '') {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const paths = new Set(); // Use a Set to automatically handle duplicates

  for (const entry of entries) {
    const fullPath = join(dir, entry.name);
    const relativePath = join(baseDir, entry.name);

    if (entry.isDirectory()) {
      // Recurse into subdirectory
      const childPaths = await extractStaticRoutes(fullPath, relativePath);
      childPaths.forEach((path) => paths.add(path));
    } else if (entry.isFile() && entry.name.endsWith('.vue')) {
      // Extract the filename before the first period
      const baseName = entry.name.split('.')[0];

      // Process Vue files for static routes
      let routePath = relativePath
        .replace(entry.name, baseName) // Replace the full name with the trimmed base name
        .replace(/\/index$/, '') // Remove `/index` for clean paths
        .replace(/\[(.*?)\]/g, ''); // Skip dynamic segments

      if (routePath.trim() === '') {
        routePath = '/'; // Root route
      }

      // Remove trailing slashes and add to the Set
      paths.add(routePath.replace(/\/$/, ''));
    }
  }

  return Array.from(paths); // Convert Set back to an array
}

async function main() {
  const pagesDir = resolve('./pages'); // Adjust to your Nuxt pages directory
  const paths = await extractStaticRoutes(pagesDir);

  // Sort the paths for readability
  const sortedPaths = paths.sort();

  console.log(sortedPaths); // Print normalized and deduplicated paths
}

main().catch(console.error);
