<template>
    <el-dialog v-model="showModel" class="feedback__modal text-center font-montserrat w-full" :align-center="true">
        <div>
            <img class="block mx-auto mb-6" src="" alt="">
        </div>

        <h1 class="text-20 font-bold text-black mb-2">Du hast Feedback oder möchtest uns kontaktieren?</h1>
        <p class="text-black mb-4 lg:px-16">
            Dann schreibe uns gern direkt eine Nachricht. Du kannst sie anonym an uns senden oder deine Email angeben,
            damit wir dir antworten können.
        </p>

        <el-form :modal="formData" @submit.prevent="formSubmit" class="lg:px-16">
            <el-form-item :error="errors['email'] ? errors['email'][0] : null">
                <el-input @focus="errors['email'] = null" v-model="formData.email" size="large"
                    placeholder="Deine Email Adresse (optional)" />
            </el-form-item>

            <el-form-item>
                <el-input type="textarea" rows="8" v-model="formData.message" placeholder="Deine Nachricht" />
            </el-form-item>

            <el-form-item>
                <label class="leading-5 flex items-center text-start">
                    <el-checkbox v-model="formData.agree" size="large" />
                    <span>Ich habe die Datenschutzerklärung gelesen und stimme ihr zu.</span>
                </label>
            </el-form-item>
            <button type="submit"
                class="bg-denim text-white w-52 py-3 ml-4 rounded-bl-20 hover:bg-denim-darken transition mt-1 lg:mt-2">
                Absenden
            </button>
        </el-form>
    </el-dialog>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";

const props = defineProps(['modelValue']);
const emit = defineEmits(['update:model-value']);
const showModel = ref(props.modelValue);
const errors = ref<any>([]);

watch(() => props.modelValue, () => {
    if (props.modelValue) showModel.value = props.modelValue;
});

watch(() => showModel.value, () => {
    if (!showModel.value) emit('update:model-value');
});

const formData = ref({
    email: '',
    message: '',
    agree: '',
});

const validateEmail = () => {
    const validated = String(formData.value.email)
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );

    if (!validated) {
        errors.value['email'] = ['Bitte gib eine gültige E-Mail Adresse ein.'];
        return false;
    } else {
        delete errors.value['email'];
        return true;
    }
};
const formSubmit = () => {
    if (!validateEmail()) {
        return;
    }
    console.log(formData.value);

}
</script>