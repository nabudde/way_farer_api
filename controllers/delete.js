const { bookings } = require('../models');


exports.delete=(req,res)=>{
    const delete_booking = bookings.find(b => b.booking_id == req.params.booking_id);
    if(!delete_booking){
        return res.status(400).send("entered trip_id is not available"); 
    }     
        const Index = bookings.indexOf(delete_booking);
        bookings.splice(Index, 1);
        res.json({
            status:"success",
            data:{
             message:"Booking deleted successfully "
            }
    });
    
}