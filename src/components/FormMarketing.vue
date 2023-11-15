<template>
  <v-col class="mb-4">
    <h3 class="display-2 font-weight-bold mb-3">Marketing List</h3>
    <v-table>
      <thead>
        <tr>
          <th>Select</th>
          <th>
            <v-select
              label="Sub Type"
              :items="selected_sub_type_list"
              v-model="selected_sub_type"
            ></v-select>
          </th>
          <th>Name</th>
          <th>Unit</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="({ sub_type, name }, index) in form"
          :key="`feature-form-${index}`"
          v-show="selected_sub_type === 'All' ? true : selected_sub_type === sub_type"
        >
          <td>
            <v-checkbox v-model="form[index].selected"></v-checkbox>
          </td>
          <td>{{ sub_type }}</td>
          <td>{{ name }}</td>
          <td>
            <v-text-field type="number" v-model="form[index].unit"></v-text-field>
          </td>
        </tr>
      </tbody>
    </v-table>
  </v-col>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import type { IMarketingForm } from '@/interfaces/main'
// Raw data
import dataRaw from '@/data/marketings'

export default defineComponent({
  name: 'FormMarketing',
  mounted(): void {
    this.form = dataRaw.map(({ sub_type, name, resources }) => {
      return {
        sub_type: this.capitalized(sub_type),
        name,
        resources,
        selected: false,
        unit: 1
      }
    }) as IMarketingForm[]

    this.selected_sub_type_list = [
      ...new Set(dataRaw.map(({ sub_type }) => this.capitalized(sub_type))),
      'All'
    ]
  },
  data() {
    return {
      // Data
      selected_sub_type_list: [] as string[],
      // Form
      selected_sub_type: 'All' as string,
      form: [] as IMarketingForm[]
    }
  },
  methods: {
    capitalized(name: string): string {
      const capitalizedFirst = name[0].toUpperCase()
      const rest = name.slice(1)
      return capitalizedFirst + rest
    }
  }
})
</script>
