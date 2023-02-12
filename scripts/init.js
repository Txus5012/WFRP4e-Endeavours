// Set up socket listener to listen for endeavours macro

Hooks.once("ready", () => {
    console.log('WFRP4e - Endeavours | Hooked in');
    game.socket.on('module.wfrp4e-endeavours', (data) => {
        if (data.operation === 'playerEndeavour') {
            if (data.actor.ownership[game.user._id] >= 3) {
                endeavour(data.actor,0);
            }
        }
    });
})
import { endeavour } from './scripts.js';

Hooks.once('init', () => {

game.settings.register('wfrp4e-endeavours', 'altdorf', {
	name: game.i18n.localize("settings.altdorf.name"),
	hint: game.i18n.localize("settings.altdorf.hint"),
        scope: 'world',
        config: true,
        type: Boolean,
        default: false
    });
game.settings.register('wfrp4e-endeavours', 'shelley', {
	name: game.i18n.localize("settings.shelley.name"),
	hint: game.i18n.localize("settings.shelley.hint"),
        scope: 'world',
        config: true,
        type: Boolean,
        default: false
    });
game.settings.register('wfrp4e-endeavours', 'farforian', {
	name: game.i18n.localize("settings.farforian.name"),
	hint: game.i18n.localize("settings.farforian.hint"),
        scope: 'world',
        config: true,
        type: Boolean,
        default: false
    });
game.settings.register('wfrp4e-endeavours', 'willhelm', {
	name: game.i18n.localize("settings.willhelm.name"),
	hint: game.i18n.localize("settings.willhelm.hint"),
        scope: 'world',
        config: true,
        type: Boolean,
        default: false
    });
game.settings.register('wfrp4e-endeavours', 'angela', {
	name: game.i18n.localize("settings.angela.name"),
	hint: game.i18n.localize("settings.angela.hint"),
        scope: 'world',
        config: true,
        type: Boolean,
        default: false
    });
game.settings.register('wfrp4e-endeavours', 'rosendorn', {
	name: game.i18n.localize("settings.rosendorn.name"),
	hint: game.i18n.localize("settings.rosendorn.hint"),
        scope: 'world',
        config: true,
        type: Boolean,
        default: false
    });
game.settings.register('wfrp4e-endeavours', 'ulricsson', {
	name: game.i18n.localize("settings.ulricsson.name"),
	hint: game.i18n.localize("settings.ulricsson.hint"),
        scope: 'world',
        config: true,
        type: Boolean,
        default: false
    });
})
