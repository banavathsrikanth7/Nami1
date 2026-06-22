export const sendMessage =
async (
  conversationId,
  content
) => {

  const response =
  await fetch(
    "http://127.0.0.1:8000/messages/send",
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