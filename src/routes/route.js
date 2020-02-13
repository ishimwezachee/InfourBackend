const express = require("express");
const router = express.Router();
const AccountController = require("../controllers/account");
const FamilyController = require("../controllers/family");
const InsuranceController = require("../controllers/insurance");
const BankController = require("../controllers/bank")
const Social_media = require("../controllers/social_media");
const AssetsController = require("../controllers/asset");
// const Files = require("../controllers/files");
const Student = require("../controllers/student_occupation");
const Employed = require("../controllers/employed_occupation");
const Self_employed = require("../controllers/self_employed_occupation");
const Occupation = require("../controllers/occupation");
const UserController = require("../controllers/user");
const authentication = require("../middleware/Authentication");
//==================================================USER 
router.post("/signup",UserController.onRegister);
router.post("/login",UserController.login);
// =================================================account
router.post("/account",authentication,AccountController.create_account);
router.get("/account",authentication,AccountController.get_One_account);
router.get("/account/:userId",AccountController.get_One_account);
router.patch("/account/:id",AccountController.modify_account);
router.delete("/account/:id",AccountController.delete_account);
//==================================================== family
router.post("/family",authentication,FamilyController.create_family);
router.get("/family/:userId",FamilyController.get_One_family);
router.get("/family",authentication,FamilyController.get_One_family);
router.delete("/family/:id",FamilyController.delete_family);
router.patch("/family/:id",FamilyController.modify_family);
//==================================================== insurance
router.post("/insurance",authentication,InsuranceController.create_insurance);
router.get("/insurance/:userId",InsuranceController.get_One_Insurance);
router.get("/insurance/",authentication,InsuranceController.get_One_Insurance);
router.patch("/insurance/:id",InsuranceController.modify_insurance);
router.delete("/insurance/:id",InsuranceController.delete_insurance);
//===================================================assets
router.post("/assets",authentication,AssetsController.create_assets);
router.get("/assets/:userId",AssetsController.get_One_asset);
router.get("/assets/",authentication,AssetsController.get_One_asset);
router.patch("/assets/:id",AssetsController.modify_assets);
router.delete("/assets/:id",AssetsController.delete_assets);
//===================================================== bank
router.get("/bank_name/:userId",BankController.get_One_bank);
router.get("/bank_name",authentication,BankController.get_One_bank);
router.post("/bank_name",authentication,BankController.create_bank_name);
router.patch("/bank/:id",BankController.modify_bank_name);
router.delete("/bank/:id",BankController.delete_bank);
//==================================================== student
router.post("/student_occupation",authentication,Student.create_Student_occupation);
router.get("/student_occupation/:userId",Student.get_One_student);
router.get("/student_occupation",authentication,Student.get_One_student);
router.patch("/student_occupation/:id",Student.modify_Student_occupation);
router.delete("/student_occupation/:id",Student.delete_student_occupation);
//==================================================== employed_occupation
router.post("/employed_occupation",authentication,Employed.create_employed_occupation);
router.get("/employed_occupation/:userId",Employed.get_One_employment);
router.get("/employed_occupation",authentication,Employed.get_One_employment);
router.patch("/employed_occupation/:id",Employed.modify_employed_occupation);
router.delete("/employed_occupation/:id",Employed.delete_occupation_employed);
//==================================================== self_employed_occupation
router.post("/self_employed_occupation",authentication,Self_employed.create_self_employed_occupation);
router.get("/self_employed_occupation/:userId",Self_employed.get_One_self_employment);
router.get("/self_employed_occupation",authentication,Self_employed.get_One_self_employment);
router.patch("/self_employed_occupation/:id",Self_employed.modify_self_employed_occupation);
router.delete("/self_employed_occupation/:id",Self_employed.delete_occupation_self_employed);

//======================================================= social_media
router.post("/social_media",authentication,Social_media.create_social_media);
router.get("/social_media/:userId",Social_media.get_One_social_media);
router.get("/social_media",authentication,Social_media.get_One_social_media);
router.delete("/social_media/:id",Social_media.delete_social_media);
router.patch("/social_media/:id",Social_media.modify_social_media);

module.exports = router;