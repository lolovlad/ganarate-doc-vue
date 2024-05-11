<template>
  <div id="index-banner" class="parallax-container">
    <div class="section no-pad-bot">
      <div class="container">
        <br><br>
        <h1 class="header center white-text text-lighten-2">DocuMatic</h1>
        <div class="row center">
          <h5 class="header col s12 light white-text">"DocuMatic - создание документов, упрощенное и автоматизированное!"</h5>
        </div>
        <br><br>

      </div>
    </div>
    <div class="parallax"><img src="../static/1.jpg" alt="Unsplashed background img 1" class="filter"></div>
  </div>
  <div class="container">
    <div class="section">

      <!--   Icon Section   -->
      <div class="row">
        <div class="col s12 m4">
          <div class="icon-block">
            <h2 class="center black-text"><i class="material-icons">flash_on</i></h2>
            <h5 class="center">Быстрая работа</h5>

            <p class="light">DocuMatic позволяет вам создавать документы в мгновение ока, экономя ваше время и ресурсы. Наш сервис автоматизирует процесс создания документов, предоставляя готовые шаблоны для различных целей, от бизнес-предложений до юридических контрактов.</p>
          </div>
        </div>

        <div class="col s12 m4">
          <div class="icon-block">
            <h2 class="center black-text"><i class="material-icons">group</i></h2>
            <h5 class="center">Поддержка различных компаний</h5>

            <p class="light">DocuMatic является универсальным решением для автоматизации процесса создания документов для любых компаний и организаций. Мы предоставляем широкий выбор шаблонов документов, которые подходят для различных отраслей и видов деятельности.

            </p>
          </div>
        </div>

        <div class="col s12 m4">
          <div class="icon-block">
            <h2 class="center black-text"><i class="material-icons">settings</i></h2>
            <h5 class="center">Разнообразие документов</h5>

            <p class="light">DocuMatic предоставляет широкий выбор шаблонов документов для различных целей и видов деятельности. Мы постоянно расширяем нашу базу шаблонов, чтобы удовлетворить потребности наших клиентов.</p>
          </div>
        </div>
      </div>

    </div>
  </div>
  <div class="parallax-container">
    <div class="section no-pad-bot">
      <div class="container">
        <br><br>
        <h1 class="header center white-text text-lighten-2">Наша миссия</h1>
        <div class="row center">
          <h5 class="header col s12 light white-text">Мы стремимся предоставить нашим клиентам надежное и эффективное решение для автоматизации процесса создания документов. Наша миссия заключается в том, чтобы помочь людям и компаниям экономить время и ресурсы, упрощая создание документов для бизнеса и личных нужд.</h5>
        </div>
        <br><br>

      </div>
    </div>
    <div class="parallax"><img src="../static/2.jpg" alt="Unsplashed background img 2" class="filter"></div>
  </div>

  <div class="container">
    <div class="section">

      <div class="row">
        <div class="col s12 center">
          <h3><i class="mdi-content-send brown-text"></i></h3>
          <h4>Связаться с нами</h4>
          <p class="left-align light">Если у вас есть вопросы или предложения, мы всегда рады вам помочь. Свяжитесь с нами по телефону +1-800-123-4567, напишите нам на info@documatic.com или воспользуйтесь онлайн-чатом на нашем сайте. Мы отвечаем на все запросы в течение одного рабочего дня. Спасибо, что выбираете DocuMatic!</p>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import M from "materialize-css/dist/js/materialize"
export default {
  name: "BasePage",
  mounted() {
    var elems = document.querySelectorAll('.parallax');
    M.Parallax.init(elems);
  }
}
</script>

<style scoped>
.filter{
  filter: brightness(0.5);
}
</style>