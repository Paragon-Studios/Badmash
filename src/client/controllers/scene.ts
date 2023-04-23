import { Controller, OnStart } from "@flamework/core";
import { ClientStore } from "client/rodux/rodux";
import { Scene } from "shared/enums";
import Signal from "@rbxts/signal";

@Controller()
export class SceneController implements OnStart {
	public OnSceneChanged = new Signal<(newScene: Scene, prevScene?: Scene) => void>()

	public onStart(): void {
		this.onSceneChanged(ClientStore.getState().gameState.currentScene);
		ClientStore.changed.connect((newState, oldState) => {
			if (newState.gameState.currentScene !== oldState.gameState.currentScene)
				this.onSceneChanged(newState.gameState.currentScene, oldState.gameState.currentScene);
		});
	}

	public getSceneEnteredSignal(scene: Scene): Signal {
		const sceneEntered = new Signal;
		this.OnSceneChanged.Connect(newScene => {
			if (newScene === scene) sceneEntered.Fire();
		});
		return sceneEntered;
	}

	public setScene(newScene: Scene) {
		ClientStore.dispatch({ type: "SetScene", newScene });
	}

	private onSceneChanged(newScene: Scene, oldScene?: Scene) {
		this.OnSceneChanged.Fire(newScene, oldScene);
	}
}