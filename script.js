function setCookie(cname, cvalue, exdays) {
	    const d = new Date();
	    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
	    let expires = "expires="+d.toUTCString();
	    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
	  }

	  function getCookie(cname) {
	    let name = cname + "=";
	    let ca = document.cookie.split(';');
	    for(let i = 0; i < ca.length; i++) {
	      let c = ca[i];
	      while (c.charAt(0) == ' ') {
		c = c.substring(1);
	      }
	      if (c.indexOf(name) == 0) {
		return c.substring(name.length, c.length);
	      }
	    }
	    return "";
	  }

	function checkCookie(uno) {
	  let user = getCookie(uno);
	  if (user != "") {
	    return user;
	  } else {
	    user = prompt("what should be the the leter for:" + Uno, "");
	    if (user != "" && user != null) {
	      setCookie(uno, user, 365);
	    }
	  }
	}
function police(text){
  text.replace(text, checkCookie(text));
}
function clicked(letter) {
  document.getElementById(letter).addEventListener("click", () => {
	  alert(police(letter));
  }
});
clicked("a");
clicked("b");
clicked("c");
clicked("d");
clicked("e");
clicked("f");
clicked("g");
clicked("h");
clicked("i");
clicked("j");
clicked("k");
clicked("l");
clicked("m");
clicked("n");
clicked("o");
clicked("p");
clicked("q");
clicked("r");
clicked("s");
clicked("t");
clicked("u");
clicked("v");
clicked("w");
clicked("x");
clicked("y");
clicked("z");
	
