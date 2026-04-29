import { createClient } from "@sanity/client";
import dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.resolve(process.cwd(), ".env.local") });

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  apiVersion: "2024-01-01",
  useCdn: false,
});

async function test() {
  console.log("Project ID:", process.env.NEXT_PUBLIC_SANITY_PROJECT_ID);
  console.log("Dataset:", process.env.NEXT_PUBLIC_SANITY_DATASET);
  
  try {
    const products = await client.fetch('*[_type == "product"]');
    console.log("Found products:", products.length);
    console.log(JSON.stringify(products, null, 2));
    
    const allDocs = await client.fetch('*');
    console.log("Total docs in dataset:", allDocs.length);
  } catch (err) {
    console.error("Connection error:", err);
  }
}

test();
