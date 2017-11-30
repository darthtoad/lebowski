$(document).ready(function() {
  $("form#quiz").submit(function(event) {
    event.preventDefault();
    var nihilist = $("input:radio[name=1]:checked").val();
    var rugs = $("input:radio[name=2]:checked").val();
    var johnson = $("input:radio[name=3]:checked").val();
    var children = $("input:radio[name=4]:checked").val();
    var rich = $("input:radio[name=5]:checked").val();
    var artist = $("input:radio[name=6]:checked").val();
    var sass = $("input:radio[name=7]:checked").val();

    if (nihilist === "yes") {
      alert("You are a nihilist");
    } else if (johnson === "no" && artist === "yes") {
      alert("You are Maude")
    } else if (johnson === "no" && artist === "no") {
      alert("You are Bunny")
    } else if (rugs === "no" && johnson === "yes") {
      alert("You're the Chinaman who peed on my rug!")
    } else if (rich === "yes" && artist === "no" && children === "yes") {
      alert("You are Mr. Lebowski")
    } else if (sass === "yes") {
      alert("You are the mysterious cowboy narrator played by Sam Elliott")
    } else if (rugs === "yes" && rich === "no" && children === "no") {
      alert("You're Dude")
    } else if (rugs === "yes" && artist === "no" && children === "no") {
      alert("You are Walter")
    } else if (children === "yes" && artist === "yes") {
      alert("You are The Jesus")
    } else {
      alert("STFU Donny!")
    }
  });
});
