import {Structure, Plugin, EqualizerBand} from "erela.js";

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
                    private _pop: boolean = false;
                    private _soft: boolean = false;
                    private _treblebass: boolean = false;
                    private _eightD: boolean = false;
                    private _karaoke: boolean = false;
                    private _vibrato: boolean = false;
                    private _tremolo: boolean = false;

                    //Private Filter Data
                    private readonly _resetData = {
                        op: "filters",
                        guildId: this.guild,
                    };

                    private readonly _nightcoreData = {
                        op: "filters",
                        guildId: this.guild,
                        timescale: {
                            speed: 1.2999999523162842,
                            pitch: 1.2999999523162842,
                            rate: 1,
                        },
                    };

                    private readonly _vaporwaveData = {
                        op: "filters",
                        guildId: this.guild,
                        equalizer: [
                            {band: 1, gain: 0.3},
                            {band: 0, gain: 0.3},
                        ],
                        timescale: {pitch: 0.5},
                        tremolo: {depth: 0.3, frequency: 14},
                    };

                    private readonly _bassboostData = {
                        op: "filters",
                        guildId: this.guild,
                        equalizer: [
                            {band: 0, gain: 0.6},
                            {band: 1, gain: 0.67},
                            {band: 2, gain: 0.67},
                            {band: 3, gain: 0},
                            {band: 4, gain: -0.5},
                            {band: 5, gain: 0.15},
                            {band: 6, gain: -0.45},
                            {band: 7, gain: 0.23},
                            {band: 8, gain: 0.35},
                            {band: 9, gain: 0.45},
                            {band: 10, gain: 0.55},
                            {band: 11, gain: 0.6},
                            {band: 12, gain: 0.55},
                            {band: 13, gain: 0},
                        ],
                    };

                    private readonly _popData = {
                        op: "filters",
                        guildId: this.guild,
                        equalizer: [
                            {band: 0, gain: 0.65},
                            {band: 1, gain: 0.45},
                            {band: 2, gain: -0.45},
                            {band: 3, gain: -0.65},
                            {band: 4, gain: -0.35},
                            {band: 5, gain: 0.45},
                            {band: 6, gain: 0.55},
                            {band: 7, gain: 0.6},
                            {band: 8, gain: 0.6},
                            {band: 9, gain: 0.6},
                            {band: 10, gain: 0},
                            {band: 11, gain: 0},
                            {band: 12, gain: 0},
                            {band: 13, gain: 0},
                        ],
                    };

                    private readonly _softData = {
                        op: "filters",
                        guildId: this.guild,
                        lowPass: {
                            smoothing: 20.0
                        }
                    };

                    private readonly _treblebassData = {
                        op: "filters",
                        guildId: this.guild,
                        equalizer: [
                            {band: 0, gain: 0.6},
                            {band: 1, gain: 0.67},
                            {band: 2, gain: 0.67},
                            {band: 3, gain: 0},
                            {band: 4, gain: -0.5},
                            {band: 5, gain: 0.15},
                            {band: 6, gain: -0.45},
                            {band: 7, gain: 0.23},
                            {band: 8, gain: 0.35},
                            {band: 9, gain: 0.45},
                            {band: 10, gain: 0.55},
                            {band: 11, gain: 0.6},
                            {band: 12, gain: 0.55},
                            {band: 13, gain: 0},
                        ],
                    };

                    private readonly _eightDData = {
                        op: "filters",
                        guildId: this.guild,
                        rotation: {
                            rotationHz: 0.2
                        }
                    }

                    private readonly _karaokeData = {
                        op: "filters",
                        guildId: this.guild,
                        karaoke: {
                            level: 1.0,
                            monoLevel: 1.0,
                            filterBand: 220.0,
                            filterWidth: 100.0
                        },
                    }

                    private readonly _vibratoData = {
                        op: "filters",
                        guildId: this.guild,
                        vibrato: {
                            frequency: 10,
                            depth: 0.9
                        }
                    }

                    private readonly _tremoloData = {
                        op: "filters",
                        guildId: this.guild,
                        tremolo: {
                            frequency: 10,
                            depth: 0.5
                        }
                    }

                    //Setting the filter
                    set nightcore(status: boolean) {
                        this._nightcore = status;
                        if (status) {
                            this._vaporwave = false;
                            this._bassboost = false;
                            this._soft = false;
                            this._pop = false;
                            this._treblebass = false;
                            this._eightD = false;
                            this._karaoke = false;
                            this._vibrato = false;
                            this._tremolo = false;
                            this.node.send(this._nightcoreData);
                        } else this._resetnode();
                    }

                    set vaporwave(status: boolean) {
                        this._vaporwave = status;
                        if (status) {
                            this._bassboost = false;
                            this._nightcore = false;
                            this._soft = false;
                            this._pop = false;
                            this._treblebass = false;
                            this._eightD = false;
                            this._karaoke = false;
                            this._vibrato = false;
                            this._tremolo = false;
                            this.node.send(this._vaporwaveData);
                        } else this._resetnode();
                    }

                    set bassboost(status: boolean) {
                        this._bassboost = status;
                        if (status) {
                            this._nightcore = false;
                            this._vaporwave = false;
                            this._soft = false;
                            this._pop = false;
                            this._treblebass = false;
                            this._eightD = false;
                            this._karaoke = false;
                            this._vibrato = false;
                            this._tremolo = false;
                            this.node.send(this._bassboostData);
                        } else this._resetnode();
                    }

                    set pop(status: boolean) {
                        this._pop = status;
                        if (status) {
                            this._nightcore = false;
                            this._vaporwave = false;
                            this._bassboost = false;
                            this._soft = false;
                            this._treblebass = false;
                            this._eightD = false;
                            this._karaoke = false;
                            this._vibrato = false;
                            this._tremolo = false;
                            this.node.send(this._popData);
                        } else this._resetnode();
                    }

                    set soft(status: boolean) {
                        this._soft = status;
                        if (status) {
                            this._nightcore = false;
                            this._vaporwave = false;
                            this._bassboost = false;
                            this._pop = false;
                            this._treblebass = false;
                            this._eightD = false;
                            this._karaoke = false;
                            this._vibrato = false;
                            this._tremolo = false;
                            this.node.send(this._softData);
                        } else this._resetnode();
                    }

                    set treblebass(status: boolean) {
                        this._treblebass = status;
                        if (status) {
                            this._nightcore = false;
                            this._vaporwave = false;
                            this._bassboost = false;
                            this._pop = false;
                            this._soft = false;
                            this._eightD = false;
                            this._karaoke = false;
                            this._vibrato = false;
                            this._tremolo = false;
                            this.node.send(this._treblebassData);
                        } else this._resetnode();
                    }

                    set eightD(status: boolean) {
                        this._eightD = status;
                        if (status) {
                            this._nightcore = false;
                            this._vaporwave = false;
                            this._bassboost = false;
                            this._pop = false;
                            this._soft = false;
                            this._treblebass = false;
                            this._karaoke = false;
                            this._vibrato = false;
                            this._tremolo = false;
                            this.node.send(this._eightDData);
                        } else this._resetnode();
                    }

                    set karaoke(status: boolean) {
                        this._karaoke = status;
                        if (status) {
                            this._nightcore = false;
                            this._vaporwave = false;
                            this._bassboost = false;
                            this._pop = false;
                            this._soft = false;
                            this._treblebass = false;
                            this._eightD = false;
                            this._vibrato = false;
                            this._tremolo = false;
                            this.node.send(this._karaokeData)
                        } else this._resetnode();
                    }

                    set vibrato(status: boolean) {
                        this._vibrato = status;
                        if (status) {
                            this._nightcore = false;
                            this._vaporwave = false;
                            this._bassboost = false;
                            this._pop = false;
                            this._soft = false;
                            this._treblebass = false;
                            this._eightD = false;
                            this._karaoke = false;
                            this._tremolo = false;
                            this.node.send(this._vibratoData)
                        } else this._resetnode();
                    }

                    set tremolo(status: boolean) {
                        this._tremolo = status;
                        if (status) {
                            this._nightcore = false;
                            this._vaporwave = false;
                            this._bassboost = false;
                            this._pop = false;
                            this._soft = false;
                            this._treblebass = false;
                            this._eightD = false;
                            this._karaoke = false;
                            this._vibrato = false;
                            this.node.send(this._tremoloData)
                        } else this._resetnode();
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

                    get pop() {
                        return this._pop;
                    }

                    get soft() {
                        return this._soft;
                    }

                    get treblebass() {
                        return this._treblebass;
                    }

                    get eightD() {
                        return this._eightD;
                    }

                    get karaoke() {
                        return this._karaoke;
                    }

                    get vibrato() {
                        return this._vibrato;
                    }

                    get tremolo() {
                        return this._tremolo;
                    }

                    //Reset Everything
                    private _resetnode() {
                        this.node.send(this._resetData);
                    }

                    public reset() {
                        this._resetnode();
                        this._nightcore = false;
                        this._vaporwave = false;
                        this._bassboost = false;
                        this._soft = false;
                        this._pop = false;
                        this._treblebass = false;
                        this._eightD = false;
                        this._karaoke = false;
                        this._vibrato = false;
                        this._tremolo = false;
                    }

                    // Add custom filters
                    public customFilter(filter: filter) {
                        this.reset();
                        this.node.send(filter);
                    }
                }
        );
    }
}

interface filter {
    op: "Filter",
    guild: string,
    equalizer?: Array<EqualizerBand>,
    karaoke?: {
        level?: number,
        monoLevel?: number,
        filterBand?: number,
        filterWidth?: number
    },
    timescale?: {
        speed?: number, // 0 ≤ x
        pitch?: number, // 0 ≤ x
        rate?: number   // 0 ≤ x
    },
    tremolo?: {
        frequency?: number, // 0 < x
        depth?: number      // 0 < x ≤ 1
    },
    vibrato?: {
        frequency?: number, // 0 < x ≤ 14
        depth?: number      // 0 < x ≤ 1
    },
    rotation?: {
        rotationHz?: number // The frequency of the audio rotating around the listener in Hz. 0.2 is similar to the example video above.
    },
    distortion?: {
        sinOffset?: number,
        sinScale?: number,
        cosOffset?: number,
        cosScale?: number,
        tanOffset?: number,
        tanScale?: number,
        offset?: number,
        scale?: number
    },
    channelMix?: {
        leftToLeft?: number,
        leftToRight?: number,
        rightToLeft?: number,
        rightToRight?: number,
    },
    lowPass?: {
        smoothing?: number
    }
}


