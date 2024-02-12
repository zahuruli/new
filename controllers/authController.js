import userModel from "../models/userModel.js";
import JWT from "jsonwebtoken";

//loginController
export const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;

    //validation
    if (!email || !password) {
      return res.status(404).send({
        success: false,
        message: "Invalid Email Or Password",
      });
    }

    //check user
    const FixedUser = {
      _id: "101",
      name: "BDCOM Online Ltd.",
      email: "abir@bdcom.com",
      password: "BDCOM",
    };

    const match = password == FixedUser.password;
    if (!match) {
      return res.status(200).send({
        success: false,
        message: "Invalid Password",
      });
    }
    //token
    const token = await JWT.sign(
      { _id: FixedUser._id },
      process.env.JWT_SECRET,
      {
        expiresIn: "7d",
      }
    );

    res.status(200).send({
      success: true,
      message: "Login Successfull",
      user: {
        name: FixedUser.name,
        email: FixedUser.email,
      },
      token,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in login",
      error,
    });
  }
};

//get all user

export const getAllUsersController = async (req, res) => {
  try {
    //check user
    const FixedUser = [
      {
        _id: "101",
        name: "BDCOM Online Ltd.",
        email: "abir@bdcom.com",
        password: "BDCOM",
      },
      {
        _id: "102",
        name: "Zahurul Islam",
        email: "Zahurul8259@gmail.com",
        password: "BDCOM",
      },
    ];
    res.status(200).send({
      message: "User List Getting Successful",
      success: true,
      User_List: FixedUser,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Something went wrong while getting all user-list",
      error,
    });
  }
};

//Test controller

export const testController = async (req, res) => {
  try {
    res.status(200).send({
      success: true,
      message: "Test Successful",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Something went wrong while testing API",
      error,
    });
  }
};
