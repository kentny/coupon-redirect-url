import * as functions from "firebase-functions/v1";
import { remoteConfig } from "../firebase";
import { ExplicitParameterValue } from "firebase-admin/lib/remote-config/remote-config-api"

export const webApi = functions.https.onRequest(async (req, res) => {
    try {
        const redirectUrl = await webApiCouponUrl();
        res.redirect(redirectUrl);
    } catch (error) {
        console.error(error);
        res.status(500).send(error);
    }
});

export const twitter = functions.https.onRequest(async (req, res) => {
    try {
        const redirectUrl = await webApiCouponUrl();
        res.redirect(redirectUrl);
    } catch (error) {
        console.error(error);
        res.status(500).send(error);
    }
});

export const note = functions.https.onRequest(async (req, res) => {
    try {
        const redirectUrl = await webApiCouponUrl();
        res.redirect(redirectUrl);
    } catch (error) {
        console.error(error);
        res.status(500).send(error);
    }
});

const webApiCouponUrl = async (): Promise<string> => {
    const config = await remoteConfig.getTemplate();
    const redirectUrlParam = config.parameters["WebAPICouponUrl"];
    return (
        redirectUrlParam.defaultValue as ExplicitParameterValue
    ).value;
}