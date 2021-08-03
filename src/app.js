import './scss/estilos.scss';
import $ from 'jquery';

$('#nav-toggle').on('click', () => {
  $('#nav-menu').addClass('showmenu');
  $('#nav-close').addClass('showclose');
});

$('#nav-close').on('click', () => {
  $('#nav-menu').removeClass('showmenu');
  $('#nav-close').removeClass('showclose');
});

$('.header__main__a').on('click', function linkAction() {
  $('.header__main__a').removeClass('active');
  $(this).addClass('active');
  $('#nav-menu').removeClass('showmenu');
});
