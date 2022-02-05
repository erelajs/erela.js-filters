
<div align="center">
    <p>
    <a href="https://discord.gg/menudocs"><img src="https://img.shields.io/discord/416512197590777857?color=5865F2&logo=discord&logoColor=white" alt="Discord server" /></a>
    <a href="https://www.npmjs.com/package/erela.js-filters"><img src="https://img.shields.io/npm/v/erela.js-filters.svg?maxAge=3600" alt="NPM version" /></a>
    <a href="https://www.npmjs.com/package/erela.js-filters"><img src="https://img.shields.io/npm/dt/erela.js-filters.svg?maxAge=3600" alt="NPM downloads" /></a>
    
    </p>
</div>

## Erela.JS Documentation & Guides

It is recommended to read the documentation to start, and the guides to use the plugin.

- [Documentation](https://erelajs-docs.netlify.app/docs/gettingstarted.html 'Erela.js Documentation')

- [Guides](https://guides.menudocs.org/topics/erelajs/ 'Erela.js Guides')

## Installation

**NPM** :
```sh
npm install erela.js-filters
```

**Yarn** :
```sh
yarn add erela.js-filters
```

**Repository**:
```sh
https://github.com/Strandxo/erela.js-filters
```

##Important
>Filter system is now part of main branch of Lavalink.

[Download Lavalink](https://github.com/freyacodes/Lavalink/releases)
## Filters

- ### Nightcore
> Add nighcore filter to the player \
> **Example:** player.nightcore = true;
> 
- ### Vaporwave
> Add vaporwave filter to the player \
> **Example:** player.vaporwave = true;
> 
- ### BassBoost
> Add Bass Boost filter to the player \
> **Example:** player.bassboost = true;
> 
- ### Pop
> Add pop filter to the player \
> **Example:** player.pop = true;
> 
- ### Soft
> Add soft filter to the player \
> **Example:** player.soft = true;
>
- ### treblebass
> Add treble bass filter to the player \
> **Example:** player.treblebass = true;
>
- ### Eight Dimension
> Add 8D filter to the player \
> **Example:** player.eightD = true;
> 
- ### Karaoke
> Add karaoke filter to the player \
> **Example:** player.karaoke = true;
>
- ### Vibrato
> Add vibrato filter to the player \
> **Example:** player.vibrato = true;
>
- ### Tremolo
> Add tremolo filter to the player \
> **Example:** player.tremolo = true;

- ### Reset
> Reset the filter
> **Example:** player.reset();

- ### Custom Filter
> Add custom filter
> **Example:** player.customFilter(filter);

## Example Usage

```javascript
const { Manager } = require("erela.js");
const filter  = require("erela.js-filters");


const manager = new Manager({
  plugins: [
    // Initiate the plugin
    new filter()
    
  ]
});
```
### To use filter
```javascript
    // to add nightcore filter
    <Player>.nightcore = true;
    // to remove nightcore filter
    <Player>.nightcore = false;
```

## Support Server: [Join Here](https://discord.gg/menudocs)<br>
## Developer: 
Rohan Kumar - [Github](https://github.com/rohank05)


