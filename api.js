fetch("https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=AIzaSyDnGJZU-RoCH2j2ZU-hA6jkGzEk0-YTSIk", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    contents: [
      {
        parts: [
          {
            text: "Explain how AI works in a few words"
          }
        ]
      }
    ]
  })
})
.then(res => res.json())
.then(data => {
  console.log(data.candidates[0].content.parts[0].text);
});
