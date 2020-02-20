// const mongose = require("mongose");
const mPro = require('../models/product.M');


module.exports = {
    getAll: (req, res) => {
        mPro.find({}, (error, product) => {
            if (error) {
                return res.status(401).json({
                    message: "Not able to get all Products!"
                });
            }
            return res.json({
                data: product
            })
        })



    },
    addProduct: async(req, res) => {
        var newPro = new mPro(req.body);

        newPro.save((error, product) => {
            if (error) {
                return res.status(401).json({
                    message: "Not able to add Product!"
                });
            }
            return res.json({
                data: product
            })
        })

    },
    getByProId: async(req, res) => {
        const ProID = req.params.id;
        mPro.findById(ProID, (error, product) => {
            if (error) {
                return res.status(401).json({
                    message: "Not able to get Product by ID!"
                });
            }
            return res.json({
                data: product
            })
        })
    },
    deleteByProId: async(req, res) => {
        const ProID = req.params.id;
        mPro.deleteOne({ _id: ProID }, (error, product) => {
            if (error) {
                return res.status(401).json({
                    message: "Not able to Delete Product by ID!"
                });
            }
            return res.json({
                status: "Product sucessfully deleted!!!"
            })
        })
    },
    updateByProId: async(req, res) => {
        const ProID = req.params.id;


        mPro.updateOne({ _id: ProID }, {
                $set: {
                    name: req.body.name,
                    // price: req.body.price,
                    // description: req.body.description
                }
            },
            (error, product) => {
                if (error) {
                    return res.status(401).json({
                        message: "Not able to edit Product by ID!"
                    });
                }
                return res.json({
                    status: "Product sucessfully updated!!!"
                })
            })
    },
}