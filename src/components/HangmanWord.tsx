import React from 'react'

export const HangmanWord = () => {
  const word = "test"
  const guessedLetters = ['t', "e", "g"]
  return (
    <div style={{
      display: "flex",
      gap: ".25em",
      fontSize: "6rem",
      textTransform: "uppercase",
      fontFamily: "monospace"
    }}>
      {word.split("").map((letter, index) => (
        <span style={{
          borderBottom: ".1em solid black"
        }}
          key={index}>
          <span style={{
            visibility:
              guessedLetters.includes(letter) ? "visible" : "hidden"
          }}>
            {letter}
          </span>
        </span>
      ))}
    </div>
  )
}
