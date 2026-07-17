import RootLayout from '@/app/_layout';
import { StyleSheet } from 'react-native';
// import * as AuthSession from "expo-auth-session";

export default function App() {
  // const redirectUri = AuthSession.makeRedirectUri({
  //   scheme: "makeup-app",
  // })
  // console.log("Redirect URI:", redirectUri);
  return (
    <RootLayout />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
