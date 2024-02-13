import Lenis from "@studio-freight/lenis";

export function initializeLenis() {
  const lenis = new Lenis();

  // lenis.on("scroll", (e: any) => {
  //   console.log(e);
  // });

  const raf: FrameRequestCallback = (time: number) => {
    lenis.raf(time);
    requestAnimationFrame(raf);
  };

  requestAnimationFrame(raf);
}
