import { Router } from 'express';
import {verifyJWT} from "../middlewares/auth.middleware.js"
import { checkUser } from '../middlewares/openAuth.middleware.js';
import { createTweet, deleteTweet, getAllTweets, getUserTweets, updateTweet } from '../controllers/tweet.controller.js';

const router = Router();

router.route("/user/:userId").get(checkUser, getUserTweets);
router.route("/").get(checkUser, getAllTweets);

router.use(verifyJWT);

router.route("/").post(createTweet);
router.route("/:tweetId").patch(updateTweet).delete(deleteTweet);

export default router;