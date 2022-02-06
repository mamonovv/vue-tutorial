export default {
  props: {
    show: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    hideDialog: function () {
      this.$emit('update:show', false)
    },
  },
  mounted() {
    console.log('mixin mounted')
  },
}
