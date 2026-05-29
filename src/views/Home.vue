
<template>
  <!-- Hero -->
  <section class="relative overflow-hidden bg-slate-950 text-white">
    <div
      class="absolute inset-0 bg-[url('/src/assets/images/image3.png')] bg-cover bg-center opacity-90"
    ></div>
    <div class="absolute inset-0 bg-slate-950/30"></div>

    <div class="relative mx-auto flex min-h-[62vh] max-w-7xl flex-col justify-center px-6 py-12 lg:px-12">
      <span class="inline-flex items-center gap-2 rounded-full bg-emerald-200/15 px-4 py-2 text-sm uppercase tracking-[0.32em] text-emerald-200">
        Explore Rwanda
      </span>
      <h1 class="mt-8 max-w-3xl text-4xl font-bold sm:text-5xl lg:text-6xl">
        Discover Rwanda’s rich landscapes, wildlife, and culture in one unforgettable journey.
      </h1>
      <p class="mt-6 max-w-2xl text-lg text-slate-200 sm:text-xl">
        From misty volcanoes and mountain gorillas to Kigali’s vibrant streets, this is your gateway to the land of a thousand hills.
      </p>

      <div class="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
        <a href="/" class="inline-flex w-full items-center justify-center rounded-full bg-emerald-500 px-8 py-4 text-base font-semibold text-slate-950 transition hover:bg-emerald-400 sm:w-auto">
          Start exploring
        </a>
        <a href="/about" class="inline-flex w-full items-center justify-center rounded-full border border-white/20 bg-white/10 px-8 py-4 text-base text-white transition hover:border-emerald-300 sm:w-auto">
          Learn about Rwanda
        </a>
      </div>

      <div class="mt-14 grid gap-6 sm:grid-cols-3">
        <div class="rounded-3xl bg-white/10 p-6 backdrop-blur-sm">
          <p class="text-3xl font-bold text-emerald-300">5</p>
          <p class="mt-3 text-sm uppercase tracking-[0.18em] text-slate-300">Regions</p>
        </div>
        <div class="rounded-3xl bg-white/10 p-6 backdrop-blur-sm">
          <p class="text-3xl font-bold text-emerald-300">300+</p>
          <p class="mt-3 text-sm uppercase tracking-[0.18em] text-slate-300">Destinations</p>
        </div>
        <div class="rounded-3xl bg-white/10 p-6 backdrop-blur-sm">
          <p class="text-3xl font-bold text-emerald-300">24/7</p>
          <p class="mt-3 text-sm uppercase tracking-[0.18em] text-slate-300">Support</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Experiences -->
  <section class="bg-slate-50 px-6 py-16 lg:px-12">
    <div class="mx-auto max-w-7xl">
      <div class="text-center">
        <p class="text-sm font-semibold uppercase tracking-[0.32em] text-emerald-600">Our highlights</p>
        <h2 class="mt-4 text-3xl font-bold text-slate-900 sm:text-4xl">Experiences that define Rwanda</h2>
        <p class="mx-auto mt-4 max-w-2xl text-base leading-8 text-slate-600">
          Go beyond the ordinary with curated adventures that include gorilla trekking, lakeside retreats, cultural festivals, and scenic mountain routes.
        </p>
      </div>

      <div class="mt-12 grid gap-8 lg:grid-cols-3">
        <article class="rounded-[32px] border border-slate-200 bg-white p-8 shadow-sm">
          <p class="text-sm font-semibold uppercase tracking-[0.24em] text-emerald-600">Nature</p>
          <h3 class="mt-4 text-2xl font-bold text-slate-900">Gorilla trekking</h3>
          <p class="mt-4 text-slate-600 leading-7">Trek through misty forests to meet mountain gorillas and connect with Rwanda’s most iconic wildlife experience.</p>
        </article>
        <article class="rounded-[32px] border border-slate-200 bg-white p-8 shadow-sm">
          <p class="text-sm font-semibold uppercase tracking-[0.24em] text-emerald-600">Culture</p>
          <h3 class="mt-4 text-2xl font-bold text-slate-900">Kigali discovery</h3>
          <p class="mt-4 text-slate-600 leading-7">Explore the city’s museums, markets, art districts, and culinary scene for a taste of modern Rwanda.</p>
        </article>
        <article class="rounded-[32px] border border-slate-200 bg-white p-8 shadow-sm">
          <p class="text-sm font-semibold uppercase tracking-[0.24em] text-emerald-600">Adventure</p>
          <h3 class="mt-4 text-2xl font-bold text-slate-900">Lakes & hills</h3>
          <p class="mt-4 text-slate-600 leading-7">Relax on terrain lakeshores, cycle through rolling hills, and find peaceful moments inside Rwanda’s green valleys.</p>
        </article>
      </div>
    </div>
  </section>

  <!-- Regions preview -->
  <section class="bg-white px-6 py-16 lg:px-12">
    <div class="mx-auto max-w-7xl">
      <div class="mb-10 text-center">
        <p class="text-sm font-semibold uppercase tracking-[0.32em] text-emerald-600">Regions</p>
        <h2 class="mt-4 text-3xl font-bold text-slate-900 sm:text-4xl">Explore all five regions</h2>
      </div>

      <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <div class="group overflow-hidden rounded-[32px] border border-slate-200 bg-slate-950 text-white transition hover:-translate-y-1 hover:shadow-2xl">
          <div class="bg-[url('/src/assets/images/image1.png')] bg-cover bg-center p-8 h-64"></div>
          <div class="p-8">
            <h3 class="text-2xl font-bold">Northern Rwanda</h3>
            <p class="mt-4 text-slate-300">Volcanoes, gorillas, and scenic highland trails.</p>
          </div>
        </div>
        <div class="group overflow-hidden rounded-[32px] border border-slate-200 bg-slate-950 text-white transition hover:-translate-y-1 hover:shadow-2xl">
          <div class="bg-[url('/src/assets/images/image2.png')] bg-cover bg-center p-8 h-64"></div>
          <div class="p-8">
            <h3 class="text-2xl font-bold">Eastern Rwanda</h3>
            <p class="mt-4 text-slate-300">Wildlife parks, lakes, and vibrant rural culture.</p>
          </div>
        </div>
        <div class="group overflow-hidden rounded-[32px] border border-slate-200 bg-slate-950 text-white transition hover:-translate-y-1 hover:shadow-2xl">
          <div class="bg-[url('/src/assets/images/image4.png')] bg-cover bg-center p-8 h-64"></div>
          <div class="p-8">
            <h3 class="text-2xl font-bold">Western Rwanda</h3>
            <p class="mt-4 text-slate-300">Lakeside retreats and Congo Nile Trail views.</p>
          </div>
        </div>
        <div class="group overflow-hidden rounded-[32px] border border-slate-200 bg-slate-950 text-white transition hover:-translate-y-1 hover:shadow-2xl">
          <div class="bg-[url('/src/assets/images/image5.png')] bg-cover bg-center p-8 h-64"></div>
          <div class="p-8">
            <h3 class="text-2xl font-bold">Southern Rwanda</h3>
            <p class="mt-4 text-slate-300">Tea estates, cultural villages, and peaceful hills.</p>
          </div>
        </div>
        <div class="group overflow-hidden rounded-[32px] border border-slate-200 bg-slate-950 text-white transition hover:-translate-y-1 hover:shadow-2xl sm:col-span-2 lg:col-span-1">
          <div class="bg-[url('/src/assets/images/image7.png')] bg-cover bg-center p-8 h-64"></div>
          <div class="p-8">
            <h3 class="text-2xl font-bold">Kigali</h3>
            <p class="mt-4 text-slate-300">Capital energy, markets, museums, and welcoming neighborhoods.</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Call to action -->
  <section class="bg-emerald-500 px-6 py-16 text-white lg:px-12">
    <div class="mx-auto flex max-w-7xl flex-col gap-8 rounded-[32px] bg-emerald-600/95 p-10 text-center shadow-2xl sm:p-14">
      <div>
        <p class="text-sm font-semibold uppercase tracking-[0.32em] text-emerald-100/90">Plan your visit</p>
        <h2 class="mt-4 text-3xl font-bold sm:text-4xl">Ready to explore the land of a thousand hills?</h2>
      </div>
      <p class="mx-auto max-w-2xl text-base leading-7 text-emerald-100/90">
        Discover the best routes, experiences, and immersive moments that make Rwanda a must-see destination for every traveler.
      </p>
      <div class="flex flex-col items-center justify-center gap-4 sm:flex-row">
        <a href="/contact" class="inline-flex rounded-full bg-white px-8 py-4 text-sm font-semibold text-slate-950 transition hover:bg-slate-100">Contact us</a>
        <a href="/services" class="inline-flex rounded-full border border-white/75 px-8 py-4 text-sm font-semibold text-white transition hover:bg-white/10">View services</a>
      </div>
    </div>
  </section>
</template>