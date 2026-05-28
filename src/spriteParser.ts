import Bun from "bun";
import { PNG } from "pngjs";
import { GEN_1_POKEMON } from "../src/pokemonList.ts";

const COLOR_PALETTE = {
  WHITE: "#e0def4",
  LIGHT_GRAY: "#908caa",
  DARK_GRAY: "#ea9a97",
  BLACK: "#232136"
};

export async function parsePokemonSprite(index: number): Promise<string[][]> {
  // Get the string name based on the selection index (0-150)
  const pokemonName = GEN_1_POKEMON[index];
  const filePath = `./pokemon/${pokemonName}.png`;
  
  const file = Bun.file(filePath);
  
  // Quick safety check in case a filename spelling doesn't match perfectly
  if (!(await file.exists())) {
    throw new Error(`File not found: ${filePath}`);
  }

  const buffer = await file.arrayBuffer();
  
  return new Promise((resolve, reject) => {
    new PNG().parse(Buffer.from(buffer), (error, data) => {
      if (error) return reject(error);

      const grid: string[][] = [];
      
      for (let y = 0; y < data.height; y++) {
        const row: string[] = [];
        for (let x = 0; x < data.width; x++) {
          const idx = (data.width * y + x) << 2;
          const r = data.data[idx];
          const g = data.data[idx + 1];
          const b = data.data[idx + 2];
          const alpha = data.data[idx + 3];

          if (alpha < 128) {
            row.push("transparent");
            continue;
          }

          const brightness = (r + g + b) / 3;
          if (brightness > 200) row.push(COLOR_PALETTE.WHITE);
          else if (brightness > 120) row.push(COLOR_PALETTE.LIGHT_GRAY);
          else if (brightness > 50) row.push(COLOR_PALETTE.DARK_GRAY);
          else row.push(COLOR_PALETTE.BLACK);
        }
        grid.push(row);
      }
      
      resolve(grid);
    });
  });
}
