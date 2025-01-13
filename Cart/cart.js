document.ready(function() {
    function addProduct(){
        sessionStorage.setItem("DBSZPrice","25")
        sessionStorage.setItem("DBSZQty","1")
        sessionStorage.setItem("DBSZName","DragonBallSparkingZero")
        sessionStorage.setItem("total",sessionStorage.getItem("total").parseInt() + 25)
        updateTotal();
    }
   function updateTotal(){
        $("input#total").val(sessionStorage.getItem("price"));
    }

});