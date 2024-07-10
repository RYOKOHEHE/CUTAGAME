/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class NewPiskel3 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("New Piskel-3", "./NewPiskel3/costumes/New Piskel-3.png", {
        x: 160,
        y: 160,
      }),
    ];

    this.sounds = [
      new Sound(
        "feeluvsyou - 힐링 (healing)2",
        "./NewPiskel3/sounds/feeluvsyou - 힐링 (healing)2.wav"
      ),
    ];

    this.triggers = [
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked),
      new Trigger(Trigger.BROADCAST, { name: "reset" }, this.whenIReceiveReset),
    ];
  }

  *whenthisspriteclicked() {
    this.broadcast("message1");
    this.visible = false;
  }

  *whenIReceiveReset() {
    this.visible = true;
  }
}
