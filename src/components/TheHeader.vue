<script>
export default {};
</script>

<template>
  <div
    class="flex justify-between items-center text-dark-gray w-3/4 mx-auto border-b-2 border-dark-gray py-6"
  >
    <router-link :to="{ path: '/' }">Logo</router-link>
    <nav>
      <ul class="flex space-x-4">
        <li>
          <router-link :to="{ name: 'TheSalon' }">Salon</router-link>
        </li>
        <li>
          <router-link :to="{ name: 'TheGallery' }">Gallery</router-link>
        </li>
        <li>
          <router-link :to="{ name: 'TheBook' }">Book Online</router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<style scoped></style>
