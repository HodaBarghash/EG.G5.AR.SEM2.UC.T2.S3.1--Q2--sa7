function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6DRkG0okKED":
        Script1();
        break;
  }
}

function Script1()
{
  const url="https://script.google.com/macros/s/AKfycbwCPFk-1djfvydObp8RWmMDZjbfn9cGLl33UnvrBgVlQLuo2rPnowG2rVIRzJjL29YCmw/exec"

var player=GetPlayer()

fetch(url,{
	method:"POST",
	mode: 'no-cors',
	cache:'no-cache',
	headers: {'Content-Type': 'application/json'},
	redirect:'follow',
	body: JSON.stringify({q1attempts:player.GetVar("q1attempts"),q1answeredcorrect:player.GetVar("q1answeredcorrect")})
	}
	)
}

