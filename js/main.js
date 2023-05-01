$(document).ready(function () {

  $('#carousel-imagens').slick({
    autoplay: true,
  });

  $('.menu-hamburguer').click(function () {
    $('nav').slideToggle();
  })

  $('#telefone').mask('(00) 00000-0000');

  $('form').validate({
    rules: { //regras para cada input
      nome: {
        required: true
      },
      email: {
        required: true,
        email: true
      },
      telefone: {
        required: true
      },
      mensagem: {
        required: true
      },
      vaiculoDeInteresse: {
        required: false
      }
    },
    messages: { // mensagens para cada input que não preenchido
      nome: 'Por favo, insira seu nome'
    },
    submitHandler: function (form) { // executando função quando o submit é VALIDO
      console.log(form)
    },
    invalidHandler: function (evento, validador) { // executando função quando o submit é INVÁLIDO
      let camposIncorretos = validador.numberOfInvalids();
      if (camposIncorretos) {
        alert(`Existem ${camposIncorretos} campos incorretos!`);
      }
    }
  });

  $('.lista-veículos button').click(function () {
    const destino = $('#contato');

    const nomeVeiculo = $(this).parent().find('h3').text(); //pegando o texto do elemento 'h3'

    $('#veiculo-interesse').val(nomeVeiculo); //mandando o val para "nomeVeiculo"

    $('html').animate({
      scrollTop: destino.offset().top
    }, 1000)
  })

})