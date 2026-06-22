import { auth } from "./firebase";
import { onAuthStateChanged } from "firebase/auth";

export const getMyChats = async () => {

  const user = await new Promise((resolve) => {

    const unsubscribe =
      onAuthStateChanged(
        auth,
        (user) => {

          unsubscribe();

          resolve(user);

        }
      );

  });

  if (!user) {

    throw new Error(
      "User not logged in"
    );

  }

  const token =
    await user.getIdToken();
const API_URL = import.meta.env.VITE_API_URL;
  const response =
    await fetch(
      `${API_URL}/conversation/my-chats`,
      {
        headers: {
          Authorization:
            `Bearer ${token}`
        }
      }
    );

  return response.json();

};