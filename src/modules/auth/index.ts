import { Router } from "express";
import passport from "passport";
import { asyncHandler, Validator } from "@/middlewares";
import AuthController from "./auth.controller";

const router = Router();

router.get(
    "/login/google",
    passport.authenticate("google", {
        scope: ["profile", "email"],
    }),
);

router.get(
    "/google/callback",
    passport.authenticate("google", {
        session: false,
        failureMessage: "Cannot login",
    }),
    asyncHandler(AuthController.google),
);

router.post("/signin", Validator.signin, AuthController.signin);
router.post("/login", Validator.login, AuthController.login);

router.get("/logout", AuthController.logout);
router.get("/refresh", AuthController.refresh);

router.get("/me", Validator.authenticate, AuthController.me);

export default router;
