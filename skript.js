(function () {
  "use strict";

  var nupp = document.querySelector(".menuu-nupp");
  var menuu = document.getElementById("peamenuu");
  if (nupp && menuu) {
    nupp.addEventListener("click", function () {
      var avatud = menuu.classList.toggle("avatud");
      nupp.setAttribute("aria-expanded", avatud ? "true" : "false");
      nupp.setAttribute("aria-label", avatud ? "Sulge menüü" : "Ava menüü");
    });
    menuu.addEventListener("click", function (e) {
      if (e.target.tagName === "A" && window.innerWidth <= 900) {
        menuu.classList.remove("avatud");
        nupp.setAttribute("aria-expanded", "false");
        nupp.setAttribute("aria-label", "Ava menüü");
      }
    });
  }

  var aasta = document.getElementById("aasta");
  if (aasta) aasta.textContent = String(new Date().getFullYear());

  var tood = document.querySelector("[data-filter-rida]");
  if (tood) {
    tood.addEventListener("click", function (e) {
      var n = e.target.closest("[data-filter]");
      if (!n) return;
      var v = n.getAttribute("data-filter");
      tood.querySelectorAll("[data-filter]").forEach(function (b) {
        b.setAttribute("aria-pressed", b === n ? "true" : "false");
      });
      document.querySelectorAll("[data-liik]").forEach(function (f) {
        var sobib = v === "koik" || f.getAttribute("data-liik") === v;
        f.hidden = !sobib;
      });
    });
  }

  var vorm = document.getElementById("paringu-vorm");
  if (!vorm) return;

  var teade = document.getElementById("vormi-teade");
  var saada = document.getElementById("saada-nupp");
  var uuendus = document.getElementById("olemasolev-plokk");

  vorm.addEventListener("change", function (e) {
    if (e.target.name === "liik" && uuendus) {
      uuendus.hidden = e.target.value !== "uuendus";
    }
  });

  vorm.addEventListener("input", function (e) {
    if (e.target.classList) e.target.classList.remove("viga-vali");
  });

  function naita(tekst, klass) {
    teade.textContent = tekst;
    teade.className = "vormi-teade " + klass;
    teade.hidden = false;
  }

  vorm.addEventListener("submit", function (e) {
    e.preventDefault();
    teade.hidden = true;

    var puudu = [];
    ["nimi", "epost", "sonum"].forEach(function (id) {
      var v = vorm.elements[id];
      if (!v.value.trim()) {
        v.classList.add("viga-vali");
        puudu.push(v);
      }
    });
    var epost = vorm.elements.epost;
    if (epost.value.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(epost.value.trim())) {
      epost.classList.add("viga-vali");
      puudu.push(epost);
    }
    if (!vorm.elements.nousolek.checked) {
      naita("Palun kinnitage nõusolek andmete töötlemiseks.", "viga");
      vorm.elements.nousolek.focus();
      return;
    }
    if (puudu.length) {
      naita("Palun täitke nimi, e-post ja kirjeldus.", "viga");
      puudu[0].focus();
      return;
    }

    saada.disabled = true;
    saada.textContent = "Saadan\u2026";

    fetch("/api/kontakt", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        nimi: vorm.elements.nimi.value,
        ettevote: vorm.elements.ettevote.value,
        epost: vorm.elements.epost.value,
        telefon: vorm.elements.telefon.value,
        liik: (vorm.querySelector("[name=liik]:checked") || {}).value || "",
        olemasolev: vorm.elements.olemasolev ? vorm.elements.olemasolev.value : "",
        sonum: vorm.elements.sonum.value,
        veebiaadress: vorm.elements.veebiaadress.value
      })
    })
      .then(function (r) {
        if (!r.ok) throw new Error("halb vastus");
        window.location.href = "/aitah.html";
      })
      .catch(function () {
        saada.disabled = false;
        saada.textContent = "Saada päring";
        naita("Päringu saatmine ebaõnnestus. Palun helistage +372 5387 4959 või kirjutage aadressil info@a-maja.com.", "viga");
      });
  });
})();
