<template>
  <footer class="page-footer red darken-4">
    <div class="container">
      <div class="row">
        <div class="col l6 s12">
          <h5 class="white-text">DocuSec</h5>
          <p class="grey-text text-lighten-4">DocuSec является инновационным онлайн-решением для автоматизации процесса создания документов. Наш сайт предоставляет широкий выбор шаблонов документов, которые можно легко настроить и скачать в нужном формате. DocuMatic помогает экономить время и ресурсы, упрощая создание документов для бизнеса и личных нужд. Обратитесь к нам сегодня и обновите свой опыт работы с документами!</p>
        </div>
        <div class="col l4 offset-l2 s12">
          <h5 class="white-text">Меню</h5>
          <ul>
            <li><a class="grey-text text-lighten-3"  @click="$router.push(`/sign-in`)">Вход</a></li>
            <li><a class="grey-text text-lighten-3" @click="$router.push(`/sign-up`)">Регистрация</a></li>
          </ul>
        </div>
      </div>
    </div>
    <div class="footer-copyright">
      <div class="container">
        © 2024 Copyright Text
        <a class="grey-text text-lighten-4 right" href="#!">Больше подробностей</a>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "BaseFooter"
}
</script>

<style scoped>

</style>