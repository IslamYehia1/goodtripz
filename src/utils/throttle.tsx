export default function throttle(delay: number, fn: (args: string) => void) {
  let inThrottle = false;
  return (args: string) => {
    if (inThrottle) {
      return;
    }
    inThrottle = true;
    fn(args);
    setTimeout(() => {
      inThrottle = false;
    }, delay);
  };
}
