<template>
  <v-col cols="8">
    <v-img :src="logo" class="my-3" contain height="200" />
    <h1 class="display-2 font-weight-bold mb-3">Startup Company</h1>
  </v-col>
  <v-col>
    <v-checkbox label="Features" v-model="form.is_features" @change="change" />
    <v-checkbox label="Hostings" v-model="form.is_hostings" @change="change" />
    <v-checkbox label="Marketings" v-model="form.is_marketings" @change="change" />
  </v-col>
</template>

<script lang="ts">
import { defineComponent, type PropType } from 'vue'
import logo from '@/assets/logo.jpg'
import type { IShowForm } from '@/interfaces/main'
export default defineComponent({
  name: 'HeaderComponent',
  props: {
    defaultData: {
      type: Object as PropType<IShowForm>,
      required: true
    },
    response: {
      type: Function,
      required: true,
      default: () => true
    }
  },
  watch: {
    defaultData(val) {
      this.form = val
    }
  },
  data() {
    return {
      logo,
      form: {
        is_features: true,
        is_hostings: true,
        is_marketings: true
      } as IShowForm
    }
  },
  methods: {
    change(): void {
      this.response(this.form)
    }
  }
})
</script>
