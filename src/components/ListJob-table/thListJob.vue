<template>
  <div class="about">
    <iframe id="iframe1" src="http://www.igpstracking.net/" frameborder="0"></iframe>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
@Component export default class thListJob extends Vue {
    @Prop() private gpstrackingweb!: string;
}
</script>
