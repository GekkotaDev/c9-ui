<script setup lang="ts">
import { AlertDialogAction, type AlertDialogActionProps } from "radix-vue";
import { cn } from "@utils/utils";
import { buttonVariants } from "@ui/button";

const props = defineProps<AlertDialogActionProps>();
</script>

<template>
  <AlertDialogAction
    v-bind="props"
    :class="cn(buttonVariants({ variant: 'destructive' }), $attrs.class ?? '')"
  >
    <slot />
  </AlertDialogAction>
</template>
