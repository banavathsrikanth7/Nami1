import { auth } from "./firebase";

export const createConversation =
async () => {

 if (!auth.currentUser) {
  throw new Error("User not logged in");
}

const token =
await auth.currentUser.getIdToken();
const API_URL = import.meta.env.VITE_API_URL;
  const response =
    await fetch(
      `${API_URL}/conversation/create`,
      {
        method: "POST",

        headers: {
          Authorization:
            `Bearer ${token}`
        }
      }
    );

  return response.json();
};