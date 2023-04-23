import { Controller, OnInit } from "@flamework/core";
import Roact from "@rbxts/roact";

import { UI } from "client/ui";
import { LoadScreen } from "client/roact/loadscreen";
import { HUD } from "client/roact/hud";
import { Menu } from "client/roact/menu";

@Controller()
export class RoactController implements OnInit {
  public onInit(): void {
    Roact.mount(LoadScreen, UI.container);
    Roact.mount(HUD, UI.container);
    Roact.mount(Menu, UI.container);
  }
}
