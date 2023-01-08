<template>
  <div class="gd-container font-spacegrotesk">
    <header class="fixed w-full backdrop-blur-3xl z-10">
      <MainHeader />
    </header>
    <main>
      <div class="p-9"></div>
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
