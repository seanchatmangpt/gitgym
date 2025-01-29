export function useVoiceCommands(customCommands = {}, debounceDelay = 50) {
  const isListening = ref(false);
  const unrecognizedTextQueue = ref([]);
  let debounceTimeout;

  // Function to send unrecognized text to FastAPI server
  const sendToServer = async (text) => {
    try {
      const response = await fetch("http://127.0.0.1:8000/voice", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text }),
      });
      const result = await response.json();
      // return navigateTo(result.route);
      console.log("Navigating to:", result.route);
      if (result.intent === "navigate")
        await navigateTo(result.route);
      else if (result.intent === "action")
        alert("Action: " + result.route);
      console.log("Server response:", result);
    } catch (error) {
      console.error("Error sending data to server:", error);
    }
  };

  const processUnrecognizedText = () => {
    if (unrecognizedTextQueue.value.length) {
      const textToSend = unrecognizedTextQueue.value.join(" ");
      console.log("Sending unrecognized text to server:", textToSend);
      sendToServer(textToSend);

      // Clear the queue after processing
      unrecognizedTextQueue.value = [];
    }
  };

  const debounceUnrecognizedText = (text) => {
    unrecognizedTextQueue.value.push(text);
    clearTimeout(debounceTimeout);
    debounceTimeout = setTimeout(processUnrecognizedText, debounceDelay);
  };

  const startListening = () => {
    if (window.annyang) {
      console.log("Starting annyang and setting up commands");
      const enhancedCommands = {
        ...customCommands,
        "*unrecognized": debounceUnrecognizedText,
      };
      console.log("customCommands", enhancedCommands);
      window.annyang.addCommands(enhancedCommands);
      window.annyang.start();
      isListening.value = true;
      console.log("Annyang started");
    } else {
      console.error("Annyang is not available.");
    }
  };

  const stopListening = () => {
    if (window.annyang) {
      window.annyang.abort();
      isListening.value = false;
      console.log("Annyang stopped");
    }
  };

  onMounted(() => {
    console.log("onMounted");
    startListening();
  });

  onUnmounted(() => {
    console.log("onUnmounted");
    stopListening();
    clearTimeout(debounceTimeout);
  });

  return {
    isListening,
    startListening,
    stopListening,
  };
}
