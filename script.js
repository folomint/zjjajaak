
let count = 15;

function setCount(c){
  count = c;
}

function generate(){
  const url = document.getElementById("link").value.trim();
  const box = document.getElementById("videos");
  box.innerHTML = "";

  if(!url){
    alert("Paste Instagram video / reel link");
    return;
  }

  for(let i=0;i<count;i++){
    const views = Math.floor(Math.random()*9000)+1000;

    const div = document.createElement("div");
    div.className = "video";
    div.innerHTML = `
      <iframe src="${url}embed" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture"></iframe>
      <div class="views">👁️ Views: ${views}</div>
    `;
    box.appendChild(div);
  }
}
