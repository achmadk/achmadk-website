import Lenis from "lenis";

export function initializeLenis() {
  const lenis = new Lenis();

  const raf: FrameRequestCallback = (time: number) => {
    lenis.raf(time);
    requestAnimationFrame(raf);
  };

  requestAnimationFrame(raf);
}
