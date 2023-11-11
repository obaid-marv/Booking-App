import Hotel from "../models/Hotel.js";

export const createHotel = async(req,res,next)=>{
    const newHotel = new Hotel(req.body);

    try{
        const savedHotel = await newHotel.save();
        res.status(200).json(savedHotel);
    }
    catch(err){
        next(err);
    }
};

export const updateHotel = async(req,res,next)=>{
    try{
        const updatedHotel = await Hotel.findByIdAndUpdate(req.params.id, { $set: req.body }, { new:true });
        res.status(200).json(updatedHotel); 
    }
    catch(err){
        next(err);
    }
};

export const deleteHotel = async(req,res,next)=>{
    try{
        await Hotel.findByIdAndDelete(req.params.id);
        res.status(200).json("Hotel Successfully Deleted"); 
    }
    catch(err){
        next(err);
    }
};

export const getHotel = async(req,res,next)=>{
    try{
        const hotel = await Hotel.findById(req.params.id);
        res.status(200).json(hotel); 
    }
    catch(err){
        next(err);
    }
};

export const getAllHotel = async(req,res,next)=>{
    try{
        const hotels = await Hotel.find();
        res.status(200).json(hotels); 
    }
    catch(err){
        next(err);
    }
};

export const countByCity = async(req,res,next)=>{
    const cities = req.query.cities.split(",");
    
    try{
        const count = await Promise.all(cities.map((city)=>{
            return Hotel.countDocuments({city:city})
        }))

        res.status(200).json(count); 
    }
    catch(err){
        next(err);
    }
};

export const countByType = async(req,res,next)=>{
        
    try{
        const hotel = await Hotel.countDocuments({type:"Hotel"});
        const apartment = await Hotel.countDocuments({type:"apartment"});
        const resort = await Hotel.countDocuments({type:"resort"});
        const villa = await Hotel.countDocuments({type:"villa"});
        const cabin = await Hotel.countDocuments({type:"cabin"});        
        res.status(200).json([{type:"hotel",count:hotel},
        {type:"apartment",count:apartment},
        {type:"resort",count:resort},
        {type:"villa",count:villa},
        {type:"cabin",count:cabin},
    ])
    }
    catch(err){
        next(err);
    }
};