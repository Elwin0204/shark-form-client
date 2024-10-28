<template>
  <div
    class="relative inline-flex cursor-pointer items-center justify-center gap-16px whitespace-nowrap px-24px py-6px mr-18px"
    :class="['chrome-tab', { 'chrome-tab_active': active }]"
  >
    <div
      class="pointer-events-none absolute left-0 top-0 h-full w-full -z-1 chrome-tab__bg"
    >
      <svg class="size-full">
        <defs>
          <symbol id="geometry-left" viewBox="0 0 214 36">
            <path d="M17 0h197v36H0v-2c4.5 0 9-3.5 9-8V8c0-4.5 3.5-8 8-8z" />
          </symbol>
          <symbol id="geometry-right" viewBox="0 0 214 36">
            <use xlink:href="#geometry-left" />
          </symbol>
          <clipPath>
            <rect width="100%" height="100%" x="0" />
          </clipPath>
        </defs>
        <svg width="51%" height="100%">
          <use
            xlink:href="#geometry-left"
            width="214"
            height="36"
            fill="currentColor"
          />
        </svg>
        <g transform="scale(-1, 1)">
          <svg width="51%" height="100%" x="-100%" y="0">
            <use
              xlink:href="#geometry-right"
              width="214"
              height="36"
              fill="currentColor"
            />
          </svg>
        </g>
      </svg>
    </div>
    <slot name="prefix"></slot>
    <slot></slot>
    <slot name="suffix"></slot>
    <div
      class="absolute right-7px h-16px w-1px bg-#1f2225 chrome-tab-divider"
    ></div>
  </div>
</template>
<script>
export default {
  name: "TabChrome",
  props: {
    active: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
<style lang="scss" scoped>
.chrome-tab:hover {
  z-index: 9;
}

.chrome-tab_active {
  z-index: 10;
  color: #409eff;
}

.chrome-tab__bg {
  color: transparent;
}

.chrome-tab_active .chrome-tab__bg {
  color: #d9ecff;
}

.chrome-tab:hover .chrome-tab__bg {
  color: #dee1e6;
}

.chrome-tab_active:hover .chrome-tab__bg {
  color: #d9ecff;
}

.chrome-tab_active .chrome-tab-divider {
  opacity: 0;
}

.chrome-tab:hover .chrome-tab-divider {
  opacity: 0;
}

.chrome-tab .svg-close:hover {
  font-size: 12px;
  color: #ffffff;
  background-color: #9ca3af;
}

.chrome-tab_active .svg-close:hover {
  background-color: #409eff;
}
</style>
