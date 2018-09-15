// import * as $ from 'jquery';

export default (function () {
  $('.search-toggle').on('click', e => {
    $('.search-box, .search-input').toggleClass('active');
    $('.nav-right').toggleClass('hide');
    $('.search-input input').focus();
    e.preventDefault();
  });
}());
