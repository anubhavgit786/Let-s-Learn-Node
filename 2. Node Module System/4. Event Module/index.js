const EventEmitter = require('events');

class Logger extends EventEmitter
{
    log(message)
    {
        this.emit(message, { id: 1, name : 'anubhav' });
    }
}

const logger = new Logger();

logger.on('messageLogged', (args)=>
{
    console.log('Listener called', args);
})

logger.log('messageLogged');