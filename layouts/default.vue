<template>
  <div id="main-wrapper">
    <Header />
    <Nuxt class="flex-1 bg-gray-200" keep-alive />
    <Footer />
  </div>
</template>

<style>
#main-wrapper{
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
</style>
