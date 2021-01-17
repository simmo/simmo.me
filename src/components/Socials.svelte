<script lang="ts">
  const links: [text: string, url: string][] = [
    ["GitHub", "http://github.com/simmo"],
    ["LinkedIn", "http://lnkd.in/2T4KbK"],
    ["StackOverflow", "http://stackoverflow.com/users/547345/mike"],
    ["Instagram", "http://instagram.com/mikesimmonds"],
    ["Twitter", "http://twitter.com/mikesimmonds"],
  ];
</script>

<ul>
  {#each links as [text, href]}
    <li>
      <a {href} target="_blank" rel="noopener noreferrer">{text}</a>
    </li>
  {/each}
</ul>

<style>
  ul {
    display: grid;
    list-style: none;
    padding: 0;
    justify-content: start;
    gap: var(--space-tiny) var(--space-large);
  }
</style>
