(function (w, d) {
  if (!w.Pikiz || (w.Pikiz && typeof w.Pikiz.init !== "function") ) {
    var s = d.createElement("script");
    var g = d.getElementsByTagName("script")[0];
    s.addEventListener("load", function () {
      w.Pikiz.init("", {"appUrl":"https://app.getpikiz.com","style":"orange","position":"topLeft","size":"default","hover":false,"language":"en"});
    });
    s.async = true;
    s.src="https://app.getpikiz.com/scripts/embed/pikiz.js";
    g.parentNode.insertBefore(s,g);
  }
})(window, document);
