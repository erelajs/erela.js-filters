
## Erela.JS Documentation & Guides

It is recommended to read the documentation to start, and the guides to use the plugin.

- [Documentation](http://projects.solaris.codes/erelajs/docs/gettingstarted.html 'Erela.js Documentation')

- [Guides](http://projects.solaris.codes/erelajs/guides/introduction.html 'Erela.js Guides')

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
https://github.com/OpenianDevelopment/erela.js-filters
```

##Important
>This is used to be Dev Release of Lavalink version.

[Download Lavalink](https://ci.fredboat.com/repository/download/Lavalink_Build/8867:id/Lavalink.jar)
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
> **Example:** player.EightD = true;
> 
- ### Karaoke
> Add karaoke filter to the player \
> **Example:** player.karaoke = true;

- ### Reset
> Reset the filter
> **Example:** player.reset();

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

##Support Server: [Join Here](https://menhera-chan.in/invite)<br>
##Developer: Rohan Kumar - [Github](https://github.com/rohank05)