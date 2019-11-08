<script>
  import { onMount } from "svelte";
  import { spring } from "svelte/motion";
  import Logo from "../components/Logo.svelte";
  import Social from "../components/Social.svelte";

  const domain = "simmo.me";
  const from = { opacity: 0, y: -20 };
  const to = { opacity: 1, y: 0 };
  const config = { stiffness: 0.1, damping: 0.4, precision: 0.01 };

  const logoAnimation = spring(from, config);
  const p1Animation = spring(from, config);
  const p2Animation = spring(from, config);
  const socialAnimation = spring(from, config);

  onMount(() => {
    const reveal = (animation, after) => {
      setTimeout(() => {
        animation.set(to);
      }, after * 400);
    };

    reveal(logoAnimation, 1);
    reveal(p1Animation, 1.2);
    reveal(p2Animation, 1.4);
    reveal(socialAnimation, 1.6);
  });
</script>

<style>
  .wrap {
    display: flex;
    justify-content: flex-end;
    flex-direction: column;
    padding-bottom: 5vh;
    padding-right: 3rem;
    max-width: 30rem;
  }

  @media (min-width: 30em) {
    .wrap {
      justify-content: center;
    }
  }

  p {
    color: var(--secondary-text-colour);
    margin: 0;
  }

  p + p {
    margin-top: 1rem;
  }

  a {
    border-bottom: 0.1rem solid transparent;
    color: var(--accent-colour);
    font-weight: 700;
    text-decoration: none;
    transition: border-bottom-color ease-out 0.2s;
  }

  a:hover,
  a:focus {
    border-bottom-color: currentColor;
  }

  .face {
    border-radius: 100%;
    background-color: var(--secondary-background-color);
    display: flex;
    align-items: center;
    justify-content: center;
    width: 70px;
    height: 70px;
    margin-bottom: 1rem;
    padding: 0.5rem;
  }

  img {
    display: block;
  }
</style>

<div class="wrap">
  <div
    class="logo"
    style="opacity:{$logoAnimation.opacity};transform:translate3d(0,{$logoAnimation.y}px,0)">
    <div class="face">
      <img src="/mike.png" width="51" height="70" alt />
    </div>
    <Logo />
  </div>
  <p style="opacity:{$p1Animation.opacity};transform:translate3d(0,{$p1Animation.y}px,0)">
    Hi, I’m Mike Simmonds, a UK based, Lead front-end developer living in Sussex, working in London.<br />Currently <a href="https://zonedigital.com">@Zone</a>.
  </p>
  <p style="opacity:{$p2Animation.opacity};transform:translate3d(0,{$p2Animation.y}px,0)">
    I’ve spent over 10 years working across marketing and publishing sectors to
    deliver high-end web apps, sites and products.
  </p>
  <div style="opacity:{$socialAnimation.opacity};transform:translate3d(0,{$socialAnimation.y}px,0)">
    <Social />
  </div>
</div>
