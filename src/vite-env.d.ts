/// <reference types="vite/client" />

// `gsap-trial` ships without TypeScript declarations in this repo.
// These minimal types are enough for our usage (SplitText.chars/words/lines and `revert()`).
declare module "gsap-trial/SplitText" {
  export class SplitText {
    chars: any[];
    words: any[];
    lines: any[];

    constructor(targets: any, vars?: any);
    revert(): void;
  }
}
