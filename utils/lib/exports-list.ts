import { promises as fs } from "fs";
import { basename } from "path";

export async function generateIndex(path: string, extension = ".ts") {
  const indexFileContent = [];
  const dir = await fs.readdir(path);
  const definitionFiles: string[] = dir.filter((f) => f.endsWith(extension));
  for (const def of definitionFiles) {
    const defName = basename(def, extension);
    if (defName === "index") {
      continue;
    }
    indexFileContent.push(`export * as ${defName} from "./${defName}";`);
  }
  await fs.writeFile(`${path}/index.ts`, indexFileContent.join("\n"));
}
