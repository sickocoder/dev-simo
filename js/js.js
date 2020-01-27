$(document).ready(function() {
  $("body").css({
    background: "#F2F2F2"
  });

  //Algoritmo pra ocultar e desocultar o menu em telas pequenas
  contador = 0;
  $(".menu-oculto").click(function() {
    menuOculto(contador);

    contador++;
    if (contador > 1) contador = 0;
  });

  function menuOculto(x) {
    if (x == 0) {
      $(".lista-oculta").css({
        display: "flex"
      });

      console.log(x);
    } else if (x == 1) {
      $(".lista-oculta").css({
        display: "none"
      });

      console.log(x);
    }
  }
});

//----------------------------- Navegação one page-----------

$(".logo").click(() => {
  $(".landing").css({
    display: "flex"
  });
  $(".servicos").css({
    display: "none"
  });
  $(".pesquisar").css({
    display: "none"
  });
  $(".login").css({
    display: "none"
  });
  $(".login-pessoa").css({
    display: "none"
  });
  $(".cadastro").css({
    display: "none"
  });
  $("body").css({
    background: "#F2F2F2"
  });
  $(".lista-oculta").css({
    display: "none"
  });
  contador = 0;
});

$(".login-empresa-btn").click(() => {
  $(".landing").css({
    display: "none"
  });
  $(".servicos").css({
    display: "flex"
  });
  $(".pesquisar").css({
    display: "none"
  });
  $(".login").css({
    display: "none"
  });
  $(".login-pessoa").css({
    display: "none"
  });
  $(".cadastro").css({
    display: "none"
  });
  $("body").css({
    background: "#F2F2F2"
  });
  $(".lista-oculta").css({
    display: "none"
  });
  contador = 0;
});

$(".login-menu").click(() => {
  $(".landing").css({
    display: "none"
  });
  $(".servicos").css({
    display: "none"
  });
  $(".pesquisar").css({
    display: "none"
  });
  $(".login").css({
    display: "flex"
  });
  $(".login-pessoa").css({
    display: "none"
  });
  $(".cadastro").css({
    display: "none"
  });
  $("body").css({
    background: "#FFF"
  });
  $(".lista-oculta").css({
    display: "none"
  });
  contador = 0;
});

$(".comecar-agora").click(() => {
  $(".landing").css({
    display: "none"
  });
  $(".servicos").css({
    display: "none"
  });
  $(".pesquisar").css({
    display: "none"
  });
  $(".login").css({
    display: "none"
  });
  $(".login-pessoa").css({
    display: "none"
  });
  $(".cadastro").css({
    display: "flex"
  });
  $("body").css({
    background: "#FFF"
  });
  $(".lista-oculta").css({
    display: "none"
  });
  contador = 0;
});

$(".pesquisar-servico").click(() => {
  $(".landing").css({
    display: "none"
  });
  $(".servicos").css({
    display: "none"
  });
  $(".pesquisar").css({
    display: "flex"
  });
  $(".login").css({
    display: "none"
  });
  $(".login-pessoa").css({
    display: "none"
  });
  $(".cadastro").css({
    display: "none"
  });
  $("body").css({
    background: "#F2F2F2"
  });
  $(".lista-oculta").css({
    display: "none"
  });
  $(".lista-menu").css({
    display: "none"
  });
  contador = 0;
});

$(".entrar-pessoa").click(() => {
  $(".landing").css({
    display: "none"
  });
  $(".servicos").css({
    display: "none"
  });
  $(".pesquisar").css({
    display: "none"
  });
  $(".login").css({
    display: "none"
  });
  $(".login-pessoa").css({
    display: "flex"
  });
  $(".cadastro").css({
    display: "none"
  });
  $("body").css({
    background: "#F2F2F2"
  });
  $(".lista-oculta").css({
    display: "none"
  });

  contador = 0;
});

$(".login-bt").click(function() {
  window.location.href = "home.html";
});

// --------------------------- Parte do slide de cadastro Botões voltar e avançar---------------------
$(".carrossel-sext-button").click(function() {
  $(".carrossel").array.forEach(element => {
    element.css({
      display: "flex"
    });
  });
});

function nextForm() {
  $(".primeira-div-cadastro").css({
    display: "none"
  });
  $(".confirmar-numero").css({
    display: "flex"
  });
}

function confimation() {
  $(".primeira-div-cadastro").css({
    display: "none"
  });
  $(".confirmar-numero").css({
    display: "none"
  });
  $(".slide-cadastro").css({
    display: "flex"
  });
}

// ------------------------------- slide do formulário

var visiblidade = 0;

function showDiv() {
  $(".slides").hide();
  $(".slides:eq(" + visiblidade + ")").show();
}

showDiv();

function showNextDiv() {
  if (visiblidade == $(".slides").length - 1) {
    $("#pro").css({
      opacity: 0.5
    });

    $("#ant").css({
      opacity: 1
    });
  } else {
    $("#pro").css({
      opacity: 1
    });
    $("#ant").css({
      opacity: 1
    });

    visiblidade++;
  }

  showDiv();
}

function showPreDiv() {
  if (visiblidade == 0) {
    $(".confirmar-numero").css({
      display: "flex"
    });
    $(".slide-cadastro").css({
      display: "none"
    });

    $("#ant").css({
      opacity: 1
    });

    $("#pro").css({
      opacity: 1
    });
  } else {
    $("#ant").css({
      opacity: 1
    });

    $("#pro").css({
      opacity: 1
    });

    visiblidade--;
  }

  showDiv();
}

$(function() {
  //-----------------------------------Efeito ao clicar em uma input do formulário-------

  window.onload = function() {
    let input = document.getElementsByClassName("click");

    for (let iterator of input) {
      iterator.onfocus = function() {
        iterator.style.borderBottom = "3px solid #00BDD7";
      };
    }

    for (let iterator of input) {
      iterator.onblur = function() {
        iterator.style.borderBottom = "1px solid rgb(185, 185, 185)";
      };
    }
  };

  //-------------------------------- Slaide dos mais procurados-----------------------------------------------

  var width =
    parseInt(
      $(".item").outerWidth() +
        parseInt($(".item").css("margin-right")) +
        parseInt($(".item").css("margin-left"))
    ) * $(".item").length;

  $(".carrossel").css("width", width);

  var numImg = 1;
  var margin = 20;

  var quntidadeDeAvanco = 0;
  var cont = $(".item").length / numImg - 1;
  var slid = numImg * margin + $(".item").outerWidth() * numImg;

  $(".botao-next").click(function() {
    if (quntidadeDeAvanco < cont) {
      quntidadeDeAvanco++;

      $(".carrossel").animate({ "margin-left": `-=${slid}px` }, "500");
    }
  });

  $(".botao-back").click(function() {
    if (quntidadeDeAvanco >= 1) {
      quntidadeDeAvanco--;

      $(".carrossel").animate({ "margin-left": `+=${slid}px` }, "500");
    }
  });
});

$(".item-lista-do-corpo").click(function() {
  $(".modal").css({
    display: "flex"
  });
  $(".servicos").css({
    overflow: "none"
  });
});

$(".modal").click(function() {
  $(".modal").css({
    display: "none"
  });
});
