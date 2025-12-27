import { useEffect, useState } from 'react';

export default function useTypewriter(words = [], typingSpeed = 80, pause = 1400) {
  const [index, setIndex] = useState(0);
  const [display, setDisplay] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[index % words.length];
    let timeout;
    if (!deleting && display.length < current.length) {
      timeout = setTimeout(() => setDisplay(current.slice(0, display.length + 1)), typingSpeed);
    } else if (!deleting && display.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && display.length > 0) {
      timeout = setTimeout(() => setDisplay(current.slice(0, display.length - 1)), typingSpeed / 1.6);
    } else if (deleting && display.length === 0) {
      setDeleting(false);
      setIndex(i => (i + 1) % words.length);
    }
    return () => clearTimeout(timeout);
  }, [display, deleting, index, words, typingSpeed, pause]);

  return { text: display, deleting };
}
