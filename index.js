     const key = [
  "What Does The This Keyword Mean?",
  "What Is The Constructor OO Pattern?",
  "Implementing Blockchain Web API",
  "The Test Driven Development Workflow",
  "What Is NaN And How Can We Check For It",
  "What Is The Difference Between StopPropagation And PreventDefault?",
  "Immutable State And Pure Functions",
  "What Is The Difference Between == And ===?",
  "What Is The Difference Between Event Capturing And Bubbling?",
  "What Is JSONP?"
]
const titleCased = () => {

  return key.map((array) => {
      const ar_array = array.split(' ');
      const ar_new = ar_array.map((string) => {
          string = `${string[0].toUpperCase()}${string.slice(1)}`;
          return string;
      })
      return ar_new.join(" ");
  })
  return key
}

console.log(titleCased())