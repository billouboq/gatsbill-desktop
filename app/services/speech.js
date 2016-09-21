module.exports = function textToSound(text) {
   var utterance = new SpeechSynthesisUtterance(text);
   utterance.lang = 'fr-FR';
   window.speechSynthesis.speak(utterance);
};

