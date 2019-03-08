<template>
  <div>
    <iframe src="https://6qfaaa.axshare.com/#g=1&p=%E5%88%9B%E5%BB%BA%E5%BA%94%E7%94%A8" frameborder="0" ref="iframe" @ready="test"></iframe>
  </div>
</template>

<script>
  // import api from '@/store/api.js';
  export default {
    name: 'index',
    async mounted () {
      // let data = await api.getHtml('/axshare/#p=%E5%BA%94%E7%94%A8%E7%A9%BA%E9%97%B4-%E6%AD%A3%E5%B8%B8%E8%BF%90%E8%90%A5&g=1');
      // console.log(data);
    },
    methods: {
      test () {
        console.log('asd');
      }
    }
  };
</script>

<style scoped lang=scss>

</style>
