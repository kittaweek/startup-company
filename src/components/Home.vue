<template>
  <v-container>
    <v-row class="text-center">
      <HeaderComponent :default-data="form_show" :response="responseIsShow" />
    </v-row>
    <v-row>
      <FormFeature v-show="form_show.is_features" />
      <FormHosting v-show="form_show.is_hostings" />
      <FormMarketing v-show="form_show.is_marketings" />
    </v-row>
    <v-row>
      <Inventories />
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import type {
  IFeature,
  IHosting,
  IRole,
  IFeatureForm,
  IHostingForm,
  IInventory,
  IResource,
  IResourceCal,
  IInventoriesDetail,
  IShowForm
} from '@/interfaces/main'

// Raw data
import inventoriesDesignerRaw from '@/data/Inventories/Designer'
import inventoriesDeveloperRaw from '@/data/Inventories/Developer'
import inventoriesLeadDeveloperRaw from '@/data/Inventories/Lead Developer'
import inventoriesMaketerRaw from '@/data/Inventories/Maketer'
import inventoriesSystemAdminRaw from '@/data/Inventories/System Admin'
import HeaderComponent from '@/components/Header.vue'
import FormFeature from '@/components/FormFeature.vue'
import FormHosting from '@/components/FormHosting.vue'
import FormMarketing from '@/components/FormMarketing.vue'
import Inventories from '@/components/Inventories.vue'

import type { TRole } from '@/interfaces/main'
export default defineComponent({
  name: 'HomeComponent',
  components: { HeaderComponent, FormFeature, FormHosting, FormMarketing, Inventories },
  mounted(): void {},
  data() {
    return {
      form_show: {
        is_features: true,
        is_hostings: true,
        is_marketings: true
      } as IShowForm,
      // Raw Data
      featuresRaw: [] as IFeature[],
      hostingsRaw: [] as IHosting[],
      rolesRaw: [] as IRole[],
      inventoriesDesignerRaw,
      inventoriesDeveloperRaw,
      inventoriesLeadDeveloperRaw,
      inventoriesMaketerRaw,
      inventoriesSystemAdminRaw,
      // Data
      selected_type_list: [] as string[],
      selected_sub_type_list: [] as string[],
      selected_role_list: [] as string[],
      selected_level_list: [] as string[],
      inventories: [] as IInventoriesDetail[],

      // Form
      selected_type: 'All' as string,
      selected_sub_type: 'All' as string
    }
  },
  methods: {
    capitalized(name: string): string {
      const capitalizedFirst = name[0].toUpperCase()
      const rest = name.slice(1)
      return capitalizedFirst + rest
    },
    responseIsShow(value: IShowForm): void {
      this.form_show = value
    },
    submit(): void {
      const featuresTmp = this.features_form.filter(({ selected }) => selected === true)
      this.getResourcesFromFeatures(featuresTmp)
    },
    getResourcesFromFeatures(features: IFeatureForm[]) {
      let mainResources = [] as IResourceCal[]
      // features.map(({ resources, unit }) => {
      //   mainResources.push(...resources, ...{ featureUnit: unit })
      // })
      features.map(({ resources, unit }) => {
        mainResources.push(
          ...(resources.map((item) => {
            return { ...item, featureUnit: unit }
          }) as IResourceCal[])
        )
      })

      const inventories = this.getInventoriesFromResources(mainResources).reduce(
        (total: IInventoriesDetail[], current_value: IInventoriesDetail) => {
          if (!total.some(({ name }) => name === current_value.name)) {
            total.push(current_value)
          } else {
            const total_index = total.findIndex(({ name }) => name === current_value.name)
            total[total_index].unit += current_value.unit
          }
          return total
        },
        []
      )
      this.inventories = inventories
    },
    getInventoriesFromResources(resourcesList: IResourceCal[]): IInventoriesDetail[] {
      let inventoryList = [] as IInventoriesDetail[]
      resourcesList.map(({ role, name, unit, featureUnit }) => {
        if (role === 'Designer') {
          inventoryList.push(
            ...this.getInventory(this.inventoriesDesignerRaw, name, role, unit, featureUnit)
          )
        }
        if (role === 'Developer') {
          inventoryList.push(
            ...this.getInventory(this.inventoriesDeveloperRaw, name, role, unit, featureUnit)
          )
        }
        if (role === 'Lead Developer') {
          inventoryList.push(
            ...this.getInventory(this.inventoriesLeadDeveloperRaw, name, role, unit, featureUnit)
          )
        }
      })
      return inventoryList
    },
    getInventory(
      invertoriesRaw: IInventory[],
      nameChk: string,
      role: TRole,
      unit: number,
      featureUnit: number
    ): IInventoriesDetail[] {
      const { level, name, time, resources } = invertoriesRaw.find(
        ({ name }) => name === nameChk
      ) as IInventory
      const nestInventory = resources
        ? this.getInventoriesFromResources(
            resources.map((item) => {
              return { ...item, featureUnit }
            }) as IResourceCal[]
          )
        : []
      return [
        {
          level,
          name,
          time,
          role,
          unit: unit * featureUnit
        },
        ...nestInventory
      ] as IInventoriesDetail[]
    }
  }
})
</script>
