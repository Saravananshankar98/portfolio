import { useEffect, useState } from "react";

export function useTypewriter(words) {
  const [wordIndex, setWordIndex] = useState(0);
  const [letterCount, setLetterCount] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[wordIndex];
    const doneTyping = !deleting && letterCount === word.length;
    const doneDeleting = deleting && letterCount === 0;

    const timer = setTimeout(
      () => {
        if (doneTyping) {
          setDeleting(true);
          return;
        }

        if (doneDeleting) {
          setDeleting(false);
          setWordIndex((current) => (current + 1) % words.length);
          return;
        }

        setLetterCount((current) => current + (deleting ? -1 : 1));
      },
      doneTyping ? 1200 : deleting ? 45 : 90
    );

    return () => clearTimeout(timer);
  }, [deleting, letterCount, wordIndex, words]);

  return words[wordIndex].slice(0, letterCount);
}
