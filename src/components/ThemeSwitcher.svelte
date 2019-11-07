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

<style>
  div {
    position: absolute;
    top: var(--gutter);
    right: var(--gutter);
  }

  label {
    display: block;
  }
</style>

<div>
  <label aria-label="Switch to {theme}" style="opacity:{$opacity}">
    <input
      type="checkbox"
      on:change={handleChange}
      checked={theme === 'dark'} />
    <!-- <Thumb /> -->
    <!-- <span aria-hidden>
        <Moon />
        Moon
      </span>
      <span style={{ color: '#ffc107' }} aria-hidden>
        <Sun />
        Sun
      </span> -->
  </label>
</div>
