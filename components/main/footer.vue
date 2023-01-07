<template>
  <nav class="py-5 border-t">
    <div class="container flex justify-between mx-auto">
      <NuxtLink to="/" class="text-2xl font-medium"> Elon's Blog </NuxtLink>
      <ul class="nav flex space-x-5">
        <li>
          <NuxtLink to="/categories"> Categories </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/blogs"> Blogs </NuxtLink>
        </li>
      </ul>
    </div>
  </nav>
</template>
