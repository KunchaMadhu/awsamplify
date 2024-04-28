import { CognitoUserPool } from "amazon-cognito-identity-js";

const poolData={
    UserPoolId:"us-east-1_yO1bE6ezu",
    ClientId:"5mpkb6pvjt1csdl9rk4ctg9ded"
}

export default new CognitoUserPool(poolData);
