import  Mongoose  from "mongoose";

const OrderSchema = new Mongoose.Schema(
    {
        customer: {
          type: String,
          required: true,
          maxlength: 60,
        },
        address: {
          type: String,
          required: true,
          maxlength: 200,
        },
        total: {
          type: Number,
          required: true,
        },
        status: {
          type: Number,
          default: 0,
        },
        method: {
          type: Number,
          required:true
        },
    },
        { timestamps: true }
);

export default Mongoose.models.Order || Mongoose.model("Order", OrderSchema);