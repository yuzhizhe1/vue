<template>
  <div
    :class="Display"
    @click="DisplayEvent"
  >
    <button
      type="button"
      class="button"
    >
      <span>{{title}}</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        focusable="false"
        viewBox="0 0 24 24"
        class="button-icon"
      >
        <path d="M18.9,10.9h-6v-6c0-0.6-0.4-1-1-1s-1,0.4-1,1v6h-6c-0.6,0-1,0.4-1,1s0.4,1,1,1h6v6c0,0.6,0.4,1,1,1s1-0.4,1-1v-6h6c0.6,0,1-0.4,1-1S19.5,10.9,18.9,10.9z"></path>
      </svg>
    </button>
    <div class="items">
      <slot></slot>
    </div>
  </div>
</template>
<script setup>
const title = defineModel();
let Display = ref("NavScreenMenuGroup");
const DisplayEvent = () => {
  return (Display.value =
    Display.value === "NavScreenMenuGroup"
      ? "NavScreenMenuGroup block"
      : "NavScreenMenuGroup");
};
</script>
<style lang="less" scoped>
.NavScreenMenuGroup {
  border-bottom: 1px solid var(--divider-light);
  height: 48px;
  overflow: hidden;
  transition: border-color 0.5s;

  button.button {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px 4px 11px 0;
    width: 100%;
    line-height: 24px;
    font-size: 14px;
    font-weight: 500;
    color: var(--text1);
    transition: color 0.25s;

    svg.button-icon {
      width: 14px;
      height: 14px;
      fill: var(--text2);
      transition: fill 0.5s, transform 0.25s;
    }
  }

  div.items {
    //   visibility: hidden;

    a.NavScreenMenuGroupLink {
      display: block;
      line-height: 32px;
      font-size: 13px;
      font-weight: 400;
      color: var(--text1);
      transition: color 0.25s;
      margin-left: 0.6em;
    }
    .link-icon {
      display: inline-block;
      margin-top: -2px;
      margin-left: 4px;
      width: 11px;
      height: 11px;
      fill: var(--text3);
      transition: fill 0.25s;
    }
  }

  .NavScreenMenuLink {
    display: block;
    border-bottom: 1px solid var(--divider-light);
    padding: 12px 0 11px;
    line-height: 24px;
    font-size: 14px;
    font-weight: 500;
    color: var(--text1);
    transition: border-color 0.5s, color 0.25s;
  }
}
.NavScreenMenuGroup.block {
  padding-bottom: 10px;
  height: auto;
  .items {
    visibility: visible;
  }
}
</style>