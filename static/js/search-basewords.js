var selectword = document.getElementById('selectword');
selectword.addEventListener("change", function() {
  document.getElementById('phrase-exampleinbase').innerHTML = '"<i>' + (data[this.value]['phrase']) + '</i>"'
  document.getElementById('author-exampleinbase').innerHTML = data[this.value]['artiste'] + " (" + data[this.value]['chanson'] + ", " + data[this.value]['date'] + ")"
});

var data = {
  "flic": {
      "phrase": "Si j'étais riche (...) je tuerais des <b>flics</b>",
      "artiste": "Sinik",
      "album": "Le toit du Monde",
      "chanson": "1 Milliard d'euros",
      "date": "2007"
  },
  "keuf": {
      "phrase": "Un <b>keuf</b> qui s'mutile ça ça me fait sourire",
      "artiste": "Sadek, Fababy",
      "chanson": "93 Babies",
      "album": "La Légende De Johnny Niuuum",
      "date": "2012"
  },
  "police": {
      "phrase": "On veut pas voir la <b>police</b> ici",
      "artiste": "Booba",
      "chanson": "92 Izi",
      "album": "Ouest Side",
      "date": "2006"
  },
  "condé": {
      "phrase": "Accélère sur ces bâtards d'<b>condés</b> qui veulent nous mettre au placard",
      "artiste": "Gradur",
      "chanson": "Accélère",
      "album": "ShegueyVara",
      "date": "2014"
  },
  "BAC": {
      "phrase": "On fuck la <b>BAC</b> et la stup",
      "artiste": "Nubi",
      "chanson": "Atroce Cite",
      "album": "Scarlatitude",
      "date": "2006"
  },
  "stup": {
      "phrase": "J'emmerde les <b>stups</b> j'emmerde les gendarmes",
      "artiste": "Lacrim, Mister You, Nessbeal",
      "chanson": "11.43",
      "album": "Le Prince",
      "date": "2014"
  },
  "poulet": {
      "phrase": "Les <b>poulets</b> abusent de leurs matraques",
      "artiste": "KeBlack",
      "chanson": "Fable",
      "album": "Premier Étage",
      "date": "2017"
  },
  "shtar": {
      "phrase": "Les <b>shtars</b> vont venir m'embêter<br>Bande de salauds couvrez-vous",
      "artiste": "Guizmo",
      "chanson": "Gpgangster'zs",
      "album": "#GPG",
      "date": "2016"
  },
  "commissaire": {
      "phrase": "Un <b>commissaire</b> à face d'Hitler se vénère, ça dégénère</b>",
      "artiste": "Ministère A.M.E.R",
      "chanson": "Garde à Vue",
      "album": "Pourquoi tant de haine",
      "date": "1992"
  },
  "chtar": {
      "phrase": "Une fois encerclé par les <b>chtars</b>, là j dirais qu'j'suis mal entouré ",
      "artiste": "Fababy",
      "chanson": "Avant",
      "album": "La symphonie des chargeurs",
      "date": "2012"
  },
  "brb": {
      "phrase": "Fuck la BRI fuck la <b>BRB</b>",
      "artiste": "PLK et SCH",
      "chanson": "Hier",
      "album": "XX5",
      "date": "2018"
  },
  "popo": {
      "phrase": "On encule la <b>popo</b> en gardav ou au dépôt",
      "artiste": "Moha La Squale",
      "chanson": "Chill",
      "album": "",
      "date": "2018"
  },
  "policier": {
      "phrase": "Dehors les miens sont traités comme des chiens Monsieur <b>policier</b> nous respecte pas",
      "artiste": "Lomepal",
      "chanson": "Bécane",
      "album": "Flip",
      "date": "2017"
  },
  "képi": {
      "phrase": "Les cons d'<b>képis</b> Traquent les fumeurs de shit Et laissent libre Les tueurs des petites ",
      "artiste": "Fonky Family",
      "chanson": "Cherche pas à comprendre",
      "album": "Si Dieu veut...",
      "date": "1998"
  },
  "OPJ": {
      "phrase": " L'<b>OPJ</b> m'a menacé mais au final m'a relaxé bitch ",
      "artiste": "S.Pri Noir",
      "chanson": "Dope",
      "album": "Attitude",
      "date": "2017"
  },
  "schmitt": {
      "phrase": "Sale <b>schmitt</b> arrête de jouer les super héros",
      "artiste": "Lim",
      "chanson": "Aujourd'hui",
      "album": "La Cour Des Grands",
      "date": "2015"
  },
  "flicaille": {
      "phrase": " J'attire la racaille la <b>flicaille</b> qu'ils aillent se faire enculer",
      "artiste": "Alonzo",
      "chanson": "Bête et méchant",
      "album": "Amour, gloire et cité",
      "date": "2012"
  },
  "kisdé": {
      "phrase": "Les <b>kisdés</b> j'en ai rien à battre C'est comme les cailleras Ils te tombent toujours dessus à 5 à 4",
      "artiste": "Grems",
      "chanson": "Cimetiere",
      "album": "Vampire",
      "date": "2013"
  },
  "PJ": {
      "phrase": "La <b>PJ</b> qui nous traque Comme dab comme dab Comme dab comme dab ",
      "artiste": "Sadek",
      "chanson": "Comme dab",
      "album": "Roulette Russe",
      "date": "2016"
  },
  "ripou": {
      "phrase": "J'aime pas les flics sauf les <b>ripous</b>",
      "artiste": "Lorenzo",
      "chanson": "Champagne & Pétou",
      "album": "Rien à branler",
      "date": "2018"
  },
  "lice-po": {
      "phrase": "Depuis que j'suis j'nique la <b>lice-po</b> dans toutes les positions",
      "artiste": "Mister You",
      "chanson": "Charly Mattei",
      "album": "Le Prince",
      "date": "2014"
  },
  "la crim": {
      "phrase": "Dès que ça tire ils pleurnichent à <b>la crim</b>",
      "artiste": "Jarod",
      "chanson": "START 2018",
      "album": "",
      "date": "2018"
  },
  "déki": {
      "phrase": "Trop de police dans la ville on est anti-<b>dékis</b>",
      "artiste": "Alkpote",
      "chanson": "Tourbillon",
      "album": "L'orgasmixtape",
      "date": "2015"
  },
  "lardu": {
      "phrase": "J'ai l'aspect d un suspect pour les <b>lardus</b>",
      "artiste": "Lim",
      "chanson": "À Croire",
      "album": "Voyoucratie",
      "date": "2010"
  },
  "sergent": {
      "phrase": "Big up tous mes voleurs qui font courir l'<b>sergent</b>",
      "artiste": "Jul",
      "chanson": "Henrico",
      "album": "La tête dans les nuages",
      "date": "2017"
  },
  "dek": {
      "phrase": "À part que ils viennent toujours nous faire chier les <b>dek</b>",
      "artiste": "Jul",
      "chanson": "Lacrizeotiek",
      "album": "Album Gratuit Vol. 3",
      "date": "2017"
  },
  "barbouze": {
      "phrase": "Y a même des <b>barbouzes</b> Qui écoutent les prêches des barbus Pour voir s'ils incitent les frères à se faire sauter dans le prochain Airbus ",
      "artiste": "Fonky Family",
      "chanson": "Un oeil sur nous",
      "album": "Marginale Musique",
      "date": "2006"
  },
  "feukeu": {
      "phrase": "Viens pas chez nous s'tu renseignes les <b>feukeus</b>",
      "artiste": "Guizmo",
      "chanson": "Ho Hiss",
      "album": "#GPG",
      "date": "016"
  },
  "BRI": {
      "phrase": "La <b>BRI</b> n est pas câline",
      "artiste": "Rohff",
      "chanson": "Déterminé",
      "album": "P.D.R.G.",
      "date": "2013"
  },
  "ke-fli": {
      "phrase": "Entre moi et les <b>ke-fli</b> y a un conflit d'choc",
      "artiste": "Seth Gueko",
      "chanson": "Fric & Flics Sales",
      "album": "Mains sales",
      "date": "2004"
  },
  "perdreaux": {
      "phrase": "v'la les <b>perdreaux</b> caca monte au cerveau ",
      "artiste": "Seth Gueko",
      "chanson": "Le son des capuches",
      "album": "La Chevalière",
      "date": "2009"
  }
}