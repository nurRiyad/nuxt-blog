<template>
  <article
    class="group m-2 overflow-hidden rounded-2xl border border-zinc-200/80 bg-white/70 text-zinc-700 shadow-sm dark:border-slate-800 dark:bg-slate-900/40 dark:text-zinc-300"
  >
    <NuxtLink to="/">
      <div class="lg:h-48 md:h-36 w-full object-cover object-center group-hover:scale-[1.05] transition-all duration-500">
        <LogoConfused />
      </div>
      <div class="p-5">
        <h2
          class="text-3xl font-semibold text-black dark:text-zinc-300 pb-1 group-hover:text-sky-700 dark:group-hover:text-sky-400"
        >
          No Post Available
        </h2>

        <div class="flex group-hover:underline text-sky-700 dark:text-sky-400 items-center pt-2">
          <p>Back To Home</p>
          <LogoArrow />
        </div>
      </div>
    </NuxtLink>
  </article>
</template>
