<template>
    <div class="about">
        <h1>Это тестовый проект, страница добавлена просто чтобы она была.</h1> 
        <img src="/img/hz.jpg" alt="">
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss">
    .about {
        text-align: center;
        max-width: 1000px;
        margin: auto;
        h1 {
            font-size: 70px;
            margin: 0 20px;

            @media (max-width: 1024px) {
                font-size: 50px;
            }

            @media (max-width: 479px) {
                font-size: 30px;
            }
        }

        img {
            width: 100%;
            max-width: 700px;
            height: auto;
        }
    }
</style>