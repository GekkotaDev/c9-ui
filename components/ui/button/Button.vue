<script setup lang="ts">
import { Primitive, type PrimitiveProps } from "radix-vue";
import { buttonVariants } from "./index";
import { cn } from "@utils/utils";

import { Ripple } from "@ui/ripple";

interface Props extends PrimitiveProps {
  variant?: NonNullable<Parameters<typeof buttonVariants>[0]>["variant"];
  size?: NonNullable<Parameters<typeof buttonVariants>[0]>["size"];
  as?: string;
}

withDefaults(defineProps<Props>(), {
  as: "button",
});
</script>

<template>
  <Primitive
    :as="as"
    :as-child="asChild"
    :class="cn(buttonVariants({ variant, size }), $attrs.class ?? '')"
  >
    <Ripple :if="variant !== 'link'" />
    <slot />
  </Primitive>
</template>

<style></style>
