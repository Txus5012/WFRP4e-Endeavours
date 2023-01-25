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
