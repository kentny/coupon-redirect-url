import * as Docker from "./docker";
import * as Linux from "./linux";
import * as AwsECS from "./aws-ecs";
import * as OAuth from "./oauth";
import * as WebAPI from "./web-api";

export const docker = {...Docker};
export const linux = {...Linux};
export const awsECS = {...AwsECS};
export const oauth = {...OAuth};
export const webAPI = {...WebAPI};
