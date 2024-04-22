const {DoctorService} = require("../services/index");
const {StatusCodes} = require("http-status-codes");

class DoctorController{

    constructor(){
        this.doctorController = new DoctorService();
    }

    async getAvailability(req,res){
        try {
            const response = await this.doctorController.AvailabilityCheck({date:req.query.date,time:req.query.time});
            return res.status(StatusCodes.OK).json({
                data:response,
                success:true,
                message:"successfully fetch the response",
                err:{},
            });
        } catch (error) {
            console.log(error);
            return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
                data:{},
                success:false,
                message:"Unable to fetch the response",
                err:error,
            });
        }
    }
}

module.exports = DoctorController;