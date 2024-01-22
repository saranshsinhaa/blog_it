const express = require("express");

const imageUpload = require("../Helpers/Libraries/imageUpload");

const {
  profile,
  editProfile,
  addStoryToReadList,
  readListPage,
} = require("../Controllers/user");
const { getAccessToRoute } = require("../Middlewares/Authorization/auth");

const router = express.Router();

router.get("/profile", getAccessToRoute, profile);

router.post(
  "/editProfile",
  [getAccessToRoute, imageUpload.single("photo")],
  editProfile
);

router.post("/:slug/addStoryToReadList", getAccessToRoute, addStoryToReadList);

router.get("/readList", getAccessToRoute, readListPage);

module.exports = router;
