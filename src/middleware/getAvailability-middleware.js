const {StatusCodes} = require("http-status-codes");

module.exports = function getAvailabilityMiddleware(req,res,next){
    try {
        const { date, time } = req.query;
    
        if (!date || !time) {
            throw 'Date and time are required in the query parameters';
        }

        const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
        const timeRegex = /^\d{2}:\d{2}$/;

        if (!date.match(dateRegex)) {
            throw 'Date must be in the format YYYY-MM-DD';
        }

        if (!time.match(timeRegex)) {
            throw 'Time must be in the format HH:mm';
        }

        next();

    } catch (error) {
        return res.status(StatusCodes.BAD_REQUEST).json({
            data:{},
            success:false,
            message:"Bad Request!",
            explanation: error,
        });
    }
}