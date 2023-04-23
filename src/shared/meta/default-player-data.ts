import { Profile } from "@rbxts/profileservice/globals";

const DefaultPlayerData = {
	currency: {
		cash: 0,
		xp: 0,
	}
}

export default DefaultPlayerData;

export type PlayerData = typeof DefaultPlayerData;
export type PlayerDataProfile = Profile<PlayerData>;