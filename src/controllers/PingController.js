class PingController {
    async index (req, res){
        res.status(200).json({ping: 'pong'});
    }
}

export default new PingController();