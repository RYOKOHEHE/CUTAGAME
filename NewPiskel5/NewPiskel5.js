/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class NewPiskel5 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("New Piskel-5", "./NewPiskel5/costumes/New Piskel-5.png", {
        x: 160,
        y: 160,
      }),
    ];

    this.sounds = [
      new Sound(
        "feeluvsyou - 힐링 (healing)2",
        "./NewPiskel5/sounds/feeluvsyou - 힐링 (healing)2.wav"
      ),
    ];

    this.triggers = [
      new Trigger(
        Trigger.BROADCAST,
        { name: "message" },
        this.whenIReceiveMessage
      ),
      new Trigger(Trigger.BROADCAST, { name: "reset" }, this.whenIReceiveReset),
      new Trigger(
        Trigger.BROADCAST,
        { name: "message gone" },
        this.whenIReceiveMessageGone
      ),
    ];
  }

  *whenIReceiveMessage() {
    this.visible = true;
  }

  *whenIReceiveReset() {
    this.visible = false;
  }

  *whenIReceiveMessageGone() {
    this.visible = false;
  }
}
