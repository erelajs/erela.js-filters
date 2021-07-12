import { Structure, Plugin } from "erela.js";

export class customFilter extends Plugin {
    public load() {
        Structure.extend(
            "Player",
            (Player) =>
                class extends Player {
                    //Private Filter Boolean
                    private _nightcore: boolean = false;
                    private _vaporwave: boolean = false;
                    private _bassboost: boolean = false;

                    //Private Filter Data
                    private _resetData = {
                        op: "filters",
                        guildId: this.guild,
                    };
                    private _nightcoreData = {
                        op: "filters",
                        guildId: this.guild,
                        timescale: {
                            speed: 1.2999999523162842,
                            pitch: 1.2999999523162842,
                            rate: 1,
                        },
                    };
                    private _vaporwaveData = {
                        op: "filters",
                        guildId: this.guild,
                        equalizer: [
                            { band: 1, gain: 0.3 },
                            { band: 0, gain: 0.3 },
                        ],
                        timescale: { pitch: 0.5 },
                        tremolo: { depth: 0.3, frequency: 14 },
                    };
                    private _bassboostData = {
                        op: "filters",
                        guildId: this.guild,
                        equalizer: [
                            { band: 0, gain: 0.6 },
                            { band: 1, gain: 0.67 },
                            { band: 2, gain: 0.67 },
                            { band: 3, gain: 0 },
                            { band: 4, gain: -0.5 },
                            { band: 5, gain: 0.15 },
                            { band: 6, gain: -0.45 },
                            { band: 7, gain: 0.23 },
                            { band: 8, gain: 0.35 },
                            { band: 9, gain: 0.45 },
                            { band: 10, gain: 0.55 },
                            { band: 11, gain: 0.6 },
                            { band: 12, gain: 0.55 },
                            { band: 13, gain: 0 },
                        ],
                    };

                    //Setting the filter
                    set nightcore(status: boolean) {
                        this._nightcore = status;
                        if (status) {
                            this._vaporwave = false;
                            this._bassboost = false;
                            this.node.send(this._nightcoreData);
                        } else this.reset();
                    }
                    set vaporwave(status: boolean) {
                        this._vaporwave = status;
                        if (status) {
                            this._bassboost = false;
                            this._nightcore = false;
                            this.node.send(this._vaporwaveData);
                        } else this.reset();
                    }
                    set bassboost(status: boolean) {
                        this._bassboost = status;
                        if (status) {
                            this._nightcore = false;
                            this._vaporwave = false;
                            this.node.send(this._bassboostData);
                        } else this.reset();
                    }

                    //Get Filter Status
                    get nightcore() {
                        return this._nightcore;
                    }
                    get vaporwave() {
                        return this._vaporwave;
                    }
                    get bassboost() {
                        return this._bassboost;
                    }

                    //Reset Everything
                    reset() {
                        this.node.send(this._resetData);
                    }
                }
        );
    }
}
