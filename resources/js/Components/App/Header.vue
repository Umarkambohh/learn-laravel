<template>
  <header class="bg-blue-100">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-16">
        <div class="flex items-center">
          <div class="flex-shrink-0">
            <img class="h-8 w-auto"
              src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-google-sva-scholarship-20.png"
              alt="=">
          </div>
          <div class="hidden sm:ml-6 sm:flex sm:space-x-8">
            <Link href="/"
              class="border-blue-500 text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
            home
            </Link>
            <Link href="/about"
              class="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
            about
            </Link>
            <Link href="/contact"
              class="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
            contact
            </Link>
            <Link href="/"
              class="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
            products
            </Link>
          </div>
        </div>
        <div class="hidden sm:ml-6 sm:flex sm:items-center">
          <el-input class="mr-3 h-10" style="width: 240px" placeholder="Please input" />
          <div class="relative">
            <el-select class="mr-2" v-model="flag" size="large" style="width: 140px">
              <el-option v-for="option in languageOptions" :key="option.value" :label="option.label"
                :value="option.value">
                <template #default="scope">
                  <div class="flex">
                    <img :src="option.image" class="option-image" width="25px" />
                    <span class="pl-3">{{ option.label }}</span>
                  </div>
                </template>
              </el-option>
            </el-select>
          </div>
          <button class="px-4 py-2 bg-blue-500 text-white text-sm font-medium rounded-md"
            @click="$emit('openModal')">Feedback</button>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import SearchBar from "@/Components/App/SearchBar.vue";
import { ref } from "vue";
defineEmits(['openModal'])

const flag = ref('de');

const languageOptions = ref([
  { value: 'en', label: 'English', image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAkFBMVEXeKRD/3gD/4wD/4QDcHBDlTwz/5gD/3QDdIxD/5AD/6QD/6gDcHBH+2ADbFRH/7gDmVwziQg7gMw/pcAvsfgraABHreQrxmQjhOg7wkwj4uwPynwj5xQTzqAfvigjnXwzqbQr8zAD2swX3vAXnZQz90gD6yATwkAjjSw7thgr1rgbpdAz1pQXmVAvsgwrsfQopDEFcAAAHOklEQVR4nO2caXeyPBCGyUIybEGoCyIuIKh16///dy9ute9TbQUXKGeu0089ypmbmWQmkxhNQxAEQRAEQZBLAFRtwZMBmFRtwpNRH6Gq2oanYB9jU41l0qnWlOfQnoDaabT1yO01USFPs6gNHZt7CXVHTVQIfG1a2dzXloK43UaOQ9uPGXVZzIi00kYq1NSbIJIZhBDRUo3MiKASQfbQXsvn9ddY3ELboweFRGTDlcftJ1j1SILC31A6YQeFkgpn2h/7TzDrYcBiXtSJthedfEiFaZJo5D3FtAdhd7OgmETbD/NhKPcCnXDQTnWv3j5c0rTQOOLakBFqWrkbRbgJ8vK73isMCByjx4t8gQ9c13WSQUal1fsDyUJNXDotFKbzbNldQEfNDWKN6j6L5nSWJs2KhKm/0Doqz4GwmArzo/4KQcvnfdYr4sPTqONtab0Vie9qUKkriUi8EsMJ/KVI/4DCtZnP+VlaZsKw02xc+4kG/GxXnLBRGUtB6+u1V6jSfQktlgWT/gEIap3p96j1XiF9ULjVL/XzfC17WCJsH2AbBGmpUHgm6o0dFJpL/37bwB8OPpdiNXEnHx4XQdTZPMKJfbO/l5hXqq3J/c+7H9ubHRUSs/2A6iSvAcx+ro5rrb7TroMT7ZXzqTB5gEF8kgljrmDci93wAWF/PzAgJ5hTpqz5B7sVU0pH/Zia8q0WAr3paalOpPWAzif3IkMySYyyCfbR2G/Op8I8TO/vXis/pIfmjVOPkhx6jJyhJXpu/4Orxfo4run6taMQ+EVUEIqzQOmuOpc/d5s3eMdbE3HqwL2/du3vtfRLLNpfgjQvayLv4sc2m5uKz01iuZ8hQZ2PV/aJQZ8KQS9B/ge79BFDOO+3KFzFYv+Eow+Fs3plUWNDjwjKvkP+kfgdg07HN3rDG7cHyWzXY8y/xcx8rnmlF9UqokySwhjOwLut1gGwbcX5ZlfJO1HsEFd2XzqdKn0oxe+K/sGcfWiFijlbiygRPW/cnQ+m4WuXx9x/z4pJlNQatgpGGkBCaRbkzgQtGC9em/RBGyfi35H3k0CTzP3CccYHxN3ui6O8/n55VcODnqA3D0YrSkvMhmpkOBWuDIFPiHWbRGotvTIThXpzt5WeXVBaaN4i0HA+VKmZ0E7DR9tc1AI+l/Q3fYxOy27P80Wr6jUFqEmeGn92oBz45VdSVQvUdieZhtL4wYEi7tZ+X/4XfkyNBk0acIAEIE2ueTCbB3/cgXtAba4MRbEunuVrifq4EqYifEBDqgYAT66kDOaU2merHbbnXEsYZuHDNbVEba9mRDOsRRvwTnZrnGsKmaz/tu7v2Hp81YfSmt+ZLerwgvhWXq/bxPQ+G6EGR9xAG34NUibY1yKOUf0uJ/JB9Vsyth6dFUoqet3oy5JK3nc4HTRW/cFo/nHOFdKiK43riXnWLKJ7LFRjd1i1QtDWn3KYO9PV7rTh3DgXOeY9lanqm9KvuLIFPTqpobQP+zIUOpv49E95bCWVezhE1GxX7EToHmdSRuNzX1r5w9PC2IjKF9+27jA25RygulOnoA0O3qIk2XxZCdqqnR01skWJMDsoUu8sr23Hvuct9E2rmvNEsDgEqcj6/x8voFoJ249QMSocZuBtR++jeb8f7R4QLcNwGsf9agpAmORBKpk5nXzr2Npez9mpZ2HhAIOg75gGNcT+FRmmEC6rLDH2TSIFW3sXWtLgdyOxC7PiSR/gLTn3myUxZy/dXvtqiZcHqZm1tYuzCcBmmbuBFQ/TfM0ZzJ3TfMxEUnTL42HwlFEzHF99v9x/p4KFZWpT0NLw5MNBda0Ce+4avZ8GCNh65mblalO1iffjkDmrylIi+JmcdH5+vwqG1rxUSjzUg/mfMays/Objqffr6wV7W8rCPNUahDFJiTFrVdWyg8UtRSOAVyaVgRfm01R/MmOUvVc2Dm+cwkvZx9PMjNtceQPHTZrQ7vkGzMX+5IatdWfOH/idQmEgGCaLw1KF68P3qs15AuCtPveNeaBXasvTOI+9mhzzRn4H6v+TkvtQ6aTqttNz4Z7TzFsjtOPCCIKlW31z9PFA0E213Wkb0HrMGjdQoaaN4qTtKcXbDhWVVdjPBPypKWeD8SSmzNCbqFCzW5JS6uRrQUaase3/DTWy5P5iDEaCTiOdCOr0OwaW9XWwG1iiqeDz5g+XJh968yobvvi8vYUYrhXX+26TEtjeafuKCZJFw1Fa/IqbWrO7auDQ3WbOcj7xNG43ayAC9BkTJt3f3uLvdtKqtujBAN8Kl0a9diikuWxiroC3WbIdB5qaONQcNs1/exbePgMC9Jg7aKIPz7e3BKHba8Jx2+vwlDZcIfDhX7hF6R643ozztj/QdH0IgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiDIn+I/TAdklg5iZQQAAAAASUVORK5CYII=' },
  { value: 'de', label: 'Deutsch', image: 'data:image/png;base64,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' },
  { value: 'tr', label: 'Turkish', image: 'data:image/png;base64,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' },
]);
</script>
