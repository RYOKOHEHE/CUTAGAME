/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class NewPiskel2 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("New Piskel-2", "./NewPiskel2/costumes/New Piskel-2.png", {
        x: 160,
        y: 160,
      }),
      new Costume("New Piskel-1", "./NewPiskel2/costumes/New Piskel-1.png", {
        x: 160,
        y: 160,
      }),
    ];

    this.sounds = [
      new Sound(
        "feeluvsyou - 힐링 (healing)2",
        "./NewPiskel2/sounds/feeluvsyou - 힐링 (healing)2.wav"
      ),
    ];

    this.triggers = [
      new Trigger(
        Trigger.BROADCAST,
        { name: "message1" },
        this.whenIReceiveMessage1
      ),
      new Trigger(Trigger.BROADCAST, { name: "reset" }, this.whenIReceiveReset),
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked),
    ];
  }

  *whenIReceiveMessage1() {
    this.costume = "New Piskel-2";
    this.visible = true;
  }

  *whenIReceiveReset() {
    this.visible = false;
  }

  *whenthisspriteclicked() {
    this.costume = "New Piskel-1";
    this.broadcast("message");
  }
}
