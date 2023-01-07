<template>
  <div class="gd-container">
    <header class="fixed w-full backdrop-blur-3xl">
      <MainHeader />
    </header>
    <main class="mt-20">
      <slot />
    </main>
    <footer>
      <MainFooter />
    </footer>
  </div>
</template>

<style scoped>
.gd-container {
  display: grid;
  grid-template-rows: 1fr auto;
  min-height: 100vh;
}
</style>
