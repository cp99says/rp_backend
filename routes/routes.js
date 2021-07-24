const express = require("express");
const router = express.Router();
const index = require("./../controllers/index.js");

router.route("/post-to-page").post(index.post_textual_data);
router.route("/get-all-posts").get(index.get_posts_of_page);
router.route("/load-comments-from-a-post").get(index.load_comments_from_a_post);
router.route("/post-api").get(index.post);

module.exports = router;
