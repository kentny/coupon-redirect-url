import * as functions from "firebase-functions/v1";
import { remoteConfig } from "../firebase";
import { ExplicitParameterValue } from "firebase-admin/lib/remote-config/remote-config-api"

export const oauth = functions.https.onRequest(async (req, res) => {
    try {
        const redirectUrl = await oauthCouponUrl();
        res.redirect(redirectUrl);
    } catch (error) {
        console.error(error);
        res.status(500).send(error);
    }
});

export const twitter = functions.https.onRequest(async (req, res) => {
    try {
        const redirectUrl = await oauthCouponUrl();
        res.redirect(redirectUrl);
    } catch (error) {
        console.error(error);
        res.status(500).send(error);
    }
});

export const instagram = functions.https.onRequest(async (req, res) => {
    try {
        const redirectUrl = await oauthCouponUrl();
        res.redirect(redirectUrl);
    } catch (error) {
        console.error(error);
        res.status(500).send(error);
    }
});

export const qiita = functions.https.onRequest(async (req, res) => {
    try {
        const redirectUrl = await oauthCouponUrl();
        res.redirect(redirectUrl);
    } catch (error) {
        console.error(error);
        res.status(500).send(error);
    }
});

export const note = functions.https.onRequest(async (req, res) => {
    try {
        const redirectUrl = await oauthCouponUrl();
        res.redirect(redirectUrl);
    } catch (error) {
        console.error(error);
        res.status(500).send(error);
    }
});

const oauthCouponUrl = async (): Promise<string> => {
    const config = await remoteConfig.getTemplate();
    const redirectUrlParam = config.parameters["OAuthCouponUrl"];
    return (
        redirectUrlParam.defaultValue as ExplicitParameterValue
    ).value;
}