/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class NewPiskel6 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("New Piskel-4", "./NewPiskel6/costumes/New Piskel-4.png", {
        x: 160,
        y: 160,
      }),
    ];

    this.sounds = [
      new Sound(
        "feeluvsyou - 힐링 (healing)2",
        "./NewPiskel6/sounds/feeluvsyou - 힐링 (healing)2.wav"
      ),
    ];

    this.triggers = [
      new Trigger(
        Trigger.BROADCAST,
        { name: "message" },
        this.whenIReceiveMessage
      ),
      new Trigger(Trigger.BROADCAST, { name: "reset" }, this.whenIReceiveReset),
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked),
    ];
  }

  *whenIReceiveMessage() {
    this.visible = true;
  }

  *whenIReceiveReset() {
    this.visible = false;
  }

  *whenthisspriteclicked() {
    this.visible = false;
    this.broadcast("message gone");
  }
}
