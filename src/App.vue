<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    data() {
        return {};
    },
    created() {}
};
</script>

<style lang="less">
* {
    margin: 0;
    padding: 0;
}
html,
body {
    height: 100%;
    width: 100%;
}
#app {
    font-family: Helvetica Neue, Helvetica, PingFang SC, Hiragino Sans GB,
        Microsoft YaHei, "\5FAE\8F6F\96C5\9ED1", Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    height: 100%;
    width: 100%;
}

#nav {
    padding: 30px;

    a {
        font-weight: bold;
        color: #2c3e50;

        &.router-link-exact-active {
            color: #42b983;
        }
    }
}
</style>
