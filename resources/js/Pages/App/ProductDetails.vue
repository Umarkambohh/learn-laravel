<template>
  <app-layout>
    <Navigation />

    <div class="bg-negroni lg:py-12 py-4 lg:mb-10">
      <div class="container flex flex-col lg:flex-row">
        <div class="flex items-center lg:pr-8">
          <div
            class="lg:h-36 lg:w-36 h-20 w-20 flex items-center justify-center rounded-full border-3 border-carona bg-white overflow-hidden">
            <img class="w-2/3 h-2/3 object-cover" src="/resources/images/gallery/person.png" alt="" />
          </div>
          <p class="block lg:hidden text-sm text-montserrat text-dead-pixel ps-4">
            Ein Angebot von <span class="underline">Anbietername</span>
          </p>
        </div>

        <div>
          <p class="hidden lg:block text-sm text-montserrat text-dead-pixel">
            Ein Angebot von
            <span class="underline">Anbietername</span>
          </p>
          <h1 class="text-36 font-semibold text-montserrat text-dead-pixel lg:mb-4">
            Angebotstitel - Viel Platz für extra lange Formulierungen dank zwei
            langer Zeilen
          </h1>

          <div class="hidden xl:flex justify-between">
            <div class="flex">
              <MapPin />
              <div class="ms-4 text-sm text-dead-pixel">
                <p class="font-semibold">Werftstraße 92</p>
                <p>24147 Kiel</p>
              </div>
            </div>
            <div class="flex">
              <Clock />
              <div class="ms-4 text-sm text-dead-pixel">
                <p class="font-semibold">29.01.2024, 14:00 - 16:00</p>
                <p class="underline">Zeige weitere Termine</p>
              </div>
            </div>
            <div class="flex">
              <Users />
              <div class="ms-4 text-sm text-dead-pixel">
                <p class="font-semibold">10+</p>
                <p>Weiterführende Schule</p>
              </div>
            </div>
            <div class="flex">
              <Euro />
              <div class="ms-4 text-sm text-dead-pixel">
                <p class="font-semibold">1 € (Verpflegung)</p>
              </div>
            </div>
            <div class="flex">
              <Globe />
              <div class="ms-4 text-sm text-dead-pixel">
                <p class="font-semibold">www.angebot.de/beratung</p>
                <p class="underline">Zeige soziale Medien</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="container sm:my-8 my-5 xl:my-0 block xl:hidden">
      <div class="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 md:gap-5 gap-3">
        <div class="flex">
          <MapPin />
          <div class="ms-4 text-sm text-dead-pixel">
            <p class="font-semibold">Werftstraße 92</p>
            <p>24147 Kiel</p>
          </div>
        </div>
        <div class="flex">
          <Clock />
          <div class="ms-4 text-sm text-dead-pixel">
            <p class="font-semibold">29.01.2024, 14:00 - 16:00</p>
            <p class="underline">Zeige weitere Termine</p>
          </div>
        </div>
        <div class="flex">
          <Users />
          <div class="ms-4 text-sm text-dead-pixel">
            <p class="font-semibold">10+</p>
            <p>Weiterführende Schule</p>
          </div>
        </div>
        <div class="flex">
          <Euro />
          <div class="ms-4 text-sm text-dead-pixel">
            <p class="font-semibold">1 € (Verpflegung)</p>
          </div>
        </div>
        <div class="flex">
          <Globe />
          <div class="ms-4 text-sm text-dead-pixel">
            <p class="font-semibold">www.angebot.de/beratung</p>
            <p class="underline">Zeige soziale Medien</p>
          </div>
        </div>
      </div>
    </div>

    <div class="container grid grid-cols-12 gap-5 mb-10">
      <div class="xl:col-span-9 lg:col-span-7 col-span-12">
        <div class="lg:p-7 p-4 shadow-content-card">
          <h2 class="text-20 mb-2 font-montserrat font-semibold text-prussian-blue">
            Über das Angebot
          </h2>
          <span
            class="inline-flex text-deluge font-semibold border-2 border-deluge rounded-25 bg-deluge-light py-1.5 lg:px-6 px-3 mr-4 mb-2 lg:mb-0">
            <DoorOpen class="mr-4" /> Ohne Anmeldung
          </span>
          <span
            class="inline-flex text-emerald font-semibold border-2 border-emerald rounded-25 bg-emerald-light py-1.5 lg:px-6 px-3">
            <Euro class="mr-3" />Kostenlos
          </span>
          <p class="mt-2 lg:mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla porta
            tellus et rhoncus consequat. Nunc pulvinar mi laoreet, viverra ex non,
            lobortis ligula. Class aptent taciti sociosqu ad litora torquent per
            conubia nostra, per inceptos himenaeos. Duis maximus orci lacus, at
            efficitur tellus dignissim sed. In vehicula nunc est, vitae
            condimentum augue pulvinar ut. Curabitur non diam sit amet urna
            fringilla viverra in vel sapien. Vestibulum maximus lectus id
            ultricies porttitor. Proin ultricies urna eu pretium tempus.
          </p>
          <p class="mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla porta
            tellus et rhoncus consequat. Nunc pulvinar mi laoreet, viverra ex non,
            lobortis ligula. Class aptent taciti sociosqu ad litora torquent per
            conubia nostra, per inceptos himenaeos. Duis maximus orci lacus, at
            efficitur tellus dignissim sed. In vehicula nunc est, vitae
            condimentum augue pulvinar ut. Curabitur non diam sit amet urna
            fringilla viverra in vel sapien. Vestibulum maximus lectus id
            ultricies porttitor. Proin ultricies urna eu pretium tempus.
          </p>
        </div>

        <div class="lg:p-7 p-4 shadow-content-card mt-5">
          <div class="flex flex-col lg:flex-row lg:gap-6 w-full font-montserrat font-medium text-nevada">
            <div class="lg:w-1/2 w-full mb-8 lg:mb-0">
              <h4 class="text-20 text-prussian-blue mb-4 font-bold">Location</h4>
              <div class="flex font-montserrat mb-6">
                <MapPin />
                <span class="ms-3">Werftstraße 92, 24147 Kiel</span>
              </div>
              <div>
                <!-- <LMap class="z-0 leaflet leaflet__wrapper" style="height: 300px" :zoom="6"
                  :center="[47.21322, -1.559482]" :use-global-leaflet="false">
                  <LTileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution="&amp;copy; <a href=&quot;https://www.openstreetmap.org/&quot;>OpenStreetMap</a> contributors"
                    layer-type="base" name="OpenStreetMap" />
                </LMap> -->
              </div>
            </div>

            <div class="lg:w-1/2 w-full">
              <h5 class="text-20 text-prussian-blue mb-4 font-bold">
                Busverbindung
              </h5>
              <p>
                Trage deine Start-Adresse ein und finde eine Verbindung über
                nah.sh
              </p>
              <div class="flex items-center lg:mt-10 mt-6">
                <div class="flex flex-col mr-4">
                  <MapPin />
                  <EllipsisVertical class="my-1 text-black" />
                  <Crosshair />
                </div>
                <div class="w-full lg:w-auto">
                  <el-input size="large" class="mb-4" placeholder="Start" />
                  <el-input size="large" placeholder="Werftstraße 92" />
                </div>
              </div>
              <button
                class="bg-denim text-white w-full sm:w-2/3 lg:w-full xl:w-2/3 mt-8 lg:py-3 py-2 block mx-auto rounded-bl-20 hover:bg-denim-inverse transition">
                Verbindung anzeigen
              </button>
            </div>
          </div>
        </div>
      </div>

      <div class="xl:col-span-3 lg:col-span-5 col-span-12">
        <div class="lg:p-7 p-4 shadow-content-card">
          <h3 class="text-20 font-montserrat font-semibold text-prussian-blue mb-4">
            Stichworte
          </h3>
          <div class="flex flex-wrap font-montserrat text-atoll">
            <span class="bg-kodama px-3 rounded-25 py-2 mb-3 mr-2">Unterstützung</span>
            <span class="bg-kodama px-3 rounded-25 py-2 mb-3 mr-2">Hilfe</span>
            <span class="bg-kodama px-3 rounded-25 py-2 mb-3 mr-2">Schwangerschaft</span>
            <span class="bg-kodama px-3 rounded-25 py-2 mb-3 mr-2">Finanzen</span>
            <span class="bg-kodama px-3 rounded-25 py-2 mb-3 mr-2">Barrierearm</span>
            <span class="bg-kodama px-3 rounded-25 py-2 mb-3 mr-2">Barrierearm</span>
          </div>
        </div>

        <div class="lg:p-7 p-4 shadow-content-card mt-5">
          <h6 class="text-20 font-montserrat font-semibold text-prussian-blue mb-4">
            Anmeldung
          </h6>
          <p class="lg:mb-3 mb-2 text-cod-gray">
            Melde dich über unsere Webseite an, schreibe uns eine Nachricht oder
            rufe uns an.
          </p>
          <p class="lg:mb-3 mb-2 text-cod-gray">
            Du kannst auch spontan vorbeikommen, aber dann kann es sein, dass kein
            Platz mehr frei ist.
          </p>
          <button
            class="bg-denim text-white block mx-auto w-full sm:w-2/3 lg:w-11/12 mt-8 lg:py-3 py-2 rounded-bl-20 hover:bg-denim-inverse transition">
            Anbietenden Login
          </button>
        </div>

        <div class="lg:p-7 p-4 shadow-content-card mt-5">
          <h6 class="text-20 font-montserrat font-semibold text-prussian-blue mb-4">
            Kontakt
          </h6>

          <ul class="text-nevada font-medium font-montserrat">
            <li class="flex lg:mb-4 mb-2">
              <Users />
              <span class="ms-4">Henri Henrison</span>
            </li>
            <li class="flex lg:mb-4 mb-2">
              <Mail />
              <a class="ms-4 text-denim underline" href="mailto:henri@waschechterisländer.com">henri@waschdee.com</a>
            </li>
            <li class="flex">
              <Phone />
              <a class="ms-4" href="tel:+43 154 611 411 96">tel:+43 154 611 411 96</a>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <h6 class="container text-20 text-prussian-blue font-bold lg:mb-6 mb-2">Related Product</h6>
    <div class="grid grid-cols-4 gap-6 container py-10">
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </div>
  </app-layout>
</template>
<script setup>
import AppLayout from '@/Layouts/AppLayout.vue';
import { DoorOpen, Euro, MapPin, Globe, Users, Clock, Phone, Mail, Crosshair, EllipsisVertical } from "lucide-vue-next";
import ProductCard from "@/Components/App/ProductCard.vue";
import Navigation from "@/Components/App/Navigation.vue";
</script>