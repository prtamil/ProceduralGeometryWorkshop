import { World } from "./World/World.js";

function main() {
  const container = document.querySelector("#scene-container");
  const world = new World(container);
  world.start();

  if (import.meta.hot) {
    import.meta.hot.dispose(() => world.dispose());
  }
}

main();
