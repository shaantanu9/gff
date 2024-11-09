#!/usr/bin/env

import { downloadTemplate } from "giget";

async function downloadFolder(folderUrl) {
  try {
    const folderName = folderUrl.split("/").pop() || "downloaded-folder";
    const destination = `./${folderName}`;

    console.log(`Downloading folder from ${folderUrl} to ${destination}...`);
    await downloadTemplate(folderUrl, { force: true, dir: destination });

    console.log(`✅ Downloaded successfully to ${destination}`);
  } catch (error) {
    console.error("❌ Error downloading folder:", error);
  }
}

async function main() {
  const url = process.argv[2];
  if (!url) {
    console.error("❌ Please provide a GitHub URL to download.");
    process.exit(1);
  }

  // Convert the GitHub URL to a giget-compatible URL
  const gigetUrl = url
    .replace("https://github.com/", "gh:")
    .replace("/tree/main", "");
  await downloadFolder(gigetUrl);
}

main();
