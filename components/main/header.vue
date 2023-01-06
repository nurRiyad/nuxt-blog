<template>
  <nav class="py-5 border-b border-gray-700">
    <div class="container flex justify-between mx-auto">
      <NuxtLink to="/" class="text-2xl font-medium">
        Riyad's Blog
      </NuxtLink>
      <ul class="nav flex space-x-5">
        <li>
          <NuxtLink to="/categories">
            Categories
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/blogs">
            Blogs
          </NuxtLink>
        </li>
      </ul>
    </div>
  </nav>
</template>
