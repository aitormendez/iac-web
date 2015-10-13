/**

 El siguiente script es para checkboxes http://www.csslab.cl/2014/03/17/checkboxes-con-estilo/

*/


var input = document.querySelectorAll("label.check input");
if(input !== null) {
  [].forEach.call(input, function(el) {
    if(el.checked) {
      el.parentNode.classList.add('c_on');
    }
    el.addEventListener("click", function(event) {
      event.preventDefault();
      el.parentNode.classList.toggle('c_on');
    }, false);
  });
}
