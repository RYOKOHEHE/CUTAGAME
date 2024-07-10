/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class NewPiskel4 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("New Piskel-4", "./NewPiskel4/costumes/New Piskel-4.png", {
        x: 160,
        y: 160,
      }),
    ];

    this.sounds = [
      new Sound(
        "feeluvsyou - 힐링 (healing)2",
        "./NewPiskel4/sounds/feeluvsyou - 힐링 (healing)2.wav"
      ),
    ];

    this.triggers = [
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "message1" },
        this.whenIReceiveMessage1
      ),
      new Trigger(Trigger.BROADCAST, { name: "reset" }, this.whenIReceiveReset),
      new Trigger(
        Trigger.BROADCAST,
        { name: "message" },
        this.whenIReceiveMessage
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "message gone" },
        this.whenIReceiveMessageGone
      ),
    ];
  }

  *whenthisspriteclicked() {
    this.broadcast("reset");
  }

  *whenIReceiveMessage1() {
    this.visible = true;
  }

  *whenIReceiveReset() {
    this.visible = false;
  }

  *whenIReceiveMessage() {
    this.visible = false;
  }

  *whenIReceiveMessageGone() {
    this.visible = true;
  }
}
