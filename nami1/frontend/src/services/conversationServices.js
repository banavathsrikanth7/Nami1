import { auth } from "./firebase";

export const createConversation =
async () => {

  const token =
    await auth.currentUser.getIdToken();

  const response =
    await fetch(
      "http://127.0.0.1:8000/conversation/create",
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