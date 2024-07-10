import {
  Project,
  Sprite,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

import Stage from "./Stage/Stage.js";
import NewPiskel2 from "./NewPiskel2/NewPiskel2.js";
import NewPiskel3 from "./NewPiskel3/NewPiskel3.js";
import NewPiskel4 from "./NewPiskel4/NewPiskel4.js";
import NewPiskel5 from "./NewPiskel5/NewPiskel5.js";
import NewPiskel6 from "./NewPiskel6/NewPiskel6.js";

const stage = new Stage({ costumeNumber: 1 });

const sprites = {
  NewPiskel2: new NewPiskel2({
    x: 10,
    y: -11,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 2,
    size: 200,
    visible: false,
    layerOrder: 3,
  }),
  NewPiskel3: new NewPiskel3({
    x: 2,
    y: -18,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 200,
    visible: true,
    layerOrder: 1,
  }),
  NewPiskel4: new NewPiskel4({
    x: 206,
    y: 143,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 2,
  }),
  NewPiskel5: new NewPiskel5({
    x: 14,
    y: -18,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 200,
    visible: false,
    layerOrder: 4,
  }),
  NewPiskel6: new NewPiskel6({
    x: 206.47652259043173,
    y: 142.7452329587203,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 5,
  }),
};

const project = new Project(stage, sprites, {
  frameRate: 30, // Set to 60 to make your project run faster
});
export default project;
