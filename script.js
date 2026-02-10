function showTab(tab) {
  document.querySelectorAll(".tab").forEach(t => t.classList.add("hidden"));
  document.getElementById(tab).classList.remove("hidden");
}

async function checkEmail() {
  let email = document.getElementById("emailInput").value;

  try {
    let res = await fetch(`https://haveibeenpwned.com/api/v3/breachedaccount/${email}`);
    document.getElementById("emailResult").textContent =
      res.ok ? JSON.stringify(await res.json(), null, 2) : "Nessun breach pubblico.";
  } catch {
    document.getElementById("emailResult").textContent =
      "Serve una API key HaveIBeenPwned (la aggiungiamo dopo).";
  }
}

function checkUsername() {
  let u = document.getElementById("userInput").value;

  let links = {
    Roblox: `https://www.roblox.com/search/users?keyword=${u}`,
    Minecraft: `https://namemc.com/search?q=${u}`
  };

  document.getElementById("userResult").textContent =
    JSON.stringify(links, null, 2);
}

async function checkDomain() {
  let d = document.getElementById("domainInput").value;

  let res = await fetch(`https://ipinfo.io/${d}/json`);
  document.getElementById("domainResult").textContent =
    JSON.stringify(await res.json(), null, 2);
}

function checkPhone() {
  document.getElementById("phoneResult").textContent =
    "Ricerca telefono richiede una API key (aggiungiamo dopo).";
}
