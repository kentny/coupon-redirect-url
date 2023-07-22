import * as functions from "firebase-functions";
import { remoteConfig } from "../firebase";
import { ExplicitParameterValue } from "firebase-admin/lib/remote-config/remote-config-api"

export const docker = functions.https.onRequest(async (req, res) => {
    try {
        const redirectUrl = await dockerCouponUrl();
        res.redirect(redirectUrl);
    } catch (error) {
        console.error(error);
        res.status(500).send(error);
    }
});

export const twitter = functions.https.onRequest(async (req, res) => {
    try {
        const redirectUrl = await dockerCouponUrl();
        res.redirect(redirectUrl);
    } catch (error) {
        console.error(error);
        res.status(500).send(error);
    }
});

export const instagram = functions.https.onRequest(async (req, res) => {
    try {
        const redirectUrl = await dockerCouponUrl();
        res.redirect(redirectUrl);
    } catch (error) {
        console.error(error);
        res.status(500).send(error);
    }
});

export const qiita = functions.https.onRequest(async (req, res) => {
    try {
        const redirectUrl = await dockerCouponUrl();
        res.redirect(redirectUrl);
    } catch (error) {
        console.error(error);
        res.status(500).send(error);
    }
});

export const note = functions.https.onRequest(async (req, res) => {
    try {
        const redirectUrl = await dockerCouponUrl();
        res.redirect(redirectUrl);
    } catch (error) {
        console.error(error);
        res.status(500).send(error);
    }
});

const dockerCouponUrl = async (): Promise<string> => {
    const config = await remoteConfig.getTemplate();
    const redirectUrlParam = config.parameters["DockerCouponUrl"];
    return (
        redirectUrlParam.defaultValue as ExplicitParameterValue
    ).value;
}