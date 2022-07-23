function nav(){
    return ` <div class="top">
    <p>IN - US$</p>

    <div class="dropdown">
        <div onclick="myFunction()" class="dropbtn" style="font-size: 14px;">Help <i class="fa-solid fa-angle-down"></i></div>
        <!-- <button onclick="myFunction()" class="dropbtn">Help</button> -->
        <div id="myDropdown" class="dropdown-content">
          <a href="#">Help Center</a>
          <hr>
          <a href="#">Contact us</a>
          <hr>
          <a href="#"> About us</a>
          <hr>
          <a href="#"> Careers</a>
          <hr>
        </div>
    </div>

    <a href="#">Login</a> 
    <a href="#">Signup</a>        

    <p><i class="fa-solid fa-cart-arrow-down"></i>Cart</p>

</div>

<div class="head">
    <a id="homepage"><img src="https://www.lyst.com/news/wp-content/uploads/2021/06/lyst-logo.png" alt=""></a>
    
    <a  id= "wo">WOMEN</a>
    <a href="mens.html" id="mo">MEN</a>
    
    <div class="form">
        <button  type="submit" class="fa-solid fa-magnifying-glass"></button>
        <input type="search" class="search-data" placeholder="SEARCH" required>
    </div>
    
</div>`
} ;

export default nav ;