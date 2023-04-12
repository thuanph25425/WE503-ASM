import axios from "axios";
import dotenv from 'dotenv' // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
import Users from "../models/users";
dotenv.config()
// import Categories from "../models/categoris";
export const getAll = async (req, res) => {
    try {
        // gửi request từ server nodes -> json-server
        // const { data: products } = await axios.get(`${process.env.API_URL}`);
        const users = await Users.find();
        // Nếu mảng không có sản phẩm nào thì trả về 404
        if (users.length === 0) {
            res.status(404).json({
                message: "Không có sản phẩm nào",
            });
        }
        // Nếu có sản phẩm thì trả về 200 và mảng sản phẩm
        return res.status(200).json(users);
    } catch (error) {
        // Nếu có lỗi thì trả về 500 và lỗi
        return res.status(500).json({
            message: error,
        });
    }
};
export const get = async (req, res) => {
    try {
        const user = await Users.findById(req.params.id);
        if (!user ) {
            return res.status(404).json({
                message: "Không tìm thấy sản phẩm",
            });
        }
        return res.status(200).json({
            message: "User found",
            data: user,
        });
    } catch (error) {
        return res.status(500).json({
            message: "Lỗi server",
        });
    }
};
export const create = async (req, res) => {
    try {
        // const { data: product } = await axios.post(`${process.env.API_URL}`, req.body);
        const user = await Users.create(req.body)
        if (!user) {
            return res.status(400).json({
                message: "Không thể tạo sản phẩm",
            });
        }
        return res.status(200).json({
            message: "user created",
            data: user,
        });
    } catch (error) {
        return res.status(500).json({
            message: error,
        });
    }
};
export const remove = async (req, res) => {
    try {
        // await axios.delete(`${process.env.API_URL}/${req.params.id}`);
        await Users.findOneAndDelete({_id: req.params.id})
        return res.status(200).json({
            message: "Sản phẩm đã được xóa thành công",
        });
    } catch (error) {
        return res.status(500).json({
            message: error,
        });
    }
};

export const update = async (req, res) => {
    try {
        // const { data: product } = await axios.patch(
        //     `${process.env.API_URL}/${req.params.id}`,
        //     req.body
        // );
        const user = await Users.findOneAndUpdate({_id: req.params.id}, req.body, {new: true})
        if (!user) {
            return res.status(404).json({
                message: "Không tìm thấy sản phẩm",
            });
        }
        return res.status(200).json({
            message: "Sản phẩm đã được cập nhật thành công",
            data: user,
        });
    } catch (error) {
        return res.status(500).json({
            message: error,
        });
    }
};