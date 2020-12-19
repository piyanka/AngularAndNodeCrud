const db = require("../models");

const Student = db.student;
exports.create = (req,res) =>{

    if(!req.body.firstName){
        res.status(400).send({"msg":"please fill all the details"})
        return;
    }

    const student = new Student({
         firstName: req.body.firstName,
         lastName: req.body.lastName,
         class: req.body.class,
         subjectName: req.body.subjectName,
         marks: req.body.marks       
    });
    student.save(student).then((data) =>{
         res.status(200).send({"msg": "created Sucessfully"})
    }).catch(err =>{
        console.log("error =",err);
        res.status(500).send({"msg": "some server error occured"})
    })
}

exports.update = (req,res) => {
    if(!req.body.firstName){
        res.status(400).send({"msg":"data to update cannot be empty..."})
        return;
    }

    const id = req.params.id;

    Student.findByIdAndUpdate(id,req.body).then((data) =>{
        if(!data){
            res.status(400).send({"msg": "student not found"})
        }else{
        res.status(200).send({"msg": "Updated Sucessfully"})
        }
   }).catch(err =>{
       console.log("error =",err);
       res.status(500).send({"msg": "some server error occured"})
   })
    
}

exports.findOne = (req,res)=>{
 
    const _id = req.params.id;

    Student.findById(_id).then(data => {
        if(!data){
            res.status(400).send({"msg": "student not found"})
        }else{
            res.status(200).send(data)
        }
    }).catch(err => {
    if(err){
        res.status(500).send(err)
    }
    })

}

exports.findAll = (req,res) => {

    const firstName = req.query.name;
    var condition = firstName ? {firstName: {$regex: new RegExp(firstName), $options : "i" }} : {};
    Student.find(condition).then((data) => {
        if(!data){
           res.status(400).send({"msg":"student not found"})
        }else{
           res.status(200).send(data);
        }
    }).catch((err) => {
       res.status(500).send({"msg":"server error"})
    })

}

exports.delete = (req,res) => {
    const del_id = req.params.id;
    Student.findByIdAndRemove(del_id).then((data) => {
       if(!data){
        res.status(400).send({"msg": "student not found"})
       }else{
        res.status(200).send({"msg":"Delete Successfully"})
       }
    }).catch(err => {
        res.status(500).send(err);
    })
}

exports.deleteAll = (req,res) => {
    Student.deleteMany({}).then((data) => {
       if(!data){
        res.status(400).send({"msg": "student not found"})
       }else{
        res.status(200).send({"msg":"Delete Successfully"})
       }
    }).catch(err => {
        res.status(500).send(err);
    })
}
