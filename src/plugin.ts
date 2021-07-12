import {Structure, Plugin} from 'erela.js';


export default class customFilter extends Plugin{
    public load() {
        Structure.extend(
            "Player",
            (Player) =>
                class extends Player {

                //Private Variables
                    private _nightcore = {
                        op: "filters",
                        guildId: this.guild,
                        timescale: {
                            speed: 1.2999999523162842,
                            pitch: 1.2999999523162842,
                            rate: 1,
                        },
                    };
                    private _vaporwave = {
                        op: "filters",
                        guildId: this.guild,
                        equalizer: [
                            { band: 1, gain: 0.3 },
                            { band: 0, gain: 0.3 },
                        ],
                        timescale: { pitch: 0.5 },
                        tremolo: { depth: 0.3, frequency: 14 },
                    };
                    private _bass = {
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
                    private _pop = {
                        op: "filters",
                        guildId: this.guild,
                        equalizer: [
                            { band: 0, gain: 0.65 },
                            { band: 1, gain: 0.45 },
                            { band: 2, gain: -0.45 },
                            { band: 3, gain: -0.65 },
                            { band: 4, gain: -0.35 },
                            { band: 5, gain: 0.45 },
                            { band: 6, gain: 0.55 },
                            { band: 7, gain: 0.6 },
                            { band: 8, gain: 0.6 },
                            { band: 9, gain: 0.6 },
                            { band: 10, gain: 0 },
                            { band: 11, gain: 0 },
                            { band: 12, gain: 0 },
                            { band: 13, gain: 0 },
                        ],
                    };
                    private _soft = {
                        op: "filters",
                        guildId: this.guild,
                        equalizer: [
                            { band: 0, gain: 0 },
                            { band: 1, gain: 0 },
                            { band: 2, gain: 0 },
                            { band: 3, gain: 0 },
                            { band: 4, gain: 0 },
                            { band: 5, gain: 0 },
                            { band: 6, gain: 0 },
                            { band: 7, gain: 0 },
                            { band: 8, gain: -0.25 },
                            { band: 9, gain: -0.25 },
                            { band: 10, gain: -0.25 },
                            { band: 11, gain: -0.25 },
                            { band: 12, gain: -0.25 },
                            { band: 13, gain: -0.25 },
                        ],
                    };
                    private _treblebass = {
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
                    private _reset = {
                        op: "filters",
                        guildId: this.guild,
                    }
                    public isNightcore:boolean = false;
                    public isVapor:boolean = false;
                    public isBass:boolean = false;
                    public isPop:boolean = false;
                    public isSoft:boolean = false;
                    public isTreblebass:boolean = false;

                    reset() {
                        this.isNightcore = false;
                        this.isBass = false;
                        this.isPop = false;
                        this.isVapor = false;
                        this.isTreblebass = false;
                        this.isSoft = false;
                        this.node.send(this._reset);
                    }

                    async setNightcore() {
                        this.reset();
                        await this.node.send(this._nightcore);
                        this.isNightcore = true;
                    }

                    async setVaporWave() {
                        this.reset();
                        await this.node.send(this._vaporwave);
                        this.isVapor = true;
                    }

                    async setBass() {
                        this.reset();
                        await this.node.send(this._bass);
                        this.isBass = true;
                    }

                    async setPop() {
                        this.reset();
                        await this.node.send(this._pop);
                        this.isPop = true;
                    }

                    async setSoft() {
                        this.reset();
                        await this.node.send(this._soft);
                        this.isSoft = true;
                    }

                    async setTreblebass() {
                        this.reset();
                        await this.node.send(this._treblebass);
                        this.isTreblebass = true;
                    }
                }
        );
    }
}