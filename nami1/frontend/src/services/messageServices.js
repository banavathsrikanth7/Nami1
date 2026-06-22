export const sendMessage =
async (
  conversationId,
  content
) => {
const API_URL = import.meta.env.VITE_API_URL;
  const response =
  await fetch(
    `${API_URL}/messages/send`,
    {
      method: "POST",
      headers: {
        "Content-Type":
        "application/json"
      },
      body: JSON.stringify({
        conversation_id:
        conversationId,
        content
      })
    }
  );

  return await response.json();
};