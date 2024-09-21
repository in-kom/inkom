import dotenv from "dotenv";
import express, { Request, Response } from "express";
import mongoose from "mongoose";
import cors from "cors";
import bodyParser from "body-parser";
import fs from "fs";
import path from "path"; // To handle paths

const app = express();

dotenv.config();

mongoose.set("strictQuery", false);
const MONGODB_URL = process.env.MONGODB_URL;
const PORT = process.env.PORT || 3000;

if (!MONGODB_URL) {
  throw new Error("MONGODB_URL is not defined.");
}

app.use(cors());
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));

mongoose.connect(MONGODB_URL).then(async (c) => {
  console.log("Connected");

  // Use async/await to dynamically import routes
  const routesDir = path.join(__dirname, "./routes");

  const versions = fs.readdirSync(routesDir);
  for (const version of versions) {
    const versionPath = path.join(routesDir, version);
    const folders = fs.readdirSync(versionPath);

    for (const folder of folders) {
      const folderPath = path.join(versionPath, folder);
      const files = fs.readdirSync(folderPath);

      for (const file of files) {
        if (file.endsWith(".ts")) {
          const route = path.join(folderPath, file);
          const importedModule = await import(route); // Dynamic import
          importedModule.default(app); // Assuming the route exports a default function
          console.log(`Loaded route: ${version}/${folder}/${file}`);
        }
      }
    }
  }

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});

// Crash handling
process.on("uncaughtException", (err) => {
  console.error(err);
});

process.on("unhandledRejection", (err) => {
  console.error(err);
});
