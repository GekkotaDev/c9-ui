<script setup lang="ts">
import { Checkbox } from "@ui/checkbox";
import { Label } from "@ui/label";
</script>

<template>
  <Story title="Components/Label">
    <template #controls></template>

    <div>
      <div class="flex items-center space-x-2">
        <Checkbox id="terms" />
        <Label for="terms">Accept terms and conditions</Label>
      </div>
    </div>
  </Story>
</template>

<style scoped></style>

<docs lang="md">
# TODO

add documentation.
</docs>
@ui/checkbox-radix
