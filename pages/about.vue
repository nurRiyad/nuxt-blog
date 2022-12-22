<script setup lang="ts">
definePageMeta({
  layout: "list",
});
</script>

<template>
  <div
    class="container mx-auto max-w-6xl font-ibmmono antialiased min-h-screen"
  >
    <div class="flex gap-14">
      <div class="m-2 rounded-lg object-cover">
        <img
          class="ring ring-blue-500 rounded-lg h-48"
          src="@/assets/img/sdf.jpg"
          alt="profile pic"
        />
      </div>
      <div class="basis-3/4 bg-white p-4 rounded-lg">
        <div class="pb-3">
          <h1 class="font-semibold text-xl">Md. AL Asad Nur Riyad</h1>
          <h3 class="text-sm">Software Engineer @AppsCode</h3>
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum sint,
          perspiciatis, tenetur commodi quasi doloremque magni minus hic itaque
          in saepe a assumenda totam quidem suscipit impedit, aliquam earum
          molestias.
        </p>

        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus
          quibusdam tempore minus dignissimos nam sed ipsa eos odio numquam amet
          hic similique quae rem repellat fugit perspiciatis excepturi quidem,
          sequi obcaecati maiores laboriosam optio nostrum, modi eligendi?
          Accusamus, quidem nobis!
        </p>
      </div>
    </div>
  </div>
</template>
