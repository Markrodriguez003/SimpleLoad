const FEEDBACK_PROMPT = document.getElementById("footer-prompt");

export default function promptMessage(color,msg) {
  FEEDBACK_PROMPT.style.bottom = 0;
  FEEDBACK_PROMPT.style.backgroundColor = color;
  FEEDBACK_PROMPT.innerText = msg;

  setTimeout(()=>{
    FEEDBACK_PROMPT.style.bottom = "-40px";
  }, 3000);
}
