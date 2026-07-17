import * as WebBrowser from "expo-web-browser";
import * as Google from "expo-auth-session/providers/google";
import { GOOGLE_WEB_CLIENT_ID } from "@/config/env";
import * as AuthSession from "expo-auth-session";

WebBrowser.maybeCompleteAuthSession();

export const redirectUri = AuthSession.makeRedirectUri({
  scheme: "makeup-app",
  path: "oauthredirect",
});

export function useGoogleAuth() {
  const [request, response, promptAsync] = Google.useAuthRequest({
    clientId: GOOGLE_WEB_CLIENT_ID,
    redirectUri,
    scopes: ["openid", "profile", "email"],
  });

  return { request, response, promptAsync };
}

// web client - 913542506754-j56u4e3v5t6fu4leu7v5ns507skq45qi.apps.googleusercontent.com

// android-client -
