<template>
  <div class="flex w-full justify-center text-xs md:text-base">
    <div class="text-black content-center flex gap-7">
      <div class="flex items-center">
        <LogoDate />
        <slot name="date"></slot>
      </div>
      <div class="flex items-center gap-2 flex-wrap punder">
        <LogoTag />
        <slot name="tag1"></slot>
        <slot name="tag2"></slot>
        <slot name="tag3"></slot>
        <slot name="tag4"></slot>
        <slot name="tag5"></slot>
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<style scoped>
.punder {
  text-decoration-line: underline;
}
</style>
