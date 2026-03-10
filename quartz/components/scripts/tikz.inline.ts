const TIKZJAX_SCRIPT_ID = "quartz-tikzjax-runtime";
const TIKZJAX_SRC = "https://tikzjax.com/v1/tikzjax.js";

function hasTikzBlocks() {
  return (
    document.querySelector('.tikzjax-wrapper script[type="text/tikz"]') !== null
  );
}

function loadTikzJax() {
  return new Promise<void>((resolve, reject) => {
    const existing = document.getElementById(
      TIKZJAX_SCRIPT_ID,
    ) as HTMLScriptElement | null;
    if (existing) {
      if (existing.dataset.loaded === "true") {
        resolve();
      } else {
        existing.addEventListener("load", () => resolve(), { once: true });
        existing.addEventListener(
          "error",
          () => reject(new Error("Failed to load TikZJax")),
          {
            once: true,
          },
        );
      }
      return;
    }

    const script = document.createElement("script");
    script.id = TIKZJAX_SCRIPT_ID;
    script.src = TIKZJAX_SRC;
    script.async = true;
    script.dataset.persist = "true";
    script.addEventListener(
      "load",
      () => {
        script.dataset.loaded = "true";
        resolve();
      },
      { once: true },
    );
    script.addEventListener(
      "error",
      () => reject(new Error("Failed to load TikZJax")),
      {
        once: true,
      },
    );
    document.head.appendChild(script);
  });
}

function rerenderTikzBlocks() {
  document.querySelectorAll(".tikzjax-wrapper").forEach((wrapper) => {
    const sourceScript = wrapper.querySelector(
      'script[type="text/tikz"]',
    ) as HTMLScriptElement | null;
    if (!sourceScript) {
      return;
    }

    if (wrapper.querySelector("svg")) {
      wrapper.classList.add("tikzjax-rendered");
      return;
    }

    const source = sourceScript.textContent ?? "";
    wrapper.replaceChildren();

    const script = document.createElement("script");
    script.type = "text/tikz";
    script.textContent = source;
    wrapper.appendChild(script);

    window.setTimeout(() => {
      if (wrapper.querySelector("svg")) {
        wrapper.classList.add("tikzjax-rendered");
      }
    }, 0);
  });
}

async function renderTikz() {
  if (!hasTikzBlocks()) {
    return;
  }

  try {
    await loadTikzJax();
    rerenderTikzBlocks();
  } catch (error) {
    console.error(error);
  }
}

renderTikz();
document.addEventListener("nav", () => window.setTimeout(renderTikz, 0));
