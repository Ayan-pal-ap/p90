function adduser(){
    player_1name=document.getElementById("player_1_input").value;
    player_2name=document.getElementById("player_2_input").value;
    localStorage.setItem("player_1name",player_1name);
    localStorage.setItem("player_2name",player_2name);
    window.location="game_page.html";
   
}
