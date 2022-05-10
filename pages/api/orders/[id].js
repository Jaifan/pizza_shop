import dbConnect from "../../../util/mongo";
import Order from "../../../models/Order";

const handler = async (req, res) => {
    const {method, query:{id}} = req;

    if(method == "GET"){}
    if(method == "PUT"){}
    if(method == "DELETE"){}
};

export default handler;