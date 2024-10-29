<template>
  <div class="contact-page">
    <div class="text">
      <p>
        multi-disciplinary artist, with project managing, budgeting, and
        marketing skills - coupled with photography, filmmaking, music, and
        innovative vision to successfully implement ideas from start to finish.
      </p>
      <p>
        from creative writing, consulting/directing, campaign rollouts every
        step in the process is met with intention.
      </p>
      <p>
        through articulating ideas, gathering resources, and communicating
        effectively with the best people for the job, the start of each endeavor
        is made easier.
      </p>
      <p>
        the through line between these final products are collaboration, grasp
        of the master plan, and allocating funds for developments.
      </p>
      <p>new ideas - this is the place to be.</p>
      <p>-myles</p>
      <NuxtLink to="/" class="home-link">back to home</NuxtLink>
    </div>

    <div class="images">
      <NuxtImg src="/images/contact/myles-1.jpg" alt="placeholder" />
      <NuxtImg src="/images/contact/myles-2.jpg" alt="placeholder" />
    </div>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'ninetypho - myles cream',
  meta: [
    {
      name: 'description',
      content: 'music, visuals, photography, skateboarding, croissants',
    },
  ],
})
</script>

<style scoped>
p {
  margin-bottom: 1rem;
}

.home-link {
  margin-top: 3rem;
  display: block;
  color: black;
}

.contact-page {
  gap: 2rem;
  padding: 4rem;
  margin: auto;
  max-width: 1000px;

  @media screen and (min-width: 600px) {
    display: flex;
    justify-content: center;
    align-items: flex-start;
  }
}

.contact-page div {
  flex-basis: 100%;
}

.text {
  margin-bottom: 2rem;

  @media screen and (min-width: 600px) {
    margin-bottom: 0;
    position: sticky;
    top: 2rem;
  }
}

.images img {
  display: block;
  margin-bottom: 2rem;
  width: 100%;
}
</style>
