
<template>
  <section class="relative overflow-hidden">
    <!-- Hero -->
    <div
      class="relative h-[62vh] bg-cover bg-center flex items-center"
      style="background-image: url('/src/assets/images/image5.png');"
    >
      <div class="absolute inset-0 bg-slate-900/70"></div>
      <div class="relative z-10 mx-auto max-w-6xl px-6 text-center text-white">
        <p class="inline-flex items-center gap-2 rounded-full bg-emerald-100/20 px-4 py-2 text-sm uppercase tracking-[0.24em] text-emerald-200">
          About Rwanda
        </p>
        <h1 class="mt-6 text-4xl font-bold sm:text-5xl lg:text-6xl tracking-tight">
          Discover the heart of the land of a thousand hills
        </h1>
        <p class="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-200 sm:text-lg">
          From misty mountains and mountain gorillas to vibrant cities and welcoming people, Rwanda is a destination built on unforgettable experiences and lasting memories.
        </p>
      </div>
    </div>

    <!-- Info Grid -->
    <section class="mx-auto max-w-7xl px-6 py-16 lg:grid lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-16">
      <div>
        <p class="text-sm font-semibold uppercase tracking-[0.32em] text-emerald-600">Why Rwanda</p>
        <h2 class="mt-4 text-3xl font-bold leading-tight text-slate-900 sm:text-4xl">
          A journey shaped by nature, culture, and purpose
        </h2>
        <p class="mt-6 max-w-xl text-base leading-8 text-slate-600 sm:text-lg">
          Rwanda blends rich traditions with vibrant progress. This page introduces what makes the country unique, why visitors fall in love with it, and what we stand for as a gateway to the region.
        </p>

        <div class="mt-10 space-y-6">
          <div class="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 class="text-xl font-semibold text-slate-900">Culture & community</h3>
            <p class="mt-3 text-slate-600">
              Experience warm hospitality, expressive music, powerful storytelling, and community-led tourism that celebrates Rwanda’s people.
            </p>
          </div>
          <div class="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 class="text-xl font-semibold text-slate-900">Wildlife & wilderness</h3>
            <p class="mt-3 text-slate-600">
              Trek ancient forests to see mountain gorillas, explore national parks, and discover the country’s lush highlands and lakes.
            </p>
          </div>
          <div class="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 class="text-xl font-semibold text-slate-900">Adventure & discovery</h3>
            <p class="mt-3 text-slate-600">
              Hike volcanoes, cycle scenic routes, enjoy thrilling canoe trips, and uncover hidden gems across Rwanda’s five regions.
            </p>
          </div>
        </div>
      </div>

      <div class="mt-12 lg:mt-0">
        <div class="grid gap-6 rounded-[32px] bg-slate-950/90 p-6 text-slate-100 shadow-2xl sm:p-8">
          <div>
            <span class="inline-flex rounded-full bg-emerald-500/15 px-3 py-1 text-sm font-semibold text-emerald-200">
              Our mission</span>
            <p class="mt-5 text-lg font-semibold leading-tight">
              Share Rwanda’s natural beauty and cultural richness while supporting sustainable tourism and local communities.
            </p>
          </div>
          <div class="grid gap-5 sm:grid-cols-2">
            <div class="rounded-3xl bg-slate-900/90 p-6">
              <p class="text-4xl font-extrabold text-emerald-300">300+</p>
              <p class="mt-3 text-sm text-slate-400">Million visitors predicted in the next decade as Rwanda continues to grow as a top travel destination.</p>
            </div>
            <div class="rounded-3xl bg-slate-900/90 p-6">
              <p class="text-4xl font-extrabold text-emerald-300">5</p>
              <p class="mt-3 text-sm text-slate-400">Unique regions offering curated experiences from city markets to mountain trails.</p>
            </div>
          </div>
          <div class="rounded-3xl bg-emerald-500/10 p-6 text-slate-50">
            <h4 class="text-lg font-semibold">A country of balance</h4>
            <p class="mt-3 text-sm leading-6 text-slate-200">
              Rwanda blends innovation and respect for nature. Every visitor helps contribute to conservation, care, and future growth.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Values section -->
    <section class="bg-slate-50 py-16">
      <div class="mx-auto max-w-7xl px-6">
        <div class="grid gap-12 lg:grid-cols-3">
          <div class="rounded-3xl bg-white p-8 shadow-sm">
            <h3 class="text-xl font-semibold text-slate-900">Sustainability</h3>
            <p class="mt-4 text-slate-600 leading-7">We support responsible travel, wildlife protection, and opportunities for local businesses.</p>
          </div>
          <div class="rounded-3xl bg-white p-8 shadow-sm">
            <h3 class="text-xl font-semibold text-slate-900">Local stories</h3>
            <p class="mt-4 text-slate-600 leading-7">Every visit is shaped by real people, their traditions, and their dreams for the future.</p>
          </div>
          <div class="rounded-3xl bg-white p-8 shadow-sm">
            <h3 class="text-xl font-semibold text-slate-900">Meaningful travel</h3>
            <p class="mt-4 text-slate-600 leading-7">Enjoy authentic moments, purpose-driven adventures, and experiences that leave a positive impact.</p>
          </div>
        </div>
      </div>
    </section>
  </section>
</template>
