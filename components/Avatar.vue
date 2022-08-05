<!-- eslint-disable vue/multi-word-component-names -->
<!-- eslint-disable vue/no-parsing-error -->
<template>
  <div class="w-[44px] h-[44px] rounded-full select-none">
    <div v-if="isHaveAvatar" class="w-full h-full">
      <img
        :src="srcImage"
        alt=""
        class="w-full h-full object-cover rounded-full"
      />
    </div>
    <div v-else class="w-full h-full bg-dark_primary flex items-center justify-center rounded-full">
      <p class="uppercase font-bold text-[1.2rem] text-white">{{ firstChar }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isHaveAvatar: Boolean,
    firstChar: {
      type: String,
      default: () => {
        return ''
      },
    },
    srcImage: {
      type: String,
      default: () => {
        return ''
      },
    },
  },

}
</script>
