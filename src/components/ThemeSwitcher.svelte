<script>
  import { onMount } from "svelte";
  import { spring } from "svelte/motion";

  const hasWindow = typeof window !== "undefined";

  let theme = hasWindow && window.__theme;

  if (hasWindow) {
    window.__onThemeChange = newTheme => {
      theme = newTheme;
    };
  }

  const handleChange = ({ target: { checked } }) => {
    window.__saveTheme(checked ? "dark" : "light");
  };

  const opacity = spring(0, {
    stiffness: 0.1,
    damping: 0.25
  });

  onMount(() => {
    opacity.set(1);
  });
</script>

<!--

const icon = css`
  color: #fff;
  display: block;
  height: 100%;
  padding: 0.2rem;
  width: 50%;

  > svg {
    height: 100%;
    object-fit: contain;
    width: 100%;
  }
` -->

<style>
  div {
    position: absolute;
    top: var(--gutter);
    right: var(--gutter);
  }

  label {
    box-sizing: content-box;
    background-color: #000;
    border-radius: 5rem;
    align-items: center;
    justify-content: space-around;
    display: flex;
    padding: 2px;
    position: relative;
    height: 1.5rem;
    width: 3.5rem;
  }

  .thumb {
    display: block;
    background-color: #fff;
    border-radius: 100%;
    position: absolute;
    top: 2px;
    left: 2px;
    height: 1.5rem;
    width: 1.5rem;
    transition: transform 0.2s, box-shadow 0.2s;
  }

  input {
    appearance: none;
    background: none;
    border: 0;
    border-radius: 0;
    margin: 0;
    padding: 0;
    width: 0;
    height: 0;
    outline: none;
  }

  input:focus + .thumb {
    box-shadow: 0 0 2px 3px var(--accent-colour);
  }

  input:checked + .thumb {
    transform: translateX(2rem);
  }

  .icon {
    color: #fff;
    display: block;
    height: 100%;
    padding: 0.2rem;
    width: 50%;
  }

  .icon svg {
    height: 100%;
    object-fit: contain;
    width: 100%;
  }
</style>

<div>
  <label aria-label="Switch to {theme}" style="opacity:{$opacity}">
    <input type="checkbox" on:change={handleChange} checked={theme === 'dark'} />
    <span class="thumb"></span>
    <span class="icon" aria-hidden>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 416 416">
        <path d="M198.888 217.129C162.609 180.827 152.873 128.389 168.94 83c-17.553 6.21-34.147 15.92-48.173 29.946-50.356 50.352-50.356 131.971 0 182.298 50.33 50.329 131.93 50.354 182.284 0 14.075-14.025 23.763-30.619 29.949-48.17-45.365 16.065-97.831 6.33-134.112-29.945z" />
      </svg>
    </span>
    <span class="icon" style="color: #ffc107" aria-hidden>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 416 416">
        <path d="M208 96c-61.75 0-112 50.25-112 112 0 61.749 50.25 112 112 112s112-50.251 112-112c0-61.75-50.25-112-112-112zm0-32c8.833 0 16-7.146 16-16V16c0-8.833-7.167-16-16-16-8.854 0-16 7.167-16 16v32c0 8.854 7.146 16 16 16zm0 288c-8.854 0-16 7.167-16 16v32c0 8.854 7.146 16 16 16 8.833 0 16-7.146 16-16v-32c0-8.833-7.167-16-16-16zm124.417-245.833l22.625-22.625c6.25-6.25 6.25-16.375 0-22.625-6.251-6.25-16.375-6.25-22.625 0l-22.625 22.625c-6.251 6.25-6.251 16.375 0 22.625 6.25 6.249 16.374 6.249 22.625 0zM83.541 309.854l-22.623 22.625c-6.252 6.25-6.252 16.376 0 22.625 6.249 6.25 16.373 6.25 22.623 0l22.625-22.625c6.251-6.291 6.251-16.375 0-22.625-6.249-6.25-16.374-6.292-22.625 0zM64 208c0-8.833-7.167-16-16-16H16c-8.854 0-16 7.167-16 16 0 8.854 7.146 16 16 16h32c8.833 0 16-7.146 16-16zm336-16h-32c-8.854 0-16 7.167-16 16 0 8.854 7.146 16 16 16h32c8.833 0 16-7.146 16-16 0-8.833-7.167-16-16-16zM83.521 106.167c6.249 6.25 16.375 6.25 22.625 0 6.249-6.25 6.249-16.375 0-22.625L83.521 60.917c-6.25-6.25-16.376-6.25-22.625 0-6.25 6.25-6.25 16.375 0 22.625l22.625 22.625zm248.938 203.645c-6.293-6.25-16.376-6.25-22.625 0-6.25 6.249-6.293 16.375 0 22.625l22.625 22.625c6.249 6.249 16.374 6.249 22.625 0 6.249-6.25 6.249-16.376 0-22.625l-22.625-22.625z" />
      </svg>
    </span>
  </label>
</div>
