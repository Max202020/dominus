// register server and game with dominus base
// dominus_key makes sure it's one of my servers
if (process.env.DOMINUS_BASE && process.env.GAME_ID && process.env.DOMINUS_KEY) {
    var landingConn = DDP.connect(process.env.DOMINUS_BASE);
    if (landingConn.status() == 'connected') {
        landingConn.call('registerServer', process.env.GAME_ID, process.env.DOMINUS_WORKER, process.env.DOMINUS_KEY);
    }
}