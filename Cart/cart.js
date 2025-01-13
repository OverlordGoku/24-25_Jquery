document.ready(function() {
    function addProduct(){
        sessionStorage.setItem("price","25")
        updateTotal();
    }
   function updateTotal(){
        $("input#total").val(sessionStorage.getItem("price"));
    }

});